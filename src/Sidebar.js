import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* Button -> Tweet */}
    </div>
  )
}

export default Sidebar