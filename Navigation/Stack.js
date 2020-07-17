import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "../Screen/Detail";
import Tabs from "./Tab";
import WritingPage from "../Screen/WritingPage";
import RatingScreen from "../Screen/RatingScreen";

const Stack = createStackNavigator();
RatingScreen.js
export default ()=> (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="책정보" component={Detail} />
      <Stack.Screen name="WritingPage" component={WritingPage} options={{headerTitle:"글쓰기"}} />
      <Stack.Screen name="댓글" component={RatingScreen} />
    </Stack.Navigator>
);