import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={
                {
                    flex:1,
                    backgroundColor:'red'
                }
            }>
                <Text>Profile</Text>
            </View>
            <View style={
                {
                    flex:1,
                    backgroundColor:'blue',
                }
            }>
                <Text>Room</Text>
            </View>
            <View style={
                {
                    flex:1,
                    backgroundColor:'yellow',
                }
            }>
                <Text>Navigation bar</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})