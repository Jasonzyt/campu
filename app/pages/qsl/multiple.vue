<template>
  <div class="main m-auto px-14 py-11 border-2 border-gray-800">
    <div class="flex items-center">
      <Icon name="my:crac-logo" size="265px" />
      <div class="ml-10 flex-1">
        <div class="flex gap-8">
          <div>
            <h1 class="text-6xl font-bold">中华人民共和国个人业余无线电台</h1>
            <h2 class="text-[42px] font-normal ml-1">Personal Amateur Radio Station of P. R. China</h2>
          </div>
          <QslTableCell class="flex-1 mb-2" titleTopLeft="QSL No" horizontalAlign="left"># </QslTableCell>
        </div>
        <div class="mt-4 flex">
          <div class="mb-2">
            <h1 class="text-[135px] font-bold gradient-text">BH6SLW</h1>
          </div>
          <ArrowWithLabel class="mx-8" label="TO RADIO" color="var(--ui-text)" />
          <QslTableCell class="flex-1" />
        </div>
      </div>
    </div>
    <div class="mt-4 h-14 flex gap-4 rounded-xl bg-elevated px-6 py-4 text-[26px] font-medium items-center">
      <span class="flex-[3%]">#</span>
      <span class="flex-[26%]">DATE TIME</span>
      <span class="flex-[17%]">FREQ</span>
      <span class="flex-[6%]">MODE</span>
      <span class="flex-[5%]">RST</span>
      <span class="flex-[20%]">RIG</span>
      <span class="flex-[15%]">ANT</span>
      <span class="flex-[8%]">PWR</span>
    </div>
    <div class="mt-2.5 h-20 flex gap-4 rounded-xl bg-elevated px-6 py-4 text-3xl font-medium items-center">
      <span class="flex-[3%]">1</span>
    </div>
    <div class="mt-2.5 h-20 flex gap-4 rounded-xl bg-elevated px-6 py-4 text-3xl font-medium items-center">
      <span class="flex-[3%]">2</span>
    </div>
    <div class="mt-2.5 h-20 flex gap-4 rounded-xl bg-elevated px-6 py-4 text-3xl font-medium items-center">
      <span class="flex-[3%]">3</span>
    </div>
    <div class="mt-2.5 h-20 flex gap-4 rounded-xl bg-elevated px-6 py-4 text-3xl font-medium items-center">
      <span class="flex-[3%]">4</span>
    </div>
    <div class="mt-2.5 h-27 flex gap-2.5">
      <QslTableCell class="flex-[15%]" titleTopLeft="QTH" />
      <QslTableCell class="flex-[45%]" titleTopLeft="RMKS"><span class="flex-1 text-2xl font-medium text-right mt-4 mr-2">PSE / TNX QSL</span></QslTableCell>
      <QslTableCell class="flex-[40%]" titleTopLeft="OP"><span class="flex-1 text-4xl font-bold text-right">VY 73!</span></QslTableCell>
    </div>
    <div class="mt-6 flex gap-4">
      <div>
        <p class="text-2xl font-medium bg-transparent">Mailing address can be found on envelope or QRZ.com</p>
        <p class="mt-2 text-2xl font-medium bg-transparent">Design by BH6SLW / JacieZYT, shared under CC BY-NC-SA 4.0</p>
      </div>
      <div class="grow"></div>
      <div>
        <p class="text-2xl font-semibold font-mono bg-transparent"><Icon name="ic:round-mail" class="align-text-top mr-2" size="1.2em" />JacieZYT@gmail.com</p>
        <p class="mt-2 text-2xl font-semibold font-mono bg-transparent"><Icon name="tabler:world" class="align-text-top mr-2" size="1.2em" />https://zzzz.yt/</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QslTableCell from "~/components/QslTableCell.vue";

definePageMeta({
  layout: "blank",
});
</script>

<style scoped>
.main {
  width: 1480px;
  height: 1000px;
}

.gradient-text {
  background: linear-gradient(90deg, #5bcefa, #f5a9b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  line-height: 0.8em;
  font-family: "Inconsolata", "JetBrains Mono", monospace;
}

.font-noto {
  font-family: "Noto Sans", "JetBrains Mono", monospace;
}
</style>
