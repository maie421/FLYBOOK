import React , {useLayoutEffect} from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Home from "../Screen/Home";
import Writing from "../Screen/Writing";
import Discovery from "../Screen/Discovery";
import Myinfo from "../Screen/My";
import ChatHome from "../Screen/ChatHomeScreen";

const Tab = createBottomTabNavigator();

const getHeaderTitle = route =>
  route?.state?.routeNames[route.state.index] || "FLYBOOK";

export default ({navigation,route})=>{
    useLayoutEffect(() => {
      const name=getHeaderTitle(route);
        navigation.setOptions({ 
          title:name,
          headerRight: () => (
            <MaterialCommunityIcons 
            style={{marginRight:10}}
            onPress={() => navigation.navigate('바코드')}
            name="barcode-scan" 
            size={30} 
            color="black"
            />
          ),
         });

      }, [route]);

    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "FLYBOOK") {
            iconName += "home";
          } else if (route.name === "글쓰기") {
            iconName += "create";
          }else if (route.name === "채팅") {
            iconName += "chatbubbles";
          } else if (route.name === "발견") {
            iconName += "search";
          } else if (route.name === "내정보") {
            iconName += "person";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "black" : "#8C8C8C"}
              size={26}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor:"black",
      }}
    >
      <Tab.Screen name="FLYBOOK" component={Home} />
      <Tab.Screen name="글쓰기" component={Writing}   />
      <Tab.Screen name="채팅" component={ChatHome}   />
      <Tab.Screen name="발견" component={Discovery}/>
      <Tab.Screen name="내정보" component={Myinfo} />
    </Tab.Navigator>
    );
};
