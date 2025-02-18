export interface PostData{
    title: string;
    postCategory: "Content" | "Help" | "New" | "Marketing";
    createdAt: number[];
    updatedAt: number[];
    likes: number;
    text: string;
}