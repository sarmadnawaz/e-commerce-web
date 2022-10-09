import React from 'react'
import './DirectoryItem.styles.scss'

function DirectoryItem({ title, imageUrl }){
    return (
        <div className="directory-item-container">
        <div className='directory-item-container-image' style={{ backgroundImage : `linear-gradient(hsla(223, 48%, 16%, 0.1),hsla(223, 48%, 16%, 0.1)) , Url(${imageUrl})`}} />
        <div className="directory-item-container-content"> 
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div>
        </div>
    )
}

export default DirectoryItem