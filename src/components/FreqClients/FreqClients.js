import { Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function FreqClients({clientsList}) {
    
    return (
        <>
            <div className="grid grid-cols-3 gap-14 mt-6 mb-20">
                {clientsList.map((item) => 
                    (
                        <Paper key={item.id}>
                            <div className="p-8  rounded">
                                <h3 className="text-lg uppercase text-center">{item.name_of_client}</h3>
                            </div>
                        </Paper>
                    )
                )}
            </div>
        </>
    )
}

export default FreqClients;