<template>
  <!-- TODO: Birthday Party! -->
  <div class="cover"></div>
  <el-row class="body">
    <el-col class="main" :span="17" :xs="24" :sm="24">
      <div class="avatar">
        <el-avatar :size="200">
          <img :src="$config.avatar" alt="avatar" />
        </el-avatar>
      </div>
      <h1 class="name">Jasonzyt <span class="pronoun">he/she🌈</span></h1>
      <div class="brief" id="brief">
        非常感谢你能来到我的家里玩—— Orz<br />
        我是Jason(aka ZYT)，{{ age.year }}岁，来自武汉！是高中牲😢<br />
        写代码👨‍💻是爱好，初一自学C++，曾经打过几年OI，<del>也算是蒟蒻OIer吧</del><br />
        曾经为<a class="link" href="https://minecraft.wiki/w/Bedrock_Dedicated_Server">Minecraft
          BDS</a>圈子奉献<del>三年青春</del><br />
        致力于<a class="link"
          href="https://github.com/LiteLDev/LeviLamina">LeviLamina</a>的开发和MCBE的研究<!--不要玩基岩版！基岩不行，加瓦行-->，也是<a
          class="link" href="https://github.com/LiteLDev">LiteLDev</a>的一份子！<br />
        除写码之外，我也很喜欢拍照📷~ 是风光佬，偶尔拍人文<br />
        喜欢各种交通工具，尤其是飞机✈️和火车🚅！！有机会的话会拍！<br />
        你可以在<RouterLink class="link" to="/gallery">Gallery</RouterLink>看到我的作品！谢谢你的喜欢！<br />
        最近在研究业余无线电！入了一台泉盛UV-K6，还没有呼号ww<br />
        摇曳露营△大好き，正在筹备户外装备，也许2024/25年冬能实装摇曳露营(?)<br />
        有时候会打电动，不是很擅长FPS游戏，想和我玩的话只要有空随时可以！<br />
        喜欢看动画，<del>百合什么的最喜欢啦</del><br />
        可以用中文/English与我交流，日语还在自学ing...<br />
        我对所有人都很友好！不会主动与别人产生冲突<br />
        <br />
        <span class="spoiler">🌈🏳️‍⚧️ LGBT+友好 ⚠️ 不想讨论政治，反感魔怔人，反对药物滥用和自伤！！</span><br />
      </div>
      <br />
      <div class="languages" id="languages">
        <h2>Languages</h2>
        <code><MyIcon name="CPP" size="16px" />C++</code>&nbsp;
        <code><MyIcon name="Vue" size="16px" />Vue</code>&nbsp;
        <code><MyIcon name="Kotlin" size="16px" />Kotlin</code>&nbsp;
        <code><MyIcon name="Python" size="16px" />Python</code>&nbsp;
        <code><MyIcon name="Golang" size="16px" />Golang</code>
      </div>
      <div class="social" id="social">
        <h2>Socials</h2>
        <el-row :gutter="10">
          <el-col v-for="(social, index) in socialList" :key="index" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <a :href="social.url">
              <el-card class="social-card" shadow="hover">
                <el-row :gutter="8">
                  <el-col :span="8" class="social-icon">
                    <el-icon :size="40" v-html="social.icon">
                    </el-icon>
                  </el-col>
                  <el-col :span="16">
                    <h3 class="social-website">{{ social.website }}</h3>
                    <span class="social-user">{{ social.user }}</span>
                  </el-col>
                </el-row>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>
      <div class="games" id="games">
        <h2>Games</h2>
        <el-row :gutter="10">
          <el-col v-for="(game, index) in gameList" :key="index" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
            <el-card class="game-card" shadow="hover">
              <h3 class="game-name">{{ game.name }}</h3>
              <span class="game-server">{{ game.server }}</span>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="bangumi" id="bangumi">
        <h2>Bangumi</h2>
        <el-row :gutter="10">
          <el-col v-for="(bangumi, index) in bangumiList" :key="index" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card class="bangumi-card" shadow="hover">
              <div class="bangumi-cover" :style="{ 'background-image': `url(${bangumi.cover}` }"></div>
              <div class="bangumi-card-main">
                <h3 class="bangumi-name">{{ bangumi.name }}</h3>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <br />
    </el-col>
    <el-col :span="1" :xs="0" :sm="0" :md="1" :lg="1" :xl="1" class="divider hidden-sm-and-down"><el-divider
        :direction="'vertical'" /></el-col>
    <el-col :span="6" class="hidden-sm-and-down">
      <div class="sidebar">
        <div class="experiences">
          <h2>Experiences</h2>
          <el-row>
            <el-col v-for="(experience, index) in experienceList" :key="index">
              <a :href="experience.url">
                <el-card class="experience-card" shadow="hover">
                  <h3 class="experience-name">{{ experience.org }}</h3>
                  <p class="experience-position">{{ experience.position }}</p>
                  <span class="experience-time">{{ experience.time }}</span>
                </el-card>
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="projects">
          <h2>Contributed to</h2>
          <el-row>
            <el-col v-for="(project, index) in projectList" :key="index">
              <a :href="project.url">
                <el-card class="project-card" shadow="hover">
                  <h3 class="project-name"><span>{{ project.owner }}/</span>{{ project.name }}</h3>
                  <p class="project-desc">{{ project.desc }}</p>
                  <!-- <p class="project-lang">{{ project.lang }}</p> -->
                </el-card>
              </a>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="main hidden-md-and-up" style="padding-top: 0;">
    <div class="experiences">
      <h2>Experiences</h2>
      <el-row>
        <el-col v-for="(experience, index) in experienceList" :key="index">
          <a :href="experience.url">
            <el-card class="experience-card" shadow="hover">
              <h3 class="experience-name">{{ experience.org }}</h3>
              <p class="experience-position">{{ experience.position }}</p>
              <span class="experience-time">{{ experience.time }}</span>
            </el-card>
          </a>
        </el-col>
      </el-row>
    </div>
    <div class="projects">
      <h2>Projects</h2>
      <el-row>
        <el-col v-for="(project, index) in projectList" :key="index">
          <a :href="project.url">
            <el-card class="project-card" shadow="hover">
              <h3 class="project-name"><span>{{ project.owner }}/</span>{{ project.name }}</h3>
              <p class="project-desc">{{ project.desc }}</p>
              <!-- <p class="project-lang">{{ project.lang }}</p> -->
            </el-card>
          </a>
        </el-col>
      </el-row>
    </div>
  </el-row>
  <MyFooter>
    <template #default>
      <code>0 Warning(s), 0 Error(s)</code>
    </template>
  </MyFooter>
