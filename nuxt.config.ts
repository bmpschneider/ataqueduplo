export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Ataque Duplo Jiu-Jitsu — São José / SC',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Academia Ataque Duplo Jiu-Jitsu em São José, SC. Aulas para adultos, kids e iniciantes. Faça parte do clã ADJJ.',
        },
        { property: 'og:title', content: 'Ataque Duplo Jiu-Jitsu — São José / SC' },
        {
          property: 'og:description',
          content:
            'Tradição desde 1996. Aulas de Jiu-Jitsu em São José, SC para todos os níveis.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.ataqueduplobelavista.com.br/' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
