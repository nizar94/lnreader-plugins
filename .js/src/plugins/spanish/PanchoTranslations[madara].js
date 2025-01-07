var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function i(e){try{s(n.next(e))}catch(e){l(e)}}function o(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,r,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=o(0),i.throw=o(1),i.return=o(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(l=0)),l;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),l=require("@libs/defaultCover"),i=require("@libs/novelStatus"),o=a(require("dayjs")),s=function(e,t){return new RegExp(t.join("|")).test(e)},u=new(function(){function a(e){var t;this.parseData=function(e){var t,a=(0,o.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",r=parseInt(n,10);if(!n)return e;if(s(e,["detik","segundo","second","วินาที"]))a=a.subtract(r,"second");else if(s(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(r,"minute");else if(s(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(r,"hours");else if(s(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(r,"days");else if(s(e,["week","semana"]))a=a.subtract(r,"week");else if(s(e,["month","mes"]))a=a.subtract(r,"month");else{if(!s(e,["year","año"]))return"Invalid Date"!==(0,o.default)(e).format("LL")?(0,o.default)(e).format("LL"):e;a=a.subtract(r,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(5+a),this.options=e.options,this.filters=e.filters}return a.prototype.translateDragontea=function(e){var t;if("dragontea"!==this.id)return e;var a=(0,r.load)((null===(t=e.html())||void 0===t?void 0:t.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return e.html(a.html()),e.find("*").addBack().contents().filter((function(e,t){return 3===t.nodeType})).each((function(e,t){var n=a(t),r=n.text().normalize("NFD").split("").map((function(e){var t=e.normalize("NFC"),a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);return a>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[a]+e.slice(t.length):e})).join("");n.replaceWith(r.replace("\n","<br>"))})),e},a.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},a.prototype.getCheerio=function(a,l){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=r.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},a.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,n){var r=e(n).find(".post-title").text().trim(),i=e(n).find(".post-title").find("a").attr("href")||"";if(r&&i){var o=e(n).find("img"),s={name:r,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||l.defaultCover,path:i.replace(/https?:\/\/.*?\//,"/")};t.push(s)}})),t},a.prototype.popularNovels=function(a,n){return e(this,arguments,void 0,(function(e,a){var n,r,l,i,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in n=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(n+="&m_orderby=latest"),u)if("object"==typeof u[r].value)for(l=0,i=u[r].value;l<i.length;l++)o=i[l],n+="&".concat(r,"=").concat(o);else u[r].value&&(n+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(n,1!=e)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,s,u,c,h,v,p,d,m=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(s={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text().trim()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||l.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content");switch(t){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":s.genres?s.genres+=", "+a.find("a").map((function(t,a){return e(a).text()})).get().join(", "):s.genres=a.find("a").map((function(t,a){return e(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":s.author=a.text().trim();break;case"Status":case"Novel":case"Estado":s.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?i.NovelStatus.Ongoing:i.NovelStatus.Completed;break;case"Artist(s)":s.artist=a.text().trim()}})),s.author||(s.author=e(".manga-authors").text().trim()),e("div.summary__content .code-block,script,noscript").remove(),s.summary=this.translateDragontea(e("div.summary__content")).text().trim()||e("#tab-manga-about").text().trim()||e('.post-content_item h5:contains("Summary")').next().find("span").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-summary p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-excerpt p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim(),u=[],c="",(null===(d=this.options)||void 0===d?void 0:d.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST",referrer:this.site+a}).then((function(e){return e.text()}))]:[3,3];case 2:return c=t.sent(),[3,5];case 3:return h=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(v=new FormData).append("action","manga_get_chapters"),v.append("manga",h),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:v}).then((function(e){return e.text()}))];case 4:c=t.sent(),t.label=5;case 5:return"0"!==c&&(e=(0,r.load)(c)),p=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var n=e(a).find("a").text().trim(),r=e(a).find("span.chapter-release-date").text().trim();r=r?m.parseData(r):(0,o.default)().format("LL");var l=e(a).find("a").attr("href")||"";l&&"#"!=l&&u.push({name:n,path:l.replace(/https?:\/\/.*?\//,"/"),releaseTime:r||null,chapterNumber:p-t})})),s.chapters=u.reverse(),[2,s]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n,r;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),n=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),null===(r=this.options)||void 0===r||r.customJs,[2,this.translateDragontea(n).html()||""]}}))}))},a.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},a}())({id:"panchotranslations",sourceSite:"https://panchotranslations.com/",sourceName:"Pancho Translations",options:{useNewChapterEndpoint:!0,lang:"Spanish"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Acción",value:"accion"},{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Anime",value:"anime"},{label:"Aventura",value:"aventura"},{label:"Cartoon",value:"cartoon"},{label:"Comedia",value:"comedia"},{label:"Comedy",value:"comedy"},{label:"Comic",value:"comic"},{label:"Cooking",value:"cooking"},{label:"Detective",value:"detective"},{label:"Doujinshi",value:"doujinshi"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Escolar",value:"escolar"},{label:"Fantasía",value:"fantasia"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Josei",value:"josei"},{label:"Live action",value:"live-action"},{label:"Magia",value:"magia"},{label:"Malentendidos",value:"malentendidos"},{label:"Manga",value:"manga"},{label:"Manhua",value:"manhua"},{label:"Manhwa",value:"manhwa"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"One shot",value:"one-shot"},{label:"Posesión",value:"posesion"},{label:"Psychological",value:"psychological"},{label:"Reencarnación",value:"reencarnacion"},{label:"Regresión",value:"regresion"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shoujo Ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Silce of Life",value:"silce-of-life"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Soft Yaoi",value:"soft-yaoi"},{label:"Soft Yuri",value:"soft-yuri"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"},{label:"Webtoon",value:"webtoon"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}]},op:{type:"Switch",label:"teniendo todos los géneros seleccionados",value:!1},author:{type:"Text",label:"Autor",value:""},artist:{type:"Text",label:"Artista",value:""},release:{type:"Text",label:"Año de Lanzamiento",value:""},adult:{type:"Picker",label:"Contenido para Adultos",value:"",options:[{label:"Todo",value:""},{label:"Ningún contenido para adultos",value:"0"},{label:"Solo contenido para adultos",value:"1"}]},"status[]":{type:"Checkbox",label:"Estado",value:[],options:[{label:"Terminada",value:"complete"},{label:"En curso",value:"on-going"},{label:"Cancelada",value:"canceled"},{label:"Abandonada por el Traductor",value:"on-hold"}]},m_orderby:{type:"Picker",label:"Ordenar por",value:"",options:[{label:"Importancia",value:""},{label:"Más Reciente",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Clasificación",value:"rating"},{label:"Tendencias",value:"trending"},{label:"Más vistas",value:"views"},{label:"Nuevo",value:"new-manga"}]}}});exports.default=u;