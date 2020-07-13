import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Library from './LibraryScreen';

function Home({navigation, route}) {
    function navigateToLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {name: 'library'}
            ]
        })
    }

    return(
        <View style={styles.container}>
            <Text>Bienvenue dans ma bibliotheque</Text>
            <Button title="Commencer" onPress={navigateToLibrary} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default Home;