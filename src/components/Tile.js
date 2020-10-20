import React from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { replace, selectCol, selectRow, unSelect, setLevel, win} from '../store/actions';

const { checkOrder, getGameData } = require('../utils/game');

const Tile = (props)=>{
    const { row, col } = props;
    const data = useSelector(state=>state);
    const { correctOrder,currentOrder,selectedRow,selectedCol } = data;
    const dispatch = useDispatch();
    return(
        <TouchableOpacity onPress={()=>{handleTilePress(row,col,selectedRow,selectedCol,dispatch,currentOrder,correctOrder)}}>
            <ImageBackground source={require('../assets/t8.png')} style={[styles.tile,getOpacity(row,col,selectedRow,selectedCol)]}>
                <Text style={styles.text}>{currentOrder[row][col]}</Text>
            </ImageBackground>
        </TouchableOpacity>
        
    );
}

const getOpacity = (row,col,selectedRow,selectedCol) =>{
    if(row === selectedRow && col === selectedCol) return { opacity : 0.7}
    return { opacity : 1}
}

const handleTilePress = (row,col,selectedRow,selectedCol,dispatch,currentOrder,correctOrder) =>{

    if(selectedRow === null && selectedCol === null){
        dispatch(selectRow(row))
        dispatch(selectCol(col))
    }else if(selectedRow === row && selectedCol === col ){
        dispatch(unSelect())
    }else{
        [currentOrder[row][col],currentOrder[selectedRow][selectedCol]]=[currentOrder[selectedRow][selectedCol],currentOrder[row][col]]
        dispatch(replace(currentOrder))
        dispatch(unSelect())
        const isFinished = checkOrder(currentOrder,correctOrder)
        if(isFinished){
            dispatch(setLevel())
            dispatch(win())
        }
    }
}

const styles = StyleSheet.create({
    tile:{
        width:80,
        height:80,
        borderWidth:0,
        justifyContent:"center",
        alignItems:"center",
      },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
});

export default Tile;