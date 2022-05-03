/*
  Warnings:

  - You are about to drop the column `dateForm` on the `rentals` table. All the data in the column will be lost.
  - Added the required column `dateFrom` to the `rentals` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rentals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "carId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateAt" DATETIME NOT NULL,
    "total" DECIMAL NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "rentals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rentals_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rentals" ("carId", "createdAt", "dateAt", "id", "total", "updatedAt", "userId") SELECT "carId", "createdAt", "dateAt", "id", "total", "updatedAt", "userId" FROM "rentals";
DROP TABLE "rentals";
ALTER TABLE "new_rentals" RENAME TO "rentals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
