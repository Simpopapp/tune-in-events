import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import { theme } from '../styles/theme';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Implement Firebase authentication
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Tuning</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
      >
        Entrar
      </Button>
      <View style={styles.socialButtons}>
        <Button
          mode="outlined"
          onPress={() => {}}
          style={styles.socialButton}
        >
          Google
        </Button>
        <Button
          mode="outlined"
          onPress={() => {}}
          style={styles.socialButton}
        >
          Facebook
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  input: {
    marginBottom: theme.spacing.md,
  },
  button: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.primary,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xl,
  },
  socialButton: {
    flex: 0.45,
  },
});

export default AuthScreen;