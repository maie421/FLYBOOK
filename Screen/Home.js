import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { Platform } from "react-native";
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { Container,Content,Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

const SideText=styled.Text`
  color: #8C8C8C;
  margin-right:10px;
`;

const Star=styled.View`
  margin-top:10px;
  flexDirection: row;
`;

export default ({ navigation }) =>{
  let iconName = Platform.OS === "ios" ? "ios-" : "md-";
  iconName+='star';
  return(
    <Container>
    <Content>
      <Card>
        <CardItem>
            <Left>
                <Thumbnail source={{uri:'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
                <Body>
                    <Text>Beomwoo</Text>
                    <Text note>2018년 5월 22일</Text>
                </Body>
            </Left>
        </CardItem>
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
        <CardItem>
            <Text>
                <Text style={{fontWeight:'900'}}>Beomwoo </Text>
                #인스타그램 #따라하기 #리액트네이티브</Text>
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
                <SideText>댓글 0</SideText>
                <Button transparent>
                  <Ionicons name="md-share" size={28} color="#8C8C8C" />
                </Button>
                <SideText>공유</SideText>
            </Left>
          </CardItem>
      </Card>
    </Content>
  </Container>
  );
};