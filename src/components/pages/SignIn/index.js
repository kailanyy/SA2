import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Vibration } from 'react-native';
import React, { useState, useContext } from 'react';
import styles from './styles'
import { TextInput, Title } from 'react-native-paper';
import AuthContext from '../../contexts/auth';


const SignIn = ({navigation}) => {
  const { signed, signIn, user } = useContext(AuthContext);
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  async function validateLogin() {
    if ((emailInput, passwordInput) === '') {
      setErrorMessage(null)
      setErrorMessage("Todos os campos são obrigatórios!*")
      Vibration.vibrate()
      return;
    }
      const incorrectCredentials = await signIn({ email: emailInput, password: passwordInput })
      if(incorrectCredentials) {
        setErrorMessage("Usuário ou senha incorretos")
      }
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F85C70"
      />
      <Title style={styles.title}> Bem-vindo </Title>
      <TouchableOpacity onPress={() => navigation.navigate('NavigationBar', {})} />
      <View>
          <TextInput
            mode='outlined'
            value={emailInput}
            onChangeText={setEmailInput}
            label="E-mail"
            placeholder='email@email.com'
            style={styles.textInput}
            type="text"
            left={<TextInput.Icon name="account-outline" />}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={45}
            />
          <TextInput
            mode='outlined'
            value={passwordInput}
            onChangeText={setPasswordInput}
            label="Senha"
            left={<TextInput.Icon name="key-outline" />}
            right={<TextInput.Icon name="eye"/>}
            style={styles.textInput}
            placeholder='********'
            secureTextEntry={true}
            activeOutlineColor="#F85C70"
            outlineColor="#fff"
            maxLength={25}
            />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.btnNavigate}
            onPress={() => {
              navigation.navigate('RegisterUser')
            }}>
            <Text style={styles.textNavigate}>
              Não tenho uma conta
            </Text>
            {/* <Text style={{ color: '#7abcdb', textAlign: 'center', marginBottom: 20 }}>
              Esqueci a senha
            </Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNavigate}
          >
            <Text style={styles.textNavigate}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={validateLogin}
            >
            <Text
              style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              Entrar
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default SignIn;


// function validateLogin() {
  
  //     let dadosLogin = {
    //         email: '123',
    //         senha: '123'
    //     }
    
    //     if (emailInput === dadosLogin.email && passwordInput === dadosLogin.senha) {
      //         setPasswordInput(null)
      //         setEmailInput(null)
      //         navigation.navigate('NavigationBar')
      //     } else {
        //         setErrorMessage(null)
        //         setErrorMessage("Usuário ou Senha incorretos")
        //         return;
        //     }
        // }