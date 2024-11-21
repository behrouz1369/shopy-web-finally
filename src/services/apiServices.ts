import ValidateErrors from "@/exceptions/validationErrors";
import { ValidationMessage } from "@/exceptions/validationMessage";
import { notFound } from "next/navigation";


interface Props{
    url:string,
    values?:any,
    page?:string,
    per_page?:string,
}


const BASE_URL = "https://react-camp-api.roocket.ir/api/behrouz.bahremani@yahoo.com/"


export const GET = async({url}:Props) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`, {
            method:'get'
        })

        if(!res.ok){
            throw new Error("this is erro");
        }

        if(res.ok){
            let data = await res.json()

            return data
        }
    } catch (error) {
        throw new Error("is error");
    }
}

export const GETAll = async({url, page='1' , per_page='5'}:Props) => {
    try {
        const res = await fetch(`${BASE_URL}${url}?page=${page}&per_page=${per_page}`, {
            method:'get'
        })

        if(!res.ok){
            throw new Error("this is erro");
        }

        if(res.ok){
            let data = await res.json()

            return data
        }
    } catch (error) {
        throw new Error("is error");
    }
}

export const GetSingle = async({url}:Props) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`, {
            method:'get'
        })

        if(!res.ok){
            if(res.status === 404){
                notFound()
            }else if(res.status === 500){
                throw new ValidationMessage('Error Message');
            }
            throw new Error('Error Message');
        }

        if(res.ok){
            let data = await res.json()

            return data
        }
    } catch (error) {
        throw new Error("is error");
    }
}

export const Post = async({url,values}:Props)=>{
    try {
        const res = await fetch(`${BASE_URL}${url}`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(values)
        })

        // if(!res.ok){
        //     if(res.status === 422){
        //         throw new ValidateErrors(res.errors);

        //     }else if(res.status === 500){
        //         throw new ValidationMessage(res.message);

        //     }
        // }

        if(res.ok){
            let data = await res.json()

            return data
        }
    } catch (error) {
        throw new Error('error to message');
    }
}
