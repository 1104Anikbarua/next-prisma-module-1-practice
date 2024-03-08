import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getPosts = await prisma.post.findFirst({
    where: { isDeleted: false },
  });
  console.log(getPosts);
};

main();
