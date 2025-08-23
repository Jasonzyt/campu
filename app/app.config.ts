export default defineAppConfig({
  siteMeta: {
    name: "ZYT's Campu-site",
    description: "ZYT's Campu-site",
    keywords: ["zyt", "jasonzyt", "jaciezyt", "jacie", "personal", "bio", "blog", "campu"],
  },
  variables: {
    nav: {
      title: "ZYT's Campu-site",
      avatar: "/assets/img/avatar.jpg",
      links: [
        { label: "Blog", icon: "i-my-feather", to: "/blog" },
        { label: "About", icon: "i-my-user", to: "/about" },
        { label: "Gallery", icon: "i-my-photo", to: "https://gallery.zzzz.yt", target: "_blank" },
      ],
    },
    welcome: {
      title: "Hi, ZYT here!",
      quotes: ["Keep looking, don't settle.", "Do the right thing, and wait to be fired.", "個性捨てたら，死んでるのと一緒だよ"],
      backgrounds: [
        { path: "/assets/img/backgrounds/74922836_p0.jpg", props: ["horizontal", "dark"] },
        { path: "/assets/img/backgrounds/100022190_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/112167497_p0.jpg", props: ["horizontal", "dark"] },
        { path: "/assets/img/backgrounds/113793915_p0.jpg", props: ["horizontal", "dark"] },
        { path: "/assets/img/backgrounds/109884134_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/109884134_p1.jpg", props: ["horizontal", "dark"] },
        { path: "/assets/img/backgrounds/109884134_p2.jpg", props: ["horizontal", "dark"] },
        { path: "/assets/img/backgrounds/104805436_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/118020641_p0.jpg", props: ["vertical", "light"] },
        { path: "/assets/img/backgrounds/109453105_p0.jpg", props: ["vertical", "light"] },
        { path: "/assets/img/backgrounds/107163970_p0.jpg", props: ["vertical", "dark"] },
        { path: "/assets/img/backgrounds/73492598_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/77353796_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/104185807_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/72114086_p0.jpg", props: ["horizontal", "light"] },
        { path: "/assets/img/backgrounds/109307377_p0.jpg", props: ["vertical", "dark"] },
        { path: "/assets/img/backgrounds/visual9.jpg", props: ["vertical", "light"] },
        { path: "/assets/img/backgrounds/wall09.jpg", props: ["vertical", "light"] },
        { path: "/assets/img/backgrounds/wall22.jpg", props: ["vertical", "light"] },
      ],
    },
  },
  ui: {
    colors: {
      primary: "sky",
      neutral: "slate",
    },
  },
});
