import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const upsertPost = await prisma.post.upsert({
    where: {
      id: 42,
    },
    update: {
      author_name: "Patrick Doe",
    },
    create: { author_name: "Patrick Doe", age: 22, gender: "Male" },
  });
};

main();
