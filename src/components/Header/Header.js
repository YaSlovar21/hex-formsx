import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/svg/logo.svg'
import { ROUTES } from "../../utils/constants";
import TextField from '@mui/material/TextField';

function Header() {
    return (
        <header className="py-4 w-full fixed top-0 left-0 bg-primary-lightgray z-30">
            <div className="content flex justify-between w-full">
                <Link className="" to={ROUTES.main}><img src={logo} alt="лого" /></Link> 
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="номер заявки" variant="outlined" />
                </Box>
                <Avatar sx={{ width: 48, height: 48 }} />
            </div>
        </header>
    )
}


export default Header;