import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authSlice";
import productListSlice from "../redux/productSlice";
import categorySlice from "../redux/categorySlice";
import enquiryListSlice from "../redux/enquiriesSlice";
import usersSlice from "../redux/usersSlice";
import bannerSlice from "../redux/bannerSlice";
import socialMediaLinkSlice from "../redux/socialMediaSlice"; 
import logoSlice from "../redux/logoSlice";
import termsSlice from "../redux/termsSlice";
import productTypeSLice from "../redux/productTypeSlice";
import clientAuthReducer from "../redux/clientSlice/clientAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    clientAuth: clientAuthReducer, // Client authentication
    productList: productListSlice,
    categoryList: categorySlice,
    enquiryList: enquiryListSlice,
    usersList: usersSlice,
    bannerList: bannerSlice,
    socialMediaLink: socialMediaLinkSlice, 
    logo: logoSlice,
    terms: termsSlice,
    productTypeList: productTypeSLice,
  },
});

export default store;