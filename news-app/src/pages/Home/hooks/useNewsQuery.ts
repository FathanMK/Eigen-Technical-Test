import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axiosInstance";
import moment from "moment";

export default function useNewsQuery(search: string) {
  const date = new Date();
  const today = moment(date).subtract(1, "day").format("YYYY-MM-DD");
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["articles", search],
    queryFn: async ({ pageParam }) => {
      const res = await axiosInstance.get(
        `everything?q=${search}&from=${today}&pageSize=10&page=${pageParam}`
      );
      return res;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.data.articles.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
}
