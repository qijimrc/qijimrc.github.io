---
layout: page
permalink: /students/
title: students
description: Our lab information is at <a href="https://c3i.ee.tsinghua.edu.cn/en/">TsinghuaC3I</a>. 
nav: false
nav_order: 4
---

<style>
/* Custom container for students page only */
.students-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Override the default container width for this page */
@media (min-width: 768px) {
  .post {
    max-width: 100% !important;
  }
  
  .container {
    max-width: 1200px !important;
  }
}
.students-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {
  .students-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .students-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .students-grid {
    grid-template-columns: 1fr;
  }
}

.student-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  border: 1px solid transparent;
}

.student-card:hover {
  background: #fff;
  box-shadow: 0 4px 12px rgba(107, 142, 107, 0.1);
  border-color: rgba(107, 142, 107, 0.2);
  transform: translateY(-2px);
}

.student-avatar {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
  background-color: #e8ebe9;
  position: relative;
  transition: transform 0.03s ease, box-shadow 0.12s ease; /* subtle tilt + smooth shadow */
}

.student-avatar:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.20);
}

.default-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8ebe9 0%, #dde0dd 100%);
  color: #6b8e6b;
  font-size: 36px;
  font-weight: 300;
}

.student-details h5 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.1rem;
}

.student-details p {
  margin-bottom: 0.25rem;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.4;
}

.student-details a {
  color: #6b8e6b;
  text-decoration: none;
}

.student-details a:hover {
  color: #5a7a5a;
  text-decoration: underline;
}

.alumni-list {
  list-style: none;
  padding-left: 0;
}

.alumni-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.alumni-list li:last-child {
  border-bottom: none;
}

.alumni-list a {
  color: #6b8e6b;
  text-decoration: none;
}

.alumni-list a:hover {
  color: #5a7a5a;
  text-decoration: underline;
}

.section-divider {
  margin: 3rem 0 2rem 0;
}
</style>

## Current Students

<div class="students-page-container">

<br>

<!-- <div class="students-grid">


  <div class="student-card">
    <img src="/assets/img/student1.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>LS</div>'">
    <div class="student-details">
      <h5><a href="" target="_blank"> Li Sheng</a></h5>
      <p> Tsinghua University</p>
      <p>Ph.D. student</p> 
      <p>2026 (expected) - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/zijie.jpeg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>ZQ</div>'">
    <div class="student-details">
      <h5><a href="https://scholar.google.com/citations?user=T8_JIfkAAAAJ&hl=en" target="_blank"> Zijie Qiu</a></h5>
      <p> Tsinghua 
      & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2026 (expected) - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/student1.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>JY</div>'">
    <div class="student-details">
      <h5><a href="" target="_blank"> Jiale Yu</a></h5>
      <p> Tsinghua 
      & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2026 (expected) - </p>
    </div>
  </div>

  
  <div class="student-card">
    <img src="/assets/img/junlin.png" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>JY</div>'">
    <div class="student-details">
      <h5><a href="https://yangjl2003.github.io/" target="_blank">Junlin Yang</a></h5>
      <p> Tsinghua University</p>
      <p>w/ Prof. Bowen Zhou</p> 
      <p>Ph.D. student</p> 
      <p>2026 (expected) - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/hongxiangyu.png" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>XH</div>'">
    <div class="student-details">
      <h5><a href="https://lilhongxy.github.io/" target="_blank">Xiangyu Hong</a></h5>
      <p> Tsinghua University</p>
      <p>w/ Prof. Bowen Zhou</p> 
      <p>Ph.D. student</p> 
      <p>2026 (expected) - </p>
    </div>
  </div>


  <div class="student-card">
    <img src="/assets/img/zhangyuchen.jpeg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>YZ</div>'">
    <div class="student-details">
      <h5><a href="https://yuczhang.com/" target="_blank">Yuchen Zhang</a></h5>
      <p> PKU & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/qushang.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>SQ</div>'">
    <div class="student-details">
      <h5><a href="https://lindsay-13.github.io/" target="_blank">Shang Qu</a></h5>
      <p> Tsinghua & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/lihaozhan.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>HL</div>'">
    <div class="student-details">
      <h5><a href="https://c3i.ee.tsinghua.edu.cn/en/author/haozhan-li/" target="_blank">Haozhan Li</a></h5>
      <p> Tsinghua University</p>
      <p>w/ Prof. Bowen Zhou</p> 
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/gaosiyan.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>SG</div>'">
    <div class="student-details">
      <h5><a href="" target="_blank">Siyan Gao</a></h5>
      <p> Tsinghua University</p>
      <p>w/ Prof. Bowen Zhou</p> 
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>

  <div class="student-card">
    <img src="/assets/img/fanyuchen.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>SG</div>'">
    <div class="student-details">
      <h5><a href="https://yuchenfan48.github.io/" target="_blank">Yuchen Fan</a></h5>
      <p>SJTU & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>


  <div class="student-card">
    <img src="/assets/img/chenyuhan.jpg" alt="Student Name" class="student-avatar" onerror="this.outerHTML='<div class=\'student-avatar default-avatar\'>YC</div>'">
    <div class="student-details">
      <h5><a href="" target="_blank">Yuhan Chen</a></h5>
      <p>Tongji & SH AI LAB</p>
      <p>Ph.D. student</p> 
      <p>2025 - </p>
    </div>
  </div>





</div>

<div class="section-divider"></div>

<h2> Undergrads/Advisees/Visitors & Alumni</h2>

<ul class="alumni-list">
  <li>
    <strong>Yuxin Zuo</strong> 
  </li>

  <li>
     <strong><a href="https://scholar.google.com/citations?user=Q3a25IEAAAAJ&hl=en" target="_blank">Xingtai Lv</a></strong> <br>
    Ph.D. Student at Tsinghua University
  </li>
  <li>
    <strong><a href="https://cds.nyu.edu/team/yulin-chen/" target="_blank">Yulin Chen</a></strong> <br>
    Ph.D. Student at New York University
  </li>



</ul>

</div> -->
