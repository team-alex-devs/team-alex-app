import { StyleSheet } from 'react-native';

import IntroScreen from '../../components/IntroScreen';
import { Text, View } from '../../components/Themed';
import Login from "../../components/SignUp";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>team-alex-app</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <IntroScreen path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
