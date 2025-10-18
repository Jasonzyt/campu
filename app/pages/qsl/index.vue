<template>
  <div class="main m-auto px-14 py-12 border-2 border-gray-800">
    <div class="flex items-center">
      <Icon name="my:crac-logo" size="290px" />
      <div class="ml-10 flex-1">
        <div class="flex gap-8">
          <div>
            <h1 class="text-6xl font-bold">中华人民共和国个人业余无线电台</h1>
            <h2 class="text-[42px] font-normal ml-1.5">Personal Amateur Radio Station of P. R. China</h2>
          </div>
          <QslTableCell class="flex-1 mb-2" titleTopLeft="QSL No" horizontalAlign="left"># </QslTableCell>
        </div>
        <div class="mt-4 flex">
          <div class="mb-2">
            <h1 class="text-[130px] font-bold gradient-text">BH6SLW</h1>
          </div>
          <ArrowWithLabel class="mx-8" label="TO RADIO" color="var(--ui-text)" />
          <QslTableCell class="flex-1" />
        </div>
        <p class="mt-5 text-[27px] font-mono font-semibold bg-transparent">CONFIRMING <span class="float-right">[ ] OUR QSO / [ ] YOUR SWL REPORT / [ ] EYEBALL QSO</span></p>
      </div>
    </div>
    <div class="mt-4 h-34 flex gap-4">
      <div class="flex-[26%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="DATE / Y-m-d">
          <div class="flex w-full">
            <span class="flex-[40%]"></span>
            <span class="flex-[31%]">-</span>
            <span class="flex-[29%]">-</span>
          </div>
        </QslTableCell>
      </div>
      <div class="flex-[15%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="TIME / UTC">
          <!-- <div class="flex w-full">
            <span class="flex-1/3"></span>
            <span class="flex-1/3">:</span>
            <span class="flex-1/3 mt-1">UTC</span>
          </div> -->
          :
        </QslTableCell>
      </div>
      <QslTableCell class="flex-[25%]" titleTopLeft="FREQ / MHz"></QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="MODE"></QslTableCell>
      <QslTableCell class="flex-[20%]" titleTopLeft="VIA" titleTopRight="SAT / REPEATER"></QslTableCell>
    </div>
    <div class="mt-4 h-32 flex gap-4">
      <QslTableCell class="flex-[26%]" titleTopLeft="RIG"></QslTableCell>
      <QslTableCell class="flex-[26%]" titleTopLeft="ANT"></QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="PWR"></QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="RST"></QslTableCell>
      <div class="flex-[20%]"></div>
    </div>
    <div class="mt-4 h-48 flex gap-4">
      <div class="flex-[52%]">
        <QslTableCell class="h-22" titleTopLeft="QTH"></QslTableCell>
        <QslTableCell class="mt-4 h-22" titleTopLeft="RMKS"></QslTableCell>
      </div>
      <QslTableCell class="flex-[28.6%] h-48" horizontalAlign="right" verticalAlign="right" titleTopLeft="OP">
        <div class="flex-1 flex flex-col font-noto">
          <div class="grow" />
          <div class="flex items-end mb-1.5">
            <span class="h-fit text-2xl font-semibold align-text-bottom">PSE / TNX QSL</span>
            <div class="grow" />
            <span class="text-4xl font-bold float-right align-text-bottom mr-1.5">VY 73!</span>
          </div>
        </div>
      </QslTableCell>
      <div class="flex-[19.4%]"></div>
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
  font-family: "Noto Sans", sans-serif;
}
</style>
