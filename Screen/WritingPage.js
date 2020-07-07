import React ,{useState} from "react";
import styled from 'styled-components/native';
import { Platform } from "react-native";
import { Container,Content,Card} from 'native-base';
import Book from "../components/Book";

const TextInput = styled.TextInput`
  margin: 5px 15px;
  font-size:15px;
`;
export default ({ navigation }) =>{
const [value, onChangeText] = useState('');
  return(
  <Container>
      <Book/>
      <TextInput
     placeholder={"이 책은 어떠셨나요? 채의 감상을 공유하세요."}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  </Container>
  );
};