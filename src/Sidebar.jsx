import React from 'react'
import './sidebar.css';
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
    const dispatch = useDispatch();
    
    
  return (
      <div className='sidebar'>
          <div className="sidebar-body">
          <Button onClick={()=>dispatch(openSendMessage())} >
              <CreateIcon style={{padding:"5px"}}/>
                  Compose 
                  
          </Button >
          <SidebarOption Icon={AllInboxIcon } title="Inbox" number="54" selected={true} />
          <SidebarOption Icon={StarBorderIcon} title="Starred" number="1,036" />
          <SidebarOption Icon={SendIcon} title="Sent" number="" />
          <SidebarOption Icon={LabelImportantIcon} title="Important" number="259" />
          <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="305" />
          <SidebarOption Icon={InsertDriveFileIcon} title="Draft" number="169" />
          <SidebarOption Icon={ExpandMoreIcon} title="More" number="180" />

          <div className="sidebar-footer">
              <div className="sidebar-footer-title">
                  <h4>Labels</h4><IconButton>
                  <span><AddIcon/></span>
                  </IconButton>
              </div>
              <div className="sidebar-footer-events">
                  <IconButton>
                  <span><LabelImportantIcon/></span>
               
                  </IconButton>
                  <h2>Unwanted</h2>
                  
              </div>
              </div>
              </div>
    </div>
  )
}

export default Sidebar