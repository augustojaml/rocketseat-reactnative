/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "available" TEXT,
    "thumbnail" TEXT,
    "createdAt" TEXT,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_licensePlate_key" ON "cars"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
