import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const API_URL = 'http://10.0.2.2:5000'; 

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleAuth = async () => {
    const endpoint = isLogin ? '/login' : '/register';
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role: 'User' }), 
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          setIsLoggedIn(true); 
          setTimeout(() => {
            Alert.alert("Éxito", `Bienvenido ${username}`);
          }, 500);
        } else {
          Alert.alert("Registro Exitoso", "Ya puedes iniciar sesión");
          setIsLogin(true);
        }
      } else {
        Alert.alert("Error", data.error || "Credenciales incorrectas");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor central");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        /* --- VISTA PROTEGIDA (Punto d de la tarea) --- */
        <View style={styles.protectedContainer}>
          <Text style={styles.title}>Panel AhorroFácil</Text>
          <Text style={styles.subtitle}>Vista Protegida Activa</Text>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* --- VISTA DE LOGIN/REGISTRO --- */
        <View style={styles.formContainer}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' }} 
            style={styles.logo} 
          />
          <Text style={styles.title}>AhorroFácil</Text>
          <Text style={styles.subtitle}>{isLogin ? 'Iniciar Sesión' : 'Registro'}</Text>
          
          <TextInput 
            style={styles.input} 
            placeholder="Usuario" 
            value={username} 
            onChangeText={setUsername} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Contraseña" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
          />
          
          <TouchableOpacity style={styles.button} onPress={handleAuth}>
            <Text style={styles.buttonText}>{isLogin ? 'Entrar' : 'Registrar'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.linkText}>
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Login'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center', padding: 20 },
  protectedContainer: { alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: 15, elevation: 5 },
  formContainer: { width: '100%', backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2ecc71', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  input: { width: '100%', height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, marginBottom: 15, paddingLeft: 10, backgroundColor: '#fff' },
  button: { backgroundColor: '#2ecc71', height: 50, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  logoutButton: { backgroundColor: '#e74c3c', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  linkText: { color: '#3498db', marginTop: 20, textAlign: 'center' }
});