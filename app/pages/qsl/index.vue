<template>
  <div class="main m-auto px-14 py-12 border-2 border-gray-800">
    <div class="flex items-center">
      <Icon name="my:crac-logo" size="300px" />
      <div class="ml-10 flex-1">
        <h1 class="text-[78px] font-bold">中华人民共和国个人业余无线电台</h1>
        <h2 class="text-5xl font-normal ml-1.5">Personal Amateur Radio Station of P. R. China</h2>
        <div class="mt-6 flex">
          <div>
            <h1 class="text-[104px] font-bold font-mono gradient-text">BH6SLW</h1>
            <h2 class="text-xl font-medium mx-2 flex">
              <span class="grow">GRID / OM70eo</span>
              <span class="grow text-center">ITU / 44</span>
              <span class="grow text-right">CQ / 24</span>
            </h2>
          </div>
          <ArrowWithLabel label="via" class="mx-8" color="var(--ui-text)" />
          <QslTableCell class="flex-1" titleBottomLeft="TO RADIO" />
        </div>
      </div>
    </div>
    <div class="mt-5 flex">
      <p class="text-[27px] font-mono font-semibold bg-transparent">No #</p>
      <div class="grow"></div>
      <p class="text-[27px] font-mono font-semibold bg-transparent">CFM: [ ] OUR QSO / [ ] YOUR SWL REPORT / [ ] EYEBALL QSO</p>
    </div>
    <div class="mt-5 h-32 flex gap-4">
      <div class="flex-[25%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="DATE / Y-m-d">
          <div class="flex w-full">
            <span class="flex-5/12"></span>
            <span class="flex-4/12">-</span>
            <span class="flex-3/12">-</span>
          </div>
        </QslTableCell>
      </div>
      <div class="flex-[20%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="TIME / H:M TZ">
          <div class="flex w-full">
            <span class="flex-1/3"></span>
            <span class="flex-1/3">:</span>
            <span class="flex-1/3 mt-1">Z</span>
          </div>
        </QslTableCell>
      </div>
      <QslTableCell class="flex-[21.6667%]" titleTopLeft="FREQ / MHz"></QslTableCell>
      <QslTableCell class="flex-[18.3333%]" titleTopLeft="MODE"></QslTableCell>
      <QslTableCell class="flex-[15%]" titleTopLeft="RST"></QslTableCell>
    </div>
    <div class="mt-4 flex gap-4 h-68">
      <div class="flex-2/3">
        <div class="flex h-20 gap-4">
          <QslTableCell class="flex-[67.85%]" titleTopLeft="RIG"></QslTableCell>
          <QslTableCell class="flex-[32.15%]" titleTopLeft="PWR"></QslTableCell>
        </div>
        <div class="mt-4 h-20">
          <QslTableCell titleTopLeft="ANT" class="h-full"></QslTableCell>
        </div>
        <div class="flex gap-4 mt-4 h-20">
          <QslTableCell titleTopLeft="RMKS" class="h-full grow"></QslTableCell>
          <QslTableCell class="h-full font-mono font-bold px-6">VY73!</QslTableCell>
        </div>
      </div>
      <div class="flex-1/3 h-full flex flex-col gap-4">
        <QslTableCell class="font-mono h-32 px-6 text-2xl" horizontalAlign="left">
          <div class="flex items-center gap-6">
            <span>
              <p>[ ] PSE</p>
              <p class="mt-2">[ ] TNX</p>
            </span>
            <span>QSL</span>
            <span>DIRECT</span>
          </div>
        </QslTableCell>
        <QslTableCell class="font-mono h-32 px-6 text-2xl py-4" horizontalAlign="left" verticalAlign="left">OP</QslTableCell>
      </div>
    </div>
    <div class="mt-6 flex gap-4">
      <div>
        <p class="text-2xl font-medium bg-transparent">ADDR: (See envelope or email contact)</p>
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
  line-height: 1em;
}
</style>
