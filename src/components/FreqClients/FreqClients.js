import React from "react";
import { useSelector } from "react-redux";

function FreqClients() {
    const clientsList = useSelector(store => store.clients.items);

    return (
        <>
            <div className="grid grid-cols-3 gap-20 mt-10 mb-20">
                {clientsList.map((item) => 
                    (
                        <div className="p-8 bg-primary-green text-white rounded"  key={item.id}>
                            <h3 className="text-lg uppercase text-center">{item.name_of_client}</h3>
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default FreqClients;