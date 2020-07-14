import React ,{useState} from "react";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Container,Content,Card} from 'native-base';
import Book from "../components/Book";
import { mainpath} from "../api";
import axios from "axios";

const TextInput = styled.TextInput`
  margin: 5px 15px;
  font-size:15px;
`;
export default ({route:{params:{book}}}) =>{
  const navigation = useNavigation();
  const search = async () => {
    await axios.post(`${mainpath}books`, {
        score:3,
        body:value,
        isbn:book.isbn,
        user_id:1,
        title:book.title,
        authors:book.authors[0],
        thumbnail:book.thumbnail,
        publisher:book.publisher,
        contents:book.contents,

    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log("ERRRR:: ",error.response.data);
    });
    if (value === "") {
      return;
    }
    navigation.goBack();
  };
  
const [value, onChangeText] = useState('');
console.log(value);
  return(
  <Container>
      <Book {...book}/>
      <TextInput
     placeholder={"이 책은 어떠셨나요? 채의 감상을 공유하세요."}
      onChangeText={text => onChangeText(text)}
      value={value}
      onSubmitEditing={search}
      returnKeyType={"search"}
      />
  </Container>
  );
};