import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';
import Button from '../components/Button';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    
    if (
      !password ||
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}/.test(password)
    ) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      );
      return;
    } else {
      setPasswordError('');
      navigation.navigate('loginPage');
    }

    
   
  };

  return (
    <View style={styles.container}>

      {/* title component */}
      <Title title={'Login'} />



      {/* input fileds start */}

      <TextInput
        style={[styles.input, emailError && styles.errorInput]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={[styles.input, passwordError && styles.errorInput]}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styless.iconContainer}>
          <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>


    
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* input fields end */}



      {/* button componets */}

      <Button buttonText={'LOG IN'} buttonFor={'login'} onPress={handleLogin} />
      <Button buttonText={'SIGN UP'} buttonFor={''} />
    </View>
  );
};


const styless = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
    zIndex: 1,
    top: 12,
  },
});

export default LoginScreen;
