import React from 'react'
let Bus = require("../images/buspic.png");

const AdvertCard = () => {
  return (
    <div><div className="border-2 flex flex-col shadow-xl  justify-center items-center w-[12vw] p-8 mr-4 rounded-xl">
    <img src={Bus} alt="bus" className="h-20 flex justify-center"></img>
    <div>200+</div>
    <div>Bus collection</div>
  </div></div>
  )
}

export default AdvertCard