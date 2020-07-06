import React , {useLayoutEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home";
import Writing from "../Screen/Writing";
import Discovery from "../Screen/Discovery";
import Myinfo from "../Screen/MyInfo";

const Tab = createBottomTabNavigator();

const getHeaderTitle = route =>
  route?.state?.routeNames[route.state.index] || "FLYBOOK";

export default ({navigation,route})=>{
    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: getHeaderTitle(route) });
      }, [ route]);
    return (
    <Tab.Navigator>
      <Tab.Screen name="FLYBOOK" component={Home} />
      <Tab.Screen name="글쓰기" component={Writing} />
      <Tab.Screen name="발견" component={Discovery} />
      <Tab.Screen name="내정보" component={Myinfo} />
    </Tab.Navigator>
    );
};
