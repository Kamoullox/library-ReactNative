import {FlatList, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';   
import { ListItem, Input } from 'react-native-elements';
import listBooks from '../datas/books.json';
import axios from 'axios';


function Library({navigation, route}) {


    const [books,setBooks] = useState(listBooks)



    function navigateToBook(book) {
        navigation.navigate("book", {curentBook: book});
    }
    
    const [searchInput,setSearchInput] = useState('');


    function changeInput(text) {
        setSearchInput(text);
    }

    function searchBook() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+searchInput)
        .then(res => {
        let newData = res.data.items.map(x => {
            console.log(x.volumeInfo.imageLinks);
            return { 
                title:  x.volumeInfo.title,
                id: x.id,
                description: x.volumeInfo.description,
             };
            
        });
        
        setBooks(newData);
      })
    }

    return(
        <View style={styles.container}>

            <Input placeholder='Rechercher un livre'
            returnKeyLabel="add" 
            returnKeyType='add'
            onSubmitEditing={searchBook} 
            value={searchInput} 
            onChangeText={text => changeInput(text)}
            />

            <View style={styles.list}>
                <FlatList
                data={books}
                renderItem={({ item }) =>
                    <ListItem
                        key={item.id}
                        title={item.title}
                        onPress={() => navigateToBook(item)}
                    />
                }
                keyExtractor={item => item.id.toString()}
                />
            </View>
               
    
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },list: {
        width: 350
      },
  });

  
export default Library;