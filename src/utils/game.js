const LEVELS = require('../db/levels.json');

let currentLevel = 0;
const getPlayerData = () =>{
    return {
        //currentLevel:2,
        coins:100,
        diamonds:20
    }
}

const setWallpaper = (wallpaper) =>{
    switch (wallpaper) {
        case "w1":
            return require('../assets/w1.png')            
            break;
        case "w2":
            return require('../assets/w2.png')            
            break;
        default:
            return require('../assets/w2.png')            
            break;
    }
}


const setTile = (tile) =>{
    switch (tile) {
        case "t1":
            return require('../assets/t31.png')            
            break;
        case "t2":
            return require('../assets/t10.png')            
            break;
        default:
            return require('../assets/t8.png')            
            break;
    }
}


const getGameData =()=>{

    //const currentLevel = getPlayerData().currentLevel;
    console.log()
    return {
        correctOrder:LEVELS[currentLevel].goal,
        currentOrder:LEVELS[currentLevel].state,
        lastCharacter:"Ş"
    }
}

const checkOrder = (currentOrder,correctOrder) =>{
    if(JSON.stringify(currentOrder) === JSON.stringify(correctOrder)){
        currentLevel++;
        return true
    }
    else return false
}

module.exports = {
    getGameData,
    checkOrder,
    setWallpaper,
    setTile
}