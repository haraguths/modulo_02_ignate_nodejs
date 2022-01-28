import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCateroriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCateroriesController(
  listCategoriesUseCase
);

export { listCategoryController };
