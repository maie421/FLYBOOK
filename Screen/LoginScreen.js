import React, { useState, useContext } from 'react';
import { View, StyleSheet,Dimensions,Text } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../Navigation/AuthProvider';
import { authService } from "../fbase";
import { Button,Content } from 'native-base';

const { width, height } = Dimensions.get('screen');

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
      {/* <FormButton
        title='Login'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => login(email, password)}
      /> */}
    <Content>
      <Button full success 
       onPress={() => login(email, password)}
       style={styles.button}>
          <Text>Login</Text>
       </Button>
      {/* <FormButton
        title='New user? Join here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
      /> */}
            <Button full info  onPress={() => navigation.navigate('Signup')} style={styles.button}>
          <Text>New user? Join here</Text>
       </Button>
       </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop:height / 5,
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
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    width: width / 2,
    height: height / 15

  }
});
