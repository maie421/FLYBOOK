import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, Image, View, StyleSheet, Button,TouchableHighlight,FlatList,ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";

export default ()=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [results, setResults] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    axios({
      method: 'get',
      url: `https://dapi.kakao.com/v3/search/book?target=title`,
      headers: {
        Authorization:"KakaoAK 2b99240d5f8a380a7d9443e1f210d0bc",
        Host:"dapi.kakao.com",
      },
     params: {
      query: data,
      },
    }).then(response => {
      setResults(
        response.data.documents,
      );
      console.log(response.data.documents);
    }).catch(error => {
      console.log(error);
    });
    setScanned(true);
  };

  if (hasPermission === null) {
    return <ActivityIndicator color="black" size="small" /> ;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const navigation = useNavigation();
  const goToDetail = book => {
    navigation.navigate("책정보",{book});
  };

  const renderBook = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => goToDetail(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.thumbnail }} />
        <View style={styles.container_Side}>
          <Text style={styles.title}>제목 : {item.title}</Text>
          <Text style={styles.title}>저자 : {item.publisher}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
     <View
     style={{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'flex-end',
     }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

     {scanned && (
     <FlatList
       vertical
       showsVerticalScrollIndicator={false}
       data={results}
       renderItem={renderBook}
      //  keyExtractor={item => `${item.isbn}`}
     />
     )}
   </View>
  );
}

const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    height: RECIPE_ITEM_HEIGHT + 15,
    backgroundColor:"#FFFFFF"

  },
  photo: {
    width: 130,
    height: 150,
    //borderRadius: 15,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0
    marginRight:10,
  },
   title: {

    fontSize: 17,
    fontWeight: 'bold',

    color: '#444444',
    marginTop:10,

  },

  btnIcon: {
    height: 14,
    width: 14
  }
});