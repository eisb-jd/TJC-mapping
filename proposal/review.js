/* "What changed" page: location data comparison first, then the other website issues. Three languages. */
let CMP=null;fetch('compare.json',{cache:'no-cache'}).then(r=>r.json()).then(d=>{CMP=d;if(cur==='review')route()}).catch(()=>{});
const RV={
 title:{en:'What changed',ms:'Apa yang berubah',zh:'改动说明'},
 lead:{en:'Review of ga.tjcsabah.com by EARTH Info, 20 November 2026. We checked 156 pages and 124 posts in Chinese and Bahasa Melayu, and compared every church listing with the records behind this prototype.',
  ms:'Semakan ga.tjcsabah.com oleh EARTH Info, 20 November 2026. Kami menyemak 156 halaman dan 124 hantaran dalam Bahasa Cina dan Bahasa Melayu, dan membandingkan setiap senarai gereja dengan rekod di sebalik prototaip ini.',
  zh:'EARTH Info 于2026年11月20日审查 ga.tjcsabah.com：检查了中文及马来文共156个页面、124篇文章，并将每一间教会的资料与本原型所用的记录逐一比对。'},
 s1:{en:'1. Church location data: current website vs prototype',ms:'1. Data lokasi gereja: laman web semasa berbanding prototaip',zh:'一、教会位置资料：现有网站与原型对比'},
 s1p:{en:'The current website has a directory of 105 churches, but only 42 have a page with coordinates and service times, and 13 of the Malay pages are blank. The prototype covers 108 locations from the church’s own subzone documents, all on one map.',
  ms:'Laman web semasa mempunyai direktori 105 gereja, tetapi hanya 42 mempunyai halaman dengan koordinat dan waktu kebaktian, dan 13 halaman Bahasa Melayu kosong. Prototaip merangkumi 108 lokasi daripada dokumen subzon gereja sendiri, semuanya dalam satu peta.',
  zh:'现有网站名录列出105间教会，但只有42间设有含坐标与聚会时间的页面，且13个马来文页面是空白的。原型依据教会各小区文件，收录108处地点，全部汇集于一张地图。'},
 matrix:{en:'Summary',ms:'Ringkasan',zh:'总览'},
 colItem:{en:'Information',ms:'Maklumat',zh:'资料项目'},
 colCur:{en:'Current website',ms:'Laman web semasa',zh:'现有网站'},
 colNew:{en:'Prototype',ms:'Prototaip',zh:'原型'},
 zoneT:{en:'Coordinates by zone',ms:'Koordinat mengikut zon',zh:'各教区坐标覆盖'},
 detail:{en:'Church by church',ms:'Gereja demi gereja',zh:'逐间教会对比'},
 f:{all:{en:'All',ms:'Semua',zh:'全部'},gap:{en:'No pin on current site',ms:'Tiada pin di laman semasa',zh:'现有网站无定位'},blank:{en:'Blank Malay page',ms:'Halaman BM kosong',zh:'马来文页面空白'},one:{en:'In one source only',ms:'Dalam satu sumber sahaja',zh:'仅见于一方'},still:{en:'Still missing',ms:'Masih tiada',zh:'仍缺资料'}},
 search:{en:'Search a church',ms:'Cari gereja',zh:'搜索教会'},
 h:{church:{en:'Church',ms:'Gereja',zh:'教会'},addr:{en:'Address',ms:'Alamat',zh:'地址'},phone:{en:'Phone',ms:'Telefon',zh:'电话'},msp:{en:'Malay page',ms:'Halaman BM',zh:'马来文页面'},zhp:{en:'Chinese page',ms:'Halaman BC',zh:'中文页面'},pin:{en:'Map pin',ms:'Pin peta',zh:'地图定位'},svc:{en:'Service times',ms:'Waktu kebaktian',zh:'聚会时间'},photo:{en:'Photo',ms:'Foto',zh:'照片'},kl:{en:'KodLokasi',ms:'KodLokasi',zh:'KodLokasi'},note:{en:'Note',ms:'Catatan',zh:'备注'}},
 v:{street:{en:'Street',ms:'Jalan',zh:'街道'},pobox:{en:'P.O. Box only',ms:'Peti surat sahaja',zh:'仅邮箱'},none:{en:'None',ms:'Tiada',zh:'无'},absent:{en:'Not listed',ms:'Tidak disenarai',zh:'未列出'},ok:{en:'Yes',ms:'Ada',zh:'有'},empty:{en:'Blank',ms:'Kosong',zh:'空白'},nopage:{en:'No page',ms:'Tiada halaman',zh:'无页面'}},
 notes:{same:{en:'Same position on both',ms:'Kedudukan sama',zh:'位置一致'},diff:{en:'Pins {d} m apart – please confirm',ms:'Pin berbeza {d} m – sila sahkan',zh:'两处定位相距 {d} 米，请确认'},newpin:{en:'Pin added by the prototype',ms:'Pin ditambah oleh prototaip',zh:'原型新增定位'},onlyTheirs:{en:'On current site only – not in the church documents we received',ms:'Hanya di laman semasa – tiada dalam dokumen gereja yang kami terima',zh:'仅见于现有网站，我们收到的教会文件中没有'},onlyOurs:{en:'In church documents, not on current site',ms:'Dalam dokumen gereja, tiada di laman semasa',zh:'见于教会文件，现有网站未列出'},need:{en:'Church to send GPS pin',ms:'Gereja perlu hantar pin GPS',zh:'请教会提供定位'}},
 s2:{en:'2. Other problems on the current website',ms:'2. Masalah lain pada laman web semasa',zh:'二、现有网站的其他问题'},
 th:{sev:{en:'Severity',ms:'Tahap',zh:'严重程度'},prob:{en:'Problem',ms:'Masalah',zh:'问题'},det:{en:'Detail',ms:'Butiran',zh:'详情'},fix:{en:'In this prototype',ms:'Dalam prototaip ini',zh:'原型的处理'}},
 sev:{h:{en:'High',ms:'Tinggi',zh:'高'},m:{en:'Medium',ms:'Sederhana',zh:'中'},l:{en:'Low',ms:'Rendah',zh:'低'}},
 fixed:{en:'Fixed',ms:'Diperbaiki',zh:'已解决'},needs:{en:'Needs the church',ms:'Perlu tindakan gereja',zh:'需教会处理'},
 s3:{en:'3. How the content is kept in step',ms:'3. Cara kandungan diselaraskan',zh:'三、如何保持内容一致'},
 s3p:{en:'All text sits in one content file with English, Bahasa Melayu and Chinese side by side, so a change is made to all three at once. Church names, service times, photos and directions come from the same records as the Church Location Atlas, so one correction updates the website, the map, the printed atlas and the Google Earth file together.',
  ms:'Semua teks disimpan dalam satu fail kandungan dengan Bahasa Inggeris, Bahasa Melayu dan Bahasa Cina bersebelahan, jadi setiap perubahan dibuat kepada ketiga-tiganya serentak. Nama gereja, waktu kebaktian, foto dan arah datang daripada rekod yang sama dengan Atlas Lokasi Gereja, jadi satu pembetulan mengemas kini laman web, peta, atlas bercetak dan fail Google Earth sekali gus.',
  zh:'所有文字集中在同一份内容文件中，英文、马来文、中文并列，修改时三种语言同时更新。教会名称、聚会时间、照片与导航来自与教会位置图集相同的记录，一处更正即可同步更新网站、地图、印刷版图集及 Google Earth 文件。'}
};
const ISSUES=[
 ['h',{en:'Interior zone churches have no pages',ms:'Gereja Zon Pedalaman tiada halaman',zh:'内陆区教会没有页面'},{en:'39 Interior churches have no page, coordinates or service times in either language. The Malay Interior list says “last updated 2006”.',ms:'39 gereja Zon Pedalaman tiada halaman, koordinat atau waktu kebaktian dalam mana-mana bahasa. Senarai Zon Pedalaman BM menyatakan “kemas kini terakhir 2006”.',zh:'内陆区39间教会在两种语言中都没有页面、坐标或聚会时间；马来文名单注明“最后更新2006年”。'},{en:'All listed with service times where the church documents give them; 31 now have a map pin and KodLokasi.',ms:'Semua disenaraikan dengan waktu kebaktian jika ada dalam dokumen gereja; 31 kini mempunyai pin peta dan KodLokasi.',zh:'全部列出，并按教会文件附上聚会时间；其中31间已有地图定位与 KodLokasi。'},'f'],
 ['h',{en:'Gereja Tempatan page is empty',ms:'Halaman Gereja Tempatan kosong',zh:'马来文“地方教会”页面空白'},{en:'The Malay menu item opens a blank page; the directory sits on a separate page.',ms:'Menu Bahasa Melayu membuka halaman kosong; direktori berada di halaman lain.',zh:'马来文菜单项打开的是空白页，名录放在另一个页面。'},{en:'Local Churches page with map, search and service times for all 108 locations.',ms:'Halaman Gereja Tempatan dengan peta, carian dan waktu kebaktian untuk 108 lokasi.',zh:'“地方教会”页面提供地图、搜索与108处地点的聚会时间。'},'f'],
 ['h',{en:'13 Malay church pages are blank',ms:'13 halaman gereja BM kosong',zh:'13个马来文教会页面空白'},{en:'Including Kota Kinabalu, Penampang, Inanam, Tuaran, Tamparuli and Labuan.',ms:'Termasuk Kota Kinabalu, Penampang, Inanam, Tuaran, Tamparuli dan Labuan.',zh:'包括亚庇、兵南邦、下南南、斗亚兰、担波罗里及纳闽。'},{en:'Every church shows the same details in all three languages.',ms:'Setiap gereja memaparkan butiran yang sama dalam ketiga-tiga bahasa.',zh:'每间教会在三种语言中显示相同资料。'},'f'],
 ['h',{en:'No English website',ms:'Tiada laman web Bahasa Inggeris',zh:'没有英文网站'},{en:'Only Chinese and Bahasa Melayu, although an English history page and English e-news exist.',ms:'Hanya Bahasa Cina dan Bahasa Melayu, walaupun halaman sejarah dan e-berita Bahasa Inggeris sudah ada.',zh:'只有中文与马来文，虽然已有英文简史页面与英文会讯。'},{en:'English added, with a language switch on every page.',ms:'Bahasa Inggeris ditambah, dengan pilihan bahasa di setiap halaman.',zh:'新增英文，每页均可切换语言。'},'f'],
 ['h',{en:'Malay and Chinese content do not match',ms:'Kandungan BM dan BC tidak sepadan',zh:'马来文与中文内容不一致'},{en:'Different menus, department names and pages per language; Chinese church pages updated 2023, Malay 2021.',ms:'Menu, nama jabatan dan halaman berbeza bagi setiap bahasa; halaman gereja BC dikemas kini 2023, BM 2021.',zh:'两种语言的菜单、部门名称与页面不同；中文教会页面更新于2023年，马来文于2021年。'},{en:'One content file, three languages side by side.',ms:'Satu fail kandungan, tiga bahasa bersebelahan.',zh:'单一内容文件，三语并列。'},'f'],
 ['h',{en:'Evangelism & Pastoral department link is broken',ms:'Pautan Jabatan Penginjilan & Pengembalaan rosak',zh:'宣牧处链接失效'},{en:'Both menus link to /xuanmu/, which returns “410 Gone”.',ms:'Kedua-dua menu memaut ke /xuanmu/ yang memaparkan “410 Gone”.',zh:'两种语言菜单都链接到 /xuanmu/，该页已失效（410）。'},{en:'Department described in the interactive chart.',ms:'Jabatan diterangkan dalam carta interaktif.',zh:'在互动组织图中介绍该处。'},'f'],
 ['m',{en:'Organisation chart is a 2018–2020 image',ms:'Carta organisasi ialah imej 2018–2020',zh:'组织图为2018–2020年的图片'},{en:'A photo of the chart plus separate pages; the Chinese “教牧处” page is empty; Education is missing from the Chinese menu.',ms:'Gambar carta serta halaman berasingan; halaman BC “教牧处” kosong; Jabatan Pendidikan tiada dalam menu BC.',zh:'只有组织图照片及分散页面；中文“教牧处”页面空白；中文菜单缺少教育处。'},{en:'Interactive chart: tap any box for its role, responsibilities and units.',ms:'Carta interaktif: klik kotak untuk peranan, tanggungjawab dan unit.',zh:'互动组织图：点击方框即可查看职能、职责与下属单位。'},'f'],
 ['m',{en:'Ten Basic Beliefs incomplete',ms:'10 Dasar Kepercayaan tidak lengkap',zh:'十大信仰不完整'},{en:'Chinese home page shows 6 of 10, Malay 5 of 10.',ms:'Laman utama BC memaparkan 6 daripada 10, BM 5 daripada 10.',zh:'中文首页只列出6项，马来文5项。'},{en:'All ten on the home page, in three languages, with the existing videos.',ms:'Kesemua sepuluh di laman utama dalam tiga bahasa, dengan video sedia ada.',zh:'首页列出全部十项，三种语言，并附现有视频。'},'f'],
 ['m',{en:'Calendar stops in 2020; news in November 2024',ms:'Kalendar terhenti 2020; berita November 2024',zh:'行事历停在2020年，消息停在2024年11月'},{en:'Old calendar pages are still published.',ms:'Halaman kalendar lama masih diterbitkan.',zh:'旧行事历页面仍然在线。'},{en:'New calendar with event details, directions and a request form for local churches.',ms:'Kalendar baharu dengan butiran acara, arah dan borang permohonan untuk gereja tempatan.',zh:'新行事历：活动详情、导航，以及地方教会申请表。'},'f'],
 ['m',{en:'E-News 015 only in Malay',ms:'E-Berita 015 hanya dalam BM',zh:'第015期会讯只有马来文'},{en:'English and Chinese archives stop at 014.',ms:'Arkib BI dan BC terhenti pada 014.',zh:'英文与中文存档停在第014期。'},{en:'Shown per language as published.',ms:'Dipaparkan mengikut bahasa seperti diterbitkan.',zh:'按各语言实际出版情况显示。'},'p'],
 ['m',{en:'Dates disagree between pages',ms:'Tarikh bercanggah antara halaman',zh:'各页面日期不一致'},{en:'Re-registration “1927” vs 1978; Tuaran dedication 1935 vs 1936; Labuan 1930 vs 1931.',ms:'Pendaftaran semula “1927” lawan 1978; pentahbisan Tuaran 1935 lawan 1936; Labuan 1930 lawan 1931.',zh:'重新注册“1927年”与1978年；斗亚兰献堂1935与1936年；纳闽1930与1931年。'},{en:'Timeline uses 1978, 1936 and 1931. Church to confirm.',ms:'Garis masa menggunakan 1978, 1936 dan 1931. Gereja perlu sahkan.',zh:'大事记采用1978、1936及1931年，请教会确认。'},'p'],
 ['m',{en:'Duplicate and leftover pages',ms:'Halaman berganda dan sisa',zh:'重复与遗留页面'},{en:'Two contact pages per language, a duplicate empty Donggongon page, the WordPress sample page and default privacy policy, empty activity pages.',ms:'Dua halaman hubungi bagi setiap bahasa, halaman Donggongon kosong berganda, halaman contoh WordPress dan dasar privasi lalai, halaman aktiviti kosong.',zh:'每种语言各有两个联络页面、重复的空白东贡岸页面、WordPress 示例页与默认隐私政策、空白活动页面。'},{en:'Not carried over; privacy note rewritten.',ms:'Tidak dibawa; nota privasi ditulis semula.',zh:'不再保留；隐私说明已重写。'},'f'],
 ['l',{en:'Church histories only in Chinese',ms:'Sejarah gereja hanya dalam BC',zh:'教会简介只有中文'},{en:'14 churches have detailed histories in Chinese only.',ms:'14 gereja mempunyai sejarah terperinci dalam Bahasa Cina sahaja.',zh:'14间教会的详细简介只有中文。'},{en:'Translations to be supplied by the Literature Department.',ms:'Terjemahan akan dibekalkan oleh Jabatan Kesusasteraan.',zh:'待文宣处提供译文。'},'p'],
 ['l',{en:'Links and external sites',ms:'Pautan dan laman luar',zh:'链接与外部网站'},{en:'Home page links use http://; the Morning Star site did not respond; the Facebook link opens a page named “GA-Recording”.',ms:'Pautan laman utama menggunakan http://; laman Bintang Pagi tidak bertindak balas; pautan Facebook membuka halaman “GA-Recording”.',zh:'首页链接使用 http://；“晨星”网站无法连接；Facebook 链接打开的是“GA-Recording”页面。'},{en:'Links changed to https. Church to confirm the rest.',ms:'Pautan ditukar kepada https. Gereja perlu sahkan yang lain.',zh:'链接已改为 https，其余请教会确认。'},'p']
];
const YES='<span class="ck y">✓</span>',NO='<span class="ck n">✗</span>',HALF=s=>`<span class="ck h">${s}</span>`;
function rvCount(f){return CMP?CMP.filter(f).length:'…'}
PAGES.review=()=>{
 const total=CMP?CMP.length:0;
 const M=[
  [{en:'Locations listed',ms:'Lokasi disenaraikan',zh:'列出地点'},rvCount(x=>x.their),rvCount(x=>x.id)],
  [{en:'Map pin (coordinates)',ms:'Pin peta (koordinat)',zh:'地图定位（坐标）'},rvCount(x=>x.t_coord),rvCount(x=>x.o_coord)],
  [{en:'Directions (KodLokasi)',ms:'Arah (KodLokasi)',zh:'导航（KodLokasi）'},0,rvCount(x=>x.o_kl)],
  [{en:'Service times',ms:'Waktu kebaktian',zh:'聚会时间'},rvCount(x=>x.t_svc>0),rvCount(x=>x.o_svc>0)],
  [{en:'Photo',ms:'Foto',zh:'照片'},rvCount(x=>x.t_photo),rvCount(x=>x.o_photo)],
  [{en:'Street address',ms:'Alamat jalan',zh:'街道地址'},rvCount(x=>x.t_addr==='street'),rvCount(x=>x.o_addr)],
  [{en:'Phone number',ms:'Nombor telefon',zh:'电话号码'},rvCount(x=>x.t_phone),0],
  [{en:'Page in Bahasa Melayu',ms:'Halaman Bahasa Melayu',zh:'马来文页面'},rvCount(x=>x.t_ms==='ok'),rvCount(x=>x.id)],
  [{en:'Page in Chinese',ms:'Halaman Bahasa Cina',zh:'中文页面'},rvCount(x=>x.t_zh==='ok'),rvCount(x=>x.id)],
  [{en:'Page in English',ms:'Halaman Bahasa Inggeris',zh:'英文页面'},0,rvCount(x=>x.id)]
 ];
 const zones=['West Coast','Interior','East Coast','Labuan','Sarawak'];
 return `<div class="page-h"><div class="wrap"><div class="crumb"><a href="#/home">${t(C.ui.nav.home)}</a> › ${t(RV.title)}</div><h1>${t(RV.title)}</h1><p>${t(RV.lead)}</p></div></div>
 <section class="blk" style="padding-top:44px"><div class="wrap">
  <div class="eyebrow">${t(RV.matrix)}</div><h2 class="sec">${t(RV.s1)}</h2><p style="max-width:860px;color:#4A5568">${t(RV.s1p)}</p>
  <div class="rvgrid"><table class="mx"><thead><tr><th>${t(RV.colItem)}</th><th>${t(RV.colCur)}</th><th class="nw">${t(RV.colNew)}</th></tr></thead><tbody>
   ${M.map(r=>{const a=+r[1]||0,b=+r[2]||0,mx=Math.max(108,a,b);return `<tr><td>${t(r[0])}</td><td><div class="bar"><i style="width:${a/mx*100}%;background:#C9D3E0"></i><b>${r[1]}</b></div></td><td><div class="bar"><i style="width:${b/mx*100}%"></i><b>${r[2]}</b></div></td></tr>`}).join('')}
  </tbody></table>
  <div class="zcard"><h3>${t(RV.zoneT)}</h3>${zones.map(z=>{const all=CMP?CMP.filter(x=>x.zone===z).length:0;const a=rvCount(x=>x.zone===z&&x.t_coord),b=rvCount(x=>x.zone===z&&x.o_coord);return `<div class="zr"><div class="zl"><i style="background:${ZC[z]}"></i>${t(C.zones[z])}<span>${all}</span></div><div class="zb"><div><i style="width:${all?a/all*100:0}%;background:#C9D3E0"></i></div><em>${a}</em></div><div class="zb"><div><i style="width:${all?b/all*100:0}%;background:${ZC[z]}"></i></div><em>${b}</em></div></div>`}).join('')}
   <div class="zleg"><span><i style="background:#C9D3E0"></i>${t(RV.colCur)}</span><span><i style="background:var(--teal)"></i>${t(RV.colNew)}</span></div></div></div>

  <h3 class="rvh">${t(RV.detail)}</h3>
  <div class="ctools" style="position:static;padding:0 0 12px"><input id="rq" type="search" placeholder="${esc(t(RV.search))}"><div class="chips" id="rf">${Object.entries(RV.f).map(([k,v],i)=>`<button data-f="${k}" class="${i?'':'on'}">${t(v)} <span class="cnt" data-c="${k}"></span></button>`).join('')}</div></div>
  <div class="tblwrap"><table class="cm"><thead><tr><th rowspan="2">${t(RV.h.church)}</th><th colspan="7" class="gcur">${t(RV.colCur)}</th><th colspan="4" class="gnew">${t(RV.colNew)}</th><th rowspan="2">${t(RV.h.note)}</th></tr>
   <tr><th>${t(RV.h.addr)}</th><th>${t(RV.h.phone)}</th><th>${t(RV.h.msp)}</th><th>${t(RV.h.zhp)}</th><th>${t(RV.h.pin)}</th><th>${t(RV.h.svc)}</th><th>${t(RV.h.photo)}</th><th>${t(RV.h.pin)}</th><th>${t(RV.h.kl)}</th><th>${t(RV.h.svc)}</th><th>${t(RV.h.photo)}</th></tr></thead><tbody id="cmb"></tbody></table></div>
 </div></section>
 <section class="blk alt"><div class="wrap"><h2 class="sec">${t(RV.s2)}</h2>
  <div class="tblwrap"><table class="iss"><thead><tr><th>${t(RV.th.sev)}</th><th>${t(RV.th.prob)}</th><th>${t(RV.th.det)}</th><th>${t(RV.th.fix)}</th></tr></thead><tbody>${ISSUES.map(i=>`<tr><td><span class="sev ${i[0]}">${t(RV.sev[i[0]])}</span></td><td><b>${t(i[1])}</b></td><td>${t(i[2])}</td><td><span class="fx ${i[4]==='p'?'p':''}">${i[4]==='p'?t(RV.needs):t(RV.fixed)}</span> · ${t(i[3])}</td></tr>`).join('')}</tbody></table></div>
 </div></section>
 <section class="blk"><div class="wrap"><h2 class="sec">${t(RV.s3)}</h2><p style="max-width:860px;color:#4A5568">${t(RV.s3p)}</p></div></section>`};