</template>


<script setup lang="ts">
import $config from '@/utils/_config'

useHead({
  title: 'About Me'
})

definePageMeta({
  layout: 'no-footer'
})

const birthTime = new Date(2007, 10, 18, 23, 4);

const now = new Date();

const age = (() => {
  let age = {
    year: now.getFullYear() - birthTime.getFullYear(),
    month: now.getMonth() - birthTime.getMonth(),
    day: now.getDate() - birthTime.getDate(),
    hour: now.getHours() - birthTime.getHours(),
    minute: now.getMinutes() - birthTime.getMinutes()
  }
  if (age.hour < 0) {
    age.hour = 24 + age.hour
    age.day -= 1
  }
  if (age.minute < 0) {
    age.minute = 60 + age.minute
    age.hour -= 1
  }
  if (age.day < 0) {
    age.day = 30 + age.day
    age.month -= 1
  }
  if (age.month < 0) {
    age.month = 12 + age.month
    age.year -= 1
  }
  return age
})()

const gameList = [
  {
    name: 'Minecraft',
    server: 'Java/BE'
  },
  {
    name: '战舰世界',
    server: 'Asia'
  },
  {
    name: '原神',
    server: 'CN_Official'
  },
  {
    name: '战地五',
    server: '-'
  },
  {
    name: '雨中冒险2',
    server: '-'
  },
  {
    name: '微软模飞',
    server: '2020'
  }
]

const socialList = [
  {
    icon: IconSvgMap.GitHub,
    website: 'GitHub',
    user: "@Jasonzyt",
    url: "https://github.com/Jasonzyt"
  },
  {
    icon: IconSvgMap.Bilibili,
    website: 'Bilibili',
    user: "@Jasonzyt",
    url: "https://space.bilibili.com/403482845"
  },
  {
    icon: IconSvgMap.Twitter,
    website: 'Twitter',
    user: "@Jasonzyt",
    url: "https://x.com/Jasonzyt"
  },
  {
    icon: IconSvgMap.Telegram,
    website: 'Telegram',
    user: "@Jasonzyt",
    url: "https://t.me/Jasonzyt"
  },
  {
    icon: IconSvgMap.Discord,
    website: 'Discord',
    user: "@jasonzyt",
    url: "https://discord.com"
  },
  {
    icon: IconSvgMap.Steam,
    website: 'Steam',
    user: "@jasonzytt",
    url: "https://steamcommunity.com/id/jasonzytt"
  },
  {
    icon: IconSvgMap.YouTube,
    website: 'YouTube',
    user: "@jasonzyt",
    url: 'https://www.youtube.com/@jasonzyt'
  },
  {
    icon: IconSvgMap.Mail,
    website: 'Email',
    user: "@jasonzytt",
    url: 'mailto:jasonzytt@gmail.com'
  }
]

