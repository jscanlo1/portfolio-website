---
title: 'Using Comment Sections to Detect Fake News'
date: '2021-11-10'
description: 'A college project that inspired my later Masters thesis. It looks at using news item comment sections to assess the veracity of that news item.'
github: 'https://github.com/jscanlo1'
favourite: false
slug: 'comment-section'
---

### Overview

This was a project myself and a friend undertook as part of a Machine Learning course in our fifth and final year at Trinity College Dublin.

The project looked to see if machine learning models could use comment sections themselves to identify fake news.
The work done on this project went on to inspire my Master's Thesis, which looked at how emotion could be used to detect fake news.

### How it works

The data was taken from news articles that had been labeled as par of generic fake news datasets for training. 
It was necessary to scrape the comment sections of these articles ourselves. We used selenium with python to do this.


Four models were compared as a part of this project.

- ***Dummy Model***: The training set was unbalanced. Therefore a stratified dummy model was chosen, which respects the class distributions of the training set.

- Logistic Regression Classification

- Linear SVM classification

- Multi-Layer Perceptron (Deep Learning)


### Conclusions

All models performed very well, with F1 scores above 0.9 for all.
however, keep in mind that the baseline F1 score for was 0.82.

Ultimately the Multi-layer perceptron performed best, with an F1 score of 0.939 and AUC of 0.92. Where it really stood out was its much lower false positive rate: only 0.49, compared to 0.76 for logisitc regression (the next best).


