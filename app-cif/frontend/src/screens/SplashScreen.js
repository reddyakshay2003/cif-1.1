import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SplashScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <ImageBackground
      source={require('../../assets/splash-icon.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.brand}>
          <Text style={[styles.title, { color: colors.onPrimary }]}>Creative Industries Festival</Text>
          <Text style={[styles.subtitle, { color: colors.onPrimary + 'CC' }]}>Create • Connect • Inspire</Text>
        </View>

        <TouchableOpacity
          style={[styles.arrowButton, { borderColor: colors.onPrimary }]}
          onPress={() => navigation.replace('Login')}
          activeOpacity={0.8}
        >
          <Feather name="chevron-down" size={28} color={colors.onPrimary} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  brand: {
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  arrowButton: {
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginBottom: 24,
  },
});
