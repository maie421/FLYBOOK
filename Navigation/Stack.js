import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "../Screen/Detail";
import Tabs from "./Tab";
import WritingPage from "../Screen/WritingPage";

const Stack = createStackNavigator();

export default ()=> (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="책정보" component={Detail} />
      <Stack.Screen name="WritingPage" component={WritingPage} options={{headerTitle:"글쓰기"}} />
    </Stack.Navigator>
);