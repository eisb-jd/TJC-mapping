/* Calendar page: month view, agenda view, event details, and the event request form.
   Events below are SAMPLES for the prototype, not real church events. */
const EVT_TYPES={
 kkr:{c:'#0B7398',n:{en:'Spiritual & evangelistic meeting',ms:'KKR & Penginjilan',zh:'灵恩布道会'}},
 student:{c:'#3A9E5C',n:{en:'Student spiritual meeting',ms:'KKR Murid-murid',zh:'学生灵恩会'}},
 seminar:{c:'#8A6BBE',n:{en:'Seminar',ms:'Seminar',zh:'进修会'}},
 youth:{c:'#D9822B',n:{en:'Youth',ms:'Belia',zh:'青年'}},
 meeting:{c:'#24386B',n:{en:'Meeting',ms:'Mesyuarat',zh:'会议'}},
 special:{c:'#C2185B',n:{en:'Special service',ms:'Kebaktian khas',zh:'特别聚会'}}
};
const EVENTS=[
 {id:'e1',type:'kkr',s:'2026-11-27',e:'2026-11-29',time:'Fri 7.30pm – Sun 12.00pm',site:'TJC-028',t:{en:'Spiritual & Evangelistic Meeting – Penampang',ms:'KKR & Penginjilan – Gereja Penampang',zh:'兵南邦教会 灵恩布道会'}},
 {id:'e2',type:'seminar',s:'2026-11-22',e:'2026-11-22',time:'9.00am – 4.00pm',site:'TJC-020',t:{en:'Religious Education Teachers’ Seminar',ms:'Seminar Guru-guru Pendidikan Agama',zh:'宗教教育教员进修会'}},
 {id:'e3',type:'youth',s:'2026-12-05',e:'2026-12-05',time:'2.00pm – 9.00pm',site:'TJC-020',t:{en:'Youth Hymn Night – Kota Kinabalu Subzone',ms:'Malam Kidung Belia – Subzon Kota Kinabalu',zh:'亚庇小区 青年诗歌之夜'}},
 {id:'e4',type:'student',s:'2026-12-10',e:'2026-12-13',time:'Thu 8.00am – Sun 12.00pm',site:'TJC-061',t:{en:'Student Spiritual Meeting – Interior Zone',ms:'KKR Murid-murid – Zon Pedalaman',zh:'内陆区 学生灵恩会'}},
 {id:'e5',type:'kkr',s:'2026-12-04',e:'2026-12-06',time:'Fri 7.30pm – Sun 12.00pm',site:'TJC-102',t:{en:'Spiritual & Evangelistic Meeting – Tawau',ms:'KKR & Penginjilan – Gereja Tawau',zh:'斗湖教会 灵恩布道会'}},
 {id:'e6',type:'meeting',s:'2026-12-19',e:'2026-12-19',time:'9.00am – 5.00pm',site:'TJC-020',t:{en:'Statewide Delegates Conference',ms:'Persidangan Perwakilan Seluruh Negeri',zh:'全州代表大会'}},
 {id:'e7',type:'student',s:'2026-12-17',e:'2026-12-20',time:'Thu 8.00am – Sun 12.00pm',site:'TJC-093',t:{en:'Student Spiritual Meeting – East Coast Zone',ms:'KKR Murid-murid – Zon Pantai Timur',zh:'东海岸区 学生灵恩会'}},
 {id:'e8',type:'special',s:'2026-12-25',e:'2026-12-25',time:'10.00am – 3.00pm',site:'TJC-046',t:{en:'Family Day & Evangelistic Service – Tuaran',ms:'Hari Keluarga & Kebaktian Penginjilan – Tuaran',zh:'斗亚兰教会 家庭日暨布道聚会'}},
 {id:'e9',type:'seminar',s:'2026-11-28',e:'2026-11-28',time:'8.30am – 1.00pm',site:'TJC-104',t:{en:'Church Workers’ Seminar – Labuan',ms:'Seminar Pekerja Suci – Labuan',zh:'纳闽 圣工人员进修会'}},
 {id:'e10',type:'kkr',s:'2027-01-08',e:'2027-01-10',time:'Fri 7.30pm – Sun 12.00pm',site:'TJC-100',t:{en:'Spiritual & Evangelistic Meeting – Sandakan',ms:'KKR & Penginjilan – Sandakan',zh:'山打根 灵恩布道会'}},
 {id:'e11',type:'youth',s:'2027-01-16',e:'2027-01-17',time:'Sat 9.00am – Sun 3.00pm',site:'TJC-041',t:{en:'Youth Camp – West Coast Zone',ms:'Kem Belia – Zon Pantai Barat',zh:'西海岸区 青年营'}},
 {id:'e12',type:'special',s:'2026-12-31',e:'2026-12-31',time:'7.30pm – 9.30pm',site:'TJC-020',t:{en:'Year-End Thanksgiving Service',ms:'Kebaktian Kesyukuran Akhir Tahun',zh:'年终感恩聚会'}}
];
const CT={
 title:{en:'Calendar',ms:'Kalendar',zh:'行事历'},
 intro:{en:'Spiritual meetings, seminars, youth and student activities across Sabah, Labuan and Sarawak. Tap an event for details and directions.',ms:'Kebaktian kebangunan rohani, seminar, aktiviti belia dan murid di seluruh Sabah, Labuan dan Sarawak. Klik acara untuk butiran dan arah.',zh:'全州灵恩会、进修会、青年与学生活动。点击活动查看详情与导航。'},
 sample:{en:'Sample events for this prototype. The church will replace them with its real calendar.',ms:'Acara contoh untuk prototaip ini. Gereja akan menggantikannya dengan kalendar sebenar.',zh:'以下为原型示范活动，教会将以实际行事历替换。'},
 sampleTag:{en:'Sample',ms:'Contoh',zh:'示范'},
 today:{en:'Today',ms:'Hari ini',zh:'今天'},
 month:{en:'Month',ms:'Bulan',zh:'月'},
 list:{en:'List',ms:'Senarai',zh:'列表'},
 when:{en:'Date',ms:'Tarikh',zh:'日期'},
 time:{en:'Time',ms:'Masa',zh:'时间'},
 venue:{en:'Venue',ms:'Tempat',zh:'地点'},
 dirs:{en:'Get directions with KodLokasi',ms:'Dapatkan arah dengan KodLokasi',zh:'使用 KodLokasi 导航'},
 addCal:{en:'Add to my calendar',ms:'Tambah ke kalendar saya',zh:'加入我的日历'},
 churchPage:{en:'Church page',ms:'Halaman gereja',zh:'教会页面'},
 none:{en:'No events this month.',ms:'Tiada acara bulan ini.',zh:'本月没有活动。'},
 pending:{en:'Awaiting approval',ms:'Menunggu kelulusan',zh:'待审核'},
 reqTitle:{en:'Request to add your event',ms:'Mohon untuk menambah acara anda',zh:'申请刊登活动'},
 reqIntro:{en:'Local churches can send their events to the General Assembly. The Literature Department checks each request before it appears on the calendar.',ms:'Gereja tempatan boleh menghantar acara mereka kepada Ibu Gereja. Jabatan Kesusasteraan akan menyemak setiap permohonan sebelum dipaparkan dalam kalendar.',zh:'地方教会可向总会提交活动。文宣处审核后，活动将刊登于行事历。'},
 fName:{en:'Event name',ms:'Nama acara',zh:'活动名称'},
 fStart:{en:'Starts',ms:'Mula',zh:'开始'},
 fEnd:{en:'Ends',ms:'Tamat',zh:'结束'},
 fBranch:{en:'Branch (church)',ms:'Cawangan (gereja)',zh:'教会（分会）'},
 fChoose:{en:'Choose your church',ms:'Pilih gereja anda',zh:'请选择教会'},
 fArt:{en:'Event artwork',ms:'Gambar acara',zh:'活动海报'},
 fArtHint:{en:'JPG or PNG, up to 5 MB. A poster or banner works best.',ms:'JPG atau PNG, maksimum 5 MB. Poster atau sepanduk paling sesuai.',zh:'JPG 或 PNG，最大 5 MB，建议使用海报或横幅。'},
 fDrop:{en:'Tap to choose an image',ms:'Klik untuk memilih gambar',zh:'点击选择图片'},
 fSend:{en:'Send request',ms:'Hantar permohonan',zh:'提交申请'},
 fTooBig:{en:'The image is larger than 5 MB.',ms:'Gambar melebihi 5 MB.',zh:'图片超过 5 MB。'},
 fEndBefore:{en:'The end must be after the start.',ms:'Masa tamat mesti selepas masa mula.',zh:'结束时间必须晚于开始时间。'},
 fDone:{en:'Thank you. Your request has been received and will appear on the calendar once approved. It is shown on your calendar now as “Awaiting approval”.',ms:'Terima kasih. Permohonan anda telah diterima dan akan dipaparkan dalam kalendar selepas diluluskan. Ia kini dipaparkan dalam kalendar anda sebagai “Menunggu kelulusan”.',zh:'谢谢！申请已收到，审核通过后将刊登于行事历。目前在您的行事历中显示为“待审核”。'},
 fProto:{en:'Prototype: requests stay on this device and are not sent anywhere yet.',ms:'Prototaip: permohonan disimpan pada peranti ini sahaja dan belum dihantar ke mana-mana.',zh:'原型说明：申请仅保存在此设备，尚未实际发送。'},
 mon:{en:['January','February','March','April','May','June','July','August','September','October','November','December'],ms:['Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember'],zh:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']},
 wd:{en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],ms:['Ahd','Isn','Sel','Rab','Kha','Jum','Sab'],zh:['日','一','二','三','四','五','六']}
};
let calY,calM,calView=innerWidth<720?'list':'month';
const pad2=n=>String(n).padStart(2,'0');
const ymd=d=>d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());
function myReqs(){try{return JSON.parse(localStorage.getItem('tjc-req')||'[]')}catch(e){return[]}}
function saveReqs(a){try{localStorage.setItem('tjc-req',JSON.stringify(a));return true}catch(e){return false}}
let MEMREQ=[];
function allEvents(){return EVENTS.concat(myReqs(),MEMREQ)}
function evTitle(e){return typeof e.t==='string'?e.t:t(e.t)}
function fmtDate(s){const d=new Date(s+'T00:00:00');return L==='zh'?`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`:`${d.getDate()} ${CT.mon[L][d.getMonth()]} ${d.getFullYear()}`}
function fmtRange(e){return e.s===e.e?fmtDate(e.s):fmtDate(e.s)+' – '+fmtDate(e.e)}
function art(e,w,h){/* generated poster when the church has not uploaded artwork */
 if(e.img)return `<img src="${e.img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`;
 const c=(EVT_TYPES[e.type]||EVT_TYPES.special).c;const tt=esc(evTitle(e));const words=tt.split(' ');let lines=[],cur='';
 words.forEach(w0=>{if((cur+' '+w0).trim().length>(L==='zh'?10:22)){lines.push(cur.trim());cur=w0}else cur+=' '+w0});if(cur.trim())lines.push(cur.trim());
 if(L==='zh'&&lines.length===1&&tt.length>10)lines=[tt.slice(0,10),tt.slice(10)];
 return `<svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block"><defs><linearGradient id="g${e.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1E3669"/><stop offset="1" stop-color="${c}"/></linearGradient></defs><rect width="600" height="340" fill="url(#g${e.id})"/><image href="assets/mark-white.svg" x="330" y="120" width="320" height="200" opacity=".12"/>
 <text x="36" y="58" fill="#BFE6F8" font-family="Poppins,Noto Sans SC,sans-serif" font-size="18" letter-spacing="2">${esc(t((EVT_TYPES[e.type]||EVT_TYPES.special).n)).toUpperCase()}</text>
 ${lines.slice(0,3).map((l,i)=>`<text x="36" y="${118+i*44}" fill="#fff" font-family="Poppins,Noto Sans SC,sans-serif" font-weight="600" font-size="36">${l}</text>`).join('')}
 <text x="36" y="300" fill="#fff" font-family="Inter,Noto Sans SC,sans-serif" font-size="18" opacity=".9">${esc(fmtRange(e))}</text></svg>`}
