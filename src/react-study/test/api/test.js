// import할 api 요청 함수 작성
// https://jsonplaceholder.typicode.com
// root/users로 get요청

import axios from "axios";

const instance = axios.create({
  baseURL: "http://tour.amiweb.kr"

  //baseURL: "https://jsonplaceholder.typicode.com"
  //baseURL: "http://seyoung.liodesign.kr"
});

export const getTestApi = async () => {
    const response = await instance.get("/_react/test01.php");
   //const response = await instance.get("/users");
   //const response = await instance.get("/ztest01.php");
  return response;
}
