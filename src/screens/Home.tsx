import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CBButton from '../components/CBButton';
import Colors from '../constants/Colors';


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
      >
        <Image
          style={styles.image} 
          source={{ uri:"https://i.imgur.com/9EEaSaS.png" }}
        />
        <Text style={styles.title}>Welcome to Coinbase</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title='Get Startedv '/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#fff'
  },
  image:{
    width:250,
    height:250,
    marginTop:40
  },
  title: {
    fontSize:21,
    fontWeight:'600',
    marginBottom:0,
    letterSpacing:5
  },
  subtitle: {
    fontSize:17,
    marginBottom:24,
    color: Colors.subtitle
  }
})


export default Home;