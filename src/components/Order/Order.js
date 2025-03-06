import ContactPhoneOutlined  from "@mui/icons-material/ContactPhoneOutlined";
import NoteAddOutlined from "@mui/icons-material/NoteAddOutlined";
import AddCommentOutlined from "@mui/icons-material/AddCommentOutlined";
import Phone from "@mui/icons-material/Phone";
import { Divider, IconButton, Paper } from "@mui/material";
import React from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import OrderFilesList from "../OrderFilesList/OrderFilesList";
import FollowingOrder from "../_details/FollowingOrder/FollowingOrder";
import Status from "../_details/Status/Status";

import styles from './Order.module.css';
import StatusChangeMenu from "../_details/StatusChangeMenu/StatusChangeMenu";
import FormattedDate from "../_details/FormattedDate/FormattedDate";

function Order({orderData}) {
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
                    <a
                        className="text-sm text-[#1F1EB1] block mt-2"
                        href={`mailto:${`34`}`}
                    >
                        {orderData?.managerOfClent || "vtorteh@sid-e.ru"}
                    </a>
                </div>
               
                <IconButton sx={{ backgroundColor: '#f1f1f1' }} size="large" >
                    <ContactPhoneOutlined className="text-primary-black " />
                </IconButton>
            </div>
            <div className={`${styles.order__body} px-5 py-7 flex`}>
                <p className="text-lg">
                    {orderData?.content_text}
                </p>
            </div>
            <div className={`${styles.order__files} px-5 py-7`}>
                <div className="flex items-center">
                    <h3 className="text-lg mr-5">Файлы</h3>
                    <IconButton size="large"><NoteAddOutlined /></IconButton>
                </div>
                <OrderFilesList />
            </div>
            <div className={`${styles.order__comments} px-5 py-7`}>
                <div className="flex items-center">
                    <h3 className="text-lg mr-5">Комментарии</h3>
                    <IconButton size="large"><AddCommentOutlined /></IconButton>
                </div>
                <CommentForm orderId={orderData.id} />
                {orderData.comments.map((comment) => (
                    <Comment key={comment.id}  text={comment.commentText} date={comment?.date} />
                ))}
            </div>
        </Paper>
      </div>
    );
}

export default Order;