import { CircularProgress } from "@mui/joy";
import React from "react";
import { useSelector } from "react-redux";
import FreqClients from "../FreqClients/FreqClients";
import Header from "../Header/Header";
import NeedAttentionOrders from "../NeedAttentionOrders/NeedAttentionOrders";
import Orders from "../Orders/Orders";

function Home() {
    const isRequestingOrders = useSelector(store => store.orders.isRequesting);
    const isRequestingClients = useSelector(store => store.clients.isRequesting);

    return (
        <>
            <h2 className="text-4xl font-medium my-3">Клиенты</h2>
            { isRequestingClients && ( <div className="flex items-center gap-5"><CircularProgress color="success" size="sm" /><p className="block text-3xl top-0 left-0 z-40">Загружаем клиентов фирмы ... </p></div>) }
            <FreqClients />
            <NeedAttentionOrders />
            <h2 className="text-4xl font-medium my-3">Заявки</h2>
            { isRequestingOrders && ( <div className="flex items-center gap-5"><CircularProgress color="success" size="sm" /><p className="block text-3xl top-0 left-0 z-40">Загружаем заявки фирмы ... </p></div>) }
            <Orders />
        </>
    )
}

export default Home;