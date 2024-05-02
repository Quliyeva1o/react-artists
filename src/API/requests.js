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



export async function getOne(endpoint, id) {
    let obj = {
      data: null,
      error: null,
    };
    await axios
      .get(BASE_URL + endpoint + `?id=${id}`)
      .then((result) => {
        obj.data = result.data;
      })
      .catch((err) => {
        obj.error = err;
      });
  
    return obj;
  }
  
  //post
  export async function post(endpoint, payload) {
    const response = await axios.post(BASE_URL + endpoint, payload);
    return response;
  }

  
  //put
  export async function update(endpoint, id, payload) {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response;
  }
  
//patch
  export async function addSong(endpoint, id, payload) {
    const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
    return response;
  }
  