function siteOf(e){return DATA&&DATA.find(p=>p.id===e.site)}
PAGES.calendar=()=>{const now=new Date();if(calY==null){calY=now.getFullYear();calM=now.getMonth()}
 return `<div class="page-h"><div class="wrap"><div class="crumb"><a href="#/home">${t(C.ui.nav.home)}</a> › ${t(CT.title)}</div><h1>${t(CT.title)}</h1><p>${t(CT.intro)}</p></div></div>
 <section class="blk" style="padding-top:36px"><div class="wrap">
  <div class="calnote">${t(CT.sample)}</div>
  <div class="calbar"><div class="calnav"><button onclick="calMove(-1)" aria-label="Previous">‹</button><button onclick="calMove(1)" aria-label="Next">›</button><button class="tdy" onclick="calToday()">${t(CT.today)}</button><h2 id="calt"></h2></div>
   <div class="calview"><button data-v="month">${t(CT.month)}</button><button data-v="list">${t(CT.list)}</button></div></div>
  <div class="caltypes">${Object.values(EVT_TYPES).map(x=>`<span><i style="background:${x.c}"></i>${t(x.n)}</span>`).join('')}</div>
  <div id="calbody"></div>
 </div></section>
 <section class="blk alt" id="req"><div class="wrap reqwrap">
  <div><div class="eyebrow">${t({en:'For local churches',ms:'Untuk gereja tempatan',zh:'地方教会专用'})}</div><h2 class="sec">${t(CT.reqTitle)}</h2><p style="color:#4A5568">${t(CT.reqIntro)}</p>
   <ol class="steps"><li>${t({en:'Fill in the form with your event details and artwork.',ms:'Isi borang dengan butiran acara dan gambar.',zh:'填写活动资料并上传海报。'})}</li><li>${t({en:'The Literature Department checks the request.',ms:'Jabatan Kesusasteraan menyemak permohonan.',zh:'文宣处审核申请。'})}</li><li>${t({en:'Once approved, the event appears on the calendar for everyone.',ms:'Selepas diluluskan, acara dipaparkan dalam kalendar untuk semua.',zh:'审核通过后，活动即公开刊登。'})}</li></ol></div>
  <form id="reqf" class="reqf" novalidate>
   <label>${t(CT.fName)}<input name="name" required maxlength="120"></label>
   <div class="two"><label>${t(CT.fStart)}<input name="start" type="datetime-local" required></label><label>${t(CT.fEnd)}<input name="end" type="datetime-local" required></label></div>
   <label>${t(CT.fBranch)}<select name="branch" required><option value="">${t(CT.fChoose)}</option>${DATA?['West Coast','Interior','East Coast','Labuan','Sarawak'].map(z=>`<optgroup label="${esc(t(C.zones[z]))}">${DATA.filter(p=>p.zone===z).sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</optgroup>`).join(''):''}</select></label>
   <label>${t(CT.fArt)}<div class="drop" id="drop"><input type="file" name="art" accept="image/png,image/jpeg" required><span id="dropt">${t(CT.fDrop)}</span><img id="dropi" alt=""></div><small>${t(CT.fArtHint)}</small></label>
   <div class="ferr" id="ferr"></div>
   <button class="btn" type="submit">${t(CT.fSend)} →</button>
   <small style="display:block;margin-top:10px;color:var(--grey)">${t(CT.fProto)}</small>
   <div class="fok" id="fok"></div>
  </form></div></section>`};
AFTER.calendar=()=>{document.querySelectorAll('.calview button').forEach(b=>b.onclick=()=>{calView=b.dataset.v;calDraw()});calDraw();
 const f=document.getElementById('reqf');const fi=f.querySelector('input[type=file]');let imgData=null;
 fi.onchange=()=>{const file=fi.files[0];document.getElementById('ferr').textContent='';if(!file)return;if(file.size>5*1024*1024){document.getElementById('ferr').textContent=t(CT.fTooBig);fi.value='';return}
  const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const sc=Math.min(1,900/im.width);const cv=document.createElement('canvas');cv.width=im.width*sc;cv.height=im.height*sc;cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);imgData=cv.toDataURL('image/jpeg',.8);const p=document.getElementById('dropi');p.src=imgData;p.style.display='block';document.getElementById('dropt').textContent=file.name};im.src=r.result};r.readAsDataURL(file)};
 f.onsubmit=ev=>{ev.preventDefault();const fd=new FormData(f);const er=document.getElementById('ferr');er.textContent='';
  const miss=[...f.querySelectorAll('[required]')].filter(x=>!x.value);f.querySelectorAll('.bad').forEach(x=>x.classList.remove('bad'));
  if(miss.length){miss.forEach(x=>(x.type==='file'?x.parentNode:x).classList.add('bad'));er.textContent=t({en:'Please fill in every field.',ms:'Sila isi semua ruangan.',zh:'请填写所有栏位。'});return}
  if(fd.get('end')<=fd.get('start')){er.textContent=t(CT.fEndBefore);return}
  const s=fd.get('start'),e=fd.get('end');const rq={id:'r'+Date.now(),type:'special',pending:true,s:s.slice(0,10),e:e.slice(0,10),time:s.slice(11,16)+' – '+e.slice(11,16),site:fd.get('branch'),t:fd.get('name'),img:imgData};
  const a=myReqs();a.push(rq);if(!saveReqs(a))MEMREQ.push(rq);
  document.getElementById('fok').textContent=t(CT.fDone);f.reset();imgData=null;document.getElementById('dropi').style.display='none';document.getElementById('dropt').textContent=t(CT.fDrop);
  const d=new Date(rq.s+'T00:00:00');calY=d.getFullYear();calM=d.getMonth();calDraw()}};
