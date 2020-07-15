import React from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import { Container,Content,Card,CardItem,Left,Thumbnail,Body} from 'native-base';
import Book from "../../components/Book";
import styled from 'styled-components/native';

const SideText=styled.Text`
  color: #8C8C8C;
  margin:10px 5px;
`;
const Title=styled.Text`
    margin:5px 5px;
    fontSize: 18px;
    fontWeight: bold;
`;
export default ( {book,bookdata}) =>{
    book.score=undefined;
    console.log(bookdata);
    return (
        <Container>
            <Content disableKBDismissScroll>
                <Book {...book}/>
                <Card>
                    <Title>상세정보</Title>
                    <SideText>{book.contents}
                    </SideText>
                </Card>
                <Card style={{flex: 0}}>
                    <SideText>총 {bookdata.length}개의 글이 있습니다.</SideText>
                    {/* <CardItem >
                    <Left>
                        <Thumbnail source={{uri: 'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
                        <Body>
                        <Text>NativeBase</Text>
                        <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                    </CardItem> */}
                    {bookdata.map(book=>(
                    <CardItem bordered>
                        <Body>
                            <Text>
                            {book.body}
                            </Text>
                        </Body>
                    </CardItem>
                     ))}
                </Card>
            </Content>
        </Container>
    );
};