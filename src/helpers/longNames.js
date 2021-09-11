
export const shortName = (name)=>{
    let arrName = name.split(' ')
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr = [...arr,arrName[i]];

    }

    if(name === ""){
        return false;
    }else{
        return (arr.join(" "));
    }
}