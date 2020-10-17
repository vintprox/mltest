import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from '../context';

export function HomeScreen({ navigation }) {
  return (
    <Context.Consumer>
      {({ user, logout }) => (
        <View style={styles.container}>
          <Text>{user.login}</Text>
          <Text>{user.id}</Text>
          <Button
            onPress={() => {
              logout();
              navigation.replace('Login');
            }}
            title='Выйти'
          />
        </View>
      )}
    </Context.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
