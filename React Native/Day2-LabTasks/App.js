import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <Text style={{fontSize:20, fontWeight:'bold'}}>Here are some boxes of different colors</Text>
  <View style={[styles.colorBox, { backgroundColor: '#2aa198' }]}>
    <Text>Cyan #2aa198</Text>
  </View>
  <View style={[styles.colorBox, { backgroundColor: '#268bd2' }]}>
    <Text>Blue #268bd2</Text>
  </View>
  <View style={[styles.colorBox, { backgroundColor: '#d33682' }]}>
    <Text>Magenta #d33682</Text>
  </View>
  <View style={[styles.colorBox, { backgroundColor: '#cb4b16' }]}>
    <Text>Orange #cb4b16</Text>
  </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  colorBox: {
    width: '80vw',
    paddingVertical: 15,
    textAlign: 'center',
    marginTop: 20
  },
});
