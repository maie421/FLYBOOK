import React, { useState,useContext ,useEffect} from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Image,StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Navigation/Stack";

import AuthStack from './Navigation/AuthStack';
import { authService } from "./fbase";


const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });


export default function App() {
  const [isReady,setIsReady]=useState(false);

  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    
    return Promise.all([...images]);
  };

  const onFinish =()=>setIsReady(true);


  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return isReady ? (
    <>
    <NavigationContainer>
      {userObj ?<Stack />: <AuthStack />}
    </NavigationContainer>
    <StatusBar backgroundColor="#013064" barStyle="light-content"/>
    </>
  ):(
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish()}
      onError={console.warn}
    />
  );
}

