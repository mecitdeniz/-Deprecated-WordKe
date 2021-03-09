import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  replace,
  selectCol,
  selectRow,
  unSelect,
  setLevel,
  win,
} from '../store/actions';

const {checkOrder, getGameData} = require('../utils/game');

export default function Tile(props) {
  const {row, col} = props;
  const data = useSelector((state) => state);
  const {correctOrder, currentOrder, selectedRow, selectedCol} = data;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        handleTilePress(
          row,
          col,
          selectedRow,
          selectedCol,
          dispatch,
          currentOrder,
          correctOrder,
        );
      }}>
      <View
        style={[
          styles.tile,
          getOpacity(row, col, selectedRow, selectedCol),
          {backgroundColor: '#D1E0DB', borderColor: '#ECF4F1'},
        ]}>
        <Text style={{color: '#3698A6', fontSize: 28, fontWeight: 'bold'}}>
          {currentOrder[row][col]}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function getOpacity(row, col, selectedRow, selectedCol) {
  if (row === selectedRow && col === selectedCol) return {opacity: 0.7};
  return {opacity: 1};
}

function handleTilePress(
  row,
  col,
  selectedRow,
  selectedCol,
  dispatch,
  currentOrder,
  correctOrder,
) {
  if (selectedRow === null && selectedCol === null) {
    dispatch(selectRow(row));
    dispatch(selectCol(col));
  } else if (selectedRow === row && selectedCol === col) {
    dispatch(unSelect());
  } else {
    [currentOrder[row][col], currentOrder[selectedRow][selectedCol]] = [
      currentOrder[selectedRow][selectedCol],
      currentOrder[row][col],
    ];
    dispatch(replace(currentOrder));
    dispatch(unSelect());
    const isFinished = checkOrder(currentOrder, correctOrder);
    if (isFinished) {
      dispatch(setLevel());
      dispatch(win());
    }
  }
}

const styles = StyleSheet.create({
  tile: {
    width: 80,
    height: 80,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
