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

      <!-- Cardiovascular -->
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

      <!-- Endocrine -->
      <details>
        <summary><strong>Endocrine</strong></summary>
        <ul>
          {% assign cf_endocrine = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'endocrine'" %}
          {% if cf_endocrine.size > 0 %}
            {% for post in cf_endocrine %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Gastrointestinal -->
      <details>
        <summary><strong>Gastrointestinal and Digestive</strong></summary>
        <ul>
          {% assign cf_gi = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'gastrointestinal'" %}
          {% if cf_gi.size > 0 %}
            {% for post in cf_gi %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Hemic & Lymphatic -->
      <details>
        <summary><strong>Hemic and Lymphatic</strong></summary>
        <ul>
          {% assign cf_hemic = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'hemic-lymphatic'" %}
          {% if cf_hemic.size > 0 %}
            {% for post in cf_hemic %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Integumentary -->
      <details>
        <summary><strong>Integumentary</strong></summary>
        <ul>
          {% assign cf_skin = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'integumentary'" %}
          {% if cf_skin.size > 0 %}
            {% for post in cf_skin %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Musculoskeletal -->
      <details>
        <summary><strong>Musculoskeletal</strong></summary>
        <ul>
          {% assign cf_msk = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'musculoskeletal'" %}
          {% if cf_msk.size > 0 %}
            {% for post in cf_msk %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Nervous -->
      <details>
        <summary><strong>Nervous</strong></summary>
        <ul>
          {% assign cf_neuro = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'nervous'" %}
          {% if cf_neuro.size > 0 %}
            {% for post in cf_neuro %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Respiratory -->
      <details>
        <summary><strong>Respiratory</strong></summary>
        <ul>
          {% assign cf_resp = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'respiratory'" %}
          {% if cf_resp.size > 0 %}
            {% for post in cf_resp %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Special Senses -->
      <details>
        <summary><strong>Special Senses</strong></summary>
        <ul>
          {% assign cf_senses = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'special-senses'" %}
          {% if cf_senses.size > 0 %}
            {% for post in cf_senses %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Urinary -->
      <details>
        <summary><strong>Urinary</strong></summary>
        <ul>
          {% assign cf_urinary = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'urinary'" %}
          {% if cf_urinary.size > 0 %}
            {% for post in cf_urinary %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Reproductive -->
      <details>
        <summary><strong>Reproductive</strong></summary>
        <ul>
          {% assign cf_repro = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'reproductive'" %}
          {% if cf_repro.size > 0 %}
            {% for post in cf_repro %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Behavior -->
      <details>
        <summary><strong>Behavior</strong></summary>
        <ul>
          {% assign cf_behave = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'behavior'" %}
          {% if cf_behave.size > 0 %}
            {% for post in cf_behave %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

      <!-- Multisystemic -->
      <details>
        <summary><strong>Multisystemic</strong></summary>
        <ul>
          {% assign cf_multi = site.posts | where_exp: "p", "p.categories contains 'canine-feline' and p.categories contains 'multisystemic'" %}
          {% if cf_multi.size > 0 %}
            {% for post in cf_multi %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          {% else %}
            <li>(Coming soon)</li>
          {% endif %}
        </ul>
      </details>

    </details>

    <!-- EQUINE -->
    <details>
      <summary><strong>Equine</strong></summary>
      <ul><li>(Coming soon)</li></ul>
    </details>

    <!-- BOVINE -->
    <details>
      <summary><strong>Bovine</strong></summary>
      <ul><li>(Coming soon)</li></ul>
    </details>

  </details>
</div>
    </details>
  </div>
</div>
