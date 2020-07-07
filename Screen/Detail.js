import React from "react";
import {View ,Text,  Image,TouchableOpacity} from "react-native";
import { Container,Content,Card,CardItem,Left,Thumbnail,Body} from 'native-base';
import Book from "../components/Book";
import styled from 'styled-components/native';

const SideText=styled.Text`
  color: #8C8C8C;
  margin:10px 5px;
`;
const Title=styled.Text`
    margin:5px 5px;
    fontSize: 18;
    fontWeight: bold;
`;
export default ({ navigation }) =>{
    return (
        <Container>
            <Content disableKBDismissScroll>
                <Book/>
                <Card>
                    <SideText>양정본</SideText>
                </Card>
                <Card>
                    <Title>상세정보</Title>
                    <SideText>아마존sadfasdfas
                        dfasdfasdfdfasdfasdf
                        asdfasdfasdf
                        asdfasdfasdfasdfads
                        asdfasdfdasds
                        fasdfasdfasdfasdf
                        asdfsdfasdfasdfasdfas
                        asasdfasdfasdfadfas
                        dfasdfasdfasdfasdfa
                        asdfsdfasdfasdf
                    </SideText>
                </Card>
                <Card style={{flex: 0}}>
                    <SideText>총 1개의 글이 있습니다.</SideText>
                    <CardItem >
                    <Left>
                        <Thumbnail source={{uri: 'https://image.yes24.com/momo/TopCate0001/kepub/X_697651.jpg'}} />
                        <Body>
                        <Text>NativeBase</Text>
                        <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            //Your text here
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};