import React from 'react';
import SidebarTop from './sidebarTop';
import SidebarMiddle from './sidebarMiddle';
import SidebarBottom from './sidebarBottom';


function Sidebar() {
    return (
        <div className='flex flex-col'>
            <div className='mr-10'>
                <SidebarTop/>  
                <SidebarMiddle/>
                <SidebarBottom/>
            </div>  
        </div>
    )
}

export default Sidebar