import axios from "axios";

export async function fetchCustomers(){
    try {
        const response = axios.get("http://127.0.0.1:5690/customers");
        return (await response).data;
    } catch (error) {
       console.log(error); 
    }
}

export async function saveCustomer(customerData){
    try {
        const response = axios.post("http://127.0.0.1:5690/customers", customerData);
        return 
    } catch (error) {
       console.log(error); 
    }
}

