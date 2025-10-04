import { PrismaClient } from "@prisma/client";
import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSQLite3({
  url: "file:./prisma/ecommerce.db"
});

const prisma = new PrismaClient({ adapter });

export default prisma;