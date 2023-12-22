import prisma from '../src/config/database';

const PRODUCTS = [
  {
    name: 'Hambúrguer Clássico 1',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url:
      'https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png',
  },
  {
    name: 'Hambúrguer Clássico 2',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url:
      'https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png',
  },
  {
    name: 'Hambúrguer Clássico 3',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url:
      'https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png',
  },
];

const CATEGORYS = [
  {
    name: 'Hambúrgueres',
    image_url: 'https://img.icons8.com/fluency/48/hamburger.png',
  },
  {
    name: 'Acompanhamentos',
    image_url: 'https://img.icons8.com/emoji/48/french-fries-emoji.png',
  },
  {
    name: 'Bebidas',
    image_url: 'https://img.icons8.com/3d-fluency/94/soda-can.png',
  },
  {
    name: 'Sobremesas',
    image_url: 'https://img.icons8.com/color/48/doughnut.png',
  },
];

const ADDONS = [
  {
    name: 'Bacon',
    image_url:
      'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/external-bacon-restaurant-febrian-hidayat-flat-febrian-hidayat.png',
    price: 100,
  },
  {
    name: 'Cheedar',
    image_url:
      'https://img.icons8.com/external-flat-juicy-fish/60/external-cheese-supermarket-flat-flat-juicy-fish.png',
    price: 100,
  },
  {
    name: 'Molho extra',
    image_url: 'https://img.icons8.com/fluency/48/dressing.png',
    price: 100,
  },
];

async function main() {
  await Promise.all(
    CATEGORYS.map(async category => {
      await prisma.category.upsert({
        where: { name: category.name },
        update: category,
        create: category,
      });
    }),
  );

  await Promise.all(
    ADDONS.map(async addon => {
      await prisma.addon.upsert({
        where: { name: addon.name },
        update: addon,
        create: addon,
      });
    }),
  );

  const burgersCategory = await prisma.category.findFirst({
    where: { name: 'Hambúrgueres' },
  });

  await Promise.all(
    PRODUCTS.map(async product => {
      await prisma.product.upsert({
        where: { name: product.name },
        update: product,
        create: { ...product, categoryId: burgersCategory.id },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
