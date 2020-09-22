import React, { useEffect, useState } from "react";
import { mainpath} from "../../api";
import HomePresenter from "./HomePresenter";
import axios from "axios";

export default () => {
  const [books, setbooks] = useState({
    loading: true,
    nowbook: [],
  });
  const getData = async () => {
    await axios.get(`${mainpath}books`, {
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