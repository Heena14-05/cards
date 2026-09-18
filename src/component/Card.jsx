import React from 'react'

function Card({image, title, discription}) {
  return (
    <div className="p-[2px]  bg-gradient-to-br from-yellow-500 via-amber-600 to-pink-500 shadow-lg w-full max-w-[280px] mx-auto bd-[length:200%_200%]">
        <div className="bg-black  p-4 flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="w-28 h-28 mb-4 overflow-hidden  flex items-center justify-center">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
             {/* Card Title */}
            <h3 className="text-blue-400 font-medium text-lg mb-2">
              {title}
            </h3>

            {/* Card Description */}
            <p className="text-purple-400 text-sm ">
              {discription}
            </p>
        </div>
    </div>
  )
}

export default Card