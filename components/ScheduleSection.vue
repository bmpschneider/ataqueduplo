<script setup lang="ts">
const horarios = [
  { periodo: 'Manhã', faixas: ['06h30 — Adulto', '09h00 — Feminino'] },
  { periodo: 'Tarde', faixas: ['16h30 — Kids', '17h30 — Juvenil'] },
  { periodo: 'Noite', faixas: ['19h00 — Adulto', '20h30 — No-Gi / Competição'] },
]
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
          Grade de referência — <span class="font-semibold text-white">confirme os horários atualizados</span> pelo WhatsApp antes da primeira aula.
        </p>
      </div>
      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div
          v-for="bloco in horarios"
          :key="bloco.periodo"
          class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <p class="font-display text-4xl tracking-wide text-accent-500">{{ bloco.periodo }}</p>
          <ul class="mt-6 space-y-3">
            <li
              v-for="faixa in bloco.faixas"
              :key="faixa"
              class="border-l-2 border-accent-600 pl-3 text-base text-white/90"
            >
              {{ faixa }}
            </li>
          </ul>
        </div>
      </div>
      <p class="mt-10 text-center text-xs uppercase tracking-[0.3em] text-white/60">
        Seg a Sáb · Aulas em diversos horários
      </p>
    </div>
  </section>
</template>
