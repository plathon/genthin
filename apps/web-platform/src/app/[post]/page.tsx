import Image from "next/image";
import { Heart, MessageCircle, Send } from "ui/icons";
import moment from "moment";

export default function PostPage() {
  return (
    <>
      <div className="flex justify-between items-center border-b p-5">
        <p>Genthin</p>
        <button></button>
      </div>

      <div className="flex pt-5 pl-5 pr-5 justify-center items-center">
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

        <div>
          <div className="p-2 flex justify-between">
            <div className="basis-5/6">
              <span>John Smith</span> @johnsmith
              <p className="text-sm">Phasellus nec iaculis mauris.</p>
            </div>
          </div>

          <div className="p-2 flex items-center">
            <div className="basis-[90%]">
              <textarea
                className="border w-full p-1 resize-none"
                rows={2}
              ></textarea>
            </div>
            <div className="basis-[10%]">
              <button className="p-2 mb-2 rounded hover:bg-[#f3f4f6]">
                <Send className="inline mr-2" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
