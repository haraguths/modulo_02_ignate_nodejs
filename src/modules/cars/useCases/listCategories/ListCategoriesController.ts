import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCateroriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    console.log("oioo");

    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCateroriesController };
