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
  const categories = await prisma.category.findMany();

  // Create 10 transactions for each category
  for (const category of categories) {
    const transactions = Array.from({ length: 10 }, (_, index) => {
      const date = new Date();
      // Set the date to a random day within the last 5 days
      date.setDate(date.getDate() - Math.floor(Math.random() * 5) + 1);

      return {
        amount: +(Math.random() * 1000).toFixed(2), // Generate random float with two decimal places
        date,
        description: `Transaction ${index + 1} for category ${category.name}`,
        category_id: category.id,
      };
    });

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