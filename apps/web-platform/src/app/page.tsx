// import { Button, Header } from "ui";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Heart, MessageCircle, Send } from "ui/icons";
import moment from "moment";

export default function Page() {
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
          <form>
            <div>
              <textarea
                className="border w-full p-1 resize-none"
                rows={4}
              ></textarea>
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

      <div className="border rounded-lg p-5 mx-8 my-4">
        <h2 className="text-xl">John</h2>
        <h5 className="text-sm text-[#334155]">@john</h5>
        <p className="mt-2 mb-2">the content.</p>
        <p className="text-sm">{moment().format("MMMM D YYYY, h:mm:ss")}</p>
        <div className="mt-2">
          <button className="p-2 rounded border border-[#e5e7eb] hover:bg-[#f3f4f6]">
            <Heart /> <span>10</span>
          </button>
          <button className="p-2 rounded border border-[#e5e7eb] hover:bg-[#f3f4f6] ml-2">
            <MessageCircle /> <span>10</span>
          </button>
        </div>
      </div>
    </>
  );
}
