import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const FolderList = ({ item }) => {
  return (
    <ul className='folder-list'>
      {item.tasks.map((elem) => (
        <li className='folder-list-item' key={elem.id}>
          <BsCheckCircle color='grey' /> {elem.name}
        </li>
      ))}
    </ul>
  )
}

export default FolderList
