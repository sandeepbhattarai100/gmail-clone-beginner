import React from 'react'
import './SidebarOption.css';

function SidebarOption({Icon, title, number, selected}) {
  return (
      <div className={`SidebarOption ${selected && "SidebarOption--active"}`}>
          <Icon />
          <h4>{title}</h4>
          <p>{number}</p>
    </div>
  )
}

export default SidebarOption