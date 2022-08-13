import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcList } from "react-icons/fc";
import { Category } from "../interface";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] =useState([] as Category[])
  useEffect(()=>{
    getCategories().then((result)=>setCategories(result))
  },[])
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between py-8 border-blue-400">
        <div className="md:float-left block">
          <Link href="/">
            <span className="font-bold text-4xl text-white cursor-pointer">
              Hoàng nè!
            </span>
          </Link>
        </div>
        <button className="md:hidden" >
          <FcList fontSize={28} className='text-blue-200'/>
        </button>
        <div className="hidden md:flex md:items-center md:gap-5">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="cursor-pointer font-semibold text-white hover:scale-105 transition-all duration-300">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
