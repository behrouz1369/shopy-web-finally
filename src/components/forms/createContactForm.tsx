import { CommentValuesInterface } from "@/contracts/comment"
import { withFormik } from "formik"
import InnerCreateCommentForm from "../comment/innerCreateComment"
import * as yup from 'yup'
import { Post } from "@/services/apiServices"
import { toast } from "react-toastify"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { KeyedMutator } from "swr"
import { ContactValuesInterface } from "@/contracts/contact"
import InnerCreateContactForm from "../contact/innerCreateContact"



const validationSchema = yup.object().shape({
    name:yup.string().required().min(3).max(255),
    email:yup.string().required().email(),
    content:yup.string().required().min(3)
})

interface createContactProps {
    router:AppRouterInstance,
}

const CreateContactForm = withFormik<createContactProps,ContactValuesInterface>({
    mapPropsToValues: (props) => {
        return {
            name:'',
            email:'',
            content:''
        }
    },

    validationSchema:validationSchema,

    handleSubmit:async (values,{props,setFieldError}) => {
        // Create Contact
        let res = await Post({
            url:`contact`,
            values:values
        })

        if(res){
            props?.router.push(`/`)
            toast.success('پیام شما با موفقیت ثبت گردید.')
        }
    }
})(InnerCreateContactForm)

export default CreateContactForm
