import React from "react"
import "./Post.css"
import Avatar from '@mui/material/Avatar'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'

function Post({ displayName, username, verified, text, image, avatar }) {
  return <div className="post">
    <div className="post__avatar">
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH5-vBMsJPW0Q/profile-displayphoto-shrink_800_800/0/1636484250547?e=1672876800&v=beta&t=TSz9iMnl_aMF7Y28l033x0rhtVViOLXJcRKfkCuT62U" />
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Ethan Salonga <span className="post__headerSpecial">
              <VerifiedIcon className="post__badge" />{" "} @ethansalonga
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>A man chooses. A slave obeys.</p>
        </div>
      </div>
      <img src="https://media.giphy.com/media/O9VvyvGXtEnp4pcN1d/giphy.gif" alt="" />
      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
    </div>
  </div>
}

export default Post
