import React, { useEffect, useState } from "react";
import { mainpath} from "../../api";
import HomePresenter from "./HomePresenter";
import axios from "axios";

export default () => {
  const [refreshing, setRefresing] = useState(false);
  const [books, setbooks] = useState({
    loading: true,
    nowbook: [],
  });
  const getData = async () => {
    // const [nowbook, nowbookError] = await getRequest("books");
    axios.get(`${mainpath}books`, {

      }).then(response=> {
        setbooks({
            loading: false,
            nowbook:response.data.data,
          });
      });
    //   console.log({...books.nowbook});
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter refreshFn={getData} {...books} />;
};