---
layout: default
title: Notebook
---

<h1>Notebook</h1>
<p>Explore my latest blog posts ✍️</p>

<div class="notebook-container">
  <div class="notebook-left">
    <h2>📓 Recent Posts</h2>
    <div class="post-card-list">
      {% for post in site.posts %}
        <div class="post-card">
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          <p>{{ post.excerpt }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
  <div class="notebook-right">
    <h2>📚 NAVLE Library</h2>
    <details open>
      <summary><strong>NAVLE</strong></summary>
      <ul>
        <li>
          <details>
            <summary>Canine & Feline</summary>
            <details><summary>Cardiology</summary><ul><li>Arrhythmias</li><li>Congenital</li><li>Acquired</li></ul></details>
            <details><summary>Endocrine</summary><ul><li>Diabetes</li><li>Cushing’s</li></ul></details>
            <details><summary>Lymph & Haem</summary><ul><li>Lymphoma</li><li>IMHA</li></ul></details>
          </details>
        </li>
        <li>
          <details>
            <summary>Equine</summary>
            <details><summary>Cardiology</summary><ul><li>Valve disorders</li></ul></details>
            <details><summary>Endocrine</summary><ul><li>PPID</li></ul></details>
          </details>
        </li>
        <li>
          <details>
            <summary>Bovine</summary>
            <details><summary>Cardiology</summary><ul><li>Hardware Disease</li></ul></details>
          </details>
        </li>
      </ul>
    </details>
  </div>
</div>
