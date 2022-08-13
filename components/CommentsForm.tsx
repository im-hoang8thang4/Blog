import React, { useEffect, useState } from "react";
import { ICommentData } from "../interface";
import { submitComment } from "../services";
import Spinner from "./Spinner";

const CommentsForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({} as ICommentData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const initalFormData = {
      name: window.localStorage.getItem("name") as string,
      email: window.localStorage.getItem("email") as string,
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e: any) => {
    if (e.target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const Submit = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }
   
      setLoading(true);
      submitComment(commentObj).then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = "";
            formData.email = "";
          }
          formData.comment = "";
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
        }
        setLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      });
    
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 pb-10">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Để lại bình luận cho mình nhé
      </h3>
      <div className="grid grid-cols-1 ">
        <textarea
          name="comment"
          placeholder="Nhập bình luận đi ạ..."
          className="outline-none p-2 rounded-lg bg-gray-50 h-36 focus:bg-gray-100"
          onChange={onInputChange}
          value={formData.comment}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-3 gap-3">
        <input
          name="name"
          type="text"
          className="outline-none p-2 rounded-lg bg-gray-50 focus:bg-gray-100"
          placeholder="Tên là gì?"
          onChange={onInputChange}
          value={formData.name}
        />
        <input
          name="email"
          type="text"
          className="outline-none p-2 rounded-lg bg-gray-50 focus:bg-gray-100"
          placeholder="Email là gì?"
          onChange={onInputChange}
          value={formData.email}
        />
      </div>
      <div className="mt-3">
        <input
          type="checkbox"
          id="storeData"
          name="storeData"
          className="cursor-pointer "
          onChange={onInputChange}
          checked = {formData.storeData}
        />
        <label htmlFor="storeData" className="ml-2 cursor-pointer">
          Ghi nhớ tên của bạn để lần sau khi bình luận không phải nhập lại!
        </label>
      </div>
      {error && (<p className="text-red-600">Vui lòng nhập đủ các trường</p>)}
      <div className="flex justify-center mt-6">
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <button className="py-2 px-4 rounded-xl bg-pink-500 text-white hover:bg-pink-700 hover:text-black transition-all duration-150 hover:scale-105" onClick={Submit}>
            Gửi bình luận
          </button>
        )}
      </div>
      {showSuccess && (
        <div className="text-green-500 flex justify-center mt-3">
          Gửi bình luận thành công!
        </div>
      )}
    </div>
  );
};

export default CommentsForm;
