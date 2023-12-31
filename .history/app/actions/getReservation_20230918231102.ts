import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservation(params: IParams) {
  const { listingId, userId, authorId } = params;

  const query: any = {};

  if (listingId) {
    query.listingId = listingId;
  }

  if (userId) {
    query.userId = userId;
  }
  if (authorId) {
    query.authorId = authorId;
  }
}
