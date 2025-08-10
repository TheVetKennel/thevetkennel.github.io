---
layout: default
title: Notebook
---

<h1>Notebook</h1>
<p>✍️ Explore my notebook pages where I attempt to explain the ICVA Species and Diagnoses to someone who has absolutely no idea what's going on (me).<br>Mixed in with the ICVA Competency Domains, study techniques, and other ramblings.</p>

<div class="notebook-container">
  <div class="notebook-left">
    <h2>📓 Recent Notes</h2>
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
    <h2>📚 Note Navigation</h2>
    <details open>
      <summary><strong>ICVA Species and Diagnoses</strong></summary>
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
