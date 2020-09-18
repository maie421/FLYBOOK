import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, Icon,Card,ActionSheet ,Root} from 'native-base';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {mainpath} from "../api";
import axios from "axios";

var BUTTONS = ["수정", "삭제"];
const Action=(book)=>{
    const navigation = useNavigation();

    const select=async(buttonIndex)=>{
        if(buttonIndex==0){
            navigation.navigate("WritingPage",{book});
        }else if(buttonIndex==1){
            
            await axios.delete(`${mainpath}books/${book.id}`,{
                data: { 
                    user_id:1
                },
            }).then(function (response) {
                alert('삭제 되었습니다.');
                }).catch(function (error) {
                console.log("ERRRR:: ",error.response.data);
                });
        }
    };
    return (
    <Root>
        <Button  
            transparent
            style={{backgroundColor:'white',width:40,marginLeft:100,marginTop:-25}}
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                // cancelButtonIndex: CANCEL_INDEX,
                // destructiveButtonIndex: DESTRUCTIVE_INDEX,
              },
              buttonIndex => {select(buttonIndex)}
            )}
          >
             <MaterialCommunityIcons name="settings-helper" size={40} color="black" />
          </Button>

    </Root>
    )};

export default Action;