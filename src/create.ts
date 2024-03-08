import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createPosts = await prisma.post.create({
    data: {
      author_name: "John doe",
      age: 22,
      gender: "Male",
    },
  });
  console.log(createPosts);
};

main();
