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

// api 요청할수를 만들고
// userPositList에서 import하여 완성
export const getUserPosts = async (p) => {  

     const response = await instance.get("/posts", {
        // params로 정의하면 쿼리스트링 알아서 조립해줌
        // https://jsonplaceholder.typicode.com/posts?userId=키보드
        params: {
            "userId": p
        }
    });

     return response;

}