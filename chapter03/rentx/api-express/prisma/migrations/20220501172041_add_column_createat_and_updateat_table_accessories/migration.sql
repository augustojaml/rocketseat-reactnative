-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accessories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "accessories_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_accessories" ("carId", "id", "name", "type") SELECT "carId", "id", "name", "type" FROM "accessories";
DROP TABLE "accessories";
ALTER TABLE "new_accessories" RENAME TO "accessories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
