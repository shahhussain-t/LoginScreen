import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

const LoginPage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>You are login</Text>
    </View>
)
}




const styles=StyleSheet.create({

    container:{
        flex:1,
        color:'black',
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:48
    }
})


export default LoginPage