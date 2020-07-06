import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "../Screen/Detail";
import Tabs from "./Tab";

const Stack = createStackNavigator();

export default ()=> (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);