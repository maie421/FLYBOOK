import React from "react";
import styled from 'styled-components/native';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import { Container,Content,Card} from 'native-base';
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Constants from 'expo-constants';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default ({ refreshFn,nowbook,loading}) =>{
  return(
    <Container>
      <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Content>
        {nowbook?.map(book => (
          <Poster
            key={book.id}
            id={book.id}
            book={book}
            // isbn={book.isbn}
            // user={book.user}
          />
        ))}
        </Content>
    </ScrollContainer>
  </Container>
  );
}
