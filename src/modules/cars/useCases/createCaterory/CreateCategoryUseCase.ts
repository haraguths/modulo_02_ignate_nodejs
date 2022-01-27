import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlredyExist = this.categoriesRepository.findByName(name);
    console.log("3");
    if (categoryAlredyExist) {
      throw new Error("Category Alredy exists!!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
