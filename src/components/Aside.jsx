import React from 'react'

// icons
import { GrChapterAdd } from 'react-icons/gr'
import { GiPlainCircle } from 'react-icons/gi'

import AllTask from './AllTask/AllTask'
import AddFolder from './AddFolder/AddFolder'

const Aside = ({ all, setAll, folder, setFolder, status, setStatus }) => {
  const [addFolder, setAddFolder] = React.useState(false) // открывает окно для добавление элемента в all tasks
  return (
    <div className='sidebar'>
      <AllTask setStatus={setStatus} />
      <ul className='sidebar-tasks'>
        {all.map((item) =>
          item.folder.length ? (
            <li className='sidebar-task' key={item.id} onClick={() => setStatus(item.folder)}>
              <GiPlainCircle color='gold' />
              {item.folder}
            </li>
          ) : (
            ''
          ),
        )}
      </ul>

      <div className='sidebar-btn'>
        <button type='button' className='sidebar-add-folder' onClick={() => setAddFolder(true)}>
          <GrChapterAdd />
          Add a folder
        </button>

        <AddFolder
          all={all}
          setAll={setAll}
          folder={folder}
          setFolder={setFolder}
          addFolder={addFolder}
          setAddFolder={setAddFolder}
        />
      </div>
    </div>
  )
}

export default Aside
