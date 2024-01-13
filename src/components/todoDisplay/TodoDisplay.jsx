import React from 'react'

export const TodoDisplay = ({user,setUser}) => {
    const deleteItem = (e) => {
        user.splice(e,1)
        setUser([...user])
    }
  return (
    <div className='w-full flex flex-col items-center justify-around  p-6 '>
        {
            user.map((data,index)=>{
                const {Title,Description} = data;
                return(
                    <div key={index} className='sm:w-3/4 w-80 m-5 h-48 p-6 rounded shadow-lg shadow-black bg-white'>
                        <div className='flex justify-between flex-wrap max-w-full '>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                <span className='text-2xl px-2 flex flex-wrap text last:font-medium'>{Title}</span>
                            </div>
                            <div>
                            <button className='w-20 h-9 md:mx-4 align-baseline bg-yellow-600 text-lg rounded' onClick={()=>deleteItem(index)} >Delete</button>
                            </div>
                        </div>
                        <div className='mb-4 align-middle'>
                        <h5 className='text-xl description mt-6 font-normal'>{Description}</h5>
                        </div>
                    </div>
                ) 
            })

        }

    </div>
  )
}
