import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2d811067-9a69-4553-9e1d-72dd0da27699",
  },
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
   return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
  },
  unFollow(userId){
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },
  follow(userId){
    return instance.post(`follow/${userId}`).then(response => response.data)
  },
};

export const profileAPI = {
  getUserProfile(userId){
    return instance.get(`profile/${userId}`).then(response => response.data)
  }
};

export const authAPI = {
  getAuthUserData(){
    return instance.get(`auth/me`).then(response => response.data)
  }
};
