import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Context } from './';

export function StoreProvider({ children }) {
  const noneUser = {
    id: null,
    login: null,
    accessToken: null,
  };
  const [user, setUser] = useState({ ...noneUser });
  
  async function login(username, password) {
    try {
      if (!username || !password) {
      	throw new Error('Для входа необходимы логин и пароль');
      }
  
      const response = await fetch('http://37.140.199.187:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ username, password })
      });
  
      switch (response.status) {
        case 200:
        case 201:
          break;
        case 401:
          throw new Error('Неверная пара логин-пароль');
        default:
          throw new Error(response.statusText);
      }
  
      const { id, login, access_token: accessToken } = await response.json();
      setUser({ id, login, accessToken });
      return true;
    } catch (err) {
      Alert.alert('Ошибка авторизации', err.message);
    }
  }

  function logout() {
  	setUser({ ...noneUser });
  }

  return (
    <Context.Provider value={{
      user,
      login,
      logout,
    }}>
      {children}
    </Context.Provider>
  );
}
