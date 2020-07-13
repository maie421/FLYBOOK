import React from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { CardItem, Thumbnail, Body, Left, Right, Button, Icon,Card } from 'native-base';
import Book from "../components/Book";

const SideText=styled.Text`
  color: #8C8C8C;
  margin-right:10px;
`;
const Star=styled.View`
  margin-top:10px;
  flexDirection: row;
`;

let iconName = Platform.OS === "ios" ? "ios-" : "md-";
iconName+='star';

const Poster= ({book}) =>{
    const navigation = useNavigation();
    const goToDetail = () => {
      navigation.navigate("책정보",{
        book
      });
    };
    // console.log({...book});
return (
 <Card>
    <CardItem>
        <Left>
            <Thumbnail source={{uri:'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
            <Body>
                <Text>{book.user.name}</Text>
                <Text note>{book.created_at}</Text>
            </Body>
            <Body style={{marginTop:-45,flex:0.12}}>
                <MaterialCommunityIcons name="settings-helper" size={40} color="black" />
            </Body>
        </Left>
    </CardItem>
    <TouchableOpacity onPress={goToDetail}>
    <Book {...book}/>
    </TouchableOpacity>
    <CardItem>
        <Text>
            <Text style={{fontWeight:'900'}}></Text>
            {book.body}</Text>
    </CardItem>
    <CardItem style={{height:45}}>
        <Left>
            <Button transparent>
                <Ionicons name="md-heart-empty" size={28} color="red" />
            </Button>
            <SideText>좋아요 0</SideText>
            <Button transparent>
                <MaterialCommunityIcons name="chat-outline" size={28} color="#8C8C8C" />
            </Button>
                <SideText>댓글 {book.ratings.length}</SideText>
            <Button transparent>
                <Ionicons name="md-share" size={28} color="#8C8C8C" />
            </Button>
            <SideText>공유</SideText>
        </Left>
    </CardItem>
</Card>

);
};

export default Poster;