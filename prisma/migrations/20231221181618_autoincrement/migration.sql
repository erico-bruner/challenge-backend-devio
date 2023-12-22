/*
  Warnings:

  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_AddonToOrderItem" DROP CONSTRAINT "_AddonToOrderItem_B_fkey";

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "orderId" DROP DEFAULT,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "orderitem_orderid_seq";

-- AddForeignKey
ALTER TABLE "_AddonToOrderItem" ADD CONSTRAINT "_AddonToOrderItem_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
