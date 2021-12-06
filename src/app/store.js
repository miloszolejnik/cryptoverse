import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptopAPI";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});