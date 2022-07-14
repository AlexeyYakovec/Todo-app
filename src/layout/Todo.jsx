import React from 'react'
import Aside from '../components/Aside'
import Section from '../components/Section'

const Todo = () => {
  const [all, setAll] = React.useState([]) // массив элементов в All tasks
  const [folder, setFolder] = React.useState('') // значение input
  const [status, setStatus] = React.useState('all') // при нажатии на задачу All tasks меняет состояние на его title

  return (
    <div className='Todo'>
      <Aside all={all} setAll={setAll} folder={folder} setFolder={setFolder} status={status} setStatus={setStatus} />
      <Section status={status} all={all} setAll={setAll} folder={folder} setFolder={setFolder} />
    </div>
  )
}

export default Todo
