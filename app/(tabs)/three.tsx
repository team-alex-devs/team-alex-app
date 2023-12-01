import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import BrandPref from '../../components/BrandPref';

export default function TabTScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>team-alex-app</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <BrandPref  path="app/(tabs)/three.tsx"/>
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
