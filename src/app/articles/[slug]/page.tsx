'use client'
import CreateCommentForm from "@/components/forms/createCommentForm"
import { Comment } from "@/model/comment"
import { GetSingle } from "@/services/apiServices"
import { ChatBubbleBottomCenterIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import React from "react"
import useSWR from "swr"


interface Props {

}

export default function ArticlePage() {
    const router = useRouter()

    const params = useParams()

    const slug = params.slug

    const { data : article , error , mutate : articleMutate} = useSWR({url:`article-info/${slug}`} , GetSingle )

    if(error){
        router.push('/articles')
        return <></>
    }
    const is_loading = !article && !error
    return(

        <>
        {
            is_loading
            ? <span>Loading ...</span>
            : (
                <div className="bg-white pt-20">
                    <div className="container mx-auto px-8 w-full">
                        <div className="flex flex-col items-center gap-3">
                            {/* the author - Publication date */}
                            <div className="flex text-sm text-gray-600">
                                تاریخ انتشار :
                                <span className="">{article?.data?.published_at}</span>
                            </div>

                            <div className="flex">
                                <h2 className="text-3xl text-gray-900 font-bold">{article?.data?.title}</h2>
                            </div>

                            <div className="relative bg-green-400 w-full h-[600px]">
                                <Image
                                    src={`${article?.data?.image_url ? article?.data?.image_url : 'https://craftohtml.themezaa.com/images/blog-single-creative-01.jpg'}`}
                                    alt={`${article?.data?.title ? article?.data?.title : 'behrouz@yahoo.com'}`}
                                    className="w-full h-full"
                                    style={{
                                        objectFit:'cover',
                                        width:'100%',
                                        height:'100%'
                                    }}
                                    fill
                                />

                            </div>

                            <div className="flex flex-row-reverse w-full py-20">
                                <div className="flex-1 bg-gray-300 rounded shadow-lg shadow-gray-400">
                                    <div className="flex justify-start p-5">
                                        {article?.data?.content}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col justify-start items-center py-5">
                                        <h4 className="text-lg text-gray-600 font-semibold">{article?.data?.title}</h4>
                                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-t-full w-64 h-1 my-5"></div>
                                        <div className="flex gap-5">
                                            <span className="text-gray-400">
                                                {
                                                    article?.data?.comments.length > 0
                                                    ? article?.data?.comments.length
                                                    : '0'
                                                }
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* write a comment */}
                        <section className="bg-white border-t-2 border-gray-100 py-20">
                            <header className="mb-8">
                                <h3 className="text-2xl text-gray-900 font-semibold">ثبت دیدگاه :</h3>
                            </header>

                            {/* From Rigister Comment */}
                            <CreateCommentForm articleSlug={slug} router={router} articleMutate={articleMutate} />
                        </section>

                        {/* Section Comments */}
                        <section className="bg-white border-t-2 border-gray-100 py-20">
                            <header className="flex justify-start w-full mb-8">
                                <h3 className="text-2xl text-gray-900 font-semibold">پیام ها :</h3>
                            </header>

                            {
                                article?.data?.comments.length > 0
                                ? (
                                    <>
                                        <div className="flex flex-col items-center gap-5">
                                            {
                                                article?.data?.comments?.map((comment : Comment) => (
                                                    <div key={comment?.id} className="flex justify-start items-center rounded bg-white border-2 border-gray-200 w-1/2">
                                                        <div className="rounded-full overflow-hidden">
                                                            <Image
                                                                src={`/img/user2.png`}
                                                                alt="user"
                                                                width={100}
                                                                height={100}
                                                                style={{
                                                                    objectFit:'cover',
                                                                    width:'100%',
                                                                    height:'100%'
                                                                }}
                                                                priority
                                                                // blurDataURL={'/img/user2.png'}
                                                            />
                                                        </div>

                                                        <div className="flex flex-col gap-2">
                                                            <h4 className="text-lg text-gray-700 font-semibold">{comment?.name}</h4>
                                                            <div></div>
                                                            <p>
                                                                {comment?.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                                : <div className="flex justify-center items-center border-2 border-dashed rounded w-full h-[300px]"><p className="text-xl text-red-800 font-semibold">در حال حاضر پیامی وجود ندارد.</p></div>
                            }
                        </section>
                    </div>
            </div>
            )
        }

        </>
    )
}
