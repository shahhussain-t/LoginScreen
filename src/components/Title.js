import React from 'react'
import {Text,StyleSheet} from 'react-native'

const Title = ({title}) => {
  return (
<Text style={styles.title}> {title}</Text>

  )
}



const styles=StyleSheet.create({
    title: {
        fontSize: 48,
        marginBottom: 20,
        textAlign: 'left', 
        width:400
    },
})
export default Title