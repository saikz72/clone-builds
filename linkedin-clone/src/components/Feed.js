import React, { useState, useEffect } from 'react';
import '../styles/feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../components/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import VideoIcon from '@material-ui/icons/VideogameAssetRounded';
import EventIcon from '@material-ui/icons/Event';
import ArticleIcon from '@material-ui/icons/WrapTextOutlined';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Saikou Ceesay',
      description: 'Testing',
      message: message,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage('');
  };

  return (
    <div className="feed">
      <div className="feed__input__container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* Import options */}
          <InputOption Icon={ImageIcon} color="blue" title="Photo" />
          <InputOption Icon={VideoIcon} color="green" title="Video" />
          <InputOption Icon={EventIcon} color="yellow" title="Event" />
          <InputOption Icon={ArticleIcon} color="red" title="Write article" />
        </div>
      </div>

      {/* Post section */}
      {/* <Post name="Saikou Ceesay" description="This is a test" message="Wow this works" /> */}

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post id={id} name={name} description={description} message={message} />
      ))}
    </div>
  );
};

export default Feed;
