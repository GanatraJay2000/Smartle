import React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import routes from '../../util/routes';

interface Props{
    anchor: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({ anchor, toggleSidebar}: Props) => {
    return (<>
        <Drawer
            transitionDuration={450}
            anchor="right"
            open={anchor}
            onClose={toggleSidebar}
        >            
            <div className="w-64 pt-10">
                 {routes.map((r: any, idx:number) => {
                    if (!r.show) return;
                     return (
                        <div className='mb-6' key={idx}>
                            <Link to={r.path} onClick={()=>toggleSidebar()} className="text-slate-400 hover:text-slate-900 px-4 pt-1 font-bold mx-4">
                                {r.title}
                            </Link>
                        </div>
                    )
                })}     
            </div>
        </Drawer>
        <IconButton onClick={() => toggleSidebar() }>
            <MenuIcon />
        </IconButton>     
    </>);
}

export default Sidebar;
