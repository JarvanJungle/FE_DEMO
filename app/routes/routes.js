import URL_CONFIG from "services/urlConfig";
import i18next from "i18next";


import ServiceList from "./Admin/ManageService/ServiceList/ServiceList";
import ServiceDetails from "./Admin/ManageService/ServiceDetails/ServiceDetails";
import ApiCreate from "./Admin/ManageService/ApiCreate/ApiCreate";
import ApiEdit from "./Admin/ManageService/ApiCreate/ApiEdit";
import ServiceCreate from "./Admin/ManageService/ServiceCreate/ServiceCreate";
import ServiceEdit from "./Admin/ManageService/ServiceCreate/ServiceEdit";
import Login from "./Pages/Login";
import Top from "./Demo/Top/Top";
import Record from "./Demo/Record/Record";
import Column from "./Demo/Column/Column";

const ServiceRoutes = [
    {
        path: "/system-service/service-list", isProtected: false, name: i18next.t("ServiceList"), Component: ServiceList, render: true
    },
    {
        path: "/system-service/service-detail", isProtected: false, key: 'id', name: i18next.t("ServiceDetail"), Component: ServiceDetails, render: true
    },
    {
        path: "/system-service/api-create", isProtected: false, name: i18next.t("ApiCreate"), Component: ApiCreate, render: true
    },
    {
        path: "/system-service/service-create", isProtected: false, name: i18next.t("ServiceCreate"), Component: ServiceCreate, render: true
    },
    {
        path: "/system-service/api-edit", isProtected: false, key: 'id', name: i18next.t("ApiEdit"), Component: ApiEdit, render: true
    },
    {
        path: "/system-service/service-edit", isProtected: false, key: 'id', name: i18next.t("ServiceEdit"), Component: ServiceEdit, render: true
    },
    {
        path: "/login", isProtected: false, name: i18next.t("Login"), Component: Login, render: true
    },
    {
        path: "/top", isProtected: false, name: i18next.t("Top"), Component: Top, render: true
    },
    {
        path: "/record", isProtected: false, name: i18next.t("Record"), Component: Record, render: true
    },
    {
        path: "/column", isProtected: false, name: i18next.t("Record"), Component: Column, render: true
    },
];



export default [
    ...ServiceRoutes
];
