import { useMutation } from "@tanstack/react-query";
import { PostInputType } from "schemas";

import { CREATE_POST } from "@/helpers/api";

export function usePostMutation() {
  return useMutation({
    mutationFn: async (post: PostInputType) => {
      return fetch(CREATE_POST, {
        method: "POST",
        body: JSON.stringify(post),
      }).then(async (res) => res.json());
    },
  });
}
