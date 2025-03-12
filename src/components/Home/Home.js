import { Add, Search } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_CLIENT_ADD_FORM_CLOSE, MODAL_CLIENT_ADD_FORM_OPEN } from "../../services/actions/clients";
import { MODAL_ORDER_ADD_FORM_CLOSE, MODAL_ORDER_ADD_FORM_OPEN } from "../../services/actions/orders";
import FormClient from "../FormClient/FormClient";
import FormOrder from "../FormOrder/FormOrder";
import FreqClients from "../FreqClients/FreqClients";
import Modal from "../Modal/Modal";
import Orders from "../Orders/Orders";

function Home() {
    const dispatch = useDispatch();

    const isRequestingOrders = useSelector(store => store.orders.isRequesting);
    const isModalAddOrderOpen = useSelector(store => store.orders.isAddModalOpen);

    const isRequestingClients = useSelector(store => store.clients.isRequesting);
    const isModalAddClientOpen = useSelector(store => store.clients.isAddModalOpen);
    const clientsList = useSelector(store => store.clients.items);

    return (
        <>
            {/* клиенты */}
            <div className="flex items-end gap-5 py-2">
                <h2 className="text-4xl font-medium ">Клиенты</h2>
                <IconButton variant="outlined" size="md" onClick={()=> {dispatch({type: MODAL_CLIENT_ADD_FORM_OPEN})}}>Добавить<Add /></IconButton>
            </div>
            { isRequestingClients && ( <div className="flex items-center gap-5"><CircularProgress color="success" size="sm" /><p className="block text-3xl top-0 left-0 z-40">Загружаем клиентов фирмы ... </p></div>) }
            <FreqClients clientsList={clientsList} />

            {/* заявки */}
            <div className="flex items-end gap-5 py-2">
                <h2 className="text-4xl font-medium ">Заявки</h2>
                <IconButton variant="outlined" size="md" onClick={()=> {dispatch({type: MODAL_ORDER_ADD_FORM_OPEN})}}>Добавить<Add /></IconButton>
            </div>
            { isRequestingOrders && ( <div className="flex items-center gap-5"><CircularProgress color="success" size="sm" /><p className="block text-3xl top-0 left-0 z-40">Загружаем заявки фирмы ... </p></div>) }
            <Orders />

            {/* модалка заявки */}
            {isModalAddOrderOpen && <Modal onEventCloseInModal={()=> {dispatch({type: MODAL_ORDER_ADD_FORM_CLOSE})}}>
                <FormOrder clientsList={clientsList} />
            </Modal>}
            {/* модалка клиента */}
            {isModalAddClientOpen && <Modal onEventCloseInModal={()=> {dispatch({type: MODAL_CLIENT_ADD_FORM_CLOSE})}}>
                <FormClient  />
            </Modal>}
        </>
    )
}

export default Home;