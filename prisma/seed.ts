import prisma from '../src/config/database';

const PRODUCTS = [
  {
    name: 'Hambúrguer Clássico 1',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url: 'https://icons8.com.br/icon/erEevcUCwAMR/hamb%C3%BArguer',
  },
  {
    name: 'Hambúrguer Clássico 2',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url: 'https://icons8.com.br/icon/erEevcUCwAMR/hamb%C3%BArguer',
  },
  {
    name: 'Hambúrguer Clássico 3',
    price: 1099,
    description:
      'Hambúrguer 200g, queijo cheedar, tomate, alface, picles, cebola, molho da casa',
    image_url: 'https://icons8.com.br/icon/erEevcUCwAMR/hamb%C3%BArguer',
  },
];

const CATEGORYS = [
  {
    name: 'Hambúrgueres',
    image_url: 'https://icons8.com.br/icon/erEevcUCwAMR/hamb%C3%BArguer',
  },
  {
    name: 'Acompanhamentos',
    image_url:
      'https://icons8.com.br/icon/MSeo0pcLeg0A/emoji-de-batatas-fritas',
  },
  {
    name: 'Bebidas',
    image_url: 'https://icons8.com.br/icon/xYY1RKEGCKh5/lata-de-refrigerante',
  },
  {
    name: 'Sobremesas',
    image_url: 'https://icons8.com.br/icon/12890/donut',
  },
];

const ADDONS = [
  {
    name: 'Bacon',
    image_url: 'https://icons8.com.br/icon/brTuZKvcHeEJ/bacon',
    price: 100,
  },
  {
    name: 'Cheedar',
    image_url: 'https://icons8.com.br/icon/UMrJhdlewxsb/queijo',
    price: 100,
  },
  {
    name: 'Molho extra',
    image_url: 'https://icons8.com.br/icon/PZJmr0qe7myy/vestir',
    price: 100,
  },
];

async function main() {
  CATEGORYS.map(async category => {
    await prisma.category.upsert({
      where: { name: category.name },
      update: category,
      create: category,
    });
  });

  ADDONS.map(async addon => {
    await prisma.addon.upsert({
      where: { name: addon.name },
      update: addon,
      create: addon,
    });
  });

  const burgersCategory = await prisma.category.findFirst({
    where: { name: 'Hambúrgueres' },
  });

  PRODUCTS.map(async product => {
    await prisma.product.upsert({
      where: { name: product.name },
      update: product,
      create: { ...product, categoryId: burgersCategory.id },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
