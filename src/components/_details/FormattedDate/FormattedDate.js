import React from "react";

function FormattedDate({date}) {

    const dateObj = new Date(date);
    const dateN = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
  
    return (
        <span>
            {dateN < 10 ? '0' : ''}{dateN}.{month < 10 ? '0' : ''}{month}.{dateObj.getFullYear()}
        </span>
    )
}

export default FormattedDate;