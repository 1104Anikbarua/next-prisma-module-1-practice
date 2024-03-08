import { Gender, PrismaClient } from "@prisma/client";

const authors = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Helen",
  "Ivan",
  "Judy",
];
const genders = ["Male", "Female", "Other"];

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const posts = Array.from({ length: 20 }, (_, i) => ({
  author_name: authors[getRandomInt(0, authors.length - 1)],
  age: getRandomInt(20, 80),
  gender:
    Object.values(Gender)[getRandomInt(0, Object.values(Gender).length - 1)],
}));

const prisma = new PrismaClient();

const main = async () => {
  const createposts = await prisma.post.createMany({
    data: posts,
  });
};

main();
