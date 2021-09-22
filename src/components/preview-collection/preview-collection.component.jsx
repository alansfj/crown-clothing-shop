import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link, useRouteMatch } from "react-router-dom";

const PreviewCollection = ({ title, items }) => {
  const match = useRouteMatch();

  return (
    <div className="collection-preview">
      <div className="title-link-container">
        <h1 className="title">{title.toUpperCase()}</h1>
        <Link to={`${match.path}/${title.toLowerCase()}`}>
          <span>SEE ALL</span>
        </Link>
      </div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
