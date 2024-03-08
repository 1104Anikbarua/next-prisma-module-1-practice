/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "author_name" DROP DEFAULT,
ALTER COLUMN "author_name" SET DATA TYPE TEXT,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "post_author_name_seq";
