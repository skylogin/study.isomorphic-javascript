import React from "react";
import Context from "../components/Context";

//경로를 이곳에 등록
const routes = [
  require("../routes/Home").default,
  require("../routes/NotFound").default,
  require("../routes/InternalError").default
];

const router = {
  match(location, state) {
    let component;
    const page = {
      title: "My Application",
      description: "Isomorphic web application sample",
      status: 200
    };
    const route = routes.find(x => x.path === location.path);

    if (route) {
      try {
        component = route.action(location, state);
      } catch (err) {
        component = routes.find(x => x.path === "/500").action();
        page.status = 500;
      }
    } else {
      component = routes.find(x => x.path === "/404").action();
      page.status = 404;
    }

    return [
      <Context {...state} page={page}>
        {component}
      </Context>,
      page
    ];
  }
};

export default router;
