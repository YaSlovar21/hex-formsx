
import NoteAddOutlined from "@mui/icons-material/NoteAddOutlined";
import AddCommentOutlined from "@mui/icons-material/AddCommentOutlined";
import Phone from "@mui/icons-material/Phone";
import { Divider, Paper } from "@mui/material";
import React, { useMemo, useState } from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import OrderFilesList from "../OrderFilesList/OrderFilesList";
import FollowingOrder from "../_details/FollowingOrder/FollowingOrder";
import Status from "../_details/Status/Status";

import styles from './Order.module.css';
import StatusChangeMenu from "../_details/StatusChangeMenu/StatusChangeMenu";
import FormattedDate from "../_details/FormattedDate/FormattedDate";
import FileUploadForm from "../FileUploadForm/FileUploadForm";
import { IconButton } from "@mui/joy";
import { AttachFile, Call, CallOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderManagerOfClient from "../OrderManagerOfClient/OrderManagerOfClient";

function Order({orderData}) {

    const [isFormLoadVisible, setIsFormLoadVisible] = useState(false);

    function handleFormLoadChangeView() {
        setIsFormLoadVisible(!isFormLoadVisible);
    }

    function handleFilesLoaded() {
        setIsFormLoadVisible(false);
    }

    const clientsList = useSelector(store => store.clients.items);
    const clientOwner = useMemo(()=> clientsList.find(c => c.id === orderData.client_id) , [clientsList])
    console.log(clientsList);
    return (
      <div className="order text-left">
        <Paper>
            <div className={`${styles.order__header} px-5 py-7 flex gap-5 justify-between items-start overflow-hidden`}>
                <StatusChangeMenu initialStatus={orderData.status}/>
                <p className="text-xs">от <Link to={`/clients/${clientOwner?.id}`}>{clientOwner?.name_of_client}</Link></p>
                <div className="flex items-center">
                    <p className="text-base">#{orderData.id}</p>
                    <FollowingOrder />
                    <FormattedDate date={orderData.date_add} />
                </div>
            </div>
            <Divider />
            <div className={`${styles.order__managerofclient} px-5 py-7 flex items-center`}>
                {clientOwner && <OrderManagerOfClient managers={clientOwner.managersOfClient} clientId={clientOwner.id} />}
            </div>
            <div className={`${styles.order__body} px-5 py-7 flex`}>
                <p className="text-lg">
                    {orderData?.content_text}
                </p>
                
            </div>
            <div className={`${styles.order__files} px-5 py-7`}>
                <h3 className="text-lg mr-5 font-medium">Файлы</h3>
                
                <div className="flex items-start gap-5 pt-2 mt-4 border-t border-primary-lightgray">
                    <IconButton variant={isFormLoadVisible ? `solid` :`outlined`} onClick={handleFormLoadChangeView} className="rounded-full" size="md"><AttachFile /></IconButton>
                    {orderData.files.length >0 && <OrderFilesList files={orderData.files} orderId={orderData.id} /> }
                </div>
            
                { isFormLoadVisible && <FileUploadForm orderId={orderData.id} handleFilesLoaded={handleFilesLoaded} />}
            </div>
            <div className={`${styles.order__comments} px-5 py-7`}>
                <h3 className="text-lg mr-5 font-medium">Комментарии</h3>
                <CommentForm className="py-6" orderId={orderData.id} />
                {orderData.comments.map((comment) => (
                    <Comment key={comment.id}  text={comment.commentText} date={comment?.date} />
                ))}
            </div>
        </Paper>
      </div>
    );
}

export default Order;