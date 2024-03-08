import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const deletePost = await prisma.post.delete({
    where: {
      id: 42,
    },
  });

  console.log(deletePost);
};

main();
