import React,{useState} from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { CardItem, Thumbnail, Body, Left, Right, Button, Icon,Card,} from 'native-base';
import Book from "./Book";
import Action from "./ActionSheet";
import {mainpath} from "../api";
import axios from "axios";

const SideText=styled.Text`
  color: #8C8C8C;
  margin-right:10px;
`;

// let iconName = Platform.OS === "ios" ? "ios-" : "md-";
// iconName+='star';


const Poster= ({book}) =>{

const result = book.Likes.filter(like=> like.user_id==1);
const [like,setlike]=useState({
    likecount:book.Likes.length,
    isLiked:result.length<=0?'md-heart-empty':'md-heart',
});

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
        <Ionicons name="md-person" size={50} color="black" />
            <Body>
                <Text>{book.user.name}</Text>
                <Text note>{book.created_at}</Text>
            </Body>
            {book.user.id==1?(
                <Action {...book}/>
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
        </Left>
    </CardItem>
</Card>

);
};

export default Poster;