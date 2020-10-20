const LEVELS = require('../db/levels.json');

let currentLevel = 0;
const getPlayerData = () =>{
    return {
        //currentLevel:2,
        coins:100,
        diamonds:20
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
    checkOrder
}