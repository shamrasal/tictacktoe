import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Sign from './components/Sign';
import Snackbar from 'react-native-snackbar';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Pressable,
  Button,
  Image
} from 'react-native';


function App(): React.JSX.Element {
  const [player,setPlayer] = useState("circle")
  const [isWinner,setIsWinner] = useState(false)
  const [resultArray,setResultArray] = useState(new Array(9).fill("empty",0,9))
  const [isDarkMode,setIsDarkMode] = useState(useColorScheme()=='dark')

  const signHandler = (cubeNumber:number) =>{
    if(isWinner){
      Snackbar.show({
        text: `Please Start New Game`
      })
      return
    }
    if(resultArray[cubeNumber] != 'empty'){
      Snackbar.show({
        text: `Cube is already filled`,
      })
      return
    }

      resultArray[cubeNumber] = player
      setResultArray([...resultArray]); 
      if(
        (resultArray[0] === player && resultArray[1] === player && resultArray[2] === player) ||
        (resultArray[3] === player && resultArray[4] === player && resultArray[5] === player) ||
        (resultArray[6] === player && resultArray[7] === player && resultArray[8] === player) ||
        (resultArray[0] === player && resultArray[3] === player && resultArray[6] === player) ||
        (resultArray[1] === player && resultArray[4] === player && resultArray[7] === player) ||
        (resultArray[2] === player && resultArray[5] === player && resultArray[8] === player) ||
        (resultArray[0] === player && resultArray[4] === player && resultArray[8] === player) ||
        (resultArray[2] === player && resultArray[4] === player && resultArray[6] === player)
      ){
        Snackbar.show({
          text: `${player} is winner`
        })
        setIsWinner(true); // Update winner status
      }else{
        setPlayer((prev)=>prev == 'circle' ? "cross": "circle")
      }
  }

  const clearGame = () => {
    setPlayer("cross")
    setResultArray(new Array(9).fill("empty",0,9))
    setIsWinner(false)
  }

  return (
    <SafeAreaView style={styles.darker}>
      <StatusBar/>
      <View>
        <View style={styles.resultContainer}>
          {
            isWinner ?
              <Text style={styles.lighter}>{`${player == "cross" ? "Player 1 is winner" : "Player 2 is winner"}`}</Text>
              :
              <Text style={styles.lighter}>{`${player == "cross" ? "Player 2" : "Player 1"}`}</Text>
          }
        </View>
        <View style={styles.cubesContainer}>
          <FlatList
            numColumns={3}
            data={resultArray}
            renderItem={({item,index}) => (
              <Pressable
                style={styles.cubes}
                key={index}
                onPress={()=>signHandler(index)}
              >
                <Sign type={item}/>
              </Pressable>
            )}
            // keyExtractor={(item, index) => }
          />
        </View>
      </View>
      <View style={styles.winnerContainer}>
        {
          isWinner &&
            <Image
              source={{ uri: 'https://data.textstudio.com/output/sample/animated/3/7/4/6/winner-2-16473.gif' }} 
              style={styles.winnerImage}
            />
        }
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={clearGame} >
            <View style={styles.resultContainer}>
              <Text style={styles.lighter}>Restart</Text>
            </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  darker:{
    flex:1,
    backgroundColor:'black',
  },
  winnerContainer:{
    flex:1,
  },
  winnerImage: {
    height: '70%',
    width: '100%',
    resizeMode: 'contain',
},
  cubesContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  cubes:{
    height:120,
    margin:5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:120,
    backgroundColor:'white',
  },
  resultContainer:{
    padding:20,
    backgroundColor:'white',
    flexDirection:'row',
    margin:25,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  lighter:{
    color:'black'
  },
  buttonContainer:{
    flex:1,
    justifyContent:"flex-end",
  }
});

export default App;