function calMove(n){calM+=n;if(calM<0){calM=11;calY--}if(calM>11){calM=0;calY++}calDraw()}
function calToday(){const n=new Date();calY=n.getFullYear();calM=n.getMonth();calDraw()}
function calDraw(){const el=document.getElementById('calbody');if(!el)return;
 document.getElementById('calt').textContent=L==='zh'?`${calY}年 ${CT.mon.zh[calM]}`:`${CT.mon[L][calM]} ${calY}`;
 document.querySelectorAll('.calview button').forEach(b=>b.classList.toggle('on',b.dataset.v===calView));
 const first=new Date(calY,calM,1),startDow=first.getDay(),days=new Date(calY,calM+1,0).getDate();const today=ymd(new Date());
 const evs=allEvents();const mStart=ymd(first),mEnd=ymd(new Date(calY,calM,days));
 const inMonth=evs.filter(e=>e.e>=mStart&&e.s<=mEnd).sort((a,b)=>a.s.localeCompare(b.s));
 if(calView==='list'){el.innerHTML=inMonth.length?`<div class="agenda">${inMonth.map(e=>{const d=new Date(e.s+'T00:00:00');const st=siteOf(e);return `<button class="ag" onclick="evOpen('${e.id}')"><div class="agd"><b>${d.getDate()}</b><span>${CT.wd[L][d.getDay()]}</span></div><div class="aga">${art(e)}</div><div class="agb"><span class="agt" style="color:${(EVT_TYPES[e.type]||EVT_TYPES.special).c}">${esc(t((EVT_TYPES[e.type]||EVT_TYPES.special).n))}${e.pending?` · <em>${t(CT.pending)}</em>`:` · ${t(CT.sampleTag)}`}</span><b>${esc(evTitle(e))}</b><span>${esc(fmtRange(e))} · ${esc(e.time)}</span>${st?`<span>📍 ${esc(st.name)}</span>`:''}</div></button>`}).join('')}</div>`:`<p class="calempty">${t(CT.none)}</p>`;return}
 let h=`<div class="cal"><div class="calh">${CT.wd[L].map(w=>`<div>${w}</div>`).join('')}</div><div class="calg">`;
 const cells=Math.ceil((startDow+days)/7)*7;
 for(let i=0;i<cells;i++){const dn=i-startDow+1;const inm=dn>=1&&dn<=days;const ds=inm?ymd(new Date(calY,calM,dn)):'';
  const de=inm?inMonth.filter(e=>e.s<=ds&&e.e>=ds):[];
  h+=`<div class="cd${inm?'':' out'}${ds===today?' td':''}">${inm?`<span class="dn">${dn}</span>`+de.slice(0,3).map(e=>`<button class="ev${e.pending?' pend':''}" style="--c:${(EVT_TYPES[e.type]||EVT_TYPES.special).c}" onclick="evOpen('${e.id}')" title="${esc(evTitle(e))}">${e.s===ds||dn===1?esc(evTitle(e)):'&nbsp;'}</button>`).join('')+(de.length>3?`<span class="more">+${de.length-3}</span>`:''):''}</div>`}
 el.innerHTML=h+`</div></div>${inMonth.length?'':`<p class="calempty">${t(CT.none)}</p>`}`}
