import { Especification } from "../../entities/Especification";
import {
  ISpecificationsRepository,
  ICreatEspecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private especifications: Especification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.especifications = [];
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
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
