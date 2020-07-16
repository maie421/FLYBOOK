import axios from "axios";

export const mainpath ='http://abc498949dbf.ngrok.io/api/';
const getRequest = (path, params) =>{
  axios.get(`${mainpath}${path}`, {
    params: {
      ...params,
    }
  }).then(function (response) {
    return response.data.data;
  });
};

  const postRequest = (path, params) =>
  axios.post(`${mainpath}${path}`, {
    params: {
      ...params,
    }
  });

  const putRequest = (path, params) =>
  axios.put(`${mainpath}${path}`, {
    params: {
      ...params,
    }
  });

  const deleteRequest = (path, params) =>
  axios.delete(`${mainpath}${path}`, {
    params: {
      ...params,
    }
  });

  export const bookAPI = {
    fullbooks: () => getRequest("books"),
    bookstor: () => postRequest(`books`,{score:`3`,body:`test`,isbn:`123`,user_id:1}),
    book: book => getRequest(`books/${book}`),
    bookupdate: book => putRequest(`books/${book}`,{body:`ㄱㄷㅈ`,score:`4`,user_id:1}),
    bookdelete: book => deleteRequest(`books/${book}`),
    ratings: book => postRequest(`books/${book}/ratings`),
  };

export const userAPI ={
    user: () => getRequest(`user`,{user_id:1}),
    login: () => postRequest("login",{email:`admin1@naver.com`,password:123456789}),
    logout: () => getRequest(`books`,{score:`3`,body:`test`,isbn:`123`,user_id:1}),
    register: () => postRequest(`register`,{email:`admin2@naver.com`,password:123456789,name:`테스`}),
};