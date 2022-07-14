import React from 'react'

const All = ({ all }) => {
  return (
    <>
      {all.reduce((acc, rec) => {
        return acc + rec.tasks.length
      }, 0) === 0 ? (
        <h2>No notes</h2>
      ) : (
        <div>
          {all.map((item) => {
            return (
              <div className='folder'>
                <h2 className='folder-title'>{item.folder}</h2>
                <ul className='folder-list'>
                  {item.tasks.map((item) => {
                    return <li className='folder-list-item'>{item}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default All
