import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { solutionValidationSchema } from 'validationSchema/solutions';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.solution
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSolutionById();
    case 'PUT':
      return updateSolutionById();
    case 'DELETE':
      return deleteSolutionById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSolutionById() {
    const data = await prisma.solution.findFirst(convertQueryToPrismaUtil(req.query, 'solution'));
    return res.status(200).json(data);
  }

  async function updateSolutionById() {
    await solutionValidationSchema.validate(req.body);
    const data = await prisma.solution.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSolutionById() {
    const data = await prisma.solution.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
