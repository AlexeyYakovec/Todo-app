import React from 'react'

const Form = ({ openForm, addTaskInFolder, item, setTask, task, setOpenForm }) => {
  return (
    <>
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
    </>
  )
}

export default Form
