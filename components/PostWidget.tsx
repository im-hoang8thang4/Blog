import React, { useEffect, useState } from "react";
import { RecentPost } from "../interface";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ slug, categories }: { slug?: string , categories?: string[]}) => {
  const [recentPosts, setRecentPost] = useState([] as RecentPost[]);
  
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories as string[],slug).then((result) => setRecentPost(result));
    } else {
      getRecentPosts().then((result) => setRecentPost(result));
    }
  }, [slug])
  return (
    <div className="flex flex-col bg-white rounded-lg items-center p-2">
     
      <span className="font-semibold p-3 border-b border-gray-300 mb-3">
      {slug ? 'Có thể bạn sẽ thích' : 'Bài viết gần đây'}
      </span>
      <div className="flex flex-col gap-2">
        {recentPosts.map((post) => (
          <Link href={`/post/${post.slug}`}  key={post.slug}>
            <div
             
              className="flex items-center px-12 rounded-lg py-2 gap-4 hover:bg-gray-300 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-10 rounded-2xl">
                <img
                  src={post.featuredImage.url}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500 md:text-sm">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
                <p className="font-medium">{post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
