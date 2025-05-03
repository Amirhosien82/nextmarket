/*
  Warnings:

  - Added the required column `colors` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `props` to the `Product` table without a default value. This is not possible if the table is not empty.

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
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sold" INTEGER NOT NULL DEFAULT 0,
    "colors" TEXT NOT NULL,
    "props" TEXT NOT NULL
);
INSERT INTO "new_Product" ("about", "count", "date", "discount", "id", "name", "new", "price", "sold", "special") SELECT "about", "count", "date", "discount", "id", "name", "new", "price", "sold", "special" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
