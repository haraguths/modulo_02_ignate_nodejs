import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlredyExist =
      this.specificationsRepository.findByName(name);
    if (specificationAlredyExist) {
      throw new Error("Specification Alredy exists!!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
