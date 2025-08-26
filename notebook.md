---
layout: default
title: Notebook
---

<h1>Notebook</h1>
<p>✍️ Explore my notebook pages where I attempt to break down the ICVA Species and Diagnoses into scooby-snack-sized bites for someone who has absolutely no idea what's going on (me).<br>Mixed in with the ICVA Competency Domains, study techniques, and other ramblings.</p>

<!-- Override any theme sizing that was cropping thumbnails -->
<style>
  .post-card .thumb { aspect-ratio: auto !important; height: auto !important; }
  .post-card .thumb img { width: 100%; height: auto; display: block; }
</style>

<div class="notebook-container">
  <div class="notebook-left">
    <h2>📓 Recent Notes</h2>

    <div class="post-card-list">
      {% for post in site.posts %}
        {% assign thumb = post.thumbnail | default: post.image %}
        <article class="post-card">
          <a class="thumb-link" href="{{ post.url | relative_url }}">
            <div class="thumb" style="border-radius:12px; overflow:hidden;">
              {% if thumb %}
                <img src="{{ thumb | relative_url }}"
                     alt="{{ post.image_alt | default: post.title }} thumbnail"
                     loading="lazy">
              {% endif %}
            </div>
          </a>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
          <p>{{ post.description }}</p>
        </article>
      {% endfor %}
    </div>
  </div>


<div class="notebook-right">
  {% include notebook-nav.html %}
</div>
