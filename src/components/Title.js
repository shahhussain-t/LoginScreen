import React from 'react'
import {Text,StyleSheet,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Title = ({title}) => {
  return (
  <TouchableOpacity style={styles.container}>
<Text style={styles.title}> {title}</Text>

  </TouchableOpacity>

  )
}



const styles=StyleSheet.create({
    title: {
        fontSize: 48,
        marginBottom: 20,
       
      
    },
    container:{
        width: Dimensions.get('window').width * 0.98,
        padding:0,
        margin:0
    }
})
export default Title