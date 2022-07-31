import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Category } from '../interface'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] =useState([] as Category[])
  useEffect(()=>{
    getCategories().then((result)=>setCategories(result))
  },[])
  return (
    <div className="flex flex-col bg-white rounded-lg items-center p-4 mt-6">
    <span className="font-semibold p-3 border-b border-gray-200 mb-3 px-12">
      Thể loại
    </span>
    <div className="flex flex-col gap-2 w-3/5">
      {categories.map((category)=>(
        <Link href={`/category/${category.slug}`} key={category.slug}>
        <div className='p-2 border-b border-gray-300 flex justify-center items-center w-full hover:font-semibold cursor-pointer transition-all duration-300 hover:scale-105'>
          {category.name}
        </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Categories