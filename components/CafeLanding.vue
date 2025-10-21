<template>
    <section>
        <section class="px-[84px] pt-[56px] bg-mainBlue">
        <article
  class="flex justify-center gap-[32px] text-[28px] text-white"
>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsWater class="w-[70px] h-[70px]" />
    <p>{{ t('water') }}</p>
  </div>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsMilk class="w-[70px] h-[70px]" />
    <p>{{ t('milk') }}</p>
  </div>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsFoam class="w-[70px] h-[70px]" />
    <p>{{ t('foam') }}</p>
  </div>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsChocolate class="w-[70px] h-[70px]" />
    <p>{{ t('chocolate') }}</p>
  </div>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsCoffe class="w-[70px] h-[70px]" />
    <p>{{ t('coffee') }}</p>
  </div>
  <div class="flex flex-col items-center gap-[13px] min-w-[60px]">
    <IconsIce class="w-[70px] h-[70px]" />
    <p>{{ t('ice') }}</p>
  </div>
</article>


        <article class="text-[24px] text-relaxationBrown text-center py-[55px]">
            <p>{{ t('available_milks') }}</p>
            <p>{{ t('milk_list') }}</p>
        </article>

        <article class="grid grid-cols-4 grid-rows-2 gap-[13px] text-[28px] text-white">
            <div class="flex flex-col items-center gap-[13px]">
                <IconsExpresso class="grow w-[85px] h-[85px]" />
                <p>{{ t('espresso') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsLungo class="grow w-[85px] h-[85px]" />
                <p>{{ t('lungo') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsAmericano class="grow w-[85px] h-[85px]" />
                <p>{{ t('americano') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px] row-span-2 justify-center">
                <IconsFiltered class="w-[100px] h-[100px]" />
                <p>{{ t('filtered') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsCapuccino class="grow w-[85px] h-[85px]" />
                <p>{{ t('capuccino') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsFlatWhite class="grow w-[85px] h-[85px]" />
                <p>{{ t('flat_white') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsLatte class="grow w-[85px] h-[85px]" />
                <p>{{ t('latte') }}</p>
            </div>
        </article>

        <article class="text-[24px] text-white flex justify-center py-[29px] border-t border-b border-relaxationBrown w-[590px] m-auto mt-[70px] gap-[33px] items-end">
            <div class="flex flex-col gap-[13px] items-center">
                <Icons240 />
                <p>{{ t('volume_240') }}</p>
            </div>

            <div class="flex flex-col gap-[13px] items-center">
                <Icons180 />
                <p>{{ t('volume_180') }}</p>
            </div>

            <div class="flex flex-col gap-[13px] items-center">
                <Icons100 />
                <p>{{ t('volume_100') }}</p>
            </div>
        </article>

        <article class="border border-relaxationBrown rounded-[10px] px-[28px] py-[34px] flex justify-between items-center gap-[20px] mt-[70px]">
            <IconsPinned class="min-w-[65px] min-h-[65px]" />
            <p class="text-white text-[22px] text-pretty leading-6">
                {{ t('temp_note') }}
            </p>
            <IconsTemp class="min-w-[100px] min-h-[100px]" />
        </article>

        <article class="flex mt-[70px] justify-between items-end text-[24px] text-white pb-[78px]">
            <div class="flex flex-col gap-[13px] items-center">
                <IconsIcedCoffe class="w-[95px] h-[95px]" />
                <p>{{ t('iced_coffee') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsMate class="w-[95px] h-[95px]" />
                <p>{{ t('mate') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsWhitoutAlcohol class="w-[95px] h-[95px]" />
                <p>{{ t('without_alcohol') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsWithAlcohol class="w-[95px] h-[95px]" />
                <p>{{ t('with_alcohol') }}</p>
            </div>
        </article>

        
    </section>

    <section>
        <article class="takeaway py-[51px] px-[107px] flex flex-col gap-[20px]">
            <div class="flex items-center gap-[5px]">
                <p class="text-[50px] text-white font-semibold ">{{ t('takeaway') }}</p>
                <IconsTakeAway class="max-w-[300px] grow"  />
            </div>

            <div class="flex gap-[22px] items-center justify-between">
                <IconsHand class="w-[60px] h-[60px]" />
                <p class="text-white text-[26px] font-semibold">{{ t('beans') }}</p>
                <IconsCoffeBean class="w-[60px] h-[60px]" />
            </div>

            <div class="border border-relaxationBrown rounded-[10px] py-[18px] text-center">
                <p class="text-white text-[32px] font-semibold">{{ t('discount') }}</p>
            </div>
        </article>
    </section>
    </section>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore'

import es from '~/i18n/lang/es.json'
import en from '~/i18n/lang/en.json'
import pt from '~/i18n/lang/pt.json'

const appStore = useAppStore()

const messages: Record<string, Record<string, string>> = {
  es,
  en,
  pt,
}

const t = (key: string) => {
  const lang = appStore.language || 'es'
  return messages[lang][key] || key
}
</script>

<style scoped>
.takeaway {
    background: linear-gradient(1.17deg, #774012 20.08%, #AF733C 64.45%);
}
</style>