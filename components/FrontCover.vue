<template>
    <!-- Fixed overlay (centered to the menu's 1080px column) so it can fade out over the menu. -->
    <section class="fixed inset-0 z-40 mx-auto h-screen w-full max-w-[1080px] overflow-hidden bg-bg">
        <img src="/images/front-cover.jpg" class="kenburns absolute inset-0 h-full w-full object-cover" alt="" />
        <div class="absolute inset-0 bg-gradient-to-b from-[rgba(6,8,11,.7)] via-[rgba(6,8,11,.25)] to-[rgba(6,8,11,.96)]" />

        <div class="relative flex h-full flex-col items-center justify-between px-[48px] pt-[64px] pb-[96px] text-center">
            <img src="/logos/eh-logo-horizontal-blanco.svg" class="rise-in w-[300px]" style="--rise-delay: 100ms" alt="EH Boutique Experience" />

            <div class="flex flex-col items-center">
                <div class="rise-in font-body text-[20px] font-light tracking-[0.3em] text-gold" style="--rise-delay: 250ms">{{ t('menu.brand').toUpperCase() }}</div>
                <h1 class="rise-in mt-[14px] font-display text-[110px] leading-none font-medium text-cream" style="--rise-delay: 350ms">{{ t('menu.title') }}</h1>
                <p class="rise-in mt-[24px] max-w-[640px] font-display text-[32px] leading-[1.4] italic text-[#cbc6ba]" style="--rise-delay: 480ms">{{ t('menu.cover') }}</p>

                <button
                    type="button"
                    class="rise-in cover-cta mt-[56px] flex items-center gap-[14px] rounded-full bg-gradient-to-b from-[#cba968] to-[#b5924f] px-[48px] py-[22px] font-body text-[22px] font-medium tracking-[0.06em] text-[#1a140a]"
                    style="--rise-delay: 640ms"
                    @click="emit('close')"
                >
                    {{ t('menu.viewMenu') }}
                    <span class="cover-cta-arrow ms text-[28px]">arrow_forward</span>
                </button>

                <Languages class="rise-in mt-[40px]" style="--rise-delay: 760ms" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { FrontCoverEmits } from '~/types/FrontCover';

const emit = defineEmits<FrontCoverEmits>()
const { t } = useTranslate()
</script>

<style scoped>
.kenburns {
    animation: kenburns 28s ease-in-out infinite;
}

.rise-in {
    animation: rise-in 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both;
    animation-delay: var(--rise-delay, 0ms);
}

/* Gentle "tap me" nudge on the arrow once the entrance has settled. */
.cover-cta-arrow {
    animation: nudge-x 2.4s ease-in-out 1.8s infinite;
}

@keyframes nudge-x {
    0%, 60%, 100% {
        transform: translateX(0);
    }
    30% {
        transform: translateX(6px);
    }
}
</style>
