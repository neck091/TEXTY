// api/quest.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const selectAll = async () => {
  try {
    const quests = await prisma.quizQuestions.findMany();
    await prisma.$disconnect();
    return quests;
  } catch (error) {
    console.error("Error fetching questions:", error);
    await prisma.$disconnect();
    return [];
  }
};

export { selectAll };
