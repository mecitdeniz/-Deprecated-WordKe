import React from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { replace, selectCol, selectRow, unSelect } from '../store/actions';

const Tile = (props)=>{
    const { row, col } = props;
    const data = useSelector(state=>state);
    const { currentOrder,selectedRow, selectedCol } = data;
    const dispatch = useDispatch();
    return(
        <TouchableOpacity onPress={()=>{handleTilePress(row,col,selectedRow,selectedCol,dispatch,currentOrder)}}>
            <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                <Text style={styles.text}>{currentOrder[row][col]}</Text>
            </ImageBackground>
        </TouchableOpacity>
        
    );
}

const handleTilePress = (row,col,selectedRow,selectedCol,dispatch,currentOrder) =>{

    if(selectedRow === null && selectedCol === null){
        dispatch(selectRow(row))
        dispatch(selectCol(col))
    }else if(selectedRow === row && selectedCol === col ){
        dispatch(unSelect())
    }else{
        [currentOrder[row][col],currentOrder[selectedRow][selectedCol]]=[currentOrder[selectedRow][selectedCol],currentOrder[row][col]]
        dispatch(replace(currentOrder))
        dispatch(unSelect())
    }
}

const styles = StyleSheet.create({
    tile:{
        width:80,
        height:80,
        borderWidth:0,
        justifyContent:"center",
        alignItems:"center"
      },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
});

export default Tile;