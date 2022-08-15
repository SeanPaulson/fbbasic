import { prisma } from "../../../prisma/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowd'});
    }

    const friend = JSON.parse(req.body);

    const savedFriend = await prisma.friends.create({
        data: friend
    })

    res.json(savedFriend)
}