import React, { useState, useRef, useEffect } from 'react'
import { submitComment } from '@/services'

export default function CommentsFrom({slug}) {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });


  const handleCommetSubmission = (e) => {

    const { name, email, comment } = formData;
    e.preventDefault();
    setError(false);

    if (!comment || !name || !email) {
      setError(true);
      return;

    }

    const commentObject = { name, email, comment , slug};
    submitComment(commentObject).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      alert(res.msg)
    })

  }

  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '> Comment Form</h3>
      <form onSubmit={handleCommetSubmission} method="POST" encType="application/json">
        <div className='grid grid-cols-1 gap-4 mb-4 '>
          <textarea placeholder='comment' name="comment" onChange={(e) => setFormData({ ...formData, comment: e.target.value })} className="py-4 px-4 outline-none rounded-lg w-full focus:ring-2  focus:ring-gray-100 bg-gray-100 text-gray-700 " />
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4'>
          <input placeholder='name' name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="py-2 px-2 outline-none w-full focus:ring-2  rounded-lg focus:ring-gray-100 bg-gray-100 text-gray-700 " />
          <input placeholder='email' name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="py-2 px-2 outline-none w-full focus:ring-2  rounded-lg focus:ring-gray-100 bg-gray-100 text-gray-700 " />
        </div>
        {error && <p className='text-red-500 text-xs  mb-4'>Please fill all the fields</p>}
        <div className='mt-8'>
          <button type="submit" className="transition duration-500 bg-black text-white rounded-xl outline-none border-gray-200 p-3 ease hover:bg-green-500 font-semibold  ">Post Comment
          </button>
          {showSuccessMessage && <span className='text-green-500 text-xl p-2  mb-4'>Comment Posted Successfully</span>}
        </div>
      </form>
    </div>

  )
}
