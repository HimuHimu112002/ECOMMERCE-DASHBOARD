import axios from "axios";

export async function GetAllProduct(){
    try {
        let res = await fetch("http://localhost:5000/api/v1/GetAllProduct");
        console.log(res)
        let JSONData = await res.json();
        return JSONData.data;
    }catch (e) {
        return []
    }
}

export async function DeleteProduct(id){
    try {
        let res = await fetch("http://localhost:5000/api/v1/productDelete/"+id);
        let JSONData = await res.json();
        return JSONData;
    }catch (e) {
        return false
    }
}

