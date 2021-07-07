import React, { useState } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop_data";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;
