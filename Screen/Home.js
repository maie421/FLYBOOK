import React from "react";
import {View ,Button} from "react-native";

export default ({ navigation }) =>(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button title="Detail" onPress={() => navigation.navigate("Detail")} />
  </View>
);