import React from "react"
import "./Header.css"
import HeaderOptions from "./HeaderOptions"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded"
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded"
import SmsRoundedIcon from "@material-ui/icons/SmsRounded"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import avatar from "./images/avtar.png"
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />

        <div className="header_search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeRoundedIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOptions Icon={SmsRoundedIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={avatar} title="me" />
      </div>
    </div>
  )
}

export default Header
