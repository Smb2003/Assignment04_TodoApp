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
                    <div key={index} className='flex flex-wrap sm:w-3/4 w-80 m-5 min-h-48 p-6 rounded shadow-lg shadow-black bg-white'>
                      
                        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        <span className='flex flex-wrap text-xl p-2 mt-2 bg-red-200 textinline'>{Title}</span>
                
                        <div className='mb-4 align-middle'>
                        <h5 className='flex flex-wrap description min-h-10 max-w-md'>{Description}</h5>
                        </div>
                        <div>
                        <button className='w-20 h-9  align-baseline bg-yellow-600 text-lg rounded' onClick={()=>deleteItem(index)} >Delete</button>
                        </div>
                    </div>
                ) 
            })

        }

    </div>
  )
}
