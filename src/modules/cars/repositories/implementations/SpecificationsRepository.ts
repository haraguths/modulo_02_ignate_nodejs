import { getRepository, Repository } from "typeorm";

import { Especification } from "../../entities/Especification";
import {
  ISpecificationsRepository,
  ICreatEspecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Especification>;

  constructor() {
    this.repository = getRepository(Especification);
  }

  async create({ name, description }: ICreatEspecificationDTO): Promise<void> {
    const especification = this.repository.create({ name, description });

    await this.repository.save(especification);
  }

  async findByName(name: string): Promise<Especification> {
    const especification = this.repository.findOne({ name });
    return especification;
  }
}

export { SpecificationsRepository };
