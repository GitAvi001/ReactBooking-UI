import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save the time and resources...Email us</h1>
    <span className="mailDesc">Sign up, wait for our response</span>
    <div className="mailInputContainer">
    <input type="text" placeholder="Enter your email"/>
    <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
