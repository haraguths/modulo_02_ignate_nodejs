import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCaterory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

export { categoriesRoutes };
