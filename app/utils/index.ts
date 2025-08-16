import axios from "axios";

let lastUpdateHitokoto = 0;
const curHitokoto = ref({
  hitokoto: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",
  from: "《老子》",
});

export function updateHitokoto(): Ref<{ hitokoto: string; from: string }> {
  if (Date.now() - lastUpdateHitokoto < 5 * 1000) {
    return curHitokoto;
  }
  lastUpdateHitokoto = Date.now();
  axios
    .get("https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=h&c=i&c=k")
    .then((response) => {
      curHitokoto.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  return curHitokoto;
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type BlogCollectionItem = {
  slug: string;
  title: string;
  description?: string;
  cover?: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  category: string;
  pinned?: number;
  created: string;
  updated: string;
};
