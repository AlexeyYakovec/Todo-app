import React, { useState } from 'react'
import { BsClipboardPlus } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'

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
    setOpenForm(false)
  }

  return (
    <>
      {all
        .filter((item) => item.folder === status)
        .map((item) => (
          <div key={item.id} className='folder'>
            <h2 className='folder-title'>{item.folder}</h2>
            <ul className='folder-list'>
              {item.tasks.map((elem) => (
                <li className='folder-list-item' key={elem.id}>
                  <BsCheckCircle color='green' /> {elem.name}
                </li>
              ))}
            </ul>
            <button className='section-btn' onClick={() => setOpenForm(!openForm)}>
              <BsClipboardPlus /> add task
            </button>

            {openForm ? (
              <div className='section-form' style={{ marginTop: '36px' }}>
                <form onSubmit={(event) => addTaskInFolder(event, item.id)}>
                  <input
                    required
                    onChange={(e) => setTask(e.target.value)}
                    className='primary-input'
                    type='text'
                    placeholder='Текст задачи'
                    value={task}
                  />
                  <div className='section-form-btns'>
                    <button className='primary-btn' type='submit'>
                      добавить задачу
                    </button>
                    <button
                      className='secondary-btn'
                      type='button'
                      onClick={() => {
                        setOpenForm(false)
                        setTask('')
                      }}>
                      отмена
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ display: 'none' }}>''</div>
            )}
          </div>
        ))}
    </>
  )
}

export default Folder
