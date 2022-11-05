import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Ethan Salonga"
        username="ethansalonga"
        verified
        text="A man chooses. A slave obeys."
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQH5-vBMsJPW0Q/profile-displayphoto-shrink_800_800/0/1636484250547?e=1672876800&v=beta&t=TSz9iMnl_aMF7Y28l033x0rhtVViOLXJcRKfkCuT62U"
        image="https://media.giphy.com/media/O9VvyvGXtEnp4pcN1d/giphy.gif"
      />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed