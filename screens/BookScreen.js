import React from 'react';
import {StyleSheet, ScrollView, Text,View} from 'react-native';

import { Card, Image, ListItem, Button, Icon } from 'react-native-elements'





function DetailsScreen({navigation, route}) {

  const book = route.params.curentBook;

  console.log(book.image);
    
  return(

    <View style={styles.container}>
      <ScrollView>
        <Card title={book.title} >
          <Image
          source={{ uri: book.image }}
          style={{ width: '100%', height: 600 }}
          />
          <Text style={{fontSize: 23, margin: 5}}>Descriptif</Text>
          <Text style={{marginBottom: 3}}>
            {book.description}
          </Text>
        </Card>
      </ScrollView>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '100%',
      height:500
    }
  });
  

export default DetailsScreen;