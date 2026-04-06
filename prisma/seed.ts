import { PrismaClient, Prisma } from '../src/lib/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!
});

const prisma = new PrismaClient({
	adapter
});

const userData: Prisma.UserCreateInput[] = [
	{
		name: 'Alice',
		email: 'alice@prisma.io',
		password: '147852'
	},
	{
		name: 'Bob',
		email: 'bob@prisma.io',
		password: '14785269'
	}
];

export async function main() {
	for (const u of userData) {
		await prisma.user.create({ data: u });
	}
}

main();
