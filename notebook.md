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

    <!-- CANINE & FELINE -->
    <details>
      <summary><strong>Canine &amp; Feline</strong></summary>

      {% assign cf_systems = 
        "cardiology:Cardiovascular,
         endocrine:Endocrine,
         gastrointestinal:Gastrointestinal and Digestive,
         hemic-lymphatic:Hemic/Lymphatic,
         integumentary:Integumentary,
         musculoskeletal:Musculoskeletal,
         nervous:Nervous,
         respiratory:Respiratory,
         special-senses:Special Senses,
         urinary:Urinary,
         reproductive:Reproductive,
         behavior:Behavior,
         multisystemic:Multisystemic" 
         | split: "," %}

      {% for pair in cf_systems %}
        {% assign parts = pair | split: ":" %}
        {% assign sys_slug = parts[0] | strip %}
        {% assign sys_label = parts[1] | strip %}
        <details>
          <summary><strong>{{ sys_label }}</strong></summary>
          <ul>
{% assign cf_posts = site.posts 
   | where_exp: "p", "p.categories contains 'canine-feline'" 
   | where_exp: "p", "p.categories contains sys_slug" %}
            {% if cf_posts.size > 0 %}
              {% for post in cf_posts %}
                <li><a href="{{ post.url | relative_url }}">
                  {{ post.title | split: ":" | last | strip }}
                </a></li>
              {% endfor %}
            {% else %}
              <li>(Coming soon)</li>
            {% endif %}
          </ul>
        </details>
      {% endfor %}
    </details>

    <!-- EQUINE -->
    <details>
      <summary><strong>Equine</strong></summary>

      {% assign eq_systems = 
        "cardiology:Cardiovascular,
         endocrine:Endocrine,
         gastrointestinal:Gastrointestinal and Digestive,
         hemic-lymphatic:Hemic/Lymphatic,
         integumentary:Integumentary,
         musculoskeletal:Musculoskeletal,
         nervous:Nervous,
         respiratory:Respiratory,
         special-senses:Special Senses,
         urinary:Urinary,
         reproductive:Reproductive,
         behavior:Behavior,
         multisystemic:Multisystemic" 
         | split: "," %}

      {% for pair in eq_systems %}
        {% assign parts = pair | split: ":" %}
        {% assign sys_slug = parts[0] | strip %}
        {% assign sys_label = parts[1] | strip %}
        <details>
          <summary><strong>{{ sys_label }}</strong></summary>
          <ul>
{% assign eq_posts = site.posts 
   | where_exp: "p", "p.categories contains 'equine'" 
   | where_exp: "p", "p.categories contains sys_slug" %}
            {% if eq_posts.size > 0 %}
              {% for post in eq_posts %}
                <li><a href="{{ post.url | relative_url }}">
                  {{ post.title | split: ":" | last | strip }}
                </a></li>
              {% endfor %}
            {% else %}
              <li>(Coming soon)</li>
            {% endif %}
          </ul>
        </details>
      {% endfor %}
    </details>

    <!-- BOVINE -->
    <details>
      <summary><strong>Bovine</strong></summary>

      {% assign bov_systems = 
        "cardiology:Cardiovascular,
         endocrine:Endocrine,
         gastrointestinal:Gastrointestinal and Digestive,
         hemic-lymphatic:Hemic/Lymphatic,
         integumentary:Integumentary,
         musculoskeletal:Musculoskeletal,
         nervous:Nervous,
         respiratory:Respiratory,
         special-senses:Special Senses,
         urinary:Urinary,
         reproductive:Reproductive,
         behavior:Behavior,
         multisystemic:Multisystemic" 
         | split: "," %}

      {% for pair in bov_systems %}
        {% assign parts = pair | split: ":" %}
        {% assign sys_slug = parts[0] | strip %}
        {% assign sys_label = parts[1] | strip %}
        <details>
          <summary><strong>{{ sys_label }}</strong></summary>
          <ul>
{% assign bov_posts = site.posts 
   | where_exp: "p", "p.categories contains 'bovine'" 
   | where_exp: "p", "p.categories contains sys_slug" %}
            {% if bov_posts.size > 0 %}
              {% for post in bov_posts %}
                <li><a href="{{ post.url | relative_url }}">
                  {{ post.title | split: ":" | last | strip }}
                </a></li>
              {% endfor %}
            {% else %}
              <li>(Coming soon)</li>
            {% endif %}
          </ul>
        </details>
      {% endfor %}
    </details>

  </details>
</div>
</div>
