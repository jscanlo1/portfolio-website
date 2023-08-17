---
title: 'Using emotion detection to leverage the detection of fake news'
date: '2022-04-01'
description: 'This was my masters thesis project. It looks at using DeepMoji alongside (at the time) state of the art Transformer models for detecting fake news'
github: 'https://github.com/jscanlo1/MAI-thesis-project'
favourite: true
---

This project looked at combining Bert, an (at the time) state-of-the-art transformer model, with emotion detection models.

In particular thisproject looked at combining deepMoji, an emotion deteciton model that associates text input with 64 different emojis.



Emojis are a unique tool of the digital world to convey emotion. This was the inital spark that made me think about incorporating something like deepMoji in as my emotion detector.

Emojis are often used to convey muhc more nuance than one may initially think. Think about how a skull emoji may be used to convey laughter, as in 'dying laughing', to more obvious connotations with death.
The success of deepMoji on it's own goes some way towards justifying this. The model has being incredibly succesfull at detecing nuanced emotions like sarcasm.


Ultimately the project aimed to see if this could be used to bolster large transformer models like Bert. While there was some potentially promising results, the findings were inconclusive and much larger datasets would be needed to make any proper claims.

The success of deepMoji on its own at detecting fake news is certianly interesting as a side note. An indication of the unique emotional watermark that seems to cover much fake news on the internet!