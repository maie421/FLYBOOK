import React,{useState} from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { CardItem, Thumbnail, Body, Left, Right, Button, Icon,Card } from 'native-base';
import Book from "../components/Book";
import {mainpath} from "../api";
import axios from "axios";

const SideText=styled.Text`
  color: #8C8C8C;
  margin-right:10px;
`;

let iconName = Platform.OS === "ios" ? "ios-" : "md-";
iconName+='star';

const Poster= ({book}) =>{
const result = book.Likes.filter(like=> like.user_id==1);
const [like,setlike]=useState({
    likecount:book.Likes.length,
    isLiked:result.length<=0?'md-heart-empty':'md-heart'
});
// if(result.length<=1){
//     setlike({isLiked:1});
// }

const navigation = useNavigation();
const goToDetail = (book) => {
    navigation.navigate("책정보",{book});
};
const goToRating=(book)=>{
    navigation.navigate("댓글",{book});
};
const Likes=async (id,likes)=>{

    if(like.isLiked=='md-heart-empty'){
        // setlike(book.Likes.length+1);
        setlike({
            isLiked:'md-heart',
            likecount:like.likecount+1
        });
        await axios.post(`${mainpath}books/likes`, {
        user_id:1,
        book_id:id,
        });
    }else{
        setlike({
            isLiked:'md-heart-empty',
            likecount:like.likecount-1
        });
        await axios.get(`${mainpath}books/likes/${result[0].id}?user_id=1`);
    }
};
return (
 <Card>
    <CardItem>
        <Left>
            <Thumbnail source={{uri:'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
            <Body>
                <Text>{book.user.name}</Text>
                <Text note>{book.created_at}</Text>
            </Body>
            {book.user.id==1?(
            <Body style={{marginTop:-45,flex:0.12}}>
                <MaterialCommunityIcons name="settings-helper" size={40} color="black" />
            </Body>
            ):<Text></Text>}
        </Left>
    </CardItem>
    <TouchableOpacity onPress={()=>goToDetail(book)}>
    <Book {...book}/>
    </TouchableOpacity>
    <CardItem>
        <Text>
            <Text style={{fontWeight:'900'}}></Text>
            {book.body}</Text>
    </CardItem>
    <CardItem style={{height:45}}>
        <Left>
            <TouchableOpacity  underlayColor='rgba(73,182,77,1,0.9)' onPress={() =>Likes(book.id,book.Likes)}>
                <Ionicons name={like.isLiked} size={28} color="red" />
            </TouchableOpacity>
            <SideText>좋아요 {like.likecount}</SideText>
            <TouchableOpacity  underlayColor='rgba(73,182,77,1,0.9)' onPress={() =>goToRating(book)}>
                <MaterialCommunityIcons name="chat-outline" size={28} color="#8C8C8C" />
            </TouchableOpacity>
                <SideText>댓글 {book.ratings.length}</SideText>
            <Button transparent>
                <Ionicons name="md-share" size={28} color="#8C8C8C" />
            </Button>
            <SideText>공유</SideText>
        </Left>
    </CardItem>
</Card>

);
};

export default Poster;