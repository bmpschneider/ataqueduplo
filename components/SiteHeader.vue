<script setup lang="ts">
const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink-950/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="/" class="flex items-center gap-3">
        <img
          :src="'/images/logo-adjj-white.png'"
          alt="Ataque Duplo Jiu-Jitsu"
          class="h-10 w-auto"
        />
        <span class="hidden border-l border-white/20 pl-3 text-[0.7rem] uppercase tracking-[0.3em] text-white/70 sm:inline">
          São José
        </span>
      </a>
      <nav class="hidden gap-8 md:flex">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-white/80 transition hover:text-white"
        >
          {{ item.label }}
        </a>
      </nav>
      <a
        href="#contato"
        class="rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-500"
      >
        Experimente
      </a>
    </div>
  </header>
</template>
