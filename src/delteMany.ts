import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const deletePosts = await prisma.post.deleteMany({
    where: {
      gender: "Female",
    },
  });
  console.log(deletePosts);
};
main();
