import React from "react";
import { statusNames } from "../../../utils/constants";

import bgimg from '../../../images/svg/statusbg.svg';
import cn from './Status.module.css';
import TransitionsPopper from "../TransitionsPopper/TransitionsPopper";


function Status({status}) {
    return (
        <>
            <span className={`${cn.status} text-xl`}>
                <TransitionsPopper text={statusNames[status ? status : 'IN']}/>
            </span>
            
        </>
    )
}

export default Status;