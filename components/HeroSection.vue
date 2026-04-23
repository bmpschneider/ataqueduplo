<script setup lang="ts"></script>

<template>
  <section class="relative overflow-hidden bg-ink-950 text-white">
    <img
      :src="'/images/hero-turma.jpg'"
      alt="Turma de jiu-jitsu na Ataque Duplo"
      class="absolute inset-0 h-full w-full object-cover object-center opacity-45"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
    <div class="relative mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-14 sm:pb-24 sm:pt-16 lg:min-h-[calc(100vh-72px)] lg:grid-cols-2 lg:items-center lg:gap-12">
      <div class="min-w-0">
        <p class="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
          <span class="h-1.5 w-1.5 rounded-full bg-accent-500" />
          Bela Vista, São José — SC
        </p>
        <h1 class="font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl xl:text-6xl">
          A <span class="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">evolução</span> começa no tatame.
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Tradição <span class="font-semibold text-white">Ataque Duplo desde 1996</span>. Faça parte do
          <span class="font-semibold text-white">clã ADJJ</span> e treine com uma das equipes mais premiadas do jiu-jitsu brasileiro, agora no
          <span class="font-semibold text-white">Bela Vista, São José</span>.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/5548996483629?text=Ol%C3%A1%21%20Quero%20agendar%20uma%20aula%20experimental."
            target="_blank"
            rel="noopener"
            class="w-full rounded-xl bg-accent-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-accent-900/30 transition hover:bg-accent-500 sm:w-auto sm:text-lg"
          >
            Agendar aula experimental
          </a>
        </div>
        <dl class="mt-12 grid max-w-xl grid-cols-3 gap-8 border-t border-white/10 pt-6">
          <div>
            <dt class="text-xs uppercase tracking-widest text-white/60">Fundada em</dt>
            <dd class="mt-1 font-display text-3xl">1996</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-widest text-white/60">Atletas no</dt>
            <dd class="mt-1 font-display text-3xl">UFC</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-widest text-white/60">Títulos</dt>
            <dd class="mt-1 font-display text-3xl">IBJJF</dd>
          </div>
        </dl>
      </div>
      <div class="relative hidden items-center justify-center lg:flex">
        <div class="absolute inset-0 -z-10 flex items-center justify-center blur-3xl">
          <div class="h-3/4 w-3/4 rounded-full bg-accent-600/30" />
        </div>
        <img
          :src="'/images/logo-adjj-white.png'"
          alt="Logo Ataque Duplo Jiu-Jitsu"
          class="h-56 w-auto drop-shadow-[0_10px_40px_rgba(217,29,29,0.4)] sm:h-72 lg:h-[22rem]"
        />
      </div>
    </div>
  </section>
</template>
