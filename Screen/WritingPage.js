import React ,{useState} from "react";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Container,Content,Card} from 'native-base';
import SwipeableRating from 'react-native-swipeable-rating';
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
  if (value === "") {
    alert("빈칸을 채워주세요");
    return;
  }
  await axios.post(`${mainpath}books`, {
      score:rating,
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

  navigation.goBack();
  value="";
};

const handleRating = (rating) => {
  setrating(rating);

};

const [value, onChangeText] = useState('');
const [rating,setrating] = useState(0);

  return(
  <Container>
      <Book {...book}/>
      <SwipeableRating
          rating={rating}
          size={32}
          gap={4}
          swipeable={false}
          onPress={rating=>handleRating(rating)}
          xOffset={30}
          color="#013064"
          emptyColor="#013064"
         style={{flex:0.2,marginLeft:10}}/>
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