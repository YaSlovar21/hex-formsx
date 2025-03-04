import React from "react";
import { statusNames } from "../../../utils/constants";

import bgimg from '../../../images/svg/statusbg.svg';
import cn from './Status.module.css';
import StatusChangeMenu from "../StatusChangeMenu/StatusChangeMenu";


function Status({value}) {
    return (
        <div className="relative">
            <span className={`${cn.status} text-xl`}>
                {statusNames[value ? value : 'IN']}
            </span>
            
        </div>
    )
}

export default Status;