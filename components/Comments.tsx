import React, { useEffect, useState } from 'react'
import { IComment } from '../interface'
import { getComments } from '../services'
import moment from 'moment';
const Comments = ({slug}: {slug: string}) => {
  const [comments, setComments] = useState([] as IComment[])
  useEffect(()=>{
    getComments(slug).then((res)=>setComments(res))
  },[slug])
  console.log(comments)
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 pb-10 mt-5">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">
     {comments.length} Bình luận
    </h3>
    <div className='flex flex-col gap-2'>
        {comments.map((comment) =>(
          <div className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <span className='font-bold text-lg'>{comment.name}</span>
                <span className='italic text-gray-500 text-sm'> {moment(comment.createdAt).format('MMM DD, YYYY')}</span>
              </div>
              <span>
                {comment.comment}
              </span>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Comments