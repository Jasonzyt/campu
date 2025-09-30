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
    <div class="mt-5 h-34 flex gap-4">
      <div class="flex-[23%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="DATE / Y-m-d">
          <div class="flex w-full">
            <span class="flex-[42%]"></span>
            <span class="flex-[30%]">-</span>
            <span class="flex-[28%]">-</span>
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
      <QslTableCell class="flex-[23%]" titleTopLeft="FREQ / MHz">
        <div class="flex flex-col w-full text-2xl font-bold text-toned">
          <span class="mx-0.5">Rx</span>
          <span class="mx-0.5 mt-2">Tx</span>
        </div>
      </QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="MODE"></QslTableCell>
      <QslTableCell class="flex-[20%]" titleTopLeft="VIA" titleTopRight="SAT / REPEATER"></QslTableCell>
    </div>
    <div class="mt-4 h-32 flex gap-4">
      <QslTableCell class="flex-[23%]" titleTopLeft="RIG"></QslTableCell>
      <QslTableCell class="flex-[29%]" titleTopLeft="ANT"></QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="PWR"></QslTableCell>
      <QslTableCell class="flex-[14%]" titleTopLeft="RST"></QslTableCell>
      <!-- <QslTableCell class="flex-[20%]" titleTopLeft="QTH"></QslTableCell> -->
      <div class="flex-[20%]"></div>
    </div>
    <div class="mt-4 h-48 flex gap-4">
      <div class="flex-[52%]">
        <QslTableCell class="h-22" titleTopLeft="QTH"></QslTableCell>
        <QslTableCell class="mt-4 h-22" titleTopLeft="RMKS"></QslTableCell>
      </div>
      <QslTableCell class="flex-[28.6%] h-48" horizontalAlign="right" verticalAlign="right" titleTopLeft="OP">
        <div class="flex-1 flex flex-col font-1">
          <div class="grow" />
          <p class="py-2 px-1.5">
            <span class="text-2xl font-semibold align-text-bottom">PSE / TNX QSL</span>
            <span class="text-4xl font-bold float-right align-text-bottom">VY 73!</span>
          </p>
        </div>
      </QslTableCell>
      <div class="flex-[19.4%]"></div>
    </div>
    <!-- <div class="mt-4 flex gap-4 h-74">
      <div class="flex-[65.5%]">
        <div class="flex gap-4 mt-4 h-22">
          <QslTableCell titleTopLeft="RMKS" class="h-full grow"></QslTableCell>
          <QslTableCell class="h-full font-mono font-bold px-6 text-4xl">VY73!</QslTableCell>
        </div>
      </div>
      <div class="flex-[34.5%] h-full flex flex-col gap-4">
        <div class="flex gap-4">
          <QslTableCell class="flex-[65.22%] h-35 text-2xl" titleTopLeft="QTH"></QslTableCell>
          <QslTableCell class="flex-[34.78%] h-35 text-[24px]" horizontalAlign="left" titleTopLeft="QSL">
            <div class="flex items-center font-mono font-medium gap-6">
              <span>
                <p>[ ] PSE</p>
                <p class="mt-2">[ ] TNX</p>
              </span>
            </div>
          </QslTableCell>
        </div>
        <QslTableCell class="h-35" horizontalAlign="left" verticalAlign="left" titleTopLeft="OP"></QslTableCell>
      </div>
    </div> -->
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

.font-1 {
  font-family: "Noto Sans", "JetBrains Mono", monospace;
}
</style>
