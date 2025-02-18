import { useState } from "react";
import Header from "../components/Header"
import { usePostPage } from "../hooks/usePostPage"
import { PostData } from "../interface/PostData";
import PostCard from "../components/PostCard";
import { useTrendingPage } from "../hooks/useTrendingPage";
import TrendingCard from "../components/TrendingCard";

function Home(){
    interface PostPage{
        page: number,
        size: number
    }
    const [postPage, setPostPage] = useState<PostPage>({page: 0, size: 3});
    const { data: postPageData } = usePostPage(postPage.page, postPage.size);

    const [trendingPage, setTrendingPage] = useState<PostPage>({page: 0, size: 2});
    const { data: trendingPageData } = useTrendingPage(trendingPage.page, trendingPage.size);

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col">
            <Header />

            <div className="flex">
                <aside className="w-[18dvw] h-[92dvh] bg-sky-900 p-[1dvh] flex flex-col items-center gap-[4dvh] border-r-[.1dvw] border-sky-950">
                    <h3 className="font-semibold text-[.8dvw]">EM DESTAQUE</h3>
                    <ol className="flex flex-col gap-[2dvh]">
                        {trendingPageData?.map((trendingPost: PostData) => (
                            <li key={trendingPost.likes}>
                                <TrendingCard data={trendingPost} />
                            </li>
                        ))}
                    </ol>
                </aside>

                <main className="w-[82dvw] bg-sky-900 flex flex-col items-center">

                    <div className="flex flex-col gap-[3dvh] items-center">
                        <section className="bg-sky-950 p-[1dvw] rounded-b-[1dvw]">
                            <h2 className="text-[1dvw]">Criar nova publicação</h2>
                            <form action="" className="flex flex-col gap-[.2dvh]">
                                <div className="flex gap-[.2dvh] w-[40dvw]">
                                    <label className="text-[.8dvw]">
                                        Titulo
                                        <input type="text" name="title" placeholder="Titulo" className="w-[20dvw] h-[3dvh] p-[.1dvw] text-[.8dvw] bg-slate-600 border-[.1dvw] outline-0 border-white" />
                                    </label>

                                    <label className="text-[.8dvw]">
                                        Descrição
                                        <input type="text" name="description" placeholder="Breve descrição" className="w-[20dvw] h-[3dvh] p-[.1dvw] bg-slate-600 border-[.1dvw] outline-0 border-white" />
                                    </label>
                                </div>

                                <label className="flex flex-col text-[.8dvw]">
                                    Corpo da publicação
                                    <textarea name="text" className="w-[40dvw] h-[8dvh] p-[.2dvw] text-[.8dvw] bg-slate-600 border-[.1dvw] outline-0 border-white resize-none" placeholder="Corpo da sua publicação" />
                                </label>
                            </form>
                        </section>

                        <ol className="flex flex-col gap-[3dvh]">
                            {postPageData?.map((post: PostData) => (
                                <li key={post.title}>
                                    <PostCard data={post} />
                                </li>
                            ))}
                        </ol>
                    </div>

                </main>

                <aside className="w-[18dvw] h-[92dvh] bg-sky-900 p-[1dvh] flex flex-col items-center border-l-[.1dvw] border-sky-950">
                    <h3 className="font-semibold text-[.8dvw]"></h3>
                </aside>

            </div>
        </div>
    )
}

export default Home