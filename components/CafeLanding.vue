<template>
    <section>
        <section class="px-[84px] pt-[56px] bg-mainBlue">
        <article class="flex justify-between text-[28px] text-white">
            <div class="flex flex-col items-center gap-[13px]">
                <IconsWater />
                <p>{{ t('water') }}</p>
            </div>
            <div class="flex flex-col items-center gap-[13px]">
                <IconsMilk />
                <p>{{ t('milk') }}</p>
            </div>
            <div class="flex flex-col items-center gap-[13px]">
                <IconsFoam />
                <p>{{ t('foam') }}</p>
            </div>
            <div class="flex flex-col items-center gap-[13px]">
                <IconsChocolate />
                <p>{{ t('chocolate') }}</p>
            </div>
            <div class="flex flex-col items-center gap-[13px]">
                <IconsCoffe />
                <p>{{ t('coffee') }}</p>
            </div>
            <div class="flex flex-col items-center gap-[13px]">
                <IconsIce />
                <p>{{ t('ice') }}</p>
            </div>
        </article>

        <article class="text-[28px] text-relaxationBrown text-center py-[55px]">
            <p>{{ t('available_milks') }}</p>
            <p>{{ t('milk_list') }}</p>
        </article>

        <article class="grid grid-cols-4 grid-rows-2 gap-[13px] text-[28px] text-white">
            <div class="flex flex-col items-center gap-[13px]">
                <IconsExpresso class="grow" />
                <p>{{ t('espresso') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsLungo class="grow" />
                <p>{{ t('lungo') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsAmericano class="grow" />
                <p>{{ t('americano') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px] row-span-2 justify-center">
                <IconsFiltered />
                <p>{{ t('filtered') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsCapuccino class="grow" />
                <p>{{ t('capuccino') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsFlatWhite class="grow" />
                <p>{{ t('flat_white') }}</p>
            </div>

            <div class="flex flex-col items-center gap-[13px]">
                <IconsLatte class="grow" />
                <p>{{ t('latte') }}</p>
            </div>
        </article>

        <article class="text-[28px] text-white flex justify-center py-[29px] border-t border-b border-relaxationBrown w-[590px] m-auto mt-[70px] gap-[33px] items-end">
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

        <article class="border border-relaxationBrown rounded-[10px] px-[32px] py-[34px] flex justify-between items-center gap-[30px] mt-[70px]">
            <IconsPinned class="min-w-[106px] min-h-[106px]" />
            <p class="text-white text-[28px]">
                {{ t('temp_note') }}
            </p>
            <IconsTemp class="min-w-[141px] min-h-[123px]" />
        </article>

        <article class="flex mt-[70px] justify-between items-end text-[28px] text-white pb-[78px]">
            <div class="flex flex-col gap-[13px] items-center">
                <IconsIcedCoffe />
                <p>{{ t('iced_coffee') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsMate />
                <p>{{ t('mate') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsWhitoutAlcohol />
                <p>{{ t('without_alcohol') }}</p>
            </div>

             <div class="flex flex-col gap-[13px] items-center">
                <IconsWithAlcohol />
                <p>{{ t('with_alcohol') }}</p>
            </div>
        </article>

        
    </section>

    <section>
        <article class="takeaway py-[51px] px-[107px] flex flex-col gap-[37px]">
            <div class="flex">
                <p class="text-[70px] text-white font-semibold">{{ t('takeaway') }}</p>
                <IconsTakeAway class="grow" />
            </div>

            <div class="flex gap-[22px] items-center">
                <IconsHand />
                <p class="text-white text-[36px] font-semibold">{{ t('beans') }}</p>
                <IconsCoffeBean />
            </div>

            <div class="border border-relaxationBrown rounded-[10px] py-[27px] text-center">
                <p class="text-white text-[36px] font-semibold">{{ t('discount') }}</p>
            </div>
        </article>
    </section>
    </section>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const { t, locale } = useI18n()

watch(() => appStore.language, (newLang) => {
  locale.value = newLang
})
</script>

<style scoped>
.takeaway {
    background: linear-gradient(1.17deg, #774012 20.08%, #AF733C 64.45%);
}
</style>