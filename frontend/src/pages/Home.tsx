import { useState } from "react";
import Header from "../components/Header"
import { usePostPage } from "../hooks/usePostPage"
import { PostData } from "../interface/PostData";
import PostCard from "../components/PostCard";
import { useTrendingPage } from "../hooks/useTrendingPage";
import TrendingCard from "../components/TrendingCard";
import CreatePostHomepage from "../components/CreatePostHomepage";

function Home(){
    interface PostPage{
        page: number,
        size: number
    }
    const [postPage, setPostPage] = useState<PostPage>({page: 0, size: 3});
    const { data: postPageData } = usePostPage(postPage.page, postPage.size);

    const [trendingPage, setTrendingPage] = useState<PostPage>({page: 0, size: 2});
    const { data: trendingPageData } = useTrendingPage(trendingPage.page, trendingPage.size);

    const [createPostVisible, setCreatePostVisible] = useState<boolean>(false);

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col">
            <Header />

            <div className="flex">
                <aside className="w-[18dvw] h-[92dvh] bg-yellow-50 p-[1dvh] flex flex-col items-center gap-[4dvh] border-r-[.1dvw]">
                    <h3 className="font-semibold text-[.8dvw]">EM DESTAQUE</h3>
                    <ol className="flex flex-col gap-[2dvh]">
                        {trendingPageData?.map((trendingPost: PostData) => (
                            <li key={trendingPost.likes}>
                                <TrendingCard data={trendingPost} />
                            </li>
                        ))}
                    </ol>
                </aside>

                <main className="w-[82dvw] bg-yellow-50 flex flex-col items-center">

                    <div className="flex flex-col gap-[3dvh] items-center">
                        <CreatePostHomepage visibility={createPostVisible} setVisibility={setCreatePostVisible} />

                        <ol className="flex flex-col gap-[3dvh]">
                            {postPageData?.map((post: PostData) => (
                                <li key={post.title}>
                                    <PostCard data={post} />
                                </li>
                            ))}
                        </ol>
                    </div>

                </main>

                <aside className="w-[18dvw] h-[92dvh] bg-yellow-50 p-[1dvh] flex flex-col items-center border-l-[.1dvw]">
                    <h3 className="font-semibold text-[.8dvw]"></h3>
                </aside>

            </div>
        </div>
    )
}

export default Home