import prisma from "@/libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { customerName, starRating, comment } = req.body;

    try {
      const newReview = await prisma.review.create({
        data: {
          customerName,
          starRating,
          comment,
        },
      });
      res.status(200).json(newReview); // Return new review object as JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' }); // Return error object as JSON
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` }); // Return method not allowed error as JSON
  }
}
