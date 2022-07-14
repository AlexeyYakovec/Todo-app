import React, { useState } from 'react'
import { BsClipboardPlus } from 'react-icons/bs'
import List from './List'
import Form from './Form'
import Title from './Title'

const Folder = ({ status, all, setAll }) => {
  const [openForm, setOpenForm] = useState(false) // для открытия формы
  const [task, setTask] = useState('') // значение input

  const addTaskInFolder = (event, id) => {
    event.preventDefault()
    setAll(
      all.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                name: task,
                done: false,
                id: item.tasks.length + 1,
                change: false,
              },
            ],
          }
        } else {
          return item
        }
      }),
    )
    setTask('')
  }

  return (
    <>
      {all
        .filter((item) => item.folder === status)
        .map((item) => (
          <div key={item.id} className='folder'>
            <Title item={item} />
            <List item={item} />

            <button className='section-btn' onClick={() => setOpenForm(!openForm)}>
              <BsClipboardPlus /> add task
            </button>

            <Form
              openForm={openForm}
              addTaskInFolder={addTaskInFolder}
              item={item}
              setTask={setTask}
              task={task}
              setOpenForm={setOpenForm}
            />
          </div>
        ))}
    </>
  )
}

export default Folder
