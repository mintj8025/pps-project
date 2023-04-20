import { StyleSheet, Text, View , Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput , Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")  

  const handleLogin = async () => {
    const response = await fetch('http://10.0.2.2:5000/login' , {
      method : 'POST' ,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assessor_username: username,
        assessor_password: password,
        expiresIn: 60000
      })
    })

    const data = await response.json()
    console.log(data)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SirirajPain</Text>
      <Text style={styles.welcomText}>ยินดีต้อนรับ!</Text>
      <TextInput
        label="enter your email"
        value={username}
        onChangeText={text => setUsername(text)}
        />
        <TextInput
      label="enter your password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      value={password}
      onChangeText={text => setPassword(text)}
      />
      <Button mode="contained" onPress={handleLogin}>
        เข้าสู่ระบบ
      </Button>

      <View style={styles.imageContainer}>
      <Image source={require('../img/bloom-scientist-with-clipboard.png')}/>
      </View>
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({
  appName: {
    alignSelf: "center",
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold', 
   },
  welcomText: {
    alignSelf: "center",
    fontSize: 65,
    color: 'black',
    fontWeight: 'bold',

    paddingBottom: 30
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 495,
    alignSelf: "center",
    justifyContent: "center"
  },
  imageContainer: {
    alignSelf: "center",
    paddingTop: 250,
    position: 'absolute',
    left: 510
  }
})