/*
  Warnings:

  - You are about to alter the column `available` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "fuelType" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "thumbnail" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_cars" ("about", "available", "brand", "createdAt", "fuelType", "id", "licensePlate", "name", "period", "price", "thumbnail", "updatedAt") SELECT "about", coalesce("available", false) AS "available", "brand", "createdAt", "fuelType", "id", "licensePlate", "name", "period", "price", "thumbnail", "updatedAt" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
CREATE UNIQUE INDEX "cars_licensePlate_key" ON "cars"("licensePlate");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
