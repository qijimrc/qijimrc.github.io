---
layout: page
permalink: /projects/
title: projects
nav: projects
description: A quick look at the projects I have been working on. 
nav_order: 3
---

<!-- STYLE -->
{% assign themes = "light_theme" %}
{% assign title_color = site.data.github_style.theme[themes].title_color %}
{% assign text_color = site.data.github_style.theme[themes].text_color %}
{% assign icon_color = site.data.github_style.theme[themes].icon_color %}
{% assign bg_color = site.data.github_style.theme[themes].bg_color %}
{% assign border_color = site.data.github_style.theme[themes].border_color %}
{% assign style = '&title_color=' | append: title_color | append: '&text_color=' | append: text_color | append: '&icon_color=' | append: icon_color | append: '&bg_color=' | append: bg_color | append: '&border_color=' | append: border_color %}


<h3 id="github-repositories">Repositories</h3>

<div class="repocards">
  {% for user in site.data.github %}
    {% for repository in user.repositories %}
      <div class="repocard-single">
        <a href="https://github.com/{{ user.username }}/{{ repository }}">
          <img class="repocard-img" alt="{{ user.username }} repository - {{ repository }}" src="https://github-readme-stats-1isq-6joamo805-ningding97.vercel.app/api/pin/?username={{ user.username }}&repo={{ repository }}&hide_border=true&line_height=28&theme=swift">
        </a>
      </div>
    {% endfor %}
  {% endfor %}
</div>


<br>
<!-- Clearfix to ensure separation -->
<div style="clear: both;"></div>

<h3>GitHub</h3>
<div class="repocards">
  <div class="repocard-single">
    <a href="https://github.com/{{ site.github_username }}">
      <img class="repocard-img" alt="{{ site.github_username }} GitHub Stats" src="https://github-readme-stats-1isq-6joamo805-ningding97.vercel.app/api?username={{ site.github_username }}&include_orgs=true&include_all_commits=true&show_icons=true&hide_border=true&show_issues=false&theme=swift&hide=prs,issues">
    </a>
  </div>
</div>

<!-- 
<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" align="center" src="{{ '/assets/img/OPOD.png' | relative_url }}" alt="" title="example image"/>
    </div>
</div>

<div class="caption" width=700rem>
    <b>OpenPrompt</b> organizes the training process and the task formats, and <b>OpenDelta</b> conduct particular parameter-efficient optimizations.
    They can collaboratively work together to effectively and efficiently stimulate large-scale language models.
</div> -->