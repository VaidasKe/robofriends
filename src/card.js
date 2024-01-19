import React from "react";

const Card = ({name, email, username, id}) => {
    return (
       <div className='ts bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${username}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
       </div> 
    )
}

export default Card;