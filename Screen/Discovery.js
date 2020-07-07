import React,{useState} from "react";
import {View,Text  } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
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

export default () =>{
    const [value, onChangeText] = useState('');
    return(
    <Container>
    <Foud>
    <Ionicons name="md-search" size={35} color="black" style={{marginRight:10}}/>
    <TextInput
     placeholder={"Write a keyword"}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </Foud>
    <Content>
          <List>
            <ListItem thumbnail>
              <Body>
                <Text style={{fontWeight: 'bold'}}>내 이름을 잊어줘</Text>
                <Text>j.s 온로 지음</Text>
                <Text>북플라자 퍼냄</Text>
              </Body>
              <Right>
                <Thumbnail square source={{ uri: 'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg' }} style={{ height:70,width:50,margin:-3}}/>
              </Right>
            </ListItem>
          </List>
        </Content>
    </Container>
    );
};