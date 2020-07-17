
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const ScrollContainer = ({
  loading,
  children,
  contentContainerStyle,
  refreshFn
}) => {
  const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await refreshFn();
  //   setRefreshing(false);
  // };
  const onRefresh = React.useCallback(async() => {
    setRefreshing(true);
    await refreshFn();
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          // enabled={false}
          // tintColor={"black"}
        />
      }
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
        //   <ScrollView
        //   contentContainerStyle={styles.scrollView}
        //   refreshControl={
        //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        //   }
        // >
        //   <Text>Pull down to see RefreshControl indicator</Text>
        // </ScrollView>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func
};

export default ScrollContainer;