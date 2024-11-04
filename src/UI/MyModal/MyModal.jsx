import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  
  const rootclasses = [classes.MyModal]

  if(visible){
    rootclasses.push(classes.active)
  }

  return (
    <div className={rootclasses.join(" ")} onClick={() => setVisible(false)}>
       <div onClick={(e) => e.stopPropagation()}>
        {children}
       </div>
    </div>
  )
}

export default MyModal