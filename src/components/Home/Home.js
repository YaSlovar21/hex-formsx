import React from "react";
import FreqClients from "../FreqClients/FreqClients";
import Header from "../Header/Header";
import NeedAttentionOrders from "../NeedAttentionOrders/NeedAttentionOrders";
import Orders from "../Orders/Orders";

function Home() {
    return (
        <>
            <Header />
            <FreqClients />
            <NeedAttentionOrders />
            <Orders />
        </>
    )
}

export default Home;