import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useDataTable = (userId: string) => {
  const url = `/api/recents?userId=${userId}`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useDataTable;
