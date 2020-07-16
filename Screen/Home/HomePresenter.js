import React from "react";
import styled from 'styled-components/native';
import { Platform } from "react-native";
import { Container,Content,Card} from 'native-base';
import Poster from "../../components/Poster";

export default ({ nowbook,loading}) =>{
  // let iconName = Platform.OS === "ios" ? "ios-" : "md-";
  // iconName+='star';
  // console.log({...nowbook});
  return(
  <Container>
    <Content disableKBDismissScroll>
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
  </Container>
  );
};