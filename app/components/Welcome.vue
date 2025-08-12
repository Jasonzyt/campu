<template>
  <div class="background" ref="body">
    <div class="hello table-cell max-sm:hidden">
      <h1>{{ welcome }}</h1>
      <div
        class="quote mx-auto my-6 px-5 py-3 text-2xl text-center select-none"
      >
        <Icon
          class="align-text-top"
          name="ic:round-format-quote"
          style="transform: rotate(180deg)"
        />
        <span>{{ quote }}</span>
        <!-- <span>個性捨てたら，死んでるのと一緒だよ</span> -->
        <Icon class="align-text-top" name="ic:round-format-quote" />
        <NavSocialBar class="mt-3 mb-2" size="1.5rem" tone="white" />
      </div>
    </div>
    <div class="hello table-cell sm:hidden">
      <h2>{{ welcome }}</h2>
    </div>
  </div>
  <div class="chevron-down" @click="handleClickDown">
    <Icon name="my:chevron-down" style="color: #fff" />
  </div>
</template>

<script setup lang="ts">
const welcome = "Hi, ZYT here!";
const quote = "Do the right thing, and wait to be fired.";

const backgrounds = [
  {
    path: "/assets/img/backgrounds/74922836_p0.jpg",
    props: ["horizontal", "dark"],
  },
  {
    path: "/assets/img/backgrounds/100022190_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/112167497_p0.jpg",
    props: ["horizontal", "dark"],
  },
  {
    path: "/assets/img/backgrounds/113793915_p0.jpg",
    props: ["horizontal", "dark"],
  },
  {
    path: "/assets/img/backgrounds/109884134_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/109884134_p1.jpg",
    props: ["horizontal", "dark"],
  },
  {
    path: "/assets/img/backgrounds/109884134_p2.jpg",
    props: ["horizontal", "dark"],
  },
  {
    path: "/assets/img/backgrounds/104805436_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/118020641_p0.jpg",
    props: ["vertical", "light"],
  },
  {
    path: "/assets/img/backgrounds/109453105_p0.jpg",
    props: ["vertical", "light"],
  },
  {
    path: "/assets/img/backgrounds/107163970_p0.jpg",
    props: ["vertical", "dark"],
  },
  {
    path: "/assets/img/backgrounds/73492598_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/77353796_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/104185807_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/72114086_p0.jpg",
    props: ["horizontal", "light"],
  },
  {
    path: "/assets/img/backgrounds/109307377_p0.jpg",
    props: ["vertical", "dark"],
  },
  {
    path: "/assets/img/backgrounds/visual9.jpg",
    props: ["vertical", "light"],
  },
  {
    path: "/assets/img/backgrounds/wall09.jpg",
    props: ["vertical", "light"],
  },
  {
    path: "/assets/img/backgrounds/wall22.jpg",
    props: ["vertical", "light"],
  },
];

const handleClickDown = () => {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    behavior: "smooth",
  });
};

const bodyRef = useTemplateRef("body");

onMounted(() => {
  let requiredProps = [];
  requiredProps.push(
    document.documentElement.clientWidth > document.documentElement.clientHeight
      ? "horizontal"
      : "vertical"
  );
  requiredProps.push(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const matchedBackgrounds = backgrounds.filter((background: any) =>
    requiredProps.every((prop) => background.props.includes(prop))
  );

  if (bodyRef.value) {
    const background =
      matchedBackgrounds[Math.floor(Math.random() * matchedBackgrounds.length)];
    bodyRef.value.style.backgroundImage = `url(${background?.path})`;
  }
});
</script>

<style scoped>
.background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: relative;
  display: table;
  z-index: 0;
}

.hello {
  vertical-align: middle;
  position: relative;
  text-align: center;
  z-index: 1;
  max-width: 1280px;
  padding: 0 1rem;
  transition: opacity 0.4s ease-in-out;
}

.hello h1 {
  color: #fff;
  font-size: 5.5rem;
  line-height: 5.5rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  word-spacing: 0.6rem;
  user-select: none;
}

.hello h2 {
  color: #fff;
  font-size: 3rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  user-select: none;
}

.quote {
  border-radius: 10px;
  width: fit-content;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}

@keyframes float {
  0% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  100% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.chevron-down {
  position: absolute;
  bottom: 2rem;
  text-align: center;
  left: calc(50vw - 1.5rem);
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

.chevron-down .iconify {
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
}
</style>
