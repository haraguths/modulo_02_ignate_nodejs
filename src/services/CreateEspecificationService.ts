import { ISpecificationsRepository } from "../modules/cars/repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlredyExist = this.specificationsRepository.findByName(name);

    if (categoryAlredyExist) {
      throw new Error("Specifications Alredy exists!!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
