import { CircularProgress, Input } from "@mui/joy";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClients, postManagerOfClient } from "../../../services/actions/clients";
import { useForm } from "../../../utils/useForm";
import FormManagerOfClient from "../../FormManagerOfClient/FormManagerOfClient";
import ManagerOfClient from "../../_details/ManagerOfClient/ManagerOfClient";

function ClientPage() {

    /*
    {
        central_email: 'zakupka@ecotechpro.ru',
        central_tel: '+7 4822 394496',
        id: 1,
        inn: '695020978',
        managersOfClient: '[{"id":"c8728cae-bb7e-4daa-a003-5e00a0db785a"},{"id":"abf9bd06-0d9a-480e-9f9f-e0f036c52dd9","fio":"Кутузова Инна","email":"inna@teh.ru","tel":"+2233322","comment":"Дура"}]',
        name_of_client: 'ТВЕРСКОЙ ЗАВОД ВТОРИЧНЫХ ПОЛИМЕРОВ',
        note: 'Крупная компания, дочка холдинга',
        owner_company: 'stankotsep',
        owner_user: 'slovar',
        thumb: 'ecotechnologies.png',
        who_is: 'NEW-NO-PAID'
    }
    */

    const dispatch = useDispatch();
    const { id } = useParams();
    const clientList = useSelector(store => store.clients.items);

    /*React.useEffect(() => {
        dispatch(getClients());
    }, [])
*/
    const currentClient = useMemo(()=> clientList.find(i => i.id === Number(id) ), [clientList, id]);
    

    if (currentClient) {

        const {name_of_client, central_email, central_tel, note, inn, managersOfClient, who_is} = currentClient;
        return (
            <div className="content relative">
                <span className="block uppercase text-primary-gray">ID клиента {id}</span>
                <h1 className="text-3xl font-medium text-primary-black">{name_of_client}</h1>
                <h2 className="text-2xl font-medium mt-10 mb-4">Контакты</h2>
                <ul className="text-2xl mb-10">
                    <li><a href={`mailto:${central_email}`}>{central_email}</a></li>
                    <li><a href={`tel:${central_tel.split('(').join('').split(')').join('').split(' ').join('')}`}>{central_tel}</a></li>
                </ul>
                <div className="absolute right-0 top-0">
                    <h3 className="text-2xl font-medium mt-10 mb-4">Пару слов о клиенте</h3>
                    <p>{note}</p>
                </div>
                <h3 className="text-2xl font-medium mt-10 mb-4">Менеджеры на стороне клиента</h3>
                <div className="grid grid-cols-2 max-w-3xl gap-x-8 gap-y-4">
                    {managersOfClient.map(man=> <ManagerOfClient manager={man} size="lg" />)}
                </div>
                <FormManagerOfClient currentClient={currentClient} />
            </div>
    )} else 
    return (
        <>
        </>
    );
}

export default ClientPage;