import { Send, SendOutlined } from "@mui/icons-material";
import { Avatar, Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useRef } from "react";
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea'

import { stringToColor } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { putComment } from "../../services/actions/orders";


function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


function CommentForm({orderId}) {

  const userName = useSelector(store => store.user.name);
  const dispatch = useDispatch();

  const [textComment, setTextComment] = React.useState('');

  function handleAddCommentSumbit(evt) {
    evt.preventDefault();
    dispatch(putComment(textComment, orderId));
    commentFormRef.current.reset(); //может быть имеет смысл прочто очистить стейт??
  }
  
  function handleTextareaCommentChange(evt) {
    setTextComment(evt.target.value);
  }

  const commentFormRef = useRef();

  return (
      <div className="flex w-full items-start py-6">
          <Avatar className="mr-5" {...stringAvatar(userName)} />
          <form className="flex items-start w-full" onSubmit={handleAddCommentSumbit} ref={commentFormRef}>
            <Textarea maxRows={4} onChange={handleTextareaCommentChange} placeholder="Введите комментарий" required sx={{ mb: 1, width: '100%' }} />
            <IconButton type="submit" size="large" sx={{color: stringToColor(userName)}} className="mr-auto"><SendOutlined /></IconButton>
          </form>
      </div>
  )
}

export default CommentForm;