-- AlterTable
CREATE SEQUENCE orderitem_orderid_seq;
ALTER TABLE "OrderItem" ALTER COLUMN "orderId" SET DEFAULT nextval('orderitem_orderid_seq');
ALTER SEQUENCE orderitem_orderid_seq OWNED BY "OrderItem"."orderId";
