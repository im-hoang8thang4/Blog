import React from 'react'
import { Author } from '../interface'
import Image from 'next/image';
const AuthorCard = ({author}:{author: Author}) => {
  return (
    <div className=" flex flex-col  items-center text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute -top-14 w-[100px] h-[100px] rounded-full">
      <img  
        alt={author.name}
        className="align-middle rounded-full w-full h-full object-fill"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-lg">{author.bio}</p>
  </div>
  )
}

export default AuthorCard