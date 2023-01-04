import React from 'react'
import './Review.css'
import noImage from '../../assets/no-image.png'

function Review({review} ) {
    const imgBase = process.env.REACT_APP_IMAGE_BASE;
    //create state for image error
    const [imageError, setImageError] = React.useState(false);

    const [seeMore, setSeeMore] = React.useState(false);

  return (
    <div className="review-box">
        <div className="avatar-container">
            <img className="avatar"
                 onError={()=>setImageError(true)}
                 src={imageError? noImage :
                    `${imgBase}${review.author_details.avatar_path}`} alt="none"
                 />
            <p>{review.author}</p>
        </div>
        <div className="review-text">
            {
                !seeMore ?
                <p>{review.content.slice(0, 250)} 
                <span onClick={()=>setSeeMore(true)} className="read-content">...SEE MORE</span></p>
                :
                <p>{review.content} 
                <span onClick={()=>setSeeMore(false)} className="read-content">...SEE LESS</span></p>



            }
            
        </div>
        
    </div>
  )
}

export default Review