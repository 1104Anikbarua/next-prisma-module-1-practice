import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const updatePost = await prisma.post.update({
    where: {
      id: 9,
    },
    data: {
      author_name: "Malice",
    },
  });
};
main();
