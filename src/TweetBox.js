import React, { useState } from 'react'
import "./TweetBox.css"
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import db from "./firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault()

    db.collection("posts").add({
      displayName: "Ethan Salonga",
      username: "ethansalongadev",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQH5-vBMsJPW0Q/profile-displayphoto-shrink_800_800/0/1636484250547?e=1672876800&v=beta&t=TSz9iMnl_aMF7Y28l033x0rhtVViOLXJcRKfkCuT62U",
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH5-vBMsJPW0Q/profile-displayphoto-shrink_800_800/0/1636484250547?e=1672876800&v=beta&t=TSz9iMnl_aMF7Y28l033x0rhtVViOLXJcRKfkCuT62U" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox