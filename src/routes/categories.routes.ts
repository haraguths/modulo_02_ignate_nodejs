import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCaterory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategoty/ImportCategoryController";
import { ListCateroriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCateroriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/imports",
  upload.single("file"),
  importCategoryController.handle
);
export { categoriesRoutes };
