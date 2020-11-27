import { NextApiRequest, NextApiResponse } from "next";
import { RequestMethodType } from "../../../foundation/enums/request-method-type";
import Pusher from "pusher";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case RequestMethodType.Get:
        const pusher = new Pusher({
          appId: "1114424",
          key: "9dfae5ce4b0f269dded0",
          secret: "c53299f2c1742670d878",
          cluster: "mt1",
          useTLS: true,
        });

        pusher.trigger("twitch-tools", "death-count", {
          message: "add 1 death",
        });

        res.json({ success: true });
        break;
      default:
        res.status(405).end(); //Method Not allowed
        break;
    }
  } catch (err) {
    res.status(400).json({ message: err.message, success: false });
  }
}
