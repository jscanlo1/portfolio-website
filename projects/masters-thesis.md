---
title: 'Detecting Fake News by Leveraging Emotion'
date: '2022-04-01'
description: 'This was my masters thesis project. It looks at using DeepMoji alongside (at the time) state of the art Transformer models for detecting fake news'
github: 'https://github.com/jscanlo1/MAI-thesis-project'
favourite: true
---

### Overview

> A liar begins with making falsehood appear like truth, and ends with making truth itself appear like falsehood. 

~ William Shenstone

A quote made almost 200 years ago that came to be somewhat axiomatic to my Master's Thesis.

This project is the code repository behind my Master's Thesis.
The core train of thought behind my Thesis was this:
 - Given that fake news tends to evoke emotions.
 - I reasoned that the news itself may contain a distinct emotional footprint.
 - And by using large language models trained specially to detect emotion in tandem with current state of the art approaches, we may see improved results!


If interested, a link to my full thesis can be found at the bottom of the ***About Me*** section.



### How it Works


This project looked at combining Bert, a  state-of-the-art transformer model (at the time), with emotion detection models.

In particular this project looked at combining deepMoji, an emotion deteciton model that associates text input with 64 different emojis.

Emojis are a unique tool of the digital world to convey emotion. 
This was the inital spark that made me think about incorporating something like deepMoji in as my emotion detector.

Emojis  convey much more nuance than one may initially think. 
Think about how a skull emoji may be used to convey laughter, as in 'dying laughing', to more its obvious connotations with death.
The success of deepMoji on it's own s justifies this. 
The model has being incredibly succesfull at detecing nuanced features like sarcasm.


Ultimately, the project aimed to see if this could be used to bolster large transformer models like Bert. 
While there was some promising results, the findings were inconclusive and much larger datasets would be needed to make any proper claims.

The success of deepMoji on its own at detecting fake news is certianly interesting as a side note. 
An indication of the unique emotional watermark that seems to cover much fake news on the internet!

### Conclusions

Alas! While there was some potentially promising results, there was not enough to achieve statistical significance. The project used bootstrapping to measure this statistical significance. 

To investigate whether deepMoji really can improve Bert beyond all reasonable doubt, much larger datasets would be needed.