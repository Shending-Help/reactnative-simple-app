import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet,TouchableWithoutFeedback, Text,Image, View, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';

export default function App() {
  const presshandler = () => console.log('text clicked')
  console.log(Dimensions.get('screen'))
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines = {1} onPress={presshandler}>Hello React-Native</Text>
      <TouchableOpacity onPress={() => console.log('image clicked')}>

        <Image 
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }} 
        />
      </TouchableOpacity>
      <Button 
        title="click me"
        onPress={() => 
          Alert.alert("my alert","are you human",[
            {text:"yes", onPress:()=> console.log('you pressed yes')},
            {text:"no", onPress:()=> console.log('you pressed no')}]
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    
  },
});
