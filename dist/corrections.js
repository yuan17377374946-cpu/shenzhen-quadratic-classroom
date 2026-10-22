'use strict';
function correctedQuestion(q){
 if(q.id!=='s15q03')return '';
 return `<div class="corrected-exercise"><p class="correction-label">授课校订版 · 平移部分按表格统一为 y = 2x²</p>
 <p>二次函数 <b class="math">y = 2x²</b>，先向上平移 <b>6</b> 个单位，再向右平移 <b>3</b> 个单位。</p>
 <table><thead><tr><th>原函数 y = 2x²</th><th>平移后 y = 2(x − 3)² + 6</th></tr></thead><tbody><tr><td>(0, 0)</td><td>(3, m)</td></tr><tr><td>(1, 2)</td><td>(4, 8)</td></tr><tr><td>(2, 8)</td><td>(5, 14)</td></tr><tr><td>(−1, 2)</td><td>(2, 8)</td></tr><tr><td>(−2, 8)</td><td>(1, 14)</td></tr></tbody></table>
 <p>（1）求 m 的值。</p><p>（2）画出平移后的图象；另求 <span class="math">y = −½x² + 5</span> 与 <span class="math">y = ½x²</span> 的交点坐标。</p>
 <p class="subtle-question">注意：第（2）问后半部分给出的是另外两条函数。</p>
 <p>（3）P(x₁, y₁)、Q(x₂, y₂) 在平移后的图象上，且位于对称轴同一侧。若 y₁ &gt; y₂，比较 x₁ 与 x₂。</p>
 <details class="original-exercise"><summary>对照原稿（含原有错误）</summary><p>原汇编第319页题干写½，表格及部分解析写2；交点答案纵坐标也有误。此处是供授课使用的明确校订，原图保留如下。</p>${q.question.map(im=>`<img src="${im.src}" alt="原稿对照" width="${im.width}" height="${im.height}">`).join('')}</details></div>`;
}
function correctedLessonSteps(q){
 if(q.id!=='s15q03')return null;
 return [
 {title:'先平移点，再写函数',html:'<p>每个点都按同一个规则移动：</p><p class="math big-equation">(x, y) → (x + 3, y + 6)</p><p>原顶点 (0, 0) → 新顶点 (3, 6)，所以 <b>m = 6</b>。</p>'},
 {title:'平移不改变二次项系数',html:'<p class="math big-equation">y = 2x²<br>↓ 向上 6，再向右 3<br>y = 2(x − 3)² + 6</p><p>开口向上；顶点 (3, 6)；对称轴 x = 3。描出表格里的五个点，连成光滑曲线。</p>'},
 {title:'第（2）问：另外两条函数求交点',html:'<p>令两条函数的 y 相等：</p><p class="math big-equation">−½x² + 5 = ½x²<br>x² = 5<br>x = ±√5</p><p>代入 y = ½x² 得 y = 5/2。</p><p class="math">交点：(−√5, 5/2)、(√5, 5/2)</p><p>原稿答案写成 y = 0 有误。</p>'},
 {title:'同侧比较，需要分左右讨论',html:'<p>对称轴是 <b>x = 3</b>，开口向上。</p><p>两点都在左侧：y 随 x 增大而减小，<b>y₁ &gt; y₂ ⇒ x₁ &lt; x₂</b>。</p><p>两点都在右侧：y 随 x 增大而增大，<b>y₁ &gt; y₂ ⇒ x₁ &gt; x₂</b>。</p><p>未说明在哪一侧，因此两种情况都要写。</p>'}
 ];
}
