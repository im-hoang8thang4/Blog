import React from "react";

const CommentsForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 pb-10">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Để lại bình luận đi
      </h3>
      <div className="grid grid-cols-1 ">
      <textarea placeholder="Nhập bình luận đi ạ..." className="outline-none p-2 rounded-lg bg-gray-50 h-36 focus:bg-gray-100"/>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-3 gap-3">
        <input type="text" className="outline-none p-2 rounded-lg bg-gray-50 focus:bg-gray-100" placeholder="Tên là gì?"/>
        <input type="text" className="outline-none p-2 rounded-lg bg-gray-50 focus:bg-gray-100" placeholder="Email là gì?"/>
      </div>
      <div className="mt-3">
        <input type="checkbox" id="storeData" name="storeData" className="cursor-pointer "/>
        <label htmlFor="storeData" className="ml-2 cursor-pointer">Ghi nhớ tên của bạn để lần sau khi bình luận không phải nhập lại!</label>
      </div>
      <div className="flex justify-center mt-3">
        <button className="py-2 px-4 rounded-xl bg-pink-500">Gửi bình luận cho bé Hoàng</button>
      </div>
    </div>
  );
};

export default CommentsForm;