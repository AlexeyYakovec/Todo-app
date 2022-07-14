import React from 'react'
import All from './All/All'

import Folder from './Folder/Folder'

const Section = ({ all, setAll, folder, setFolder, status }) => {
  return (
    <div className='section'>
      {status === 'all' ? <All all={all} /> : <Folder status={status} all={all} setAll={setAll} />}
    </div>
  )
}

export default Section
