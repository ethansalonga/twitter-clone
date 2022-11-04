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
          {/* <input placeholder="Enter image URL" type="text" /> */}
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox