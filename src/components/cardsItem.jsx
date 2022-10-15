import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "../App.css";

export  function Cards() {
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrenUser] = useState({});
  const [data, setData] =  useState([]);

  const service = async () => {
  try {
      const  res =  await axios.get('https://randomuser.me/api/?results=8')
      setData(res.data.results)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log("Toy malito");
    }
  };

  const buttonChange = () => {
    setIsLoading(true);
  };

  const modalUser =(index) =>{
    setStatus(true)
    setCurrenUser(data[index])
  };

  const resetUser = () => {
    setStatus(false)
    setCurrenUser({})
  };

  const changeLike = (index) => {
    data.splice(index, 1)
  };


  useEffect(() => {
    service()
  }, [isLoading])
  


  return (

    <div className='flex flex-col w-full '>
      <div className=' lg:flex hidden justify-between items-center w-full p-10 sticky top-0 z-10 bg-gray-50'>
        <div>
        <p className='text-3xl text-gray-600 font-bold'>Perfiles populares</p>
        <p className=' text-gray-400 '>Aca podras encontras los perfiles mas populares del mundo </p>
        </div>

        <div className='flex'>
          <div className='flex mr-5 bg-gray-50  px-3 py-2 justify-center items-center rounded-full border border-gray-300 cursor-pointer'>
            <i class="fi fi-rr-search flex justify-center items-center text-gray-400 mr-5"></i>
            <input type="text"  className='border-none bg-gray-50 w-80' disabled placeholder='Busca tu perfil destacado'/>

          </div>
        <button onClick={buttonChange} className="bg-blue-500 text-white px-5 py-1 rounded-full transform transition-all hover:scale-105 duration-300 ease-in-out "> 
        
        {isLoading ? <span className='flex'> <i className="fi fi-rr-rotate-right flex justify-center items-center animate-spin mr-5"></i> Recargando perfiles...  </span> : <span>Recargar perfiles</span> }

        

      </button>
        </div>

        
      </div>

      <div className='gridd lg:px-10 lg:pb-10 px-5 pb-5'>
      {data.map((data, index)=>
      <div key={index} className=" bg-white w-full p-5 rounded-lg mb-10 shadow-xl flex flex-col justify-start items-start transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out relative cursor-pointer">

        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
          <div className='h-24 w-24 rounded-full mb-5 lg:mb-0'>
            <img src={data.picture.large} alt="" className='w-full object-cover rounded-full' />
          </div>
            <div className='flex flex-col'>
                <div className='flex gap-3 pr-2'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-gray-600 font-semibold'>100+</p>
                <p className='text-gray-400 text-xs'>Conecciones</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <p className='text-gray-600 font-semibold'>548</p>
              <p className='text-gray-400 text-xs'>Seguidores</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <p className='text-gray-600 font-semibold'>945</p>
              <p className='text-gray-400 text-xs'>Seguiendo</p>
            </div>


                </div>
                <div className='flex gap-1 mx-auto mt-2'>
                  <div className='bg-white p-2 rounded-full shadow-md flex justify-center items-center'>
                    <i class="fi fi-rr-bell flex justify-center items-center text-xs text-blue-500"></i>
                  </div>
                  <button className='flex justify-center items-center px-3 py-1 bg-blue-50 text-blue-500 text-sm rounded-full shadow-md'>Seguir</button>
                  <button className='flex justify-center items-center px-3 py-1 bg-blue-50 text-blue-500 text-sm rounded-full shadow-md'>Mensaje</button>
                </div>
            </div>
        </div>

        

        <div className='px-2 mt-5'>
          <p className='leading-none text-sm text-gray-600'>{data.name.title + '. ' }</p>
          <p className='text-gray-600 font-semibold text-xl one'>{ data.name.first + ' ' + data.name.last}</p>

          <p className='leading-tight text-gray-500 text-sm three mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et quod perspiciatis amet velit necessitatibus sint alias porro dolore unde vel repudiandae, deserunt assumenda mollitia fugit rerum aspernatur illum doloribus!</p>

          <div className='flex gap-3 mt-5'>
              <button onClick={() => modalUser(index)} className='py-2 w-full bg-blue-500 text-white rounded-full' >Ver mas informacion</button>
              <div className='bg-white shadow-lg rounded-full p-3 group ' onClick={() => changeLike(index)}>
              <i class="fi fi-rr-trash cursor-pointer text-blue-500 group-hover:text-red-500 flex justify-center items-center transition-all transform duration-300 ease-in-out"></i>
              </div>
          </div>


        </div>
      </div>
      )}
      </div>


        {status ? 
        <div className='w-screen h-screen bg-blue-500 bg-opacity-90 absolute top-0 right-0 flex justify-end z-20'>
          <div className='bg-white rounded-lg flex justify-center items-center w-full max-w-sm  h-screen shadow-2xl'>
          <button onClick={resetUser} className='p-5 '>
            x
          </button>

          <div className='bg-red-300'>
            <p className='text-white'>{currentUser.email }</p>
            <p className='text-gray-600 font-semibold text-xl one'>{ currentUser.name.first + ' ' + currentUser.name.last}</p>
          </div>


        </div> 
        </div>
        : null }

    </div>
  )

}
