// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Create 5 categories
  await prisma.category.createMany({
    data: [
      { name: 'Salary', type: 'INCOME' },
      { name: 'Rent', type: 'EXPENSE' },
      { name: 'Groceries', type: 'EXPENSE' },
      { name: 'Utilities', type: 'EXPENSE' },
      { name: 'Entertainment', type: 'EXPENSE' },
    ],
  });

  // Retrieve the created categories
  const data = await prisma.category.findMany();

  // Extract category ids
  const categoryIds = data.map((category) => category.id);


  // Create 10 transactions for each category
  for (const categoryId of categoryIds) {
    const transactions = Array.from({ length: 10 }, (_, index) => ({
      amount: +(Math.random() * 1000).toFixed(2),
      date: new Date(),
      description: `Transaction ${index + 1} for category ${categoryId}`,
      category_id: categoryId,
    }));

    await prisma.transaction.createMany({
      data: transactions,
    });
  }

  console.log('Seed completed.');
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });