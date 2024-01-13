import { useState } from 'react'
import './App.css'
import {Heading} from './components/Heading'
import {Todo} from './components/todo/Todo'
import { TodoDisplay } from './components/todoDisplay/TodoDisplay';
function App() {
  const [userData,setUserData] = useState({ });
  const [user,setUser] = useState([]);

  console.log(userData);
  return (
    <div className='lg:w-full lg:h-full p-3 bg-slate-300'>
      <Heading/>
      <Todo userData={userData} setUserData={setUserData} user={user} setUser={setUser}/>
      {/* <TodoDisplay user={user}/>x */}
    </div>
  )
}

export default App
