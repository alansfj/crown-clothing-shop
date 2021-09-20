import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToPros)(ShopPage);
