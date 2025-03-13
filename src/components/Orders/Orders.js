import React from "react";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import Status from "../_details/Status/Status";

function Orders() {
    const orderList = useSelector(store => store.orders.items);

    return (
        <>
            <div className="grid grid-cols-3 gap-14 mt-6 mvpc:gap-5 olpc:grid-cols-2 laptop:grid-cols-1">
                {orderList.map((item) => 
                    (
                        <Order orderData={item} key={item.id} />
                    )
                )}
            </div>
           
        </>
    )
}

export default Orders;   // 
