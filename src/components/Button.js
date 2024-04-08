import React from 'react'
import { TouchableOpacity,Text,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = ({buttonText,buttonFor,onPress}) => {
   const navigation = useNavigation();
   
    const buttonBg=buttonFor=="login"?styles.loginbg:styles.signupbg
    const textColor=buttonFor=="login"?styles.ButtonTextWhite:styles.ButtonTextBlack


    
  

  return (

    
    <TouchableOpacity style={[styles.loginButton,buttonBg]} onPress={onPress}>
        <Text style={textColor}>{buttonText}</Text>
    </TouchableOpacity>
     
  )
}




const styles=StyleSheet.create({
    loginButton: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom:10
      },
      ButtonTextWhite: {
        color: "white",
      },
      ButtonTextBlack: {
        color: "black",
      },
      loginbg:{
        backgroundColor: 'black',

      },
      signupbg:{

        borderWidth:1,
        backgroundColor: '#fff',
        borderColor:'black'

      }
})


export default Button