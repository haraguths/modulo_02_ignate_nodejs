import { Especification } from "../model/Especification";
import {
  ICategoriesRepository,
  ICreatEspecificationDTO,
} from "./ISpecificationRepository";

class SpecificationsRepository implements ICategoriesRepository {
  private especifications: Especification[];

  constructor() {
    this.especifications = [];
  }

  create({ name, description }: ICreatEspecificationDTO): void {
    const especification = new Especification();

    Object.assign(especification, {
      name,
      description,
      created_at: new Date(),
    });

    this.especifications.push(especification);
  }

  list(): Especification[] {
    return this.especifications;
  }

  findByName(name: string): Especification {
    const especification = this.especifications.find(
      (especification) => especification.name === name
    );
    return especification;
  }
}

export { SpecificationsRepository };
