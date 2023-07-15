import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import {styles} from '../../styles';

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      title: 'A',
      data: [
        { id: 1, name: 'User 1', image: require('../../assets/images/user.png') },
        { id: 2, name: 'User 2', image: require('../../assets/images/user.png') },
        { id: 3, name: 'User 3', image: require('../../assets/images/user.png') }
      ]
    },
    {
      title: 'B',
      data: [
        { id: 1, name: 'User 1', image: require('../../assets/images/user.png') },
        { id: 2, name: 'User 2', image: require('../../assets/images/user.png') },
      ]
    },
    {
      title: 'C',
      data: [
        { id: 1, name: 'User 1', image: require('../../assets/images/user.png') },
      ]
    },
    {
      title: 'D',
      data: [
        { id: 1, name: 'User 1', image: require('../../assets/images/user.png') },
      ]
    },
  ];

  const showItem = ({ item }) => (
    <TouchableOpacity style={styles.personContainer}>
      <Image source={item.image} style={styles.personImage} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={showItem}
        renderSectionHeader={renderSectionHeader}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddTasks')}
      >
        <Text style={styles.buttonText}>Go to My ToDo List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
