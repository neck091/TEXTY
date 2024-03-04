import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const quest = await DB.tbl_quest.findMany();
    await DB.$disconnect();
    return quest;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createQuest = async (data) => {
  console.log(data);
  await DB.tbl_quest.create({ data: data });
};
export { createQuest, selectAll };
