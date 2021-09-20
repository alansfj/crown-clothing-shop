import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToPros)(CollectionsOverview);
