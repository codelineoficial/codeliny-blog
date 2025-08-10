import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const posts = [
  {
    title: "Como Criar Landing Pages que Convertem 10x Mais",
    excerpt: "Descubra as estratégias e técnicas avançadas para criar landing pages que realmente convertem visitantes em clientes.",
    category: "Marketing Digital",
    author: "Ana Silva",
    date: "15 Jan 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: true,
    status: "published"
  },
  {
    title: "Design System Completo para Empresas Modernas",
    excerpt: "Aprenda a implementar um design system robusto que acelere o desenvolvimento e mantenha consistência visual.",
    category: "Design",
    author: "Carlos Santos",
    date: "12 Jan 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop",
    featured: false,
    status: "published"
  },
  {
    title: "ROI em Marketing Digital: Métricas que Importam",
    excerpt: "Entenda quais métricas realmente impactam o ROI do seu marketing digital e como otimizá-las.",
    category: "Analytics",
    author: "Maria Costa",
    date: "10 Jan 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: false,
    status: "published"
  },
  {
    title: "Automação de Marketing: Guia Completo 2024",
    excerpt: "Como implementar automação de marketing que nutri leads e aumenta vendas sem esforço manual.",
    category: "Marketing Digital",
    author: "João Santos",
    date: "8 Jan 2024",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    featured: false,
    status: "published"
  },
  {
    title: "UX/UI Design: Tendências para 2024",
    excerpt: "As principais tendências de design que vão dominar 2024 e como aplicá-las em seus projetos.",
    category: "Design",
    author: "Laura Mendes",
    date: "5 Jan 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
    featured: false,
    status: "published"
  },
  {
    title: "SEO Técnico: Otimizações Avançadas",
    excerpt: "Técnicas avançadas de SEO técnico para melhorar o ranking do seu site nos buscadores.",
    category: "SEO",
    author: "Pedro Lima",
    date: "3 Jan 2024",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
    featured: false,
    status: "published"
  }
];

async function main() {
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log('Posts inseridos com sucesso!');
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
