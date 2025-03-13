import { Avatar } from "@mui/joy";
import React from "react";

function ManagerOfClient({size , manager, handleChangeMan}) {

    function handleClick() {
        handleChangeMan(manager);
    }

    return (
        <div className="flex gap-2 p-1 " onClick={handleClick}>
            <Avatar size={size || "md"} />
            <ul className="">
                <li className={size === 'sm' ? `text-base font-medium` : `text-xl`}>{manager.fio}</li>
                {size !== "sm" && <li className="text-base">{manager.email} / {manager.tel}</li>}
                <li className="text-xs">{manager.comment}</li>
            </ul>
        </div>
    );
}

export default ManagerOfClient;