AFTER.review=()=>{if(!CMP)return;let flt='all';
 const F={all:()=>true,gap:x=>x.their&&!x.t_coord,blank:x=>x.t_ms==='empty',one:x=>!x.their||!x.id,still:x=>!x.o_coord};
 document.querySelectorAll('#rf .cnt').forEach(s=>s.textContent=CMP.filter(F[s.dataset.c]).length);
 const pg=v=>v==='ok'?YES:v==='empty'?HALF(t(RV.v.empty)):`<span class="ck n">–</span>`;
 const ad=v=>v==='street'?YES:v==='pobox'?HALF(t(RV.v.pobox)):v==='absent'?`<span class="ck n">–</span>`:NO;
 const draw=()=>{const q=document.getElementById('rq').value.trim().toLowerCase();
  const rows=CMP.filter(F[flt]).filter(x=>!q||[x.name,x.their,x.sub,x.zone].join(' ').toLowerCase().includes(q));
  document.getElementById('cmb').innerHTML=rows.map(x=>{let note='';
   if(!x.id)note=t(RV.notes.onlyTheirs);else if(!x.their)note=t(RV.notes.onlyOurs);
   else if(x.dist!=null)note=x.dist<=5?t(RV.notes.same):t(RV.notes.diff).replace('{d}',x.dist);
   else if(x.o_coord&&!x.t_coord)note=t(RV.notes.newpin);
   if(!x.o_coord&&x.id)note=(note?note+' · ':'')+t(RV.notes.need);
   const cur=x.their?[ad(x.t_addr),x.t_phone?YES:NO,pg(x.t_ms),pg(x.t_zh),x.t_coord?YES:NO,x.t_svc?YES:NO,x.t_photo?YES:NO]:Array(7).fill('<span class="ck n">–</span>');
   const nw=x.id?[x.o_coord?YES:NO,x.o_kl?`<a href="https://map.kodlokasi.my/${x.o_kl}" target="_blank" rel="noopener" class="klt">${x.o_kl}</a>`:NO,x.o_svc?YES:NO,x.o_photo?YES:NO]:Array(4).fill('<span class="ck n">–</span>');
   return `<tr><td class="cn"><b>${esc(x.name)}</b><span><i style="background:${ZC[x.zone]||'#9AA3AE'}"></i>${x.zone?t(C.zones[x.zone]):''}${x.sub?' · '+esc(x.sub):''}</span></td>${cur.map(c=>`<td class="c">${c}</td>`).join('')}${nw.map((c,i)=>`<td class="c${i===0?' gl':''}">${c}</td>`).join('')}<td class="nt">${note}</td></tr>`}).join('')};
 document.querySelectorAll('#rf button').forEach(b=>b.onclick=()=>{flt=b.dataset.f;document.querySelectorAll('#rf button').forEach(x=>x.classList.toggle('on',x===b));draw()});
 document.getElementById('rq').oninput=draw;draw()};
