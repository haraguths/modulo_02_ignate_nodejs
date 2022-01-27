import { Category } from "../../model/Categorry";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    console.log(categories);
    return categories;
  }
}

export { ListCategoriesUseCase };
