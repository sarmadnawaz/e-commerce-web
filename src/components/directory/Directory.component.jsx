import React from 'react'
import './Directory.styles.scss'
import DirectoryItem from '../directory-item/DirectoryItem.component'
import categories from '../../config/categories'


function Directory(){
    return (
        <div className='directory-container'>
            {categories.map(category => {
                return <DirectoryItem imageUrl={category.imageUrl} title={category.title} />
            } )}
        </div>
    )
}


export default Directory