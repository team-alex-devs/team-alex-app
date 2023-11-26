import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import SignUp from "../../components/SignUp";
import ViewStyle from "../../components/ViewStyle";
import ViewImage from "../../components/ViewImage";

export default function TabTwoScreen() {
    return <View style={styles.container}>
        <Text style={styles.title}>team-alex-app</Text>
        <View style={styles.separator} lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"/>

        <Text> SET USER (TEST)</Text>
        <SignUp/>

        <View style={styles.separator} lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"/>

        <Text> GET STYLE (TEST)</Text>
        <ViewStyle/>

        <View style={styles.separator} lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"/>

        <Text> GET IMAGE (TEST)</Text>
        <ViewImage/>
    </View>
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
