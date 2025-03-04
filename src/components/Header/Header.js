import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/svg/logo.svg'
import { ROUTES } from "../../utils/constants";
import TextField from '@mui/material/TextField';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/user";
import { LogoutOutlined } from "@mui/icons-material";

function Header() {

    const userName = useSelector(store => store.user.username);
    const dispatch = useDispatch();

    function handleLogoutClick() {
        dispatch(logout());
    }

    return (
        <header className="py-4 w-full fixed top-0 left-0 bg-primary-white border-b border-[#b0b0b0] z-30">
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
                <div className="flex items-center">
                    {userName && <p className="mr-4">{userName}</p>}
                    <Dropdown>
                        {/* хз как отключить в sx hoverstate поэтому  */}
                        <MenuButton variant="soft" sx={{padding: 0, background: 'none', borderRadius: '50%', ':hover': { background: 'none' } }}>
                            <Avatar sx={{ width: 48, height: 48 }} />
                        </MenuButton>
                        <Menu placement="bottom-end">
                            <MenuItem>Личный кабинет</MenuItem>
                            <MenuItem onClick={handleLogoutClick}><LogoutOutlined />Выйти</MenuItem>
                        </Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}


export default Header;