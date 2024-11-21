import { Form, FormikFormProps, FormikProps } from "formik"
import Input from "../shared/form/input"
import { CommentValuesInterface } from "@/contracts/comment"
import React from "react"
import Textarea from "../shared/form/textarea"


const InnerCreateCommentForm = (props:FormikProps<CommentValuesInterface>) => {
    return(
        <>
            <Form>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <Input
                            label="نام "
                            name="name"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Textarea
                            label="متن دیدگاه"
                            name="content"
                        />
                    </div>

                    <div>
                        <button type="submit" className="flex text-sm text-white font-semibold rounded bg-green-600 py-2 px-4 hover:bg-green-700 transition-all ">ثبت دیدگاه</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default InnerCreateCommentForm
