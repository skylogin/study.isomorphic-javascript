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
    const route = routes.find(x => x.path === location.path);

    if (route) {
      try {
        component = route.action(location);
      } catch (err) {
        component = routes.find(x => x.path === "/500").action();
      }
    } else {
      component = routes.find(x => x.path === "/404").action();
    }

    return <Context {...state}>{component}</Context>;
  }
};

export default router;
