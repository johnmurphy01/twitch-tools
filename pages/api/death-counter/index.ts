import { NextApiRequest, NextApiResponse } from "next";
import { RequestMethodType } from "../../../foundation/enums/request-method-type";
import Pusher from "pusher";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case RequestMethodType.Get:
        const pusher = new Pusher({
          appId: process.env.PUSHER_APP_ID,
          key: process.env.PUSHER_KEY,
          secret: process.env.PUSHER_SECRET,
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
