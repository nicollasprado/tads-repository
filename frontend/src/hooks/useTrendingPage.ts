import axios, { AxiosPromise } from "axios";
import { PostData } from "../interface/PostData";
import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async ( page: number, size: number): AxiosPromise<PostData[]> => {
    const response = await axios.get(API_URL + `/post/page?page=${page}&size=${size}&sort=createdAt,desc`);
    return response;
}

export function useTrendingPage( page: number, size: number ){
    const query = useQuery({
        queryFn: () => fetchData(page, size),
        queryKey: ["trending-page"],
        retry: 2
    })

    return {
        ...query,
        data: query?.data?.data
    }
}