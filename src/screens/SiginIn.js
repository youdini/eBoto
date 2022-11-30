import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Googelicon from "../assets/google/google";
import Logo from "../assets/logo/logo";
import LogoCCC from "../assets/logo_ccc/logo_ccc";

const Signin = () => {
  return (
    <View>
      <View>

      </View>
      <View style={
        {
          alignContent: 'center',
          alignItems: 'center',
          marginBottom: 100
        }
      }>
        <Logo />
      </View>
      <View style={styles.container}>
        <Text style={
          {
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'whitesmoke',
            borderRadius: 9,
          }
        }>Sign in with Google!!!!!!!!!!!!!!!!!!!</Text>
        <TouchableOpacity style={styles.google}>
          <Googelicon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  google: {
    padding: 6,
    borderRadius: 100,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    alignSelf: 'center',
  },

  container: {
    backgroundColor: '#7FB5FF',
    paddingHorizontal: 70,
    paddingVertical: 50,
    borderRadius: 20,

  }
})