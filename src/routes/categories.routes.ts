import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCaterory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

categoriesRoutes.post(
  "/imports",
  upload.single("file"),
  (request, response) => {
    const { file } = request;
    console.log(file);
    return response.send();
  }
);
export { categoriesRoutes };
