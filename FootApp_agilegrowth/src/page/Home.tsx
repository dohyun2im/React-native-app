import React, {useCallback, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Home() {

  return (
    <View>
      <View style={styles.money}>
        <Text style={styles.moneyText}>
          김도현님의 사이즈
          {' '}
          <Text style={{fontWeight: 'bold'}}>
            {255.775.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          mm
        </Text>
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          style={StyleSheet.compose(
            styles.loginButton,
            styles.loginButtonActive,
          )}
        >
          <Text style={styles.loginButtonText}>로그아웃</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  money: {
    padding: 20,
  },
  moneyText: {
    fontSize: 16,
  },
  buttonZone: {
    alignItems: 'center',
    paddingTop: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;