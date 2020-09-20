
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
    // wait(1000).then(() => setRefreshing(false));
    setRefreshing(false);
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
      {loading ? <ActivityIndicator color="black" size="small" /> : children}
    </ScrollView>
  );
};
ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func
};

export default ScrollContainer;