import BASE_URL from "./constants";
import axios from "axios";

export async function  getAll(endpoint) {
  let  result = {
        data : null,
        error : null
    }
   await axios.get(BASE_URL + endpoint).then((res) => {
        result.data = res.data
    }).catch((err) => {
        result.error = err
    })
    return result;
}

export async function delOne(endpoint,id){
    let result={
        data:null,
        error:null,
    };
    await axios.delete(BASE_URL + endpoint+`/${id}`).then((res)=>{
        result.data=res.data
    }).catch((err)=>{
        result.error=err
    })
    return result;
}