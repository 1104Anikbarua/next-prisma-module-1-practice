import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const isAuthorExists = await prisma.post.findUniqueOrThrow({
    where: {
      id: 43,
    },
  });
  console.log(isAuthorExists);
};

main();
