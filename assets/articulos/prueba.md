---
title:  "Super titulo shido"
description: "Este es un articulo sobre vue, pusg, stylus, nuxt laravel y todo loque se me ocurra poner"
date: "2019-04-18"
time: "15:25"
cover: "/logo.svg"
slug: "super-titulo"
keywords: ['keyword1', 'keyword2']
tags: ['Vue','Nuxt']
---

## Subtitulo 1
Lorem ipsum dolor sit amet consectetur, adipiscing elit et euismod nascetur, justo erat fames tempus. Lacus cubilia consequat ante mus massa fusce nunc sociosqu, lobortis fringilla sollicitudin id viverra proin. Ut porttitor libero urna laoreet sapien ante morbi velit sociis, dignissim fusce est ultricies proin purus fames placerat, vivamus sagittis nibh conubia feugiat penatibus faucibus curae.

* item lista 1
* item lista 1
* item lista 1

[super link](#)
[super link](#123)
[super link](#a)

> Blockquotes are very handy in email to emulate reply text.

```javascript
const persona = {nombre: 'abdiel', edad:21}
(()=>{
    console.log('algo');
});
```
---
```pug
article.card
    nuxt-link(v-lazy:background-image="imagen"  :to='url')
    section
        footer
            .tags
                nuxt-link( v-for='(tag, index) of tags' :to='`tag/${tag}`' :key='index') {{tag}} 
            .comments( v-if='comentarios')
                i.far.fa-comment-alt  {{comentarios}}
```
---

```stylus
.fijado
    position fixed
    top 0
    z-index 3
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
```



| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Ut morbi torquent magna ornare feugiat posuere velit gravida sagittis tincidunt duis ad arcu, conubia at rhoncus leo bibendum himenaeos congue sociis odio accumsan dui cras, nunc aenean quam cursus enim dictum sollicitudin metus phasellus nascetur sociosqu blandit.

Condimentum parturient cum congue sociis egestas nulla elementum dapibus, nec himenaeos metus gravida mollis diam vehicula, nascetur hac ac nisi nostra lacinia aenean. Metus a suspendisse laoreet mauris rhoncus eros interdum ultrices facilisi tincidunt maecenas, dis cubilia est curabitur mattis nec faucibus inceptos eget.
Three or more...

---

<algo/>

Lorem ipsum dolor sit amet consectetur, adipiscing elit et euismod nascetur, justo erat fames tempus. Lacus cubilia consequat ante mus massa fusce nunc sociosqu, lobortis fringilla sollicitudin id viverra proin. Ut porttitor libero urna laoreet sapien ante morbi velit sociis, dignissim fusce est ultricies proin purus fames placerat, vivamus sagittis nibh conubia feugiat penatibus faucibus curae.