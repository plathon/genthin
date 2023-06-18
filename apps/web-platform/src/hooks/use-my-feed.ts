import { useQuery } from "@tanstack/react-query";
import { READ_MY_FEED } from "@/helpers/api";

export function useMyFeed<T>() {
  return useQuery<T>({
    queryKey: ["posts"],
    queryFn: () => fetch(READ_MY_FEED).then(async (res) => res.json()),
  });
}
