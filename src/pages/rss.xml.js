import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
 return rss({
  title: 'Astro Learner | Blog',
  description: 'My journey learning Astro',
  site: 'https://clinquant-centaur-7a72c6.netlify.app/',
  items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
  customData: `<language>en-us</language>`,
 });
}