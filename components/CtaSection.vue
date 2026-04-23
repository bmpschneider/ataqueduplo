<script setup lang="ts"></script>

<template>
  <section id="contato" class="relative overflow-hidden bg-ink-950 text-white">
    <img
      :src="'/images/hero-turma.jpg'"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-25"
    />
    <div class="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-ink-950/80 to-accent-950/60" />
    <div class="relative mx-auto max-w-4xl px-6 py-24 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
        Faça parte do clã ADJJ
      </p>
      <h2 class="mt-4 font-display text-5xl tracking-wide sm:text-7xl">
        Sua <span class="text-accent-500">primeira aula</span> é por nossa conta
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
        Venha conhecer a academia, o professor e a turma. Traga kimono se tiver — <span class="font-semibold text-white">se não, a gente ajusta</span>. O tatame é seu.
      </p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener"
          class="rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-500"
        >
          Falar no WhatsApp
        </a>
        <a
          href="https://instagram.com/ataqueduplooficial"
          target="_blank"
          rel="noopener"
          class="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          @ataqueduplooficial
        </a>
      </div>
    </div>
  </section>
</template>
