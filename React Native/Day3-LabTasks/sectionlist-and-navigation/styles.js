import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      backgroundColor: "#2a1999",
      color: "white",
      padding: 8
    },
    personContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    personImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 12,
      alignItems: 'center',
      borderRadius: 4,
    },
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
  });