function evOpen(id){const e=allEvents().find(x=>x.id===id);if(!e)return;const st=siteOf(e);const ty=EVT_TYPES[e.type]||EVT_TYPES.special;
 const ics=`data:text/calendar;charset=utf-8,`+encodeURIComponent(`BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//TJC Sabah//Calendar//EN\nBEGIN:VEVENT\nUID:${e.id}@tjcsabah\nDTSTART;VALUE=DATE:${e.s.replace(/-/g,'')}\nDTEND;VALUE=DATE:${ymd(new Date(new Date(e.e+'T00:00:00').getTime()+864e5)).replace(/-/g,'')}\nSUMMARY:${evTitle(e)}\nLOCATION:${st?st.name+', '+(st.address||''):''}\nDESCRIPTION:${e.time}${st&&st.kodlokasi?' | KodLokasi '+st.kodlokasi:''}\nEND:VEVENT\nEND:VCALENDAR`);
 document.getElementById('evm').innerHTML=`<div class="evc"><button class="x" onclick="evClose()" aria-label="Close">×</button><div class="eva">${art(e)}</div><div class="evb">
  <span class="agt" style="color:${ty.c}">${esc(t(ty.n))}${e.pending?` · <em>${t(CT.pending)}</em>`:` · ${t(CT.sampleTag)}`}</span><h3>${esc(evTitle(e))}</h3>
  <dl><dt>${t(CT.when)}</dt><dd>${esc(fmtRange(e))}</dd><dt>${t(CT.time)}</dt><dd>${esc(e.time)}</dd><dt>${t(CT.venue)}</dt><dd>${st?`<b>${esc(st.name)}</b>${st.address?`<br><span style="color:var(--grey)">${esc(st.address)}</span>`:''}`:'-'}</dd></dl>
  ${st&&st.kodlokasi?`<a class="klbtn" href="${st.kodlokasi_url}" target="_blank" rel="noopener"><span class="q">${qr(st.kodlokasi_url,2)}</span><span><small>${t(CT.dirs)}</small><b>${st.kodlokasi}</b></span></a>`:''}
  <div class="evact"><a class="btn line" href="${ics}" download="${e.id}.ics">📅 ${t(CT.addCal)}</a>${st?`<a class="btn line" href="../?lang=${L}#${st.id}" target="_blank" rel="noopener">${t(CT.churchPage)} ↗</a>`:''}</div></div></div>`;
 document.getElementById('evm').classList.add('on')}
function evClose(){document.getElementById('evm').classList.remove('on')}
