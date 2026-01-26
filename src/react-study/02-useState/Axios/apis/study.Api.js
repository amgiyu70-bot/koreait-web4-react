// import할 api 요청 함수 작성
// https://jsonplaceholder.typicode.com
//  root/users로 get 요청

// https://jsonplaceholder.typicode.com/posts?userid=1

import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getUserApi = async () => {
    const response = instance.get("/users");
    return response;
    //return response.data;
}