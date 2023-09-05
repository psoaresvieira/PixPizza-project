import { Response, Request } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";


class SendOrderController{
    async handle(res: Response, req: Request){

        const { order_id } = req.body;

        const sendOrder = new SendOrderService();

        const order = await sendOrder.execute({
            order_id,
        });

        return res.json(order)
    }
}

export { SendOrderController}