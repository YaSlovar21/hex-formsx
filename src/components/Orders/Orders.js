import React from "react";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import Status from "../_details/Status/Status";

function Orders() {
    const orderList = useSelector(store => store.orders.items);

    return (
        <>
            {orderList.map((item) => 
                    (
                        <div key={`test_${item.id}`}>{JSON.stringify(item)}</div>
                    )
            )}
            <div className="grid grid-cols-3 gap-20">
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
