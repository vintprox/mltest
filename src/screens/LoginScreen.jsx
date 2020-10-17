import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context';

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(login) {
  	if (await login(username, password)) {
      navigation.replace('Home');
  	}
  }

  return (
    <Context.Consumer>
      {({ login }) => (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <TextInput
              onChangeText={text => setUsername(text)}
              value={username}
              placeholder='Логин'
              style={styles.textInput}
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder='Пароль'
              secureTextEntry={true}
              style={styles.textInput}
            />
            <Button
              onPress={() => submit(login)}
              title='Авторизация'
            />
          </View>
        </View>
      )}
    </Context.Consumer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#435',
    borderRadius: 4,
  },
  textInput: {
  	marginBottom: 5,
  	paddingVertical: 10,
  	paddingHorizontal: 15,
  	borderRadius: 2,
  	backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
