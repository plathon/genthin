import { useQuery } from "@tanstack/react-query";
import { READ_MY_FEED } from "@/helpers/api";

export function useMyFeed() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch(READ_MY_FEED).then(async (res) => res.json()),
  });
}
