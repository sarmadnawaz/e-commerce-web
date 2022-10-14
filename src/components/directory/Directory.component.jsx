import React from "react";
import "./Directory.styles.scss";
import DirectoryItem from "../directory-item/DirectoryItem.component";
import categories from "../../config/categories";
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className="directory">
      <div className="container-center">
        <div className="directory-details">

        <h1 className="primary-header">COMFORT THAT KEEPS US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          itaque fugit aut ad hic quia deleniti illum corporis at, dolorum
          incidunt temporibus sequi qui nulla, perferendis nihil pariatur
          cupiditate odio, sit et a? Vitae voluptas dolorem quis velit, autem
          harum.
        </p>
        <div className="directory-nav">
            <Link className="directory-nav-link">Hats</Link>
            <Link className="directory-nav-link">Jackets</Link>
            <Link className="directory-nav-link">Sneakers</Link>
            <Link className="directory-nav-link">Women</Link>
            <Link className="directory-nav-link">men</Link>
            <Link className="directory-nav-link">kids</Link>
        </div>
        </div>
      </div>
      <div className="directory-container">
        {categories.map((category) => {
          return (
            <>
              <DirectoryItem
                imageUrl={category.imageUrl}
                title={category.title}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Directory;
