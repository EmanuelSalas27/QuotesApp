import { useFetch, useFetchCors } from './hooks/useFetchCors'
import './styles/styles.css'
import './animations/rotate.css'
import './animations/scale.css'
import { shortName } from './helpers/longNames'



export const QuotesScreen = () => {
    
    const {state,handleFetch} = useFetchCors("https://animechan.vercel.app/api/random")
    const {data,loading, error} = state
    let {anime = '',quote = '',character = ''} = data;

    anime = shortName(anime);
    
    return (

        <div className="container">

            {anime&&
                <div className="anime animation-scale">
                    {anime}
                </div>
            }

            {
                !error?
                <div className={`card ${loading&&'animation-rotate'}`}>
            
                    <blockquote className="quote">
                        {quote&&"\"" + quote + "\""}
                    </blockquote>

                    <div className="character">
                        {character&&'-.' + character}
                    </div>
                </div>
                
                :<div className="card err">{error}</div>
            }
            

            {anime&&<button className="btn" onClick={handleFetch} >
                Random
            </button>
            }
            
        </div>
    )
}
