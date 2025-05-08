/*
  Warnings:

  - A unique constraint covering the columns `[name,country]` on the table `Helpline` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Helpline_name_country_key" ON "Helpline"("name", "country");
