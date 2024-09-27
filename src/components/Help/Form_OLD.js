import React from 'react';

const Form = () => {
    return (
        <form className="font-[sans-serif] m-6 max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative flex items-center">
                    <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">First
                        Name</label>
                    <input type="text" placeholder="Enter first name"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path
                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div className="relative flex items-center">
                    <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Last
                        Name</label>
                    <input type="text" placeholder="Enter last name"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path
                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div className="relative flex items-center sm:col-span-2">
                    <label
                        className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">What you can do</label>
                    <textarea placeholder='Type Message'
                        className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded" rows="4"></textarea>
                </div>
            </div>

            <button type="button"
                className="mt-8 px-6 py-2.5 w-full text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">Submit</button>
        </form>
    )
}

export default Form;