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
          <p>{{ post.description | default: post.excerpt | strip_html | truncatewords: 30 }}</p>
        </article>
      {% endfor %}
    </div>
  </div>

  <div class="notebook-right nav-tree">
    <h2>📚 Note Navigation</h2>

    <details open>
      <summary><strong>ICVA Species and Diagnoses</strong></summary>

      <details>
        <summary><strong>Canine &amp; Feline</strong></summary>

        <details>
          <summary><strong>Cardiovascular</strong></summary>

          
         <ul>
  {% assign cf_cardiology = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'cardiology'" %}
  {% if cf_cardiology.size > 0 %}
    {% for post in cf_cardiology %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  {% else %}
    <li>(Coming soon)</li>
  {% endif %}
</ul>
        </details>


        <details>
          <summary><strong>Endocrine</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Gastrointestinal and Digestive</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Hemic and Lymphatic</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Integumentary</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Musculoskeletal</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Nervous</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Respiratory</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Special Senses</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Urinary</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Reproductive</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Behavior</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

        <details>
          <summary><strong>Multisystemic</strong></summary>
          <ul><li>(Coming soon)</li></ul>
        </details>

      </details>

      <details>
        <summary><strong>Equine</strong></summary>
        <ul><li>(Coming soon)</li></ul>
      </details>

      <details>
        <summary><strong>Bovine</strong></summary>
        <ul><li>(Coming soon)</li></ul>
      </details>

    </details>
  </div>
</div>
