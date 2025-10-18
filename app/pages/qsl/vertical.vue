<template>
  <div class="main m-auto px-12 py-12 border-2 border-gray-800">
    <div class="flex items-center">
      <Icon name="my:crac-logo" size="200px" />
      <div class="ml-10 flex-1">
        <div class="flex gap-8">
          <div>
            <h1 class="text-5xl font-bold">中华人民共和国个人业余无线电台</h1>
            <h2 class="text-[32px] font-normal">Personal Amateur Radio Station of P. R. China</h2>
          </div>
        </div>
        <div class="mt-4 flex gap-16">
          <div class="mb-2">
            <h1 class="text-[110px] font-bold gradient-text">BH6SLW</h1>
          </div>
          <QslTableCell class="flex-1" titleTopLeft="TO" />
        </div>
      </div>
    </div>
    <p class="mt-5 text-[27px] font-mono font-semibold bg-transparent flex items-center">
      #<span class="grow" /><span class="float-right text-2xl">[ ] OUR QSO / [ ] SWL REPORT / [ ] EB QSO</span>
    </p>
    <div class="mt-5 h-32 flex gap-4">
      <div class="flex-[40%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="DATE / Y-m-d">
          <div class="flex w-full">
            <span class="flex-[42%]"></span>
            <span class="flex-[30%]">-</span>
            <span class="flex-[28%]">-</span>
          </div>
        </QslTableCell>
      </div>
      <div class="flex-[22%] flex gap-4">
        <QslTableCell class="flex-1" titleTopLeft="TIME / UTC"> : </QslTableCell>
      </div>
      <QslTableCell class="flex-[38%]" titleTopLeft="FREQ / MHz"> </QslTableCell>
    </div>
    <div class="mt-4 h-32 flex gap-4">
      <QslTableCell class="flex-[40%]" titleTopLeft="VIA" titleTopRight="SAT / REPEATER"></QslTableCell>
      <QslTableCell class="flex-[40%]" titleTopLeft="MODE" horizontalAlign="left">
        <div class="grid grid-cols-9 gap-x-2.5">
          <div class="col-span-4 flex items-center">&#9744; FM</div>
          <div class="col-span-5 flex items-center">&#9744; SSB</div>
          <div class="col-span-4 flex items-center">&#9744; CW</div>
          <div class="col-span-5 flex items-center">&#9744; FT8</div>
        </div>
        <div class="grid grid-cols-1">
          <div class="col-span-1 flex items-center">&#9744;</div>
          <div class="col-span-1 h-9"></div>
        </div>
        <div class="border-b-4 border-black grow h-[70%] ml-1"></div>
      </QslTableCell>
      <QslTableCell class="flex-[20%]" titleTopLeft="RST"></QslTableCell>
    </div>
    <div class="mt-4 h-32 flex gap-4">
      <QslTableCell class="flex-[40%]" titleTopLeft="RIG"></QslTableCell>
      <QslTableCell class="flex-[40%]" titleTopLeft="ANT"></QslTableCell>
      <QslTableCell class="flex-[20%]" titleTopLeft="PWR"></QslTableCell>
    </div>
    <div class="mt-4 h-48 flex gap-4">
      <div class="flex-[60%]">
        <QslTableCell class="h-22" titleTopLeft="QTH"></QslTableCell>
        <QslTableCell class="mt-4 h-22" titleTopLeft="RMKS"></QslTableCell>
      </div>
      <QslTableCell class="flex-[40%] h-48" horizontalAlign="right" verticalAlign="right" titleTopLeft="OP">
        <div class="flex-1 flex flex-col font-noto">
          <div class="grow" />
          <div class="flex items-end mb-1.5">
            <div class="grow" />
            <span class="text-4xl font-bold float-right align-text-bottom mr-1.5">VY 73!</span>
          </div>
        </div>
      </QslTableCell>
    </div>
    <div class="mt-4 h-38 flex gap-4">
      <QslTableCell class="flex-[60%]">
        <div>
          <p class="text-2xl font-medium bg-transparent">Mailing address can be found at QRZ.com</p>
          <p class="mt-2 text-2xl font-semibold font-mono bg-transparent"><Icon name="ic:round-mail" class="align-text-top mr-2" size="1.2em" />JacieZYT@gmail.com</p>
          <p class="text-2xl font-semibold font-mono bg-transparent"><Icon name="tabler:world" class="align-text-top mr-2" size="1.2em" />https://zzzz.yt/</p>
        </div>
      </QslTableCell>
      <div class="flex-[40%]">
        <QslTableCell class="text-2xl h-38 font-semibold font-mono" horizontalAlign="left">
          <div class="flex items-center gap-4 mx-3">
            <div>
              <div><span class="font-sans font-normal">&#9744; </span>PSE QSL DIRECT</div>
              <div><span class="font-sans font-normal">&#9744; </span>PSE VIA <span class="underline">BH6RQG</span></div>
              <div><span class="font-sans font-normal">&#9744; </span>TNX QSL !</div>
            </div>
          </div>
        </QslTableCell>
      </div>
    </div>
    <!-- 
    <div class="h-60 flex flex-col gap-4">
      <div class="grow"></div>
      <div>
        <p class="text-right text-2xl font-medium bg-transparent">Design by BH6SLW / JacieZYT, shared under CC BY-NC-SA 4.0</p>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<style scoped>
.main {
  width: 1000px;
  height: 1480px;
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
