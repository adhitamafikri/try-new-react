import IndexPage from "../pages/index";
import SearchPage from "../pages/search";
import DetailsPage from "../pages/details";

// const IndexPage = () =>
//   import(/* webpackChunkName: "page-index" */ "../pages/index");
// const SearchPage = () =>
//   import(/* webpackChunkName: "page-search" */ "../pages/search");
// const DetailsPage = () =>
//   import(/* webpackChunkName: "page-details" */ "../pages/details");

const routes = [
  { path: "/", exact: true, component: IndexPage },
  { path: "/search", component: SearchPage },
  { path: "/details", component: DetailsPage },
];

export default routes;
