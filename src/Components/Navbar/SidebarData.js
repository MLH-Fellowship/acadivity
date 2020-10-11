import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
    {
        title: "Statistics",
        path: '/statistics',
        icon: <GoIcons.GoGraph/>,
        cname: 'nav-text'
    },
    {
        title: "View Projects",
        path: '/ViewProjects',
        icon: <AiIcons.AiOutlineFundView/>,
        cname: 'nav-text'
    },
    {
        title: "New Project",
        path: '/newProject',
        icon: <AiIcons.AiFillFileAdd/>,
        cname: 'nav-text'
    }
]

