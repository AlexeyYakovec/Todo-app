import React from 'react'
import { IoIosClose } from 'react-icons/io'

const AddFolder = ({ all, setAll, folder, setFolder, addFolder, setAddFolder }) => {
  const addFolderInAll = (e) => {
    e.preventDefault()
    if (folder.length) {
      setAll([
        ...all,
        {
          id: all.length + 1,
          folder: folder,
          tasks: [],
          change: false,
        },
      ])
      setFolder('')
    }
  }

  return (
    <>
      {addFolder ? (
        <div className='add-folderModal'>
          <form className='add-folderModal-form' onSubmit={addFolderInAll}>
            <input
              required
              value={folder}
              type='text'
              placeholder='folder name'
              onChange={(e) => setFolder(e.target.value)}
            />
            <button className='form-btn' type='submit'>
              Add task
            </button>
          </form>
          <IoIosClose
            className='close-icon'
            size={32}
            onClick={() => {
              setAddFolder(false)
              setFolder('')
            }}
          />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AddFolder
