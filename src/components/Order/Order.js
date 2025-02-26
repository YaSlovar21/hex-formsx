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

function Order({managerEmail}) {
    return (
      <div className="order text-left">
        <Paper>
          <div
            className={`${styles.order__header} px-5 py-7 flex gap-5 justify-between overflow-hidden`}
          >
            <Status />
            <FollowingOrder />
          </div>
          <Divider />
          <div className={`${styles.order__managerofclient} px-5 py-7 flex items-center`}>
                <div className="text-left mr-8">
                    <span className="text-xl block ">
                        Алексей Владимирович Гуляшов
                    </span>
                    <a
                        className="text-sm text-[#1F1EB1] block mt-2"
                        href={`mailto:${managerEmail}`}
                    >
                        {managerEmail || "vtorteh@sid-e.ru"}
                    </a>
                </div>
               
                <IconButton sx={{ backgroundColor: '#f1f1f1' }} size="large" >
                    <ContactPhoneOutlined className="text-primary-black " />
                </IconButton>
            </div>
            <div className={`${styles.order__body} px-5 py-7 flex`}>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                    ut enim, sed facilisis amet ultrices. Tellus amet a, ac risus mi
                    duis ultricievivmus in dolor, morbi lorem null porttitor. Vitae
                    enim erat elementum non quis egestas vestibulum amet nec. Eu,
                    pulvinar rhoncus ut venenatis ut a sed senectus. Eu posuere tempor
                    gravida sed semper at faucibus. Purus dignissim lobortis nibh
                    pharetra etiam. Mi cursus dolor quis a elit viverra euismod.
                    Mauris nunc leo quis maecenas morbi aliquet purus amet, vitae.
                    Vitae dui dolor morbi praesent. Nunc, porta nunc leo dictum duis.
                    Et risus nulla sit vitae sed. Viverra amet neque nisi pellentesque
                    a, nunc condimentum libero. Gravida congue elementum velit, non at
                    nunc a ut nisi. In sed nunc ultricies enim, quis morbi ac. Id
                    dolor ultrices fringilla viverra. Bibendum augue ante rutrum eget
                    dictumst purus volutpat egestas.
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
                <CommentForm />
                <Comment />
                <Comment />
            </div>
        </Paper>
      </div>
    );
}

export default Order;