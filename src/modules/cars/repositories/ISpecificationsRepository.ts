import { Especification } from "../entities/Especification";

interface ICreatEspecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Especification>;
  create({ name, description }: ICreatEspecificationDTO): Promise<void>;
}

export { ISpecificationsRepository, ICreatEspecificationDTO };
