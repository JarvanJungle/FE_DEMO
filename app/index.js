import "@babel/polyfill";
import "../public/i18n";
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { setToLS } from "helper/utilities";
import { LicenseManager } from "ag-grid-enterprise";
import { CookiesProvider, Cookies as ReactCookies } from "react-cookie";
import store from "store";
import App from "./components/App";
import * as themes from "./theme/schema.json";

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_KEY);

setToLS("all-themes", themes.default);

render(
    <Provider store={store}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>,
    document.querySelector("#root")
);
