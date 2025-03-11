import React, { useRef } from "react";
import { CircularProgress, FormHelperText, Input, Option, Select, Textarea } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../services/actions/orders";
import { Search } from "@mui/icons-material";

function FormOrder({clientsList}) {
    const dispatch = useDispatch();

    const isOrderSending = useSelector(store => store.orders.isOrderAdding);

    const [clientIdForOrder, setClientIdForOrder] = React.useState(null);
    const [orderText, setOrderText] = React.useState(null);

    function handleOrderFormSubmit(evt) {
        evt.preventDefault();
        dispatch(postOrder(orderText, clientIdForOrder));
        console.log({
            clientIdForOrder,
            orderText
        });
        //проверить, что добавление прошло удачно, очистить форму, закрыть модалку
    }

    const forSergioRef = useRef();

    return (
        <form className="w-full py-10 px-5" onSubmit={handleOrderFormSubmit}>
            <label>Выберите клиента</label>
            <Select sx={{width: '100%'}} onChange={(evt, val) => setClientIdForOrder(val)} placeholder="Выберите клиента...">
                <Input className="max-w-[calc(100%-20px)] my-4 mx-auto w-full" onChange={()=>{forSergioRef.current.textContent= 'Серега, поиск пока не работает. Вот будет много клиентов, запилю.'}} placeholder="Начните вводить название клиента..." endDecorator={<Search />} />
                <FormHelperText sx={{padding: 1, display: 'block'}} ref={forSergioRef}></FormHelperText>
                { clientsList?.map((client) => 
                    <Option key={client.id} value={client.id}>{client.name_of_client}</Option>
                )}
            </Select>
            <label className="mt-10 block">Введите текст заявки</label>
            <Textarea className="mb-5" onChange={(evt) => setOrderText(evt.target.value)} minRows={5} />
            <button className="text-center flex items-center justify-center gap-2 p-2 border border-primary-black rounded-lg w-full" type="submit">
                {!isOrderSending ? 'Добавить заявку' : <><CircularProgress color="success" size="sm" /><span>Заявка добавляется</span></> }
            </button>
        </form>
    )
}

export default FormOrder;