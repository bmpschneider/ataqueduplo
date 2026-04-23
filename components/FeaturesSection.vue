<script setup lang="ts">
const modalidades = [
  {
    title: 'Jiu-Jitsu Adulto',
    description:
      'Turmas para iniciantes e avançados, com foco em fundamentos, técnica e sparring controlado.',
  },
  {
    title: 'ADJJ Kids',
    description:
      'Aulas para crianças a partir dos 4 anos. Disciplina, coordenação e valores através do esporte.',
  },
  {
    title: 'Feminino',
    description:
      'Horários específicos para mulheres, em um ambiente acolhedor e com instrução dedicada.',
  },
  {
    title: 'No-Gi',
    description:
      'Treinos sem kimono voltados para grappling, competição e preparação para MMA.',
  },
  {
    title: 'Competição',
    description:
      'Equipe de competidores com preparação técnica, física e mental para torneios IBJJF e AJP.',
  },
  {
    title: 'Condicionamento',
    description:
      'Complemento físico específico para jiu-jitsu: força, mobilidade e resistência no tatame.',
  },
]
</script>

<template>
  <section id="modalidades" class="bg-ink-50">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
          O que você treina aqui
        </p>
        <h2 class="mt-4 font-display text-5xl tracking-wide text-ink-950 sm:text-6xl">
          Modalidades
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-ink-600">
          Programas para <span class="font-semibold text-ink-900">todas as idades e níveis</span>, do primeiro dia no tatame à competição de alto rendimento.
        </p>
      </div>
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in modalidades"
          :key="item.title"
          class="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-8 transition hover:-translate-y-1 hover:border-accent-600 hover:shadow-lg"
        >
          <span class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-600 transition group-hover:scale-x-100" />
          <h3 class="font-display text-3xl tracking-wide text-ink-950">{{ item.title }}</h3>
          <p class="mt-3 text-base leading-relaxed text-ink-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
