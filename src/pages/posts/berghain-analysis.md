---
layout: '@/templates/BasePost.astro'
title: Berghain analysis 
description: Berghain analysis djs
pubDate: 2025-01-19T00:00:00Z
imgSrc: '/assets/images/ber.jpg'
imgAlt: 'Image post'
---


Music is essential in my daily life. In particular, electronic music plays a big role in my activities, helping me process what’s happening around me in different ways.

One of the most famous spots in the electronic music scene is Berghain in Berlin. That’s why I decided to use my software engineering knowledge and, combined with AI, build a scraper to create a dataset and answer one main question: **Which DJ has played the most in the events listed on Berghain’s website?**

On their website, you can see events, DJs, and dates. I developed a script that goes through each event, takes the page as a string, and passes it to an AI (in combination with PydanticAI) to extract the data I’m interested in and build the dataset:

Note: You need an OpenAI API Key for this to work.

Once the dataset was created, I built a simple Streamlit app where you can select a year and see which DJ played the most during that period. You can check it out here: https://berghain.alejofig.com/

Conclusion
In this project, AI not only helped speed up the process of answering specific questions, but also made repetitive tasks — like parsing information — much more user-friendly. (Although it did cost me about 1 USD for the OpenAI API usage!)

Code: https://github.com/alejofig/berghain-analysis