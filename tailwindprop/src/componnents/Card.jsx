import React from "react";

function Card({username}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img
          class="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div class="flex">
        <span>{username}</span>
        <span>The Anti-Patterns</span>
        <span class="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}
export default Card;
