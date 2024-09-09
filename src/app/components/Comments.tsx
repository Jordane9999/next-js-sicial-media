import Image from "next/image";

export default function Comments() {
  return (
    <div>
      {/* WRITE */}
      <div className="flex item-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/20447502/pexels-photo-20447502/free-photo-of-femme-cafe-rue-marcher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none"
          />
          <Image
            src={"/emoji.png"}
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src={
              "https://images.pexels.com/photos/20447502/pexels-photo-20447502/free-photo-of-femme-cafe-rue-marcher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          {/* DESCRIPTION */}
          <div className=" flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate exercitationem, beatae atque fugit in corporis id
              voluptas a quibusdam doloribus eos. Architecto, repudiandae
              possimus ratione debitis laborum sit quibusdam unde.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}
