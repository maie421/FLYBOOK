import React from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { CardItem, Thumbnail, Body, Left, Right, Button, Icon,Card } from 'native-base';

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

const Book= (book) =>{
let starcolor=[]
console.log(book);

for(let i=0;i<book.score;i++){
  starcolor[i]="#013064";
}
for(let i=0;i<5-book.score;i++){
  starcolor[4-i]="#EAEAEA";
}
return (
<CardItem>
    <Left style={{flex: 0.8}}>
    <Image source={{uri:book.path}} style={{height:220, width:170}}/>
    </Left>
    <Body style={{flex: 1,marginTop:-40,marginLeft:50}}>
        <Text style={{marginBottom:20}}>{book.title}</Text>
        <SideText>{book.authors}</SideText>
        <SideText>{book.publisher}</SideText>
        <Star> 
        <Ionicons name={iconName} size={26} color={starcolor[0]} />
        <Ionicons name={iconName} size={26} color={starcolor[1]} />
        <Ionicons name={iconName} size={26} color={starcolor[2]} />
        <Ionicons name={iconName} size={26} color={starcolor[3]} />
        <Ionicons name={iconName} size={26} color={starcolor[4]} />
        </Star>
    </Body>
</CardItem>
);
};

export default Book;