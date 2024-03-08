import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const findUniquePost = await prisma.post.findUnique({
    where: {
      id: 10,
    },
  });
  console.log(findUniquePost);
};

main();
