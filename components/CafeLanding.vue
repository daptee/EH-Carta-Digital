<script setup lang="ts">
const { t } = useTranslate()

const INGREDIENTS = [
  { key: 'water', icon: 'water_drop' },
  { key: 'milk', icon: 'local_drink' },
  { key: 'foam', icon: 'waves' },
  { key: 'chocolate', icon: 'cookie' },
  { key: 'coffee', icon: 'coffee' },
  { key: 'ice', icon: 'ac_unit' },
] as const

const PREPARATIONS = [
  { key: 'espresso', icon: 'coffee' },
  { key: 'lungo', icon: 'coffee' },
  { key: 'americano', icon: 'local_cafe' },
  { key: 'capuccino', icon: 'emoji_food_beverage' },
  { key: 'flatWhite', icon: 'local_cafe' },
  { key: 'latte', icon: 'local_cafe' },
  { key: 'filtered', icon: 'coffee_maker' },
] as const

const SIZES = ['240cc', '180cc', '100cc']
</script>

<template>
  <div>
    <div class="flex justify-center px-[48px] pt-[48px]">
      <p v-reveal class="max-w-[860px] text-center font-display text-[42px] leading-[1.4] font-normal text-[#cbc6ba] italic">
        {{ t('cafeInfo.intro') }}
      </p>
    </div>

    <div class="px-[48px] pt-[56px]">
      <div v-reveal class="mb-[26px] font-body text-[22px] font-normal tracking-[0.24em] text-gold uppercase">{{ t('cafeInfo.ingredientsTitle') }}</div>
      <div class="grid grid-cols-6 gap-[20px]">
        <div
          v-for="(ing, i) in INGREDIENTS"
          v-reveal="i * 70"
          :key="ing.key"
          class="flex flex-col items-center gap-[16px] rounded-[20px] border border-white/7 bg-[#111721] px-[10px] py-[30px]"
        >
          <span class="ms text-[48px] text-gold">{{ ing.icon }}</span>
          <span class="text-center font-body text-[26px] font-light tracking-[0.04em] text-[#cbc6ba]">{{ t(`cafeInfo.ingredients.${ing.key}`) }}</span>
        </div>
      </div>
      <div v-reveal class="mt-[26px] flex items-start gap-[18px] rounded-[20px] border border-gold/22 bg-gold/8 px-[30px] py-[26px]">
        <span class="ms text-[36px] text-gold">info</span>
        <span class="font-body text-[28px] leading-[1.5] font-light text-[#cbc6ba]">{{ t('cafeInfo.milkNote') }}</span>
      </div>
    </div>

    <div class="px-[48px] pt-[56px]">
      <div v-reveal class="mb-[24px] text-center font-body text-[22px] font-normal tracking-[0.24em] text-gold uppercase">{{ t('cafeInfo.preparationsTitle') }}</div>
      <div class="flex flex-wrap justify-center gap-[16px]">
        <div
          v-for="(prep, i) in PREPARATIONS"
          v-reveal="i * 60"
          :key="prep.key"
          class="flex items-center gap-[14px] rounded-full border border-white/8 bg-[#111721] py-[16px] pr-[32px] pl-[24px]"
        >
          <span class="ms text-[36px] text-gold">{{ prep.icon }}</span>
          <span class="font-body text-[28px] font-light text-[#e3ddd1]">{{ t(`cafeInfo.preparations.${prep.key}`) }}</span>
        </div>
      </div>

      <div v-reveal class="mt-[32px] flex flex-col items-center gap-[16px] border-t border-white/8 pt-[28px]">
        <div class="flex justify-center gap-[40px]">
          <span v-for="size in SIZES" :key="size" class="font-display text-[46px] font-medium text-cream">{{ size }}</span>
        </div>
        <span class="font-body text-[22px] font-light tracking-[0.2em] text-muted-2">{{ t('cafeInfo.sizesLabel').toUpperCase() }}</span>
      </div>
    </div>

    <div class="px-[48px] pt-[56px]">
      <div
        v-reveal
        class="flex items-center gap-[34px] overflow-hidden rounded-[28px] border border-gold/32 bg-[linear-gradient(150deg,#241b12,#14100b)] px-[46px] py-[44px]"
      >
        <span class="ms flex-none text-[66px] text-gold">takeout_dining</span>
        <div class="flex-1">
          <div class="font-display text-[58px] leading-none font-medium text-cream">{{ t('cafeInfo.takeawayTitle') }}</div>
          <div class="mt-[12px] font-body text-[28px] font-light text-[#cbc6ba]">{{ t('cafeInfo.takeawayBody') }}</div>
        </div>
        <div class="flex flex-none items-center gap-[16px] rounded-full border border-gold/40 bg-gold/14 px-[32px] py-[20px]">
          <span class="ms text-[32px] text-gold">sell</span>
          <span class="font-body text-[26px] font-normal text-cream">{{ t('cafeInfo.takeawayOffer') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
