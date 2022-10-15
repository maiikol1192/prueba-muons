import React from 'react'

export function Sidebar() {
  return (
    <div className='w-max hidden flex-col p-10 items-center justify-between border-r border-gray-200 lg:flex'>

    <div className='flex justify-center items-center'>
        <i class="fi fi-brands-whatsapp flex justify-center items-center text-3xl text-blue-500"></i>
    </div>
    <div className='flex flex-col justify gap-12 '>
    <a href="https://github.com/maiikol1192" target="_blank" rel="noopener noreferrer">
    <i class="fi fi-rr-home  flex justify-center items-center text-3xl text-gray-300 cursor-pointer hover:text-blue-500 transition-all transform duration-300 ease-in-out"></i>
    </a>
    <a href="https://github.com/maiikol1192" target="_blank" rel="noopener noreferrer">
    <i class="fi fi-rr-users  flex justify-center items-center text-3xl text-blue-500 cursor-pointer hover:text-blue-500 transition-all transform duration-300 ease-in-out"></i>
    </a>
    <a href="https://github.com/maiikol1192" target="_blank" rel="noopener noreferrer">
    <i class="fi fi-rr-shop  flex justify-center items-center text-3xl text-gray-300 cursor-pointer hover:text-blue-500 transition-all transform duration-300 ease-in-out"></i>
    </a>
    <a href="https://github.com/maiikol1192" target="_blank" rel="noopener noreferrer">
        <i class="fi fi fi-brands-github  flex justify-center items-center text-3xl text-gray-300 cursor-pointer hover:text-blue-500 transition-all transform duration-300 ease-in-out"></i>
    </a>
    
    </div>



    <a href="https://github.com/maiikol1192" target="_blank" rel="noopener noreferrer">
    <i class="fi fi-rr-exit lex justify-center items-center text-3xl text-red-300 cursor-pointer hover:text-red-400 transition-all transform duration-300 ease-in-out"></i>
    </a>



    </div>
  )
}
