import React from "react";
import styled from 'styled-components/native';
import { Platform } from "react-native";
import { Container,Content,Card} from 'native-base';
import Poster from "../components/Poster";
export default ({ navigation }) =>{
  // let iconName = Platform.OS === "ios" ? "ios-" : "md-";
  // iconName+='star';
  return(
  <Container>
    <Content>
      <Poster/>
    </Content>
  </Container>
  );
};