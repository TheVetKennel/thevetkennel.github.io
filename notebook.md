---
layout: default
title: Notebook
---

<h1>Notebook</h1>
<p>Explore my latest blog posts ✍️</p>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
