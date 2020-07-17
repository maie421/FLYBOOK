import React ,{useState} from "react";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import { Container,Card,CardItem,Left,Thumbnail,Body,Footer,FooterTab,Content} from 'native-base';
import { mainpath} from "../api";
import axios from "axios";

const SideText=styled.Text`
  color: #8C8C8C;
  margin-right:10px;
`;
const TextInput = styled.TextInput`
  margin: 10px 5px;
  padding:5px;
  font-size:15px;
  flex:1;
  border-radius: 10px;
  border: 1px solid #BDBDBD;
`;
export default ({ route:{params:{book:{ratings},book}} }) =>{
    console.log(book.id);
  const navigation = useNavigation();
  const search = async () => {
    if (value === "") {
      alert("빈칸을 채워주세요");
      return;
    }
    await axios.post(`${mainpath}books/ratings`, {
        rating:value,
        book_id:book.id,
        user_id:1,

    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log("ERRRR:: ",error.response.data);
    });

    navigation.goBack();
    value="";
  };
  
const [value, onChangeText] = useState('');
  return(
  <Container>
    <Content>
    <Card style={{flex: 0}}>
    {ratings.map(rating=>(
    <>
    <CardItem >
    <Left>
        <Thumbnail source={{uri: 'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
        <Body>
        <Text>{rating.user.name}</Text>
        <Text note>{rating.created_at}</Text>
        </Body>
    </Left>
    </CardItem>
    <CardItem bordered>
        <Body>
            <Text style={{marginLeft:10,fontSize:18}}>
            {rating.rating}
            </Text>
        </Body>
    </CardItem>
    </>
    ))}
    </Card>
    </Content>
    <Footer style={{backgroundColor:'white'}}>
        <TextInput
        placeholder={"이 책은 어떠셨나요? 채의 감상을 공유하세요."}
        onChangeText={text => onChangeText(text)}
        value={value}
        onSubmitEditing={search}
        returnKeyType={"search"}
        />
    </Footer>
  </Container>
  );
};