import React, { useEffect, useState } from "react";
import { mainpath} from "../../api";
import MyPresenter from "./MyPresenter";
import axios from "axios";

export default () => {
  const [refreshing, setRefresing] = useState(false);
  const [books, setbooks] = useState({
    loading: true,
    nowbook: [],
  });
  const getData = async () => {
    // const [nowbook, nowbookError] = await getRequest("books");
    await axios.get(`${mainpath}user?user_id=1`)
    .then(response=> {
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

  return <MyPresenter {...books} />;
};