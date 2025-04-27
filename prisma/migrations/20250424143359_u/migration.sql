/*
  Warnings:

  - Made the column `discount` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER,
    "discount" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "about" TEXT NOT NULL,
    "special" BOOLEAN NOT NULL DEFAULT false,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "bestSeller" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sold" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Product" ("about", "bestSeller", "count", "date", "discount", "id", "name", "new", "price", "sold", "special") SELECT "about", "bestSeller", "count", "date", "discount", "id", "name", "new", "price", "sold", "special" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
