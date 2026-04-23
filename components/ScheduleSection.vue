<script setup lang="ts">
type Tipo = 'jj' | 'nogi' | 'kids' | 'feminino' | 'avancado' | 'drill' | 'judo' | 'open' | 'mt'
type Aula = { label: string; tipo: Tipo } | null

const activeMat = ref<'mat1' | 'mat2'>('mat1')

const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'] as const
const diasFull = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'] as const

const mat1: { hora: string; aulas: Aula[] }[] = [
  { hora: '06:30', aulas: [
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
  ] },
  { hora: '09:00', aulas: [
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
  ] },
  { hora: '10:00', aulas: [
    null, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    null, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    null, { label: 'Open Mat', tipo: 'open' },
  ] },
  { hora: '11:00', aulas: [
    { label: 'Drill', tipo: 'drill' }, { label: 'Drill', tipo: 'drill' },
    { label: 'Drill · No-Gi', tipo: 'drill' }, { label: 'Drill', tipo: 'drill' },
    { label: 'Drill', tipo: 'drill' }, null,
  ] },
  { hora: '12:30', aulas: [
    { label: 'Jiu-Jitsu Avançado', tipo: 'avancado' }, { label: 'Jiu-Jitsu Avançado', tipo: 'avancado' },
    { label: 'No-Gi Avançado', tipo: 'nogi' }, { label: 'Jiu-Jitsu Avançado', tipo: 'avancado' },
    { label: 'Jiu-Jitsu Avançado', tipo: 'avancado' }, null,
  ] },
  { hora: '16:00', aulas: [
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
  ] },
  { hora: '18:00', aulas: [
    { label: 'Jiu-Jitsu Feminino', tipo: 'feminino' }, { label: 'Judô', tipo: 'judo' },
    { label: 'Jiu-Jitsu Feminino', tipo: 'feminino' }, { label: 'Judô', tipo: 'judo' },
    null, null,
  ] },
  { hora: '19:00', aulas: [
    null, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    null, { label: 'Jiu-Jitsu Kids 1 | 2 | 3', tipo: 'kids' },
    null, null,
  ] },
  { hora: '20:00', aulas: [
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' },
    { label: 'No-Gi Básico/Interm.', tipo: 'nogi' }, { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' },
    { label: 'Jiu-Jitsu Básico/Interm.', tipo: 'jj' }, null,
  ] },
]

const mat2: { hora: string; aulas: Aula[] }[] = [
  { hora: '07:00', aulas: [
    { label: 'Muay-Thai', tipo: 'mt' }, null,
    { label: 'Muay-Thai', tipo: 'mt' }, null,
    { label: 'Muay-Thai', tipo: 'mt' }, null,
  ] },
  { hora: '09:00', aulas: [
    null, { label: 'Muay-Thai Kids', tipo: 'kids' },
    null, { label: 'Muay-Thai Kids', tipo: 'kids' },
    null, null,
  ] },
  { hora: '17:00', aulas: [
    { label: 'Muay-Thai Feminino', tipo: 'feminino' }, null,
    { label: 'Muay-Thai Feminino', tipo: 'feminino' }, null,
    null, null,
  ] },
  { hora: '18:00', aulas: [
    null, { label: 'Muay-Thai Kids', tipo: 'kids' },
    null, { label: 'Muay-Thai Kids', tipo: 'kids' },
    null, null,
  ] },
  { hora: '19:00', aulas: [
    { label: 'Muay-Thai', tipo: 'mt' }, { label: 'Muay-Thai', tipo: 'mt' },
    { label: 'Muay-Thai', tipo: 'mt' }, { label: 'Muay-Thai', tipo: 'mt' },
    { label: 'Muay-Thai', tipo: 'mt' }, null,
  ] },
]

const grade = computed(() => (activeMat.value === 'mat1' ? mat1 : mat2))

const gradePorDia = computed(() =>
  diasFull
    .map((dia, idx) => ({
      dia,
      aulas: grade.value
        .map((linha) => (linha.aulas[idx] ? { hora: linha.hora, ...linha.aulas[idx]! } : null))
        .filter((a): a is { hora: string; label: string; tipo: Tipo } => a !== null),
    }))
    .filter((d) => d.aulas.length > 0),
)

const tipoClasses: Record<Tipo, string> = {
  jj: 'bg-white/10 text-white ring-white/15',
  nogi: 'bg-accent-500/15 text-accent-100 ring-accent-500/30',
  kids: 'bg-amber-400/15 text-amber-100 ring-amber-400/30',
  feminino: 'bg-pink-500/15 text-pink-100 ring-pink-400/30',
  avancado: 'bg-accent-600/20 text-accent-50 ring-accent-500/40',
  drill: 'bg-sky-500/15 text-sky-100 ring-sky-400/30',
  judo: 'bg-emerald-500/15 text-emerald-100 ring-emerald-400/30',
  open: 'bg-violet-500/15 text-violet-100 ring-violet-400/30',
  mt: 'bg-white/10 text-white ring-white/15',
}

const legenda = computed(() =>
  activeMat.value === 'mat1'
    ? [
        { tipo: 'jj' as Tipo, label: 'Jiu-Jitsu' },
        { tipo: 'avancado' as Tipo, label: 'Avançado' },
        { tipo: 'nogi' as Tipo, label: 'No-Gi' },
        { tipo: 'drill' as Tipo, label: 'Drill' },
        { tipo: 'kids' as Tipo, label: 'Kids' },
        { tipo: 'feminino' as Tipo, label: 'Feminino' },
        { tipo: 'judo' as Tipo, label: 'Judô' },
        { tipo: 'open' as Tipo, label: 'Open Mat' },
      ]
    : [
        { tipo: 'mt' as Tipo, label: 'Muay-Thai' },
        { tipo: 'kids' as Tipo, label: 'Kids' },
        { tipo: 'feminino' as Tipo, label: 'Feminino' },
      ],
)
</script>

<template>
  <section id="horarios" class="relative overflow-hidden bg-ink-950 text-white">
    <img
      :src="'/images/luta-tatame.jpg'"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-15"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />
    <div class="relative mx-auto max-w-6xl px-6 py-24">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">Agenda semanal</p>
        <h2 class="mt-4 font-display text-5xl tracking-wide sm:text-6xl">Horários</h2>
        <p class="mt-4 text-lg leading-relaxed text-white/70">
          Grade completa da semana — <span class="font-semibold text-white">confirme alterações</span> pelo WhatsApp antes da primeira aula.
        </p>
      </div>

      <div class="mt-10 flex justify-center">
        <div class="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
          <button
            type="button"
            class="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition"
            :class="activeMat === 'mat1' ? 'bg-accent-500 text-white' : 'text-white/70 hover:text-white'"
            @click="activeMat = 'mat1'"
          >
            Jiu-Jitsu / Judô
          </button>
          <button
            type="button"
            class="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition"
            :class="activeMat === 'mat2' ? 'bg-accent-500 text-white' : 'text-white/70 hover:text-white'"
            @click="activeMat = 'mat2'"
          >
            Muay-Thai
          </button>
        </div>
      </div>

      <div class="mt-8 hidden overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur md:block">
        <table class="min-w-[880px] w-full border-collapse text-left">
          <thead>
            <tr class="text-[11px] uppercase tracking-[0.2em] text-white/50">
              <th class="w-24 px-4 py-4">Hora</th>
              <th v-for="dia in dias" :key="dia" class="px-3 py-4">{{ dia }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(linha, idx) in grade"
              :key="linha.hora"
              class="border-t border-white/5"
              :class="idx % 2 === 1 ? 'bg-white/[0.02]' : ''"
            >
              <td class="px-4 py-3 align-middle font-display text-2xl tracking-wide text-accent-500">
                {{ linha.hora }}
              </td>
              <td v-for="(aula, i) in linha.aulas" :key="i" class="px-2 py-3 align-middle">
                <div
                  v-if="aula"
                  class="inline-flex min-h-[42px] w-full items-center rounded-lg px-3 py-2 text-[12px] leading-tight ring-1"
                  :class="tipoClasses[aula.tipo]"
                >
                  {{ aula.label }}
                </div>
                <div v-else class="h-[42px] w-full rounded-lg border border-dashed border-white/5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6 space-y-4 md:hidden">
        <div
          v-for="bloco in gradePorDia"
          :key="bloco.dia"
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
        >
          <p class="font-display text-3xl tracking-wide text-accent-500">{{ bloco.dia }}</p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="aula in bloco.aulas"
              :key="aula.hora + aula.label"
              class="flex items-center gap-3"
            >
              <span class="w-14 shrink-0 font-display text-xl tracking-wide text-white/80">{{ aula.hora }}</span>
              <span
                class="flex-1 rounded-lg px-3 py-2 text-sm leading-tight ring-1"
                :class="tipoClasses[aula.tipo]"
              >
                {{ aula.label }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
        <span
          v-for="item in legenda"
          :key="item.tipo"
          class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ring-1"
          :class="tipoClasses[item.tipo]"
        >
          {{ item.label }}
        </span>
      </div>

      <p class="mt-8 text-center text-xs leading-relaxed text-white/60">
        Alterações na grade serão informadas com antecedência
      </p>
    </div>
  </section>
</template>
