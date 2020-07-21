import React, { useState,useLayoutEffect } from "react";
import DiscoveryPresenter from "./DiscoveryPresenter";
import axios from "axios";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    books: [],
  });
  const onChange = text => setKeyword(text);
  const search = async () => {
    if (keyword === "") {
      return;
    }
    axios({
        method: 'get',
        url: `https://dapi.kakao.com/v3/search/book?target=title&sort=recency`,
        headers: {
          Authorization:"KakaoAK 2b99240d5f8a380a7d9443e1f210d0bc",
          Host:"dapi.kakao.com",
        },
       params: {
        query: keyword,
        },
      }).then(response => {
        setResults({
            books:response.data.documents
          });
      }).catch(error => {
        console.log(error);
      });

  };

  return (
    <DiscoveryPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};