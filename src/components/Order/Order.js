import React from "react";
import FollowingOrder from "../_details/FollowingOrder/FollowingOrder";
import Status from "../_details/Status/Status";

import styles from './Order.module.css';

function Order() {
    return (
        <div className="order border border-primary-black shadow-sm shadow-slate-900 rounded">
            <div className={`${styles.order__header} px-5 py-7 flex gap-5 justify-between overflow-hidden`}>
                <Status />
                <FollowingOrder  />
            </div>
            <div className={`${styles.order__body} px-5 py-7`}>

            </div>
        </div>
    )
}

export default Order;