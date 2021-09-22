import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
