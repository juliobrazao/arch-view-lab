import { HomeRoute } from './home.route';
import { NotFoundRoute } from './not-found.route';

export const routes = [HomeRoute, NotFoundRoute];

export const routeItems = routes.map((route) => {
  return {
    path: route.path,
    element: route.element,
  };
});
