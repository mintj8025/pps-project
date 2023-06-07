import { StyleSheet, Text, View } from 'react-native'
import React , { useState , useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [assessor, setAssessor] = useState({})
    const [isLoding, setIsLoading] = useState(true)

    const fetchAssessor = async () =>{
        const token = await AsyncStorage.getItem('@token')
        const response = await fetch('http://10.0.2.2:5000/authen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              },
        })
        const data = await response.json()
        setAssessor(data.decoded)
        setIsLoading(false)
    }

    useEffect(() =>{
        fetchAssessor()
    }, [isLoding])

  return (
    <View>
      <Text>{assessor.assessor_fname}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})