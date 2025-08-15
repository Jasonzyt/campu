---
slug: achieved-1k-followers-on-x
title: 千fo撒花！和CTF红包WriteUp
description: 咱的X账号已经达到 1000 关注者！🎉🍾 发红包庆祝一下！
cover: /assets/img/blogs/achieved-1k-followers-on-x/cover.webp
author:
  name: Jasonzyt
  avatar: /assets/img/avatar.jpg
tags: ["milestone", "celebration"]
category: Misc
pinned: 0
created: 2025-02-23T13:24:01.000Z
updated: 2025-02-23T18:52:34.000Z
---

庆祝笨人的Twitter账号达到了1000关注者！🎉🍾

![撒花！](/assets/img/blogs/achieved-1k-followers-on-x/screenshot.jpg)

[wtf is this: /1k]{style="visibility: hidden;"}

---

<br>

本来我觉得是个比较简单的题目，但是从反馈来看难度超出预期，很抱歉。  
所以三个小时之后把红包平均单个金额提高了一点w  
并且增加了好多hints

# Write Up

## 0x00

首先我们访问题目给出的链接，也就是这篇文章  
（然后不争气的Nuxt Image缩略图又挂了，不过不影响解题）  
F12就能找到隐藏的`wtf is this: /1k`

### 野路子

查[Jasonzyt/campu](https://github.com/Jasonzyt/campu)的commit记录，直接找到新增的几个文件

## 0x01

访问`/1k`，得到了一句话  
这句话的两个关键词就是这个题目的全部线索了  
```
这是一个奇怪的页面呢，你从哪里找到的呢？
这里除了1S6bSdfe0ZfdSZbSO3Sddd31e4db9df7什么也没有，你可以去挖一下XXXX.jasonz.yt哦
```

`1S6bSdfe0ZfdSZbSO3Sddd31e4db9df7`  
32位字符串，不难想到是MD5，但为什么混进去了一些非16进制字符呢？  
为了降低难度，这里特地用大写来强调这些异常的字符  
但是大家好像还是卡在这里了，所以在一个小时之后hint了一下  
> Hint1: S和Z原本并不属于这串十六进制字符串  

~~其实这里还漏了个O，我忘了（小声~~

如果打过CTF，会知道CTF的flag很喜欢把o0 i1 z2这些长得像的字符相互替换  
不难联想到这是把字母数字象形替换的写法，而正好S像5 Z像2 O像0  
所以还原进去这个MD5字符串就是`156b5dfe02fd52b5035ddd31e4db9df7`

## 0x02

第二条线索是`XXXX.jasonz.yt`  
XXXX是占位符，而且还告诉你了字符串的长度  
四位字符，考虑到前面解出来的MD5串，第一时间想到穷举`[a-zA-Z0-9]{4}`暴力破解MD5  
这一步是整道题的关键，如果想不到暴力破解就会卡在这里，而且我没有作任何提示  
~~但是明明我都暗示了那么久~~  
爆破的代码可以直接问AI，没必要自己写：
```python
import hashlib
import itertools
import string

def find_matching_md5(target_md5):
    # Define the character set: lowercase, uppercase letters and digits
    charset = string.ascii_letters + string.digits
    
    # Generate all possible 4-character combinations
    for combination in itertools.product(charset, repeat=4):
        # Join the tuple into a string
        candidate = ''.join(combination)
        
        # Calculate the MD5 hash of the candidate
        candidate_md5 = hashlib.md5(candidate.encode()).hexdigest()
        
        # Check if the candidate's MD5 hash matches the target MD5 hash
        if candidate_md5 == target_md5:
            return candidate
    return None
```
~~讲真如果是我我都不会`string.ascii_letters + string.digits`和itertools，AI还是牛逼~~

爆破出来得到4位字符是`ad5b`
> 出题的时候第一脑想到了ADS-B，所以就直接用了这个，然后把s替换成了5（  
> 没有任何含义，人脑随机字符串（（（  
> 后来发现这个ad开头其实方便大家字典序爆破  
> 要是Z的话就不好爆破了（

## 0x03

读`你可以去挖一下XXXX.jasonz.yt哦`这句话的时候不知道有没有觉得怪（  
这里的“挖”是一个线索，挖=dig  
到这里答案应该就出来了  
```shell
dig ad5b.jasonz.yt TXT
```
得到了flag

我没预料到大家居然没想到用TXT记录（  
这也是这道题的难点，后来补了个Hint大家都解出来了

### 野路子

如果MD5那两部分没想到，只想到了挖=dig，那么完全可以直接暴力dig  
只不过速度上会慢一些，而且如果挖的不是TXT是解不出来的  
好多群U挖了一个多小时A没挖出来（  
因为根本就不是A记录  
另外我没想到的是因为我有一个服务器没proxy的解析正好是四位字母，被挖出来了（草  

<br>

总之，非常感谢大家的参与！2k fo再见！🎉🍾