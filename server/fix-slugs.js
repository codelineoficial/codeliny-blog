import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function main() {
  const posts = await prisma.post.findMany();
  for (const post of posts) {
    if (!post.slug) {
      const baseSlug = slugify(post.title);
      let slug = baseSlug;
      let i = 1;
      // Garante unicidade
      while (await prisma.post.findFirst({ where: { slug } })) {
        slug = `${baseSlug}-${i++}`;
      }
      await prisma.post.update({
        where: { id: post.id },
        data: { slug },
      });
      console.log(`Slug atualizado para post '${post.title}': ${slug}`);
    }
  }
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
