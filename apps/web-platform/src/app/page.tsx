"use client";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserButton } from "@clerk/nextjs";
import { Heart, MessageCircle, Send } from "ui/icons";

import { useMyFeed } from "@/hooks/use-my-feed";
import { usePostMutation } from "@/hooks/use-post-mutation";
import { PostType, PostInputSchema, PostInputType } from "schemas";

export default function Page() {
  const { data: postsData } = useMyFeed<PostType[]>();
  const { mutate: mutatePost } = usePostMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostInputType>({
    resolver: zodResolver(PostInputSchema),
  });

  const submitPost: SubmitHandler<PostInputType> = (data) => {
    mutatePost(data);
    reset();
  };

  return (
    <>
      <div className="flex justify-between items-center border-b p-5">
        <p>Genthin</p>
        <UserButton />
      </div>

      <div className="flex pt-5 pl-5 pr-5">
        <div className="basis-1/4 flex justify-center items-center flex-col">
          <div className="rounded-full w-28 h-28 overflow-hidden">
            <Image
              src="https://i.pravatar.cc/112"
              alt="avatar"
              height={112}
              width={112}
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl">John Smith</h2>
            <h5 className="text-sm text-[#334155]">@johnsmith</h5>
          </div>
        </div>
        <div className="ml-5 basis-3/4">
          <form onSubmit={handleSubmit(submitPost)}>
            <div>
              <textarea
                {...register("content")}
                className="border w-full p-1 resize-none"
                rows={4}
              ></textarea>
              {errors.content && (
                <span className="text-xs text-red-500">
                  {errors.content.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="p-2 rounded border border-[#e5e7eb] hover:bg-[#f3f4f6]"
            >
              <Send className="inline mr-2" />
              Post
            </button>
          </form>
        </div>
      </div>
      {postsData &&
        postsData.map((post) => (
          <div key={post.id} className="border rounded-lg p-5 mx-8 my-4">
            <h2 className="text-xl">{post.authorName}</h2>
            <h5 className="text-sm text-[#334155]">@{post.authorSlug}</h5>
            <p className="mt-2 mb-2">{post.content}</p>
            <p className="text-sm">{post.created_at}</p>
            <div className="mt-2">
              <button className="p-2 rounded border border-[#e5e7eb] hover:bg-[#f3f4f6]">
                <Heart /> <span>{post._count.likes}</span>
              </button>
              <button className="p-2 rounded border border-[#e5e7eb] hover:bg-[#f3f4f6] ml-2">
                <MessageCircle /> <span>{post._count.comments}</span>
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
