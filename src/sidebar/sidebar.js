import React from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from '../sidebarChat/sidebarChat'
import './sidebar.css'

const sidebar=()=> {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <   MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <SearchOutlined/>
                <input type="text" placeholder="search any name"/>
            </div>
            <div className="sidebar__chats">
               <SidebarChat />
            </div>
        </div>
    )
}

export default sidebar
