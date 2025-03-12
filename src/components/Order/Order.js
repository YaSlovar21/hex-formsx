import ContactPhoneOutlined  from "@mui/icons-material/ContactPhoneOutlined";
import NoteAddOutlined from "@mui/icons-material/NoteAddOutlined";
import AddCommentOutlined from "@mui/icons-material/AddCommentOutlined";
import Phone from "@mui/icons-material/Phone";
import { Divider, Paper } from "@mui/material";
import React, { useState } from "react";
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

function Order({orderData}) {

    const [isFormLoadVisible, setIsFormLoadVisible] = useState(false);

    function handleFormLoadChangeView() {
        setIsFormLoadVisible(!isFormLoadVisible);
    }

    function handleFilesLoaded() {
        setIsFormLoadVisible(false);
    }

    return (
      <div className="order text-left">
        <Paper>
          <div className={`${styles.order__header} px-5 py-7 flex gap-5 justify-between overflow-hidden`}>
            <StatusChangeMenu initialStatus={orderData.status}/>
            <div className="flex items-center">
                <p className="text-base">#{orderData.id}</p>
                <FollowingOrder />
                <FormattedDate date={orderData.date_add} />
            </div>
          </div>
          <Divider />
          <div className={`${styles.order__managerofclient} px-5 py-7 flex items-center`}>
                <div className="text-left mr-8">
                    <span className="text-xl block ">
                        Алексей Владимирович Гуляшов
                    </span>
                    <div className="flex items-center gap-4 mt-2">
                        <IconButton size="sm"><CallOutlined className="w-4 h-4" /></IconButton> 
                        <a className="text-sm text-[#1F1EB1] block" href={`mailto:${`34`}`}>
                            {orderData?.managerOfClent || "vtorteh@sid-e.ru"}
                        </a>
                        
                    </div>
                </div>
               
                {/*<IconButton sx={{ backgroundColor: '#f1f1f1' }} size="large" >
                    <ContactPhoneOutlined className="text-primary-black " />
                </IconButton>*/}
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