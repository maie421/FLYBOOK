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

const Book= () =>{

return (
<CardItem>
    <Left style={{flex: 0.8}}>
    <Image source={{uri:'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} style={{height:200, width:150}}/>
    </Left>
    <Body style={{flex: 1}}>
        <Text style={{marginBottom:20}}>우아한 가난의 시대(김지선 에세이)</Text>
        <SideText>이완규 지음</SideText>
        <SideText>원앤원북스 퍼냄</SideText>
        <Star>
        <Ionicons name={iconName} size={26} color="#013064" />
        <Ionicons name={iconName} size={26} color="#013064" />
        <Ionicons name={iconName} size={26} color="#013064" />
        <Ionicons name={iconName} size={26} color="#013064" />
        <Ionicons name={iconName} size={26} color="#013064" />
        </Star>
    </Body>
</CardItem>
);
};

export default Book;