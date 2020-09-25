import React, { useState, useContext } from 'react';
import { View, StyleSheet,Text ,Dimensions} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { authService } from "../fbase";
import { Button,Content } from 'native-base';

const { width, height } = Dimensions.get('screen');


export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async (email,password) => {
    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Register to chat</Text>
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
      <Content>
      {/* <FormButton
        title='Signup'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email, password)}
      /> */}
      <Button full success 
        onPress={() => register(email, password)}
        style={styles.button}>
        <Text>Signup</Text>
       </Button>
{/* <FormButton
        title='back'
        style={styles.navButton}
        color='#6646ee'
        onPress={() => navigation.goBack()}
      /> */}
       <Button full info 
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text>back</Text>
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
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    width: width / 2,
    height: height / 15

  }
});
