-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "carId" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "photos_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
