import React from "react";
import { useSelector } from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collections = useSelector(state =>
    Object.keys(state.shop.collections).map(key => state.shop.collections[key])
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
