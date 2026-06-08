const STORAGE_KEY='badk_graduates_230111_v5_2025';
let graduates = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  {id:1, fullName:'Султанбекова Нуриза Руслановна', year:2024, group:'ПКС-9-1-21', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'ОсОО Нур Телеком', position:'IT-специалист', city:'Бишкек'},
  {id:2, fullName:'Жолдошов Эмирлан Талантбекович', year:2024, group:'ПКС-9-1-21', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'КГТУ им. И. Раззакова', position:'студент', city:'Бишкек'},
  {id:3, fullName:'Токтосунов Адилет', year:2024, group:'ПКС-9-1-21', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT Support KG', position:'Системный администратор', city:'Бишкек'},
  {id:4, fullName:'Асанова Мээрим', year:2024, group:'ПКС-9-1-21', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Не трудоустроен', organization:'', position:'', city:'Бишкек'},
  {id:5, fullName:'Абдиев Тумарбек Уланович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:6, fullName:'Абдилатов Бекзат Кайытбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:7, fullName:'Абытов Аскар Жолборсович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:8, fullName:'Азат уулу Азирет', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:9, fullName:'Алмаз уулу Бек', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:10, fullName:'Алтымышов Алихан Жылдызбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:11, fullName:'Байсаков Амантур Эмилович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:12, fullName:'Бейшембаев Ийгилик Адилетович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:13, fullName:'Джоробаев Абубакир Абдикадырович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:14, fullName:'Жолдошев Байэл Абакирович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:15, fullName:'Жумашев Бектур Нурдинович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:16, fullName:'Кадыркулов Каныбек Болотбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:17, fullName:'Канышбекова Нураида', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:18, fullName:'Маматраимов Бактилек Болотбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:19, fullName:'Мамытбеков Даниэл Гүлжигитович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Трудоустроен', organization:'IT-компания / организация', position:'техник-программист', city:'Бишкек'},
  {id:20, fullName:'Мундузбаев Хантеңир Кылычбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'ВУЗ / продолжает обучение', position:'студент', city:'Бишкек'},
  {id:21, fullName:'Мурат Уулу Мурас', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'ВУЗ / продолжает обучение', position:'студент', city:'Бишкек'},
  {id:22, fullName:'Рыскулов Чымырбек Рыскулович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'ВУЗ / продолжает обучение', position:'студент', city:'Бишкек'},
  {id:23, fullName:'Сүйүналиев Туралы Дүйшеналиевич', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'ВУЗ / продолжает обучение', position:'студент', city:'Бишкек'},
  {id:24, fullName:'Токтобекова Мунара Бузурмановна', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Продолжает обучение', organization:'ВУЗ / продолжает обучение', position:'студент', city:'Бишкек'},
  {id:25, fullName:'Осеков Исках Турсунбекович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Не трудоустроен', organization:'', position:'', city:'Бишкек'},
  {id:26, fullName:'Эркинбек Кызы Аяна', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Не трудоустроен', organization:'', position:'', city:'Бишкек'},
  {id:27, fullName:'Эрмеков Рамис Нурланович', year:2025, group:'ПКС-9-1-22', specialty:'230111 Программирование в компьютерных системах', phone:'', email:'', status:'Не трудоустроен', organization:'', position:'', city:'Бишкек'}
];
const $ = id => document.getElementById(id);
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(graduates)); }
function badge(status){ const cls=status==='Трудоустроен'?'ok':status==='Не трудоустроен'?'bad':'study'; return `<span class="badge ${cls}">${status}</span>`; }

function render(){
  const q = $('searchInput')?.value?.toLowerCase() || '';
  const sf = $('statusFilter')?.value || '';
  const filtered = graduates.filter(g => (`${g.fullName} ${g.group} ${g.specialty} ${g.organization} ${g.city}`.toLowerCase().includes(q)) && (!sf || g.status===sf));

  if($('graduatesTable')){
    $('graduatesTable').innerHTML = filtered.map(g=>`<tr>
      <td><b>${g.fullName}</b><br><small>${g.specialty}</small></td><td>${g.year}</td><td>${g.group}</td><td>${badge(g.status)}</td><td>${g.organization||'-'}</td>
      <td><div class="row-actions"><button onclick="editGraduate(${g.id})">Изм.</button><button class="danger" onclick="deleteGraduate(${g.id})">Удал.</button></div></td>
    </tr>`).join('');
  }
  if($('recentTable')){
    $('recentTable').innerHTML = graduates.slice(-5).reverse().map(g=>`<tr>
      <td>${g.fullName}</td><td>${g.year}</td><td>${g.group}</td><td>230111</td><td>${badge(g.status)}</td><td>${g.organization||'-'}</td>
    </tr>`).join('');
  }

  const employed=graduates.filter(g=>g.status==='Трудоустроен').length;
  const unemployed=graduates.filter(g=>g.status==='Не трудоустроен').length;
  const study=graduates.filter(g=>g.status==='Продолжает обучение').length;
  const rate=graduates.length?Math.round(employed/graduates.length*100):0;
  ['totalCount'].forEach(id=>$(id)&&($(id).textContent=graduates.length));
  ['employedCount','repEmployed'].forEach(id=>$(id)&&($(id).textContent=employed));
  ['unemployedCount','repUnemployed'].forEach(id=>$(id)&&($(id).textContent=unemployed));
  $('repStudy')&&($('repStudy').textContent=study);
  $('employmentRate')&&($('employmentRate').textContent=rate+'%');
  renderYearStats(); drawChart();
}
function renderYearStats(){
  if(!$('yearStats')) return;
  const byYear={}; graduates.forEach(g=>{byYear[g.year] ||= {total:0, employed:0}; byYear[g.year].total++; if(g.status==='Трудоустроен') byYear[g.year].employed++;});
  $('yearStats').innerHTML = Object.keys(byYear).sort().map(y=>{const it=byYear[y], p=Math.round(it.employed/it.total*100); return `<div class="bar"><div class="bar-label"><b>${y}</b><span>${it.employed}/${it.total} — ${p}%</span></div><div class="bar-line"><div class="bar-fill" style="width:${p}%"></div></div></div>`}).join('');
}
function drawChart(){
  const c=$('chart'); if(!c) return; const ctx=c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height);
  const years=[2024,2025,2026], totals=[28,23,23], employed=[19,15,0];
  ctx.font='14px Arial'; ctx.fillStyle='#0b1f4d'; ctx.fillText('Всего выпускников',110,25); ctx.fillText('Трудоустроены',310,25);
  ctx.fillStyle='#1f5eb8'; ctx.fillRect(80,14,18,10); ctx.fillStyle='#73b657'; ctx.fillRect(280,14,18,10);
  const base=270, max=40, gap=150, w=30;
  ctx.strokeStyle='#d6e0ed'; ctx.beginPath(); for(let i=0;i<5;i++){let y=base-i*50; ctx.moveTo(40,y);ctx.lineTo(560,y);} ctx.stroke();
  years.forEach((yr,i)=>{let x=75+i*gap; let ht=totals[i]/max*210; let he=employed[i]/max*210;
    ctx.fillStyle='#1f5eb8'; ctx.fillRect(x,base-ht,w,ht); ctx.fillStyle='#73b657'; ctx.fillRect(x+32,base-he,w,he);
    ctx.fillStyle='#0b1f4d'; ctx.fillText(String(yr),x,300); ctx.fillText(String(totals[i]),x,base-ht-7); ctx.fillText(String(employed[i]),x+32,base-he-7);
  });
}
function readForm(){ return {id:$('editId').value?Number($('editId').value):Date.now(), fullName:$('fullName').value.trim(), year:Number($('year').value), group:$('group').value.trim(), specialty:$('specialty').value.trim(), phone:$('phone').value.trim(), email:$('email').value.trim(), status:$('status').value, organization:$('organization').value.trim(), position:$('position').value.trim(), city:$('city').value.trim()}; }
function fillForm(g){ $('editId').value=g.id; $('fullName').value=g.fullName; $('year').value=g.year; $('group').value=g.group; $('specialty').value=g.specialty; $('phone').value=g.phone; $('email').value=g.email; $('status').value=g.status; $('organization').value=g.organization; $('position').value=g.position; $('city').value=g.city; $('formTitle').textContent='Редактировать выпускника';}
function clearForm(){ $('graduateForm').reset(); $('specialty').value='230111 Программирование в компьютерных системах'; $('editId').value=''; $('formTitle').textContent='Добавить выпускника'; }
function editGraduate(id){ const g=graduates.find(x=>x.id===id); if(g){fillForm(g); goSection('graduates');}}
function deleteGraduate(id){ if(confirm('Удалить запись?')){graduates=graduates.filter(g=>g.id!==id); save(); render();}}
function exportCSV(){ const header=['ФИО','Год выпуска','Группа','Специальность','Телефон','Email','Статус','Организация','Должность','Город']; const rows=graduates.map(g=>[g.fullName,g.year,g.group,g.specialty,g.phone,g.email,g.status,g.organization,g.position,g.city]); const csv=[header,...rows].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n'); const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='badk_graduates_230111.csv'; a.click(); URL.revokeObjectURL(url);}
function goSection(name){ document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.section===name)); document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===name)); }

