<script setup lang="ts">
const mapSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('R. Santa Catarina, Bela Vista, São José - SC, 88110-300') +
  '&output=embed'
</script>

<template>
  <section id="localizacao" class="bg-white">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">Onde treinar</p>
          <h2 class="mt-4 font-display text-5xl tracking-wide text-ink-950 sm:text-6xl">
            Bela Vista — São José
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-ink-700">
            A filial fica em um ponto de <span class="font-semibold text-ink-950">fácil acesso do Bela Vista</span>, próxima ao centro de São José
            e com chegada rápida vindo de <span class="font-semibold text-ink-950">Florianópolis, Palhoça e Biguaçu</span>.
          </p>
          <address class="mt-8 space-y-2 not-italic text-ink-800">
            <p class="font-semibold">Ataque Duplo São José</p>
            <p>R. Santa Catarina — Bela Vista</p>
            <p>São José — SC, 88110-300</p>
          </address>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Santa+Catarina+Bela+Vista+S%C3%A3o+Jos%C3%A9+SC"
              target="_blank"
              rel="noopener"
              class="rounded-lg bg-ink-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Abrir no Google Maps
            </a>
            <a
              href="#contato"
              class="rounded-lg border border-ink-300 px-5 py-3 text-center text-sm font-semibold text-ink-800 transition hover:bg-ink-100"
            >
              Falar com a academia
            </a>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl border border-ink-200 shadow-sm">
          <iframe
            :src="mapSrc"
            class="h-80 w-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa — Ataque Duplo São José"
          />
        </div>
      </div>
    </div>
  </section>
</template>
