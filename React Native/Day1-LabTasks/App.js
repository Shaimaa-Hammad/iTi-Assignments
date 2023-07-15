import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  const images = [
    require('./assets/images/image1.jpg'),
    require('./assets/images/image2.jpg'),
    require('./assets/images/image3.jpg'),
    require('./assets/images/image4.jpg'),
    require('./assets/images/image5.jpg'),
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30
  },
  image: {
    width: 400,
    height: 400,
    marginRight: 10,
  },
});


// import React from 'react';

