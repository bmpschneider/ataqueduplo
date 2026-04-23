<script setup lang="ts"></script>

<template>
  <section id="sobre" class="bg-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-8">
      <div class="md:col-start-1 md:row-start-1">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
          Nosso legado
        </p>
        <h2 class="mt-4 font-display text-5xl tracking-wide text-ink-950 sm:text-6xl">
          Uma história de luta desde <span class="text-accent-600">1996</span>
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-ink-700">
          Fundada em Florianópolis por <span class="font-semibold text-ink-950">Murilo Rupp e Sergio Sá</span>, a Ataque Duplo formou campeões
          dentro e fora do tatame. Nossos atletas já competiram em eventos como <span class="font-semibold text-ink-950">UFC, Bellator,
          Jungle Fight, Copa Pódio, IBJJF e Abu Dhabi Pro</span>.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-ink-700">
          A filial de São José carrega essa mesma bandeira: <span class="font-semibold text-ink-950">metodologia séria</span>, <span class="font-semibold text-ink-950">comunidade forte</span>
          e a tradição do clã ADJJ para quem quer começar ou evoluir no jiu-jitsu.
        </p>
      </div>
      <div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink-900/10 md:col-start-2 md:row-span-2 md:row-start-1">
        <img
          :src="'/images/competicao.jpg'"
          alt="Atleta ADJJ em competição"
          class="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-start-1 md:row-start-2">
        <div class="rounded-2xl bg-ink-950 px-6 py-4 text-white">
          <p class="font-display text-4xl leading-none">28+</p>
          <p class="mt-1 text-xs uppercase tracking-widest text-white/70">Anos de tatame</p>
        </div>
        <div class="rounded-2xl bg-accent-600 px-6 py-4 text-white">
          <p class="font-display text-4xl leading-none">ADJJ</p>
          <p class="mt-1 text-xs uppercase tracking-widest text-white/80">Faça parte do clã</p>
        </div>
      </div>
    </div>
  </section>
</template>
