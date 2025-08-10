---
layout: default
title: Notebook
---

# Notebook

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'notebook'" %}
{% for post in posts %}
  {% if post.excerpt == nil %}{% assign excerpt = post.content | strip_html | truncate: 180 %}{% else %}{% assign excerpt = post.excerpt | strip_html | truncate: 180 %}{% endif %}
  {% if include %}{% endif %}
  {% include blog-card.html post=post %}
{% endfor %}
