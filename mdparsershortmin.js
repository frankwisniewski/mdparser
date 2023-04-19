"use strict";function fhwMD(e,l=!1){let t=[],r=[],i={};const n={defLi:new RegExp(/^ *: /g),footnote:new RegExp(/(?<footnote>^ *\[\^(?<bez>[\d\w ]+)\]: )/),fCode:new RegExp(/^ *```.*/),idReg:new RegExp(/{#(?<id>.+)}/),list:new RegExp(/^ *[-+*] |^ *\d+\. /),mail:new RegExp(/<[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*>/),ol:new RegExp(/^ *\d+. /),tag:new RegExp(/<(?<tag>.*?)>/),th:new RegExp(/^ *[\| ]*.*\|.*/),ul:new RegExp(/^ *[-\*\+] /),url:new RegExp(/<https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)>/),refLink:new RegExp(/^\[(?<num>.*)\]: *<*(?<link>.*)$/),refTitle:new RegExp(/<*(?<link>.*)[ >]*["'(](?<title>.*)["')] *$/)},o=(e,l)=>e.match(new RegExp("^"+l+"*"),l)[0].length;function p(e){return e.replaceAll(/[&<>'"]/g,(function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e}))}function a(e){return/\S+@\S+\.\S+/.test(e)}function c(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}const f=e=>{let l=e,t=0;return{g:e=>l[t+e]??!1,i:()=>t<l.length,n:()=>l[t++]??!1,c:()=>l[t]??!1,f:()=>t-=t>0,p:e=>{l.push(e),t=l.length-1},a:()=>l,change:e=>l[t]=e,length:()=>l.length,o:()=>l.pop()??!1,last:()=>l[l.length-1]??!1,after:e=>l.splice(t+1,0,e),e:()=>o(l[t]," "),reset:()=>{t=0},deleteAll:()=>{l=[]},hasData:()=>l.length>0,find:e=>l.includes(e),findIdx:e=>-1!==l.indexOf(e)&&l.indexOf(e),oo:e=>{let t="";for(let r=0;r<e;r++){let e=l.pop()??!1;t+=e||""}return t},b:()=>t,d:e=>{t=e}}},s=e=>{e=e.replaceAll(/\t/g,"    ");let r=f(e.split(/\r?\n|\r|\n/g)),p=f([]);p.h=(e=0)=>p.g(e).h??!1,p.v=(e=0)=>p.g(e).v??!1,p.e=(e=0)=>p.g(e).k??!1,p.l=(e=0)=>p.g(e).l??!1,p.N=e=>p.c().h=e,p.O=e=>p.c().l=e,p.P=e=>p.c().v=e,p.add=(e="",l="",t=0,r=0,i="",n="")=>p.p({h:e,v:l,k:t,l:r,hId:i,codeClass:n});let s=[];s.h=(e,t,r)=>{let i=o(t.trim(),"#");i>6&&(i=6);let a=t.match(n.idReg)?.groups.id.replaceAll(" ","-")??!1;a||1!=l||(a=t.trim().slice(i).trim().toLowerCase(),a=a.replace(/[^a-zA-Z-\s]/g,""),a=a.replaceAll(" ","-")),t=t.slice(r).trim().replace(n.idReg,""),p.add(e,t,r,i,a)},s.h1=(e,l,t)=>{if("p"==p.h())return l="# "+p.v(),p.o(),void p.add("h",l,t,1);p.add("p",l,t)},s.h2=(e,l,t)=>{if("p"==p.h())return l="# "+p.v(),p.o(),void p.add("h",l,t,2);p.add("hr",l,t)},s.hr=(e,l,t)=>{p.p({h:e,v:l,k:t})},s.table=(e,l,t)=>{let i=n.th.exec(p.v()),o=n.th.exec(r.g(1));if(i&&o)for(p.N("table"),p.p({h:e,v:l,k:t}),r.n();r.i();){if(!n.th.exec(r.c())){r.f();break}p.add(e,r.c(),t),r.n()}else p.add("p",l,t)},s.blockquote=(e,l,t)=>{let r=o(l,">");l=l.slice(t+r+1),p.p({h:e,v:l,k:t,l:r})},s.code=(e,l,t)=>{p.add(e,l.slice(4),t)},s.fcode=(e,l,t)=>{let i=r.e(),o=l.trimStart().slice(3).trim();for(r.n();r.i()&&!n.fCode.exec(r.c());){if(r.e()<i){r.f();break}l=r.c().slice(i),p.add("code",r.c().slice(i),r.e()-i,null,null,o),r.n()}},s.blank=(e,l,t)=>{p.h!=e&&p.p({h:e,v:l,k:t})},s.p=(e,l,t)=>{p.p({h:e,v:l,k:t})},s.list=(e,l,t)=>{let i=0,o=0;for(;r.i();){if(n.list.exec(r.c())&&(i=r.e()+2),0==r.e()&&!n.list.exec(r.c())&&""==r.c()){r.f();break}o=r.e()>i?i:r.e(),p.add(e,r.c().slice(o),r.e()),r.n()}"list"==p.h()&&""==p.v()&&p.N("blank")},s.html=(e,l,t)=>{let r=n.tag.exec(l)?.groups.tag;c(encodeURI(r))&&(e="p"),a(r)&&(e="p"),p.p({h:e,v:l,k:t})},s.deflist=(e,l,t)=>{let i="p"==p.h(),o=r.e(),a="";if(i)for(p.N("deflist"),p.O("dt");r.i();){for(;r.e()>o;)p.add(e,r.c(),t,"ddchild"),r.n();if(!r.c().match(/^ *: /g)){r.f();break}l=r.c().slice(t),a="dd",p.p({h:e,v:l,l:a,k:t}),r.n()}else for(;r.i();){if(!r.c().match(n.defLi)){r.f();break}p.add("p",r.c().slice(t),t),r.n()}},s.reflink=(e,l,r)=>{let i="",o="",p="",a=n.refLink.exec(l);a&&(i=a.groups.num,o=a.groups.link.trim());let c=n.refTitle.exec(a.groups.link);c&&(o=c.groups.link.trim(),p=c.groups.title.trim()),t[i.replaceAll(" ","-")]={linkUrl:o,linkTitel:p}},s.footnote=(e,l,t)=>{let o=l.match(n.footnote).groups.bez;i[o]=Object.keys(i).length+1,l=l.replace(n.footnote,"");let a="parent";p.p({h:e,v:l,k:t,l:a,footName:o});let c=!1;for(r.n();r.i()&&(c||(c=r.e()),""!=r.c())&&!r.c().match(n.footnote)&&r.e()>=c&&0!=r.e();)l=r.c().slice(c),a="child",t=r.e()-c,p.p({h:e,v:l,k:t,l:a,footName:o}),r.n();i[o],p.P(p.v()+`[&#9166;](#footnoteret-${o} "zurück")`),r.f()};const d=f([]);d.p("(?<code>^ {4,})"),d.p("(?<h>^ *#+)"),d.p("(?<h1>^ *===+ *$)"),d.p("(?<h2>^ *---+ *$)"),d.p("(?<hr>^ *[_*]{3,} *$)"),d.p("(?<table>^ *[\\| ]*[ -:]+\\|.*)"),d.p("(?<fcode>^ *```.* *)"),d.p("(?<list>^ *[-+*] |^ *\\d+\\. )"),d.p("(?<html>^ *<.*?>)"),d.p("(?<blockquote>^ *>+ *)"),d.p("(?<blank>^ *$)"),d.p("(?<deflist>^ *: )"),d.p("(?<footnote>^ *\\[\\^(?<bez>[\\d\\w ]+)\\]: )"),d.p("(?<reflink>^\\[.*\\]:)"),d.p("(?<p>^.*$)");const g=new RegExp(d.a().join("|")),h=e=>{let l=g.exec(e);return l?Object.keys(l.groups).find((e=>void 0!==l.groups[e])):"p"};for(;r.i();){let e=r.c(),l=h(e),t=r.e();s[l](l,e,t),r.n()}return p.reset(),p},d=e=>{const l=e=>d(s(e));let t=f([]),i=[];for(i.h=e=>{let l="";e.hId&&(l=` id="${e.hId.replaceAll(" ","-")}"`),t.p(`<h${e.l}${l}>${g(e.v.slice(e.l).trim())}</h${e.l}>`)},i.blank=()=>{},i.p=l=>{if("p"==e.h(-1)){t.o();let r=e.v(-1).replace(/  $/,"<br>")+" ";e.P(r+l.v)}t.p(`<p>${g(l.v)}</p>`)},i.hr=()=>t.p("<hr>"),i.code=l=>{let r="";for(l.codeClass&&(r=` class="language-${l.codeClass} ${l.codeClass}"`),t.p(`<pre><code${r}>${p(l.v)}`),e.n();e.i();){if("code"!==e.h()){e.f();break}t.p(p(e.v())),e.n()}t.p("</code></pre>")},i.list=()=>{let r=[],i=0,o=f([]),p=f([]),a="";if(n.ul.exec(e.v())&&(a="ul"),n.ol.exec(e.v())&&(a="ol"),t.p(`<${a}>`),p.p(`</${a}>`),o.p(e.e()),e.g(1)){for(r.push(e.v().replace(n.list,"")),e.n();e.i()&&"list"===e.h();){if(n.list.exec(e.v())&&(t.p("<li>"),1==r.length?t.p(g(r[0])):(r.length>1&&r[1]&&r[1].match(n.list)&&(t.p(g(r[0])),r.shift()),t.p(l(r.join("\n")))),r=[],e.e()>o.last()&&(n.ul.exec(e.v())&&(a="ul"),n.ol.exec(e.v())&&(a="ol"),t.p(`<${a}>`),p.p(`</${a}>`),o.p(e.e())),e.e()<o.last())){if(o.find(e.e()))i=o.length()-o.findIdx(e.e())-1;else{let l=0;for(;o.g(l)>e.e();)l--;i=-1*l-1}for(let e=0;e<i;e++)o.o(),t.p(p.o())}r.push(e.v().replace(n.list,"")),e.n()}for(t.p("<li>"),1==r.length?t.p(g(r[0])):(r.length>1&&r[1]&&r[1].match(n.list)&&(t.p(g(r[0])),r.shift()),t.p(l(r.join("\n"))));p.last();)t.p(p.o());e.f()}else t.p("<li>"+g(e.v().replace(n.list,""))+p.o())},i.table=()=>{let l=(()=>{let l=e.v(1).replace(/^ *\||\| *$/g,"").split("|");return l.forEach(((e,t)=>{let r=e.trim();l[t]="",r.match(/^:.*:$/)&&(l[t]=' style="text-align: center;"'),r.match(/^:-*$/)&&(l[t]=' style="text-align: left;"'),r.match(/^-*:$/)&&(l[t]=' style="text-align: right;"')})),l})(),r=e.v().replace(/^ *\||\| *$/g,"").split("|");e.n(),e.n();let i=[];for(;e.i();){if("table"!==e.h()){e.f();break}i.push(e.v().replace(/^ *\||\| *$/g,"").split("|")),e.n()}let n=r.length;i.forEach((e=>{e.length>n&&(n=e.length)})),t.p("<table>"),t.p("<thead><tr>");for(let e=0;e<n;e++){let i=r[e]??"",n=l[e]??"";t.p(`<th${n}>`),t.p(g(i.trim())),t.p("</th>")}t.p("</tr></thead>"),t.p("<tbody>"),i.forEach((e=>{t.p("<tr>");for(let r=0;r<n;r++){let i=e[r]??"",n=l[r]??"";t.p(`<td${n}>`),t.p(g(i.trim())),t.p("</td>")}t.p("</tr>")})),t.p("</tbody>"),t.p("</table>")},i.blockquote=()=>{let r="",i=f([]);t.p("<blockquote>"),i.p("</blockquote>");let n=e.l();for(;e.i();){if("blockquote"!==e.h()){e.f();break}if(n!==e.l()){t.p(l(r));let o=e.l()-n;if(o>0)for(let e=0;e<o;e++)t.p("<blockquote>"),i.p("</blockquote>");else t.p(i.oo(o*=-1));n=e.l(),r=""}r+=e.v()+"\n",e.n()}for(t.p(l(r));i.last();)t.p(`${i.o()}`)},i.html=()=>{t.p(e.v())},i.deflist=()=>{for(t.p("<dl>");e.i();){if("blank"==e.h()&&"deflist"!==e.h(1)){e.f();break}if("deflist"!==e.h()&&"blank"!==e.h()){e.f();break}if("blank"!==e.h()&&("dt"==e.l()&&t.p("<dt>"+g(e.v().replace(/^ *: /,""))+"</dt>"),"dd"==e.l()))if("ddchild"==e.l(1)){let r=[];for(r.push(e.v().replace(/^ *: /,"")),e.n();e.i();){if("ddchild"!==e.l()){t.p("<dd>"),t.p(l(r.join("\n"))),t.p("</dd>"),e.f();break}r.push(e.v()),e.n()}}else t.p("<dd>"+g(e.v().replace(/^ *: /,""))+"</dd>");e.n()}t.p("</dl>")},i.footnote=()=>{let t=[],i=e.c().footName;for(t.push(e.v()),e.n();e.i()&&"child"===e.c().l;)t.push(e.v()),e.n();i=i.replaceAll(" ","-"),r.push(`<li id="footnote-${i}">`+l(t.join("\n"))),e.f()};e.i();)i[e.h()](e.c()),e.n();return t.a().join("\n")},g=e=>{let l=f(e.split("")),r=e,n=f([]),o=f([]),s=f([]);function d(e){return" "==l.g(-1)&&" "==l.g(e)&&(n.p(l.c()),2==e&&(n.p(l.g(1)),l.n()),!0)}function h(e){if(n.last()==`<${e}>`)return n.o(),void o.o();o.find(e)?function(e){for(;s.last()!==e;)n.p(`</${o.last()}>`),s.p(o.o());for(s.o();s.last();)n.p(`<${s.last()}>`),o.p(s.o())}(e):(n.p(`<${e}>`),o.p(e))}function u(){let e=r.substr(l.b());n.p("<code>"),o.p("code");let t=/^(?<!`)`(?!`)(?<code>.*?)(?<!`)`(?!`)/.exec(e);if(t)return n.p(p(t.groups.code)),l.d(l.b()+t[0].length-1),void n.p(`</${o.o()}>`)}function k(){n.p("<code>"),o.p("code"),l.f();let e=r.substr(l.b()),t=/^(?<!`)``(?!`)(?<code>.*?)(?<!`)``(?!`)/.exec(e);if(t)return n.p(p(t.groups.code)),l.d(l.b()+t[0].length-1),void n.p(`</${o.o()}>`)}function b(){let e=r.substr(l.b()),o=e.match(/\[\^(?<flink>[\d\w ]+)\]/);if(o){let e=o[0].length,l=o.groups.flink,t=i[l]??"error";return l=l.replaceAll(" ","-"),[`<sup id=footnoteret-${l}><a href="#footnote-${l}">${t}</a></sup>`,e]}let p=e.match(/^\[!\[(?<imgAlt>.+?)\]\((?<imgUrl>[^ ]+?)( ["'\(](?<imgTitle>.+?)["'\)])?\)\]\((?<linkUrl>.+?)\)/);if(p){let e=p.groups.imgTitle;e=e?` title="${e}"`:"";let l=p.groups.imgAlt;return l=l?` alt="${l}"`:"",[`<a href="${p.groups.linkUrl}"><img src="${p.groups.imgUrl}" ${l}${e}></a>`,p[0].length]}let a=e.match(/^\[(?<linktext>.+?)\]\((?<linkUrl>[^ ]+?)( ["'\(](?<title>.+?)["'\)])?\)/);if(a){let e=a.groups.title;return e=e?` title="${e}"`:"",[`<a href="${encodeURI(a.groups.linkUrl.trim())}"${e}>${g(a.groups.linktext)}</a>`,a[0].length]}let c=e.match(/^\[(?<linktext>.+?)\]\((?<linkUrl>#.+?)( ["'\(](?<title>.+?)["'\)])?\)/);if(c){let e=c.groups.title;return e=e?` title="${e}"`:"",[`<a href="${encodeURI(c.groups.linkUrl.trim().replaceAll(" ","-"))}"${e}>${g(c.groups.linktext)}</a>`,c[0].length]}let f=e.match(/^\[(?<label>.+?)\] ?\[(?<linkRef>.+?)\]/);if(f){let e=f.groups.linkRef.replaceAll(" ","-").toLowerCase();if(t[e]){let l=t[e].linkUrl,r=t[e].linkTitel;return r=""!==r?` title="${r}"`:"",[`<a href="${encodeURI(l.trim())}"${r}>${g(f.groups.label)}</a>`,f[0].length]}}let s=e.match(/^\[(?<label>.+?)\](?!\[)/);if(s){let e=s.groups.label.replaceAll(" ","-").toLowerCase();if(t[e]){let l=t[e].linkUrl,r=t[e].linkTitel;return r=""!==r?` title="${r}"`:"",[`<a href="${encodeURI(l.trim())}"${r}>${g(s.groups.label)}</a>`,s[0].length]}}return n.p(l.c()),[!1,""]}function $(){let e=r.substr(l.b()),i=e.match(/^!\[(?<imgAlt>.+?)\]\((?<imgUrl>[^ ]+?)( ["'\(](?<imgTitle>.+?)["'\)])?\)\)*/);if(i){let e=i.groups.imgTitle;return e=e?` title="${e}"`:"",[`<img src="${encodeURI(i.groups.imgUrl.trim())}" alt="${i.groups.imgAlt}"${e}>`,i[0].length]}let o=e.match(/^!\[(?<label>.+?)\] ?\[(?<linkRef>.+?)\]/);if(o){let e=o.groups.linkRef.replaceAll(" ","-").toLowerCase();if(t[e]){let l=encodeURI(t[e].linkUrl),r=t[e].linkTitel;return[`<img src="${l}" alt="${o.groups.label}" title="${r}">`,o[0].length]}}let p=e.match(/^!\[(?<label>.+?)\](?!\[)/);if(p){let e=p.groups.label.replaceAll(" ","-").toLowerCase();if(t[e]){let l=encodeURI(t[e].linkUrl),r=t[e].linkTitel;return[`<img src="${l}" alt="${p.groups.label}" title="${r}">`,p[0].length]}}return n.p(l.c()),[!1,""]}function m(){let e="",t=1;return[e,t]=function(e,t){let r="";for(;l.g(e)&&l.g(e)!=t;)r+=l.g(e),e++;return[r,e]}(t,">"),l.g(t)&&""!=e?a(encodeURI(e))?(n.p(`<a href="mailto:${e}">${e}</a>`),void l.d(l.b()+t)):c(encodeURI(e))?(n.p(`<a href="${e}">${e}</a>`),void l.d(l.b()+t)):void n.p(l.c()):(n.p(p(l.c())),[!1,""])}function v(){r.substr(l.b());let e=0,t="";for(;l.g(e)&&!" <".includes(l.g(e));)t+=l.g(e),e++;e=-1;let i="";for(;l.g(e)&&!" >".includes(l.g(e));)i=l.g(e)+i,e--;let o=encodeURI(i+t);return c(o)?(l.d(l.b()+t.length-1),n.oo(i.length),void n.p(`<a href="${o}">${i+t}</a>`)):a(o)?(l.d(l.b()+t.length-1),n.oo(i.length),void n.p(`<a href="mailto:${o}">${i+t}</a>`)):void n.p(l.c())}for(!function(){for(;l.i();){let e=l.c();if("*_^=\\`[!<~:@".includes(e))switch(e){case"*":case"_":if(d(1))break;if("*"==l.g(1)||"_"==l.g(1)){if(d(2))break;l.n(),h("strong")}else h("em");break;case"^":if(d(1))break;h("sup");break;case"~":if(d(1))break;if("~"==l.g(1)){if(d(2))break;l.n(),h("del")}else h("sub");break;case"=":if(d(1))break;if("="==l.g(1)){if(d(2))break;l.n(),h("mark")}else n.p(l.c());break;case"\\":l.i()?(l.n(),"$"==l.c()?n.p("&dollar;"):n.p(p(l.c()))):n.p(l.c());break;case"`":"`"==l.g(1)?(l.n(),k()):u();break;case"[":if(d(1))break;let[e,t]=b();e&&(n.p(e),l.d(l.b()+t-1));break;case"!":if(d(1))break;let[r,i]=$();r&&(n.p(r),l.d(l.b()+i-1));break;case"<":if(d(1))break;m();break;case":":case"@":v()}else n.p(l.c());l.n()}}();o.last();)n.p(`</${o.o()}>`);return n.a().join("")};let h=s(e),u=d(h);return r.length>0?u+"<hr><ol>"+r.join("\n")+"</ol>":u}