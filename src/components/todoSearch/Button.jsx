import React from 'react'

export const Button = (props) => {
  const{Title,Description} = props.userData
  const Submitform = () => {

     props.setUser([
      ...props.user,
      {Title,Description}
     ])


   
  }
     console.log(props.userData);
     console.log(props.user);
     
  return (
    <>
        <button className='w-24 h-11 bg-yellow-600 text-lg m-2 rounded' onClick={Submitform} >Submit</button>
    </>
  )
}
