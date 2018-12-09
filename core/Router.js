//경로를 이곳에 등록
const routes = [
  require("../routes/Home").default,
  require("../routes/NotFound").default,
  require("../routes/InternalError").default
];

const router = {
  match(location) {
    const route = routes.find(x => x.path === location.path);

    if (route) {
      try {
        return route.action();
      } catch (err) {
        return routes.find(x => x.path === "/500").action();
      }
    } else {
      return routes.find(x => x.path === "/404").action();
    }
  }
};

export default router;
