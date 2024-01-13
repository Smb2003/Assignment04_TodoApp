import React from 'react'
import { TodoSearch } from '../todoSearch/TodoSearch'
import { TodoDisplay } from '../todoDisplay/TodoDisplay'

export const Todo = ({userData, setUserData,user,setUser}) => {
  return (
    <div className='w-full mt-4 flex flex-wrap align-middle justify-center '>
        <TodoSearch userData={userData} setUserData={setUserData} user={user} setUser={setUser}/>
        <TodoDisplay user={user} setUser={setUser}  setUserData={setUserData} />
    </div>
  )
}
