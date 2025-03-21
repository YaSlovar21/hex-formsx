import { CircularProgress, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FreqClients() {
    const clientsList = useSelector(store => store.clients.items);
    return (
        <>
            <div className="grid grid-cols-3 gap-14 mt-6 mb-20 mvpc:gap-5 olpc:grid-cols-2 laptop:grid-cols-1">
                {clientsList.map((item) => 
                    (
                        <Link key={item.id} className="cus-paper p-8 block rounded border border-transparent  box-border hover:box-border hover:border hover:border-primary-green" to={`/clients/${item.id}`}  >
                            <h3 className="text-lg uppercase text-center">{item.name_of_client}</h3>
                           
                        </Link>
                    )
                )}
            </div>
        </>
    )
}

export default FreqClients;