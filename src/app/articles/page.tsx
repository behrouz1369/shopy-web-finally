'use client'

import ReactCustomPaginate from "@/components/shared/reactCustomPaginate"
import { GET, GETAll } from "@/services/apiServices"
import { useQueryState } from "next-usequerystate"
import Image from "next/image"
import Link from "next/link"
import { notFound, useRouter } from "next/navigation"
import useSWR from "swr"


export default function ArticlesPage() {
    const router = useRouter()

    const [page , setPage] = useQueryState('page')

    const {data:articles , error} = useSWR({url:`all-articles`,page:page ?? '1'},GETAll)

    if(error){
        notFound()
    }

    const is_loading = !articles && !error

    //change page
    const onChangePageHandler = ({selected}:{selected:number}) => {
        router.push(`/articles?page=${selected + 1}`)
    }

    return (
        <>
            {/* <!-- Intro Products --> */}
            <div className="container mx-auto px-8 pb-32">

                <div className="max-w-5xl mx-auto mt-20">
                    {/* <!-- Title --> */}
                        <div className="flex justify-center flex-col items-center mb-10">
                            <h2 className="text-3xl md:text-5xl text-gray-800 font-semibold mb-3"> مقالات</h2>
                            <div className="flex h-1 w-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-full"></div>
                        </div>

                        <div>
                            {
                                is_loading
                                ? <span>Loading ...</span>
                                : (
                                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        {articles?.data?.data?.map((article : any) => (
                                            <li
                                                key={article?.id}
                                                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                                            >
                                                <div className="flex flex-1 flex-col items-start shadow-md shadow-gray-200">

                                                    <div className="w-full flex-shrink-0 rounded-t-md overflow-hidden">
                                                        <Image
                                                            src={'https://static.roocket.ir/images/cover/2023/12/1/DVR05FQ8KOVnKQSlBPBXxsWkx3dqqwhk7a3ibULR.jpg'}
                                                            alt="articleImage"
                                                            width={300}
                                                            height={300}
                                                            style={{
                                                                objectFit:'cover',
                                                                width:'100%',
                                                                height:'auto'
                                                            }}
                                                            priority
                                                        />
                                                    </div>
                                                    <div className="pt-6 pb-3 px-2 text-start space-y-3 w-full">
                                                        <h3 className="text-sm text-gray-900 font-bold">{article?.title}</h3>
                                                        <p className="text-[13px] text-gray-600 font-[500]">
                                                            دسته بندی :
                                                            <span className="text-[14px] text-gray-700">{article?.category_label}</span>
                                                        </p>
                                                        <div className="mt-1 flex flex-grow text-[12px] text-gray-400 w-full">
                                                            تاریخ انتشار : <span className="">{article?.published_at}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center items-center p-2 bg-gray-200 w-full">
                                                        <Link
                                                                href={`/articles/${article?.slug}`}
                                                                className="text-sm font-semibold text-gray-900 hover:text-indigo-700"
                                                            >
                                                                see product
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }

                        </div>

                        {
                            articles?.data?.last_page > 1 && (
                                <>
                                    {/* pagination */}
                                    <div className="flex justify-center pt-10 mt-10 border-t-2 border-gray-200">
                                        <ReactCustomPaginate
                                            page={page}
                                            pageCount={articles?.data?.last_page}
                                            onPageChangeHandler={onChangePageHandler}
                                        />
                                    </div>
                                </>
                            )
                        }
                </div>
            </div>


        </>
    )
}
