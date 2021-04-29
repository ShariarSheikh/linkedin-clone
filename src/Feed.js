import React, { useEffect, useState } from "react";
import "./Feed.css";
// import component
import InputOptions from "./InputOptions";
// import icons
import { IoCreateOutline } from "react-icons/io5";
import { BsCardImage } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    db.collection("post").orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("post").add({
      name: "nahid",
      description: "this is okay",
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("")
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <IoCreateOutline />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={BsCardImage} title="Photo" color="#70B5F9" />
          <InputOptions Icon={MdSubscriptions} title="Video" color="#E7A33E" />
          <InputOptions Icon={MdEventNote} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={AiOutlineCalendar}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* post container  */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}
     
    </div>
  );
};

export default Feed;
