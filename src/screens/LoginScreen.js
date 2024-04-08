import React, { useState } from 'react';
import { View,  TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';
import Button from '../components/Button';
import styles from './styles';


const LoginScreen = ({ navigation }) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    navigation.navigate('loginPage');
  };


  return (
    <View style={styles.container}>

{/* title component */}
      <Title  title={'Login'}/>
      
        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordInputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styless.iconContainer}>
          <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* button component  */}
      <Button buttonText={"LOG IN"} buttonFor={'login'} onPress={handleLogin} />
      <Button buttonText={"SIGN UP"} buttonFor={''} />
    </View>
  );
};




const styless = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
    zIndex: 1,
    top:12
  },
});

export default LoginScreen;
