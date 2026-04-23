<script setup lang="ts">
const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const hidden = ref(false)
let lastY = 0
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    const delta = y - lastY
    if (y < 80) {
      hidden.value = false
    } else if (delta > 4) {
      hidden.value = true
    } else if (delta < -4) {
      hidden.value = false
    }
    lastY = y
    ticking = false
  })
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-ink-900/10 bg-white/90 backdrop-blur transition-transform duration-300 will-change-transform"
    :class="{ '-translate-y-full': hidden && !open }"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="/" class="flex items-center gap-3">
        <img
          :src="'/images/logo-adjj-black.png'"
          alt="Ataque Duplo Jiu-Jitsu"
          class="h-10 w-auto"
        />
        <span class="hidden border-l border-ink-900/20 pl-3 text-[0.7rem] uppercase tracking-[0.3em] text-ink-900/60 sm:inline">
          São José
        </span>
      </a>
      <nav class="hidden gap-8 md:flex">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-ink-900/75 transition hover:text-accent-600"
        >
          {{ item.label }}
        </a>
      </nav>
      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/15 text-ink-900 transition hover:bg-ink-900/5 md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Abrir menu"
        @click="toggle"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <nav
        v-if="open"
        id="mobile-nav"
        class="absolute inset-x-0 top-full border-t border-ink-900/10 bg-white/90 shadow-lg backdrop-blur md:hidden"
      >
        <ul class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
          <li v-for="item in nav" :key="item.href">
            <a
              :href="item.href"
              class="block rounded-lg px-3 py-3 text-base font-medium text-ink-900/80 transition hover:bg-accent-50 hover:text-accent-600"
              @click="close"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
