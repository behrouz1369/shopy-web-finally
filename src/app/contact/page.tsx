'use client'

import CreateContactForm from "@/components/forms/createContactForm"
import { useRouter } from "next/navigation"

interface Props{

}

export default function ContactPage() {
    const router = useRouter()
    return(
        <>
            <div className="container mx-auto py-20">
                <div className="flex flex-col gap-5">
                    <header className="flex justify-center w-full pb-20">
                        <h2 className="text-3xl">تماس با ما</h2>
                    </header>

                    <div className="flex justify-center w-full">
                        {/* Form Contact */}
                        <CreateContactForm router={router} />
                    </div>
                </div>
            </div>
        </>
    )
}
