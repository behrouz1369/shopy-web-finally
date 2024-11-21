import { Form, FormikFormProps, FormikProps } from "formik"
import Input from "../shared/form/input"

import React from "react"
import Textarea from "../shared/form/textarea"
import { ContactValuesInterface } from "@/contracts/contact"


const InnerCreateContactForm = (props:FormikProps<ContactValuesInterface>) => {
    return(
        <>
            <Form className="w-1/2">
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-2">
                            <Input
                                label="نام "
                                name="name"
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                            <Input
                                label="ایمیل "
                                name="email"
                                type="email"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Textarea
                            label="پیام"
                            name="content"
                        />
                    </div>

                    <div>
                        <button type="submit" className="flex text-sm text-white font-semibold rounded bg-green-600 py-2 px-4 hover:bg-green-700 transition-all ">ثبت پیام</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default InnerCreateContactForm
