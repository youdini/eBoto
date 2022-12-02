import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Button(homescreenBtn) {
  const { onPress} = homescreenBtn;
  return (
    <View>
    <Button style={styles.button} onPress={onPress}/>
      <Text style={styles.text}>Create a Room</Text>
    </View>
  );
  }

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 45,
      paddingHorizontal: 5,
      borderRadius: 4,
      backgroundColor: '#004AAD',
    },
    text: {
      fontSize: 10,
      lineHeight: 21,
      color: 'white',
    },
  });