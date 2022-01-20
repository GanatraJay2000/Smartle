import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
    Typography,  
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Ripples from 'react-ripples';
import routes from '../../util/routes';

const Header = () => {
    const [anchor, setAnchor] = useState<boolean>(false);

    const toggleSidebar = () => setAnchor(!anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:1000px)');

    return (
        <div className="bg-transparent">      
            <Toolbar className="flex items-center">   
                <div className={`${isMobile ? 'flex-grow' : 'mr-5'}`}>
                    <Ripples className="" color="#55555522">
                        <Link to="/" className={`${isMobile ? 'text-xl pt-1 pl-1' : 'bg-[#e5e5e5] text-slate-500 text-2xl px-8 py-2 shadow-none'}`}>
                            &times;&times;&times;&times;
                        </Link>
                    </Ripples>
                </div>
                {isMobile ? (
                    <Sidebar anchor={anchor} toggleSidebar={toggleSidebar} /> 
                ) : (<>
                    <div className="flex flex-grow">    
                        {routes.map((r: any) => {
                            if (!r.show) return;
                            return (
                                <Link to={r.path} className="text-slate-400 hover:text-slate-900 px-4 pt-1 font-bold mx-4">
                                    {r.title}
                                </Link>
                            )
                        })}                                  
                    </div>
                    <div className="">                        
                        <Button variant="contained" className="bg-[#917ebd] rounded-xl font-bold shadow-none drop-shadow-lg px-8 py-2">
                            Contact Us
                        </Button>                        
                    </div>
                </>)
                }                               
            </Toolbar>
        </div>
    );
}
export default Header;
