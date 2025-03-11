import React from "react";
import { CircularProgress, Textarea } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../services/actions/orders";
import { Search } from "@mui/icons-material";
import Input from '@mui/joy/Input';
import { postClient } from "../../services/actions/clients";

function FormClient() {
    const dispatch = useDispatch();

    const isClientAdding = useSelector(store => store.clients.isAddingNew);

    const [ formClientState, setSetClientState ] = React.useState({
        nameOfClient: '',
        email: '',
        tel: '',
        note: ''
    });

    function handleInputChange(evt) {
        const target = evt.target;
        //--- если появятся чекбоксы то --- const value = target.type === 'checkbox' ? target.checked : target.value;
        const value =target.value;
        const name = target.name;
        setSetClientState({
            ...formClientState,
           [name]: value
        });
    }

    function handleClientAddFormSubmit(evt) {
        evt.preventDefault();
        dispatch(postClient(formClientState));
        console.log(formClientState);
        //проверить, что добавление прошло удачно, очистить форму, закрыть модалку
    }

    return (
        <form className="w-full py-10 px-5" onSubmit={handleClientAddFormSubmit}>
            <label className="mt-5 block">Название клиента</label>
            <Input type="text" size="lg" placeholder="название фирмы" name="nameOfClient" onChange={handleInputChange} required />

            <label className="mt-5 block">Email клиента</label>
            <Input type="text" size="lg" placeholder="email" name="email"  onChange={handleInputChange} required />

            <label className="mt-5 block">Телефон клиента</label>
            <Input type="text" size="lg" placeholder="tel" name="tel"  onChange={handleInputChange} required />

            <label className="mt-10 block">Заметка (пару слов о клиенте, кто откуда)</label>
            <Textarea className="mb-5" name="note"  onChange={handleInputChange} minRows={5} />

            <button className="text-center flex items-center justify-center gap-2 p-2 border border-primary-black rounded-lg w-full" type="submit">
                {!isClientAdding ? 'Добавить клиента' : <><CircularProgress color="success" size="sm" /><span>Клиент добавляется...</span></> }
            </button>
        </form>
    )
}

export default FormClient;