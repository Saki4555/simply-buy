import axios from "axios"

export const saveUser = async( userData, email) =>{
    const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/user/${email}`, userData);
    return await res.data
}


export const getUserData = async(email) =>{
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/${email}`);
    return await res.data;

}