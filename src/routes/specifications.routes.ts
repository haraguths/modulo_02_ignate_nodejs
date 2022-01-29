import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (req, res) => {
  const all = specificationsRepository.list();
  return res.json(all);
});

export { specificationRoutes };
