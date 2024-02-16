import { Suspense, lazy } from "react";
import TodoRouter from "./todoRouter";
import ProductsRouter from "./productsRouter";
import memberRouter from "./memberRouter";

const { createBrowserRouter } = require("react-router-dom");
// import Mainpage from "../pages/mainpage";

const Loading = <div className={"bg-red-800"}>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
const IndexPage = lazy(() => import("../pages/products/IndexPage"));
const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: TodoRouter(),
  },
  {
    path: "products",
    element: (
      <Suspense fallback={Loading}>
        <IndexPage />
      </Suspense>
    ),
    children: ProductsRouter(),
  },
  {
    path: "member",
    children: memberRouter(),
  },
]);

export default root;
