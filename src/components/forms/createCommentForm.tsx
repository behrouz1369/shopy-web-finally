import { CommentValuesInterface } from "@/contracts/comment"
import { withFormik } from "formik"
import InnerCreateCommentForm from "../comment/innerCreateComment"
import * as yup from 'yup'
import { Post } from "@/services/apiServices"
import { toast } from "react-toastify"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { KeyedMutator } from "swr"



const validationSchema = yup.object().shape({
    name:yup.string().required().min(3).max(255),
    content:yup.string().required().min(3)
})

interface createCommentProps {
    articleSlug:string,
    router:AppRouterInstance,
    articleMutate?:KeyedMutator<any>
}

const CreateCommentForm = withFormik<createCommentProps,CommentValuesInterface>({
    mapPropsToValues: (props) => {
        return {
            name:'',
            content:''
        }
    },

    validationSchema:validationSchema,

    handleSubmit:async (values,{props,setFieldError}) => {
        // Create Comment
        let res = await Post({
            url:`article/${props?.articleSlug}/comment`,
            values:values
        })

        if(props?.articleMutate){
            props?.articleMutate()
        }

        if(res){
            props?.router.push(`/articles/${props?.articleSlug}`)
            toast.success('در صورت تایید مدیر سایت دیدگاه شما انتشار داده می شود.')
        }
    }
})(InnerCreateCommentForm)

export default CreateCommentForm
