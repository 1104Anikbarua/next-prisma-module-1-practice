import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const selectedField = await prisma.post.findMany({
    where: {
      gender: "Male",
    },
    select: {
      author_name: true,
      age: true,
      gender: true,
    },
  });
  console.log(selectedField);
};

main();
