import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCaterory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  console.log("1");
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  console.log("oi");
  listCategoryController.handle(request, response);
});

export { categoriesRoutes };
