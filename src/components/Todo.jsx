import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 rounded-md capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 rounded-md capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: ` flex items-center cursor-pointer`
}

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo.text}</p>
      </div>
      <button><FaRegTrashAlt /></button>
    </li>
  )
}

export default Todo
