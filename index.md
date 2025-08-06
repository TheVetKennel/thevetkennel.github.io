
---
layout: default
title: Home
---

<section class="hero">
  <h2>Welcome to The Vet Kennel</h2>
  <p>Study resources, blog posts, and NAVLE flashcards with a retro soul.</p>
  <a class="button" href="/articles.html">📝 Read Vetmed Articles</a>
</section>

<section class="blog-preview">
  <h3>Latest Posts</h3>
  {% for post in site.posts limit:3 %}
    {% include blog-card.html post=post %}
  {% endfor %}
</section>
