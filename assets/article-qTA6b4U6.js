var A=Object.defineProperty;var T=(a,t,e)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>T(a,typeof t!="symbol"?t+"":t,e);import{$ as g}from"./index-_SGTYUws.js";import{p as w,T as d}from"./index-GHYQkRcs.js";import{s as b}from"./util-CLdxAwGg.js";const x=`{
    "articles": [
        {
            "slug": "hello-world",
            "createdAt": "2024-01-01T00:00:00.000Z",
            "updatedAt": "2024-01-03T00:00:00.000Z",
            "title": "谈谈我对Hello World的看法",
            "cover": "/assets/img/covers/98493374_p0-hello-world.jpg",
            "author": {
                "name": "Jasonzyt",
                "avatar": "https://avatars.githubusercontent.com/u/66063199"
            },
            "content": {
                "format": "md",
                "url": "hello-world.md"
            },
            "tags": [
                "hello",
                "world"
            ],
            "category": "Test"
        },
        {
            "slug": "test2",
            "createdAt": "2024-06-01T00:00:00.000Z",
            "updatedAt": "2024-06-01T00:00:00.000Z",
            "title": "Test2",
            "cover": "/assets/img/covers/98493374_p0-hello-world.jpg",
            "author": {
                "name": "Jasonzyt",
                "avatar": "https://avatars.githubusercontent.com/u/66063199"
            },
            "content": {
                "format": "md",
                "url": "test2.md"
            },
            "tags": [
                "test2"
            ],
            "category": "Test"
        },
        {
            "slug": "test3",
            "createdAt": "2024-06-02T00:00:00.000Z",
            "updatedAt": "2024-06-02T00:00:00.000Z",
            "title": "Test3",
            "cover": "/assets/img/bangumi-covers/yurucamp/2.jpg",
            "author": {
                "name": "Jasonzyt",
                "avatar": "https://avatars.githubusercontent.com/u/66063199"
            },
            "content": {
                "format": "md",
                "url": "test3.md"
            },
            "tags": [
                "test3"
            ],
            "category": "Test"
        },
        {
            "slug": "bad-win11-experience",
            "createdAt": "2024-08-14T12:07:35.000Z",
            "updatedAt": "2024-08-14T12:07:35.000Z",
            "title": "一次痛苦的Win11使用体验——登录无限循环",
            "cover": "/assets/img/bangumi-covers/yurucamp/2.jpg",
            "author": {
                "name": "Jasonzyt",
                "avatar": "https://avatars.githubusercontent.com/u/66063199"
            },
            "content": {
                "format": "md",
                "url": "bad-win11-experience.md"
            },
            "tags": [
                "windows",
                "os",
                "fix"
            ],
            "category": "Tech"
        }
    ],
    "categories": [
        {
            "id": "Test",
            "name": "Test",
            "description": "Test",
            "color": "#000000"
        },
        {
            "id": "Tech",
            "name": "Tech",
            "description": "Technology articles",
            "color": "#278fcf"
        }
    ]
}`;var D=Object.defineProperty,p=(a,t,e,s)=>{for(var r=void 0,o=a.length-1,c;o>=0;o--)(c=a[o])&&(r=c(t,e,r)||r);return r&&D(t,e,r),r};const f=class v{constructor(t,e,s,r,o,c,i,l,u){n(this,"slug");n(this,"title");n(this,"cover");n(this,"tags");n(this,"category");n(this,"content");n(this,"author");n(this,"createdAt");n(this,"updatedAt");this.slug=t,this.title=e,this.cover=s,this.tags=r,this.category=o,this.content=c,this.author=i,this.createdAt=l,this.updatedAt=u}static create(t,e,s,r,o,c,i){const l=new Date().toISOString();return new v(t,e,s,r,o,c,i,l,l)}async fetchStats(){return J(this.slug)}async fetchStringifiedViews(){let t=await this.fetchStats();return t.views==-1?"-":b(t.views)}};p([d(()=>S)],f.prototype,"content");p([d(()=>M)],f.prototype,"author");let j=f;class M{constructor(t,e="",s=""){n(this,"name");n(this,"extra");n(this,"avatar");this.name=t,this.extra=e,this.avatar=s}}class S{constructor(t,e){n(this,"format");n(this,"url");this.format=t,this.url=e}fetch(){return fetch(g.articlesBase+this.url)}}class Z{constructor(t,e,s,r){n(this,"id");n(this,"name");n(this,"description");n(this,"color");this.id=t,this.name=e,this.description=s,this.color=r}}class m{constructor(){n(this,"articles",[]);n(this,"categories",[])}}p([d(()=>j)],m.prototype,"articles");p([d(()=>Z)],m.prototype,"categories");class y{constructor(t,e){n(this,"start",0);n(this,"end",0);this.start=t,this.end=e}}class C{constructor(t,e,s){n(this,"article");n(this,"matchedTitle",!1);n(this,"matchedTags",!1);n(this,"matchedCategory",!1);n(this,"titleMatchedRanges");n(this,"tagsMatched");n(this,"categoryMatched");switch(this.article=t,e){case"title":this.matchedTitle=!0,this.titleMatchedRanges=s;break;case"tags":this.matchedTags=!0,this.tagsMatched=s;break;case"category":this.matchedCategory=!0,this.categoryMatched=s;break}}}const h=w(m,JSON.parse(x),{}),$=a=>h.articles.find(t=>t.slug===a),I=()=>h.articles,N=a=>{const t=[],e=[];for(let s=0;s<a.length;s++)if(_(a[s])){e.push(a[s]);break}for(let s=0;s<h.articles.length;s++){const r=h.articles[s];let o,c;for(let i=0;i<e.length;i++)e[i]===r.category&&(o="category",c=e[i]);a.forEach(i=>{if(r.tags.indexOf(i)!==-1){if(!Array.isArray(c)){o="tags",c=[i];return}c.push(i)}});for(let i=0;i<a.length;i++){const l=r.title.indexOf(a[i]);if(l!==-1){o="title";const u=l+a[i].length;if(!Array.isArray(c)||Array.isArray(c)&&c.length>0){c=[new y(l,u)];continue}c.push(new y(l,u))}}o!==void 0&&t.push(new C(r,o,c))}return t},_=a=>{if(a)return h.categories.find(t=>t.name===a)};function P(a,t=!0){return a.sort((e,s)=>t?Date.parse(s.createdAt)-Date.parse(e.createdAt):Date.parse(e.createdAt)-Date.parse(s.createdAt))}async function J(a){var e;if(!g.api.articles.stats.enable)return{views:-1};let t=await fetch(g.apiBase+g.api.articles.stats.endpoint+`?action=query&slug=${a}`);if(t.ok){let s=await t.json();if((e=s==null?void 0:s.data)!=null&&e.stats)return s.data.stats}return console.error("Failed to fetch article stats",t.status,t.body),{views:-1}}export{I as a,N as b,_ as c,$ as g,P as s};
