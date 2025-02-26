import React from "react";

function FormattedDate({date}) {

    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
  
    return (
        <span>
            {dateObj.getDate()}.{month < 10 ? '0' : ''}{month}.{dateObj.getFullYear()}
        </span>
    )
}

export default FormattedDate;