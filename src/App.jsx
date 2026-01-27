import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Information from "./pages/Information";
import Students from "./pages/Students";
import ApplicationPage from "./pages/ApplicationPage";
import NewsPage from "./pages/NewsPage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, //
          element: <Home />,
        },
        {
          path: "news", // 2. ДОБАВЛЯЕМ ПУТЬ ДЛЯ НОВОСТЕЙ
          element: <NewsPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "admission",
          element: <Admission />,
        },
        {
          path: "information",
          element: <Information />,
        },
        {
          path: "students",
          element: <Students />,
        },
        {
          path: "application",
          element: <ApplicationPage />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#151515]">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
