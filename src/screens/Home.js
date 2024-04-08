import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Welcom to My app
            </Text>
            <Button
                title="Go to login page"
                onPress={() => navigation.navigate('login')}
               
            />
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


    },
    heading: {
        fontSize: 40,
        marginBottom: 20
    },
    btn:{
        backgroundColor:'black'
    }

})




export default Home