document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>goSection(btn.dataset.section)));
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>goSection(btn.dataset.go)));
$('graduateForm')?.addEventListener('submit',e=>{e.preventDefault(); const data=readForm(); const idx=graduates.findIndex(g=>g.id===data.id); if(idx>=0) graduates[idx]=data; else graduates.push(data); save(); clearForm(); render();});
$('resetBtn')?.addEventListener('click',clearForm);
$('searchInput')?.addEventListener('input',render);
$('statusFilter')?.addEventListener('change',render);
$('exportBtn')?.addEventListener('click',exportCSV);
$('loginBtn')?.addEventListener('click',()=>{ if($('loginUser').value==='admin' && $('loginPass').value==='1234'){ $('loginScreen').classList.add('hidden'); $('app').classList.remove('hidden'); render(); } else alert('Неверный логин или пароль'); });
render();

const yearGroups = {
  2024: [
    {group:'ПКС-9-1-21', total:28, employed:19, students:[['Выпуск 2024','Архив']]}
  ],
  2025: [
    {group:'ПКС-9-1-22', total:23, employed:15, students:[['Выпуск 2025','Трудоустройство']]}
  ],
  2026: [
    {group:'ПКСК-9-1-23', total:26, employed:0,
      students:[
        ['Абдиназаров Азизбек Абдимуталович', 'Выпускной курс'],
        ['Асыранбеков Талгат Уланбекович', 'Выпускной курс'],
        ['Бакеев Нурислам Шамович', 'Выпускной курс'],
        ['Барпыбеков Акжол Алмазбекович', 'Выпускной курс'],
        ['Галбаев Мухамед Абдулазизович', 'Выпускной курс'],
        ['Жаныбеков Данияр Замирбекович', 'Выпускной курс'],
        ['Жекшеналиев Руслан Уланович', 'Выпускной курс'],
        ['Жылдызбек уулу Чынгызбек', 'Выпускной курс'],
        ['Ибраимов Арген Медетбекович', 'Выпускной курс'],
        ['Ильязов Марсель Эльдарович', 'Выпускной курс'],
        ['Ишенов Ильяс Аязбекович', 'Выпускной курс'],
        ['Мааткеримов Марлен Жунушалыевич', 'Выпускной курс'],
        ['Надырбеков Алихан Алмазбекович', 'Выпускной курс'],
        ['Намазбеков Султан Даниярович', 'Выпускной курс'],
        ['Орозобеков Батырбек Уланович', 'Выпускной курс'],
        ['Рысбеков Нурэл Кубанычбекович', 'Выпускной курс'],
        ['Садыкахунов Тахиржан Давранович', 'Выпускной курс'],
        ['Салыкжанов Равшан Рустамович', 'Выпускной курс'],
        ['Талантбек уулу Даниэль', 'Выпускной курс'],
        ['Темирбеков Улукбек Жыргалбекович', 'Выпускной курс'],
        ['Токторбаев Азирет Тургуналиевич', 'Выпускной курс'],
        ['Төлөмүшов Ильяс Төлөмүшович', 'Выпускной курс'],
        ['Туратбеков Сапарбек Нурланович', 'Выпускной курс'],
        ['Уланов Акбар Уланович', 'Выпускной курс'],
        ['Эмилбекова Адиля Жусупбековна', 'Выпускной курс'],
        ['Жайлообек уулу Азат', 'Выпускной курс']
      ]},
    {group:'ПКСК-9-2-23', total:24, employed:0,
      students:[
        ['Абдалбеков Назар Даниярович', 'Выпускной курс'],
        ['Автандил уулу Актан', 'Выпускной курс'],
        ['Асанов Сүйүнбай Бузурманкулович', 'Выпускной курс'],
        ['Бектуров Эмир Бектурович', 'Выпускной курс'],
        ['Биккенин Артур Ильдарович', 'Выпускной курс'],
        ['Галаев Герман Янович', 'Выпускной курс'],
        ['Дурусбеков Нурсен Алтынбекович', 'Выпускной курс'],
        ['Жекшенбекова Бермет Замирбековна', 'Выпускной курс'],
        ['Иманалиев Нурсултан Орозобекович', 'Выпускной курс'],
        ['Каленова Айназик Нурлановна', 'Выпускной курс'],
        ['Келсинбеков Атайбек Келсинбекович', 'Выпускной курс'],
        ['Кубанычбек уулу Байсалбек', 'Выпускной курс'],
        ['Курманкалиев Бекжан Максатович', 'Выпускной курс'],
        ['Маматов Бекзат Туралиевич', 'Выпускной курс'],
        ['Мелисова Айэлита Мелисовна', 'Выпускной курс'],
        ['Меркибаева Хадича Талантбековна', 'Выпускной курс'],
        ['Ордобаев Акылбек Максатович', 'Выпускной курс'],
        ['Сапарбеков Актан Каныбекович', 'Выпускной курс'],
        ['Сатыбалдиев Самар Телекович', 'Выпускной курс'],
        ['Сейитпеков Бердибек Сейитпекович', 'Выпускной курс'],
        ['Султангазиев Исламбек Султанбекович', 'Выпускной курс'],
        ['Султангазиев Муслимбек Султанбекович', 'Выпускной курс'],
        ['Токтоев Актилек', 'Выпускной курс'],
        ['Эсенбеков Мадияр Нурланбекович', 'Выпускной курс']
      ]}
  ]
};

function renderYearGroups(year='2023'){
  const box = document.getElementById('yearGroupView');
  if(!box) return;
  const groups = yearGroups[year] || [];
  box.innerHTML = `<div class="year-card">
    <div class="year-card-header"><h3>${year} год выпуска</h3><span>${groups.reduce((s,g)=>s+g.total,0)} студентов</span></div>
    <div class="group-list">
      ${groups.map(g => `
        <div class="group-card">
          <h4>${g.group}</h4>
          <div class="group-meta">
            <span>Всего: ${g.total}</span>
            <span>Трудоустроены: ${g.employed}</span>
            <span>${g.total ? Math.round(g.employed/g.total*100) : 0}%</span>
          </div>
          <div class="student-mini">
            ${g.students.map(s => `<div><b>${s[0]}</b><small>${s[1]}</small></div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}
document.querySelectorAll('.year-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.year-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderYearGroups(btn.dataset.year);
  });
});
renderYearGroups('2024');
