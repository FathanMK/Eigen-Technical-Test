import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export interface IHomeContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  isEndPage: boolean;
  setEndPage: Dispatch<SetStateAction<boolean>>;
  data: InfiniteData<AxiosResponse<any, any>, unknown> | undefined;
  error: Error | null;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<AxiosResponse<any, any>, unknown>,
      Error
    >
  >;
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  status: "error" | "success" | "pending";
}