const bangumiList = [
  {
    name: "摇曳露营△",
    cover: "/assets/img/bangumi-covers/yurucamp/" + randInt(1, 7).toString() + ".jpg",
    url: "https://yurucamp.jp/"
  },
  {
    name: "孤独摇滚！",
    cover: "/assets/img/bangumi-covers/bocchitherock/" + randInt(1, 2).toString() + ".jpg",
    url: "https://bocchi.rocks/"
  },
  {
    name: "CLANNAD",
    cover: "/assets/img/bangumi-covers/clannad/" + randInt(1, 7).toString() + ".jpg",
    url: "https://zh.wikipedia.org/zh-cn/CLANNAD"
  },
  {
    name: "天使降临到我身边",
    cover: "/assets/img/bangumi-covers/wataten/" + randInt(1, 5).toString() + ".jpg",
    url: "https://zh.wikipedia.org/wiki/%E5%A4%A9%E4%BD%BF%E9%99%8D%E8%87%A8%E5%88%B0%E6%88%91%E8%BA%AB%E9%82%8A%EF%BC%81"
  }
]

const experienceList = [
  {
    org: "LiteLDev",
    position: "Developer",
    time: "2021.7 - Now",
    url: "https://github.com/LiteLDev",
  }
]

const projectList = [
  {
    owner: "LiteLDev",
    name: "LeviLamina",
    url: "https://github.com/LiteLDev/LeviLamina",
    lang: "C++",
    desc: "Versatile mod loader for MCBE"
  },
  {
    owner: "LiteLDev",
    name: "HeaderOutput",
    url: "https://github.com/LiteLDev/HeaderOutput",
    lang: "Kotlin",
    desc: "BDS headers generator"
  },
  {
    owner: "Jasonzyt",
    name: "campu",
    url: "https://github.com/Jasonzyt/campu",
    lang: "Vue",
    desc: "This blog, also my first Nuxt project"
  },
  {
    owner: "Jasonzyt",
    name: "exif4cpp",
    url: "https://github.com/Jasonzyt/exif4cpp",
    lang: "C++",
    desc: "(WIP) Modern JPEG Exif metadata parser"
  },
  {
    owner: "ddf8196",
    name: "FakePlayer",
    url: "https://github.com/ddf8196/FakePlayer",
    lang: "Java",
    desc: "Fake player client for MCBE"
  },
  {
    owner: "Majjcom",
    name: "ncmpp",
    url: "https://github.com/Majjcom/ncmpp",
    lang: "C++",
    desc: "Fastest Netease .ncm files cracker"
  }
]

</script>

<style scoped>
body {
  color: #f5f5f5;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 8px;
}

h3 {
  font-weight: 450;
}

.el-card {
  --el-card-border-radius: 10px;
}

.cover {
  width: 100%;
  height: 25vh;
  background-image: url('/assets/img/backgrounds/109884134_p0.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.body {
  margin: 0 auto;
  max-width: 1200px;
}

.sidebar {
  max-width: 300px;
  margin-top: 300px;
}

.sidebar>div {
  margin-bottom: 10px;
}

.experience-card {
  --el-card-padding: 1rem;
  width: 100%;
  margin-bottom: 10px;
}

.experience-time {
  color: #666;
  margin-top: 5px;
  font-size: 16px;
}

.project-card {
  margin-bottom: 10px;
}

.project-name span {
  font-weight: normal;
}

.project-desc {
  color: #666;
  font-size: 14px;
}

.main {
  padding: 25px 0 2rem 2rem;
  max-width: 850px;
  margin: 0;
}

.name {
  font-size: 48px;
  font-weight: bold;
}

.pronoun {
  margin: 0 10px;
  font-size: 24px;
  font-weight: normal;
}

.brief {
  font-size: 18px;
}

.social {
  margin-bottom: 20px;
}

.social>.el-row {
  margin-bottom: 10px;
}

.social-card {
  --el-card-padding: 15px;
  margin-bottom: 10px;
}

.social-card .social-icon {
  text-align: center;
}

.social-card .el-icon {
  display: inline-block;
  margin-top: 4px;
}

.social-website {
  font-size: 18px;
}

.social-user {
  font-size: 12px;
  color: #666;
}

.games {
  margin-bottom: 20px;
}

.games .el-row {
  margin-bottom: 10px;
}

.game-card {
  --el-card-padding: 15px;
  margin-bottom: 10px;
}

.game-name {
  font-size: 18px;
}

.game-server {
  font-size: 12px;
  color: #666;
}

.languages .el-icon {
  margin-right: 5px;
}

.languages code {
  display: inline-block;
  font-size: 18px;
  margin-bottom: 6px;
}

.languages {
  margin-bottom: 20px;
}

.languages img {
  margin-right: 4px;
}

.bangumi-card {
  --el-card-padding: 0;
  margin-bottom: 10px;
}

.bangumi-cover {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bangumi-card-main {
  padding: 10px 15px;
}

.divider {
  text-align: center;
}

.divider .el-divider {
  margin-top: 300px;
  height: 82%;
}

@media screen and (max-width: 768px) {
  .cover {
    height: 20vh;
  }

  .main {
    padding: 50px 2rem 0;
  }

  .name {
    font-size: 42px;
  }

  .pronoun {
    font-size: 20px;
  }
}
</style>