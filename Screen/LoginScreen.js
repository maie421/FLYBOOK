import React, { useState, useContext } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../Navigation/AuthProvider';
import { authService } from "../fbase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const { login } = useContext(AuthContext);

const login = async (email,password) => {
    try {
      let data;

      data = await authService.signInWithEmailAndPassword(email, password);

      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Chat app</Text>
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={userEmail => setEmail(userEmail)}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title='Login'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => login(email, password)}
      />
      <FormButton
        title='New user? Join here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 16
  }
});
