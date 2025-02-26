import { Avatar } from "@mui/material";
import React from "react";
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

function Comment() {
    return (
        <div className="flex py-2">
            <Avatar className="mr-5" {...stringAvatar('Вячеслав Невьянцев')} />
            <div>
                <span className="text-xs"><FormattedDate date="2019-07-31"/></span>
                <p className="text-base">
                    По 44,45 прошли по цене, договор на согласовании, через 1,5 - 2 недели пришлет.
                    По 50,8 они выйдут на торги, нам пришлет приглашение на площадку Ростеха.
                </p>
            </div>
        </div>
    )
}

export default Comment;