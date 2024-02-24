import { ReactNode, createContext, useState } from "react";

import { IHomeContext } from "../interface";
import useNewsQuery from "../hooks/useNewsQuery";

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export default function HomeProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("technology");
  const [isEndPage, setEndPage] = useState(false);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useNewsQuery(search);

  return (
    <HomeContext.Provider
      value={{
        search,
        setSearch,
        isEndPage,
        setEndPage,
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
