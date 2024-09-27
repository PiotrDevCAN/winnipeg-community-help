const pageLengthOptions = [
    { label: '5' },
    { label: '10' },
    { label: '20' },
    { label: '50' },
    { label: '100' },
]

const Pagination = () => {
    return (
        <div className="md:flex m-4">
            <p className="text-sm text-gray-500 flex-1">Showing 1 to 5 of 100 entries</p>

            <div className="flex items-center max-md:mt-4">
                <p className="text-sm text-gray-500">Display</p>
                <select className="text-sm text-gray-500 border border-gray-400 rounded h-7 mx-4 px-1 outline-none">
                    {pageLengthOptions.map(
                        (item, index) => (
                            <option key={index}>{item.label}</option>
                        )
                    )};
                </select>

                <ul className="flex space-x-1 ml-2">
                    <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                data-original="#000000" />
                        </svg>
                    </li>
                    <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                        1
                    </li>
                    <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                        2
                    </li>
                    <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                        3
                    </li>
                    <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                        4
                    </li>
                    <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                data-original="#000000" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;