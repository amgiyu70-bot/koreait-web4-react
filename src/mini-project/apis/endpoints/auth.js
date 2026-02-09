import instance from "../instance";

export const signupAPI = async (dto) => {
    const response = await instance.post("/auth/signup", dto);
    return response.data;
}

export const signinAPI = async (dto) => {
    const response = await instance.post("/auth/signin", dto);
    return response.data;
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