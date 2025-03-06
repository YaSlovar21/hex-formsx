import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FormattedDate from "../_details/FormattedDate/FormattedDate";

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

function Comment({text, date}) {
  
    const userName = useSelector(store => store.user.name);  

    return (
        <div className="flex py-2">
            <Avatar className="mr-5" {...stringAvatar(userName)} />
            <div>
                <span className="text-xs"><FormattedDate date={date}/></span>
                <p className="text-base">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Comment;