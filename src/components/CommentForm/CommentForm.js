import { Send, SendOutlined } from "@mui/icons-material";
import { Avatar, Box, FormControl, IconButton, TextField } from "@mui/material";
import React from "react";

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

function CommentForm() {
    return (
        <div className="flex py-2 w-full">
            <Avatar className="mr-5" {...stringAvatar('Вячеслав Невьянцев')} />
            <Box 
              className="w-full flex items-start"
              component="form"
              noValidate
              autoComplete="off"
            >
              <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  fullWidth
                />
              <IconButton size="large" sx={{color: stringToColor('Вячеслав Невьянцев')}} className="mr-auto"><SendOutlined /> </IconButton>
            </Box>
        </div>
    )
}

export default CommentForm;