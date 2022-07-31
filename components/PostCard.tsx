import React from "react";
import { IPost } from "../interface";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white items-center py-5 mb-5">
      <div className="h-36 w-11/12 rounded-lg md:h-96">
        <img
          src={post.node.featuredImage.url}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <h2 className="font-bold text-base md:text-xl p-2 mt-3">
        {post.node.title}
      </h2>
      <div className="flex gap-5 md:gap-16 md:p-4">
        <div className="flex gap-1 items-center">
          <img
            src={post.node.author.photo.url}
            alt=""
            className="w-6 h-6 rounded-full md:w-8 md:h-8 mr-2"
          />
          <p className="text-xs text-gray-500 md:text-sm">
            {post.node.author.name}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs text-gray-500 md:text-sm">
            {moment(post.node.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-700 font-normal px-4 lg:px-20 mb-6 mt-3">
        {post.node.excerpt}
      </p>
      <Link href={`/post/${post.node.slug}`}>
      
      <button className="rounded-3xl bg-pink-600 py-2 px-4 text-sm mb-1 text-white hover:scale-105 transition-all duration-300 hover:bg-pink-800  ">
        Đọc Tiếp
      </button>
      </Link>
    </div>
  );
};

export default PostCard;
