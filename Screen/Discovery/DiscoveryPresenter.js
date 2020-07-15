import React,{useState} from "react";
import {View,Text,TouchableOpacity  } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Container,Left,Content,List,ListItem,Right,Thumbnail,Body,Button} from 'native-base';

const TextInput = styled.TextInput`
`;

const Foud=styled.View`
  flexDirection: row;
  background-color:#EAEAEA;
  padding: 5px 3px;
  margin: 0px 20px;
  margin-top:20px;
`;
export default ({ books,keyword, onChange, onSubmit}) =>{
  const navigation = useNavigation();
  const goToDetail = book => {
    navigation.navigate("책정보",{book});
  };
    return(
    <Container>
    <Foud>
    <Ionicons name="md-search" size={35} color="black" style={{marginRight:10}}/>
    <TextInput
      placeholder={"Write a keyword"}
      value={keyword}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType={"search"}
    />
    </Foud>
    <Content>
      <List>
        {books.map(book=>(
         <ListItem thumbnail>
           <Body>
        <Text style={{fontWeight: 'bold'}}>{book.title}</Text>
            <Text>{book.authors}</Text>
            <Text>{book.publisher}</Text>
           </Body>
          <Right>
          <TouchableOpacity  underlayColor='rgba(73,182,77,1,0.9)' onPress={() =>goToDetail(book)}>
                <Thumbnail square source={{ uri: book.thumbnail }} style={{ height:70,width:50,margin:-3}}/>
            </TouchableOpacity>
           </Right>
         </ListItem>
         ))}
      </List>
    </Content>
    </Container>
    );
};