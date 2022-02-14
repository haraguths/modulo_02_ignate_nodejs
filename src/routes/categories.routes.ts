import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCaterory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategoty";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

categoriesRoutes.post(
  "/imports",
  upload.single("file"),
  (request, response) => {
    return importCategoryController.handle(request, response);
  }
);
export { categoriesRoutes };
