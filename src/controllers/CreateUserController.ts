import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
     async handle(req: Request, res: Response) {
          console.log("Req iniciada");

          const { name, email, admin } = req.body;

          const createUserService = new CreateUserService();
          console.log("Usuario vai ser cadastrado");

          const user = await createUserService.execute({ name, email, admin });

          console.log("Usuario cadastrado");
          return res.status(200).json(user);

     }
}

export { CreateUserController };