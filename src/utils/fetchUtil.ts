import axios from "axios";

export async function fetchData(){
    try{
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-12-19&to=2024-12-19&sortBy=popularity&apiKey=cf26870deaad4a03a85113e51e3b5c1a')
        return response
    }catch(error){
        console.log(`Terjadi kesalahan dalam mengambil data: ${error}`)
        return []
    }
}