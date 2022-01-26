import { Especification } from "../model/Especification";

interface ICreatEspecificationDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Especification;
  list(): Especification[];
  create({ name, description }: ICreatEspecificationDTO): void;
}

export { ICategoriesRepository, ICreatEspecificationDTO };
