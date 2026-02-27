import axios from "axios";
import instance from "./instance";

export const signupAPI = async (dto) => {
    const response = await instance.post("/user/register", dto);
    return response.data;
}



export const loginAPI = async (dto) => {
    
    console.log(dto);
    const response = await instance.post("/user/login", dto); 
    //const response = await axios.post("http://gnbiz8888.liodesign.kr/react/user/login.php", dto);     
    console.log(response?.data);
    return response.data;
    /*
    const response = await axios.post("http://tour.amiweb.kr/react/user/login.php", dto, {
      headers: { 'Content-Type': 'application/json' }
    });
     */    
   // const response = await instance.post("http://tour.amiweb.kr/react/user/login.php", dto);
      /*
   const url = "http://tour.amiweb.kr/react/user/login";
   const response = await axios.post(url, dto, {
      headers: { 'Content-Type': 'application/json' }
    });
   /*

   const response = await fetch('http://kojap.liodesign.kr/test/test.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // 필수
    },
    body: JSON.stringify({
        key: "value",
        name: "test"
    }),
    }) 
   

    */
}


export const refreshTokenAPI = async (dto) => {
    const response = await instance.post(
        "/auth/refresh", 
        {}, 
        {
            withCredentials: true
        }
    );
    return response.data; // 새 accessToken
}