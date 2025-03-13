import { CircularProgress, Input } from "@mui/joy";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { postManagerOfClient } from "../../services/actions/clients";
import { useForm } from "../../utils/useForm";

function FormManagerOfClient({currentClient}) {

    React.useEffect( ()=> {
        formRef.current.reset();
    },[currentClient])

    const dispatch = useDispatch();

    const {values: managerFormData, handleInputChange} = useForm({
        fio: '',
        email: '',
        tel: '',
        comment: ''
    })

    function handleAddFormSubmit(evt) {
        evt.preventDefault();
        dispatch(postManagerOfClient(currentClient.id, managerFormData ))
    }

    const formRef = useRef();

    return (
        <form ref={formRef} className="flex flex-col gap-2 max-w-xl my-10" onSubmit={handleAddFormSubmit}>
            <h2 className="text-xl font-medium mt-10 mb-4">Добавить менеджера со стороны {currentClient.name_of_client}</h2>
            <Input type="text" size="sm" placeholder="ФИО" name="fio" onChange={handleInputChange} required />
            <Input type="text" size="sm" placeholder="email" name="email" onChange={handleInputChange} required />
            <Input type="text" size="sm" placeholder="телефон" name="tel" onChange={handleInputChange} required />
            <Input type="text" size="sm" placeholder="кто такой" name="comment" onChange={handleInputChange} required />
            <button className="text-center flex items-center justify-center gap-2 p-2 border border-primary-black rounded-lg max-w-xs" type="submit">
                Добавить {currentClient.isManagerAdding && <CircularProgress size="sm" />} 
            </button>
        </form>
    );
}

export default FormManagerOfClient;