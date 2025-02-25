import React from "react";
import Order from "../Order/Order";
import Status from "../_details/Status/Status";

function Orders() {
    return (
        <div className="grid grid-cols-3 gap-20">
            <Order />
            <Order />
        </div>
    )
}

export default Orders;   // 
