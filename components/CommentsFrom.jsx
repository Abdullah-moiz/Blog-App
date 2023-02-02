import React ,{useState , useRef , useEffect} from 'react'

export default function CommentsFrom() {
  const [error, setError] = useState(false);
  const [localeStore, setLocaleStore] = useState(null);
  const [showSuccessMessage , setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommetSubmission = () => { 
    setError(false);
    

    const {value : comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const { value: email} = emailEl.current;
    const { checked : storeData} = storeData.current;

    if(!comment || !name || !email){
      setError(true);
      return;
      
    }

    const commentObject = {name  , email , comment , slug};

    if(storeData){
      localStorage.setItem('commentData' , JSON.stringify({name , email}));
    }else
    {
      localStorage.removeItem('commentData');
    }

  }

  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '> Comment Form</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea placeholder='comment' name="comment" rel={commentEl} className="py-4 outline-none w-full focus:ring-2  focus:ring-gray-100 bg-gray-100 text-gray-700 "/>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4'>
        <input placeholder='name' name="name" rel={nameEl} className="py-2 px-2 outline-none w-full focus:ring-2  focus:ring-gray-100 bg-gray-100 text-gray-700 "/>
        <input placeholder='email' name="email" rel={nameEl} className="py-2 px-2 outline-none w-full focus:ring-2  focus:ring-gray-100 bg-gray-100 text-gray-700 "/>
      </div>
      <div className='grid  grid-cols-1 gap-4 mb-4'>
        <div >
          <input type="checkbox" ref={storeDataEl} id="storeData"  name="storeData"/>
          <label htmlFor="storeData" className='text-gray-500  ml-2 cursor-pointer'>Save my e-mail and name for the next time</label>
        </div>
      </div>
      {error && <p className='text-red-500 text-xs  mb-4'>Please fill all the fields</p>}
      <div className='mt-8'>
        <button type="button" onClick={handleCommetSubmission} className="transition duration-500 bg-black text-white rounded-xl outline-none border-gray-200 p-3 ease hover:bg-green-500 font-semibold  ">Post Comment
        </button>
        {showSuccessMessage && <span className='text-green-500 text-xl p-2  mb-4'>Comment Posted Successfully</span>}
      </div>
    </div>
    
  )
}
