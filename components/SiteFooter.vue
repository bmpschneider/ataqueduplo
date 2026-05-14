<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-ink-950 text-white/70">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
      <div>
        <img
          :src="'/images/logo-adjj-white.png'"
          alt="Ataque Duplo Jiu-Jitsu"
          class="h-12 w-auto"
        />
        <p class="mt-4 max-w-xs text-sm text-white/60">
          Ataque Duplo Jiu-Jitsu — Filial São José / SC. Tradição desde 1996.
        </p>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">Endereço</p>
        <address class="mt-3 space-y-1 text-sm not-italic text-white/80">
          <p>R. Santa Catarina — Bela Vista</p>
          <p>São José — SC, 88110-300</p>
        </address>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">Siga</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li>
            <a
              href="https://www.instagram.com/ataqueduplohq/"
              target="_blank"
              rel="noopener"
              class="text-white/80 transition hover:text-white"
            >
              Instagram · @ataqueduplohq
            </a>
          </li>
          <li>
            <a
              href="https://www.ataqueduplobelavista.com.br/"
              target="_blank"
              rel="noopener"
              class="text-white/80 transition hover:text-white"
            >
              ataqueduplobelavista.com.br
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row">
        <p>© {{ year }} Ataque Duplo Jiu-Jitsu. Todos os direitos reservados.</p>
        <p>Feito para o clã ADJJ — São José / SC</p>
      </div>
    </div>
  </footer>
</template>
