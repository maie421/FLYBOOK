import React, { useEffect, useState } from "react";
import { mainpath} from "../../api";
import DetailPresenter from "./DetailPresenter";
import axios from "axios";

export default ({route:{params:{book}}}) => {
  const [refreshing, setRefresing] = useState(false);
  const [books, setbooks] = useState({
    loading: true,
    bookdata:[],
    book,
  });
  const getData = async () => {
    // const [nowbook, nowbookError] = await getRequest("books");
    await axios.get(`${mainpath}books/${book.isbn}`, {
      }).then(response=> {
         setbooks({
          loading: false,
          bookdata:response.data,
          book
        });
      });
    };
    useEffect(() => {
      getData();
    }, [book]);

  return <DetailPresenter {...books} />;
};