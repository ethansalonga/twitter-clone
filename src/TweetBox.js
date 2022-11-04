import React from 'react'
import "./TweetBox.css"
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH5-vBMsJPW0Q/profile-displayphoto-shrink_800_800/0/1636484250547?e=1672876800&v=beta&t=TSz9iMnl_aMF7Y28l033x0rhtVViOLXJcRKfkCuT62U" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox