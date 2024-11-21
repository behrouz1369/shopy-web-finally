
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathLink = usePathname()

    const navigations = [
        { name: 'صفحه اصلی', href: '/', current: (pathLink === '/') ? true : false },
        { name: 'مقالات', href: '/articles', current: (pathLink === '/articles') ? true : false },
        { name: 'تماس با ما', href: '/contact' , current: (pathLink === '/contact') ? true : false },
        // { name: 'مدیریت پیام ها', href: '/admin/comments', icon: ChatBubbleBottomCenterIcon, current: (pathLink === '/admin/comments') ? true : false },
        // { name: 'مدیریت تماس ها', href: '/admin/contact', icon: InboxIcon, current: (pathLink === '/admin/contact') ? true : false },
        // { name: 'پروفایل', href: '/admin/profile', icon: ChartBarIcon, current: (pathLink === '/admin/profile') ? true : false },
      ]

    return (
        <>
            {/* <!-- Navigation --> */}
            <div className="bg-white border-b-2 border-gray-200">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-8 py-4">
                    <div className="flex items-center text-gray-700">
                        <svg className="h-8 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
                            <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
                        </svg>
                        <h1 className="text-xl md:text-4xl font-bold fill-current">وبسایت آموزشی راکت</h1>
                    </div>

                    <div id="btn_navMenu" className="md:hidden">
                        <svg className="fill-current h-6 w-6 hover:scale-105 hover:text-pink-500 transition-all" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>منو</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </div>

                    <nav id="content_navMenu" className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
                        {
                            navigations?.map((link) => (
                                    <Link
                                        key={link?.name}
                                        className={`text-lg font-semibold ${link?.current ? 'text-gray-800' : 'text-gray-600'}`}
                                        href={link?.href}
                                    >
                                        {link?.name}
                                    </Link>
                            ))
                        }
                    </nav>
                    {/* <div id="content_navMenu" className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
                        <nav key="1" className="flex flex-col md:flex-row gap-4">
                            {
                                navigations?.map((link) => (
                                    <>
                                        <Link
                                            key={link?.name}
                                            className={`text-lg font-semibold ${link?.current ? 'text-gray-800' : 'text-gray-600'}`}
                                            href={link?.href}
                                        >
                                            {link?.name}
                                        </Link>
                                    </>
                                ))
                            }
                        </nav>
                        //  <div className="pb-6 mt-6 md:pb-0 md:mt-0">
                        //     <a className="text-white px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:underline hover:scale-110 transition-all" href="#"> لینک فعال</a>
                        // </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
