import React from 'react'



function NewProduct({title,imageUrl,body}) {
    return (
       
           <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt =""/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
               <p>{body}</p>
               <div className="btn">
                   <button><a>Add To Cart</a></button>
               </div>
            </div>
            </div>
        </div>
       
     
        
    )
}

export default NewProduct
