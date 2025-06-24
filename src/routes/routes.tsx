import { HomeRoute } from './home.route';
import { LaboratoryRoute } from './laboratory.route';
import { NotFoundRoute } from './not-found.route';

export const routes = [HomeRoute, NotFoundRoute, LaboratoryRoute];

export const routeItems = routes.map((route) => {
  return {
    path: route.path,
    element: route.element,
  };
});
