import React from 'react'

const FarmingCard = (props) => {
    const  { link, description } = props;
  return (
    <div className='card-container appear-from-left'>
      <img className="farm-category"src={link} alt="" />
      <p className="card-name">{description}</p>
    </div>
  )
}

export default FarmingCard;
