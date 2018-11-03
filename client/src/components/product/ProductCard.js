import React from "react";
import "./ProductCard.css";

const FriendCard = props => ( <
  div className = "card" >
  <
  div className = "img-container" >
  <
  img alt = {
    props.name
  }
  src = {
    props.image
  }
  /> <
  /div> <
  div className = "content" >
  <
  ul >
  <
  li >
  <
  strong > Name: < /strong> {props.name} <
  /li> <
  li >
  <
  strong > Description: < /strong> {props.description} <
  /li> <
  /ul> <
  /div> {
    /* <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span> */
  } <
  /div>
);

export default FriendCard;