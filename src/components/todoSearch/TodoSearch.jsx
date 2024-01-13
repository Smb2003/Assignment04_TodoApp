import React from 'react'
import { InputFields } from './InputFields'
import { Button } from './Button'

export const TodoSearch = (props) => {
  return (
    <div className='h-full w-full p-4 bg-slate-400 m-3'>
        <InputFields
        type="text"
        id="Title"
        placeholder="Enter Title"
        userData={props.userData} 
        setUserData={props.setUserData}
        user={props.user}
        />
        <InputFields
        id="Description"
        placeholder="Enter Description"
        userData={props.userData}
        setUserData={props.setUserData}
        user={props.user}
        />
        <Button userData={props.userData} 
        setUserData={props.setUserData} user={props.user} setUser={props.setUser}/> 
    </div>
  )
}
