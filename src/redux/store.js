import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userSlice";
import shopReducer from "./shop/shopSlice";
import directoryReducer from "./directory/directorySlice";
import cartReducer from "./cart/cartSlice";

const persistConfig = {
  key: "cart",
  storage,
};

const persistCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistCartReducer,
    directory: directoryReducer,
    shop: shopReducer,
  },
});

export const persistor = persistStore(store);
