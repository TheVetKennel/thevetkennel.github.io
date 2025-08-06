---
layout: default
title: Notebook
---

<h1>Notebook</h1>
<p>Explore my latest blog posts ✍️</p>

<div class="post-card-list">
  {% for post in site.posts %}
    <div class="post-card">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>
