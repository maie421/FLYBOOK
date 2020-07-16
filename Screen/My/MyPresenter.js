import React from "react";
import {View ,Text,  Image} from "react-native";
import styled from 'styled-components/native';
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { Container,Content,Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import ScrollContainer from "../../components/ScrollContainer";

import Poster from "../../components/Poster";

const SideText=styled.Text`
  color: #8C8C8C;
  margin:5px 0;
`;

export default ({ refreshFn, loading,nowbook}) =>{
    return (
    <Container>
    <Content>
      <Body style={{marginTop:30}}>
      <Thumbnail large source={{uri: 'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} style={{marginBottom:5}}/>
      <Text>{nowbook?.name}</Text>
      <SideText>안녕하세요. {nowbook?.name}입니다.</SideText>
      </Body>
      
      {nowbook?.books?.map(book => (
          <Poster
            key={book.id}
            id={book.id}
            book={book}
            // isbn={book.isbn}
            // user={book.user}
          />
        ))}
    </Content>
    </Container>
    );
};