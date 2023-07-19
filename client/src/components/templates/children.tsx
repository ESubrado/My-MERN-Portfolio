import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    classes: string
}

const ChildrenString = ({ children, classes } : Props) => {
  return (
    <div className={classes}>{children}</div>
  )
}

export default ChildrenString