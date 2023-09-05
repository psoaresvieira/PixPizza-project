import {Request, Response, response} from 'express';
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = createUserService.execute({
            name,
            email,
            password
        });

        return res.json( user );
    }
}

export { CreateUserController }
