import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import PopUp from './components/PopUp';
import { CloseBnt } from './components/PopUp';

export default function App() {

  const [visible, setVisible] = useState(false)

  return (
    
    <View style={styles.container}>
      <PopUp visible={visible}>
        
        <View style={{alignItems:'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <View>
              <CloseBnt width={17} height={17} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.logo}>
          <Image 
            source={require('./assets/popup_icons/twitter.png')}
            style={{width: 75, height:75}}
          />
        </View>
        
        <Text style={styles.title}>Some Title</Text>
        <Text style={styles.txt}>Some Stuff</Text>
      </PopUp>

      <Button
        title="Open Modal popup"
        onPress={() => {
          setVisible(true)
        }}
      />
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header:{
    width: '100%',
    height:40,
    alignItems:"flex-end",
    justifyContent:"center"
  },
  logo:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  txt:{
    fontSize:20
  }
});