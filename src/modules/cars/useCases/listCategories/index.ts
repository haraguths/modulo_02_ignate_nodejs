// import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCateroriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCateroriesController(
  listCategoriesUseCase
);

export { listCategoryController };
