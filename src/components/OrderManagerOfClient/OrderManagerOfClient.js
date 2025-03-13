import { CallOutlined, Close, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import React, { useState } from "react";
import ManagerOfClient from "../_details/ManagerOfClient/ManagerOfClient";

function OrderManagerOfClient({managers, clientId}){

    const [currentMan, setCurrentMan] = useState(null);
    const [isChangeCurrentManager, setIsChangeCurrentManager] = useState(null);
    

    function handleChangeMan(man){
        setCurrentMan(man);
        setIsChangeCurrentManager(false);
        console.log({
            clientId: clientId,
            newManId: man.id,
        })
    }

    return (
        <div className="flex w-full">
                {!isChangeCurrentManager ? 
                <div className="text-left mr-8 w-full">
                    <span className="text-xl block ">
                        {currentMan ? currentMan.fio : 'Алексей Владимирович Гуляшов'}
                    </span>
                    <div className="flex items-center gap-4 mt-2">
                        <IconButton size="sm"><CallOutlined className="w-4 h-4" /></IconButton> 
                        <a className="text-sm text-[#1F1EB1] block" href={`mailto:${`34`}`}>
                            {currentMan ? currentMan.email : 'vtorteh@sid-e.ru'}
                        </a>
                    </div>
                </div> : 
                <div className="w-full basis-full">
                    <ul className="w-full flex flex-col gap-2">
                        {managers.map(i=> <li className="rounded-sm cursor-pointer hover:bg-primary-lightgray"><ManagerOfClient handleChangeMan={handleChangeMan} manager={i} size="sm" /></li>)}
                    </ul>
                </div>
            }
            <form>
                <label className="relative cursor-pointer">
                    <input className="opacity-0 absolute" type="checkbox" onChange={(evt)=>setIsChangeCurrentManager(evt.target.checked)} />
                    {!isChangeCurrentManager ? <Edit color="secondary" /> : <Close />}
                </label>
            </form>
        </div>
    );
}

export default OrderManagerOfClient;