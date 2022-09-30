const RowButton = () => {
    return (
        <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                    <img src="/images/facebook.png" alt="" className="w-9"/>
                    <span className="font-thin">Facebook</span>
                </button>

                <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                    <img src="/images/google.png" alt="" className="w-9"/>
                    <span className="font-thin">Google</span>
                </button>
            </div>
    )
}

export default RowButton