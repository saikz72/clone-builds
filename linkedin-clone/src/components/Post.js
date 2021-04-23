import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/post.css';
import InputOption from './InputOption';
import ThumbUpAltOUtlined from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      {/* icons underneath a post e.g like, comment */}
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpAltOUtlined} color="gray" />
        <InputOption title="Comment" Icon={ChatOutlinedIcon} color="gray" />
        <InputOption title="Share" Icon={ShareIcon} color="gray" />
        <InputOption title="Send" Icon={SendOutlinedIcon} color="gray" />
      </div>
    </div>
  );
};

export default Post;
