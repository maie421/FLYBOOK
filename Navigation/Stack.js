import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "../Screen/Detail";
import Tabs from "./Tab";
import WritingPage from "../Screen/WritingPage";
import RatingScreen from "../Screen/RatingScreen";
import BarcodeScreen from "../Screen/BarcodeScreen";
import AddRoomScreen from "../Screen/AddRoomScreen";
import RoomScreen from "../Screen/RoomScreen";

const Stack = createStackNavigator();

export default ()=> (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="책정보" component={Detail}  />
      <Stack.Screen name="WritingPage" component={WritingPage} options={{headerTitle:"글쓰기"}} />
      <Stack.Screen name="댓글" component={RatingScreen} />
      <Stack.Screen name="바코드" component={BarcodeScreen} />
      <Stack.Screen name="방추가" component={AddRoomScreen} />
      <Stack.Screen name="Room" component={RoomScreen} />
    </Stack.Navigator>
);