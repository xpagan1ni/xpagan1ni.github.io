(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1608:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,3704,23)),Promise.resolve().then(i.t.bind(i,4475,23)),Promise.resolve().then(i.t.bind(i,347,23)),Promise.resolve().then(i.bind(i,6964))},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return i}});let i="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return g}});let n=i(306),r=i(9955),a=i(5155),o=n._(i(7650)),l=r._(i(2115)),s=i(1147),c=i(2815),d=i(8571),u=new Map,p=new Set,m=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let i=document.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,t.appendChild(i)})}},f=e=>{let{src:t,id:i,onLoad:n=()=>{},onReady:r=null,dangerouslySetInnerHTML:a,children:o="",strategy:l="afterInteractive",onError:s,stylesheets:d}=e,f=i||t;if(f&&p.has(f))return;if(u.has(t)){p.add(f),u.get(t).then(n,s);return}let y=()=>{r&&r(),p.add(f)},g=document.createElement("script"),h=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),n&&n.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});a?(g.innerHTML=a.__html||"",y()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",y()):t&&(g.src=t,u.set(t,h)),(0,c.setAttributesFromProps)(g,e),"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),d&&m(d),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>f(e))}):f(e)}function g(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function h(e){let{id:t,src:i="",onLoad:n=()=>{},onReady:r=null,strategy:c="afterInteractive",onError:u,stylesheets:m,...y}=e,{updateScripts:g,scripts:h,getIsSsr:b,appDir:v,nonce:k}=(0,l.useContext)(s.HeadManagerContext),j=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||i;j.current||(r&&e&&p.has(e)&&r(),j.current=!0)},[r,t,i]);let I=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!I.current&&("afterInteractive"===c?f(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>f(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>f(e))})),I.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(h[c]=(h[c]||[]).concat([{id:t,src:i,onLoad:n,onReady:r,onError:u,...y}]),g(h)):b&&b()?p.add(t||i):b&&!b()&&f(e)),v){if(m&&m.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return i?(o.default.preload(i,y.integrity?{as:"script",integrity:y.integrity,nonce:k,crossOrigin:y.crossOrigin}:{as:"script",nonce:k,crossOrigin:y.crossOrigin}),(0,a.jsx)("script",{nonce:k,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([i,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:k,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&i&&o.default.preload(i,y.integrity?{as:"script",integrity:y.integrity,nonce:k,crossOrigin:y.crossOrigin}:{as:"script",nonce:k,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let b=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function r(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,o]of Object.entries(t)){if(!t.hasOwnProperty(a)||n.includes(a)||void 0===o)continue;let l=i[a]||a.toLowerCase();"SCRIPT"===e.tagName&&r(l)?e[l]=!!o:e.setAttribute(l,String(o)),(!1===o||"SCRIPT"===e.tagName&&r(l)&&(!o||"false"===o))&&(e.setAttribute(l,""),e.removeAttribute(l))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6964:(e,t,i)=>{"use strict";i.d(t,{LanguageProvider:()=>m,e:()=>d,o:()=>f});var n=i(5155),r=i(2115);let a=JSON.parse('{"nav":{"home":"Home","projects":"Projects"},"home":{"title":"Hi, I\'m Hakan.","subtitle":"Software developer, AI enthusiast.","about":{"title":"About","content":["Hello, I\'m Hakan.","Since childhood, my passion for technology has never faded. Creating new things, coding, and interacting with machines is not just a profession for me; it\'s a true passion. I have always aimed to make things smarter, better, and more useful.","In the past, I worked on projects in model rocketry, cybersecurity, robotics, and front-end development. I developed Turkey\'s first thrust-vector-controlled model rocket because I love pushing boundaries and exploring new possibilities. But my ultimate goal has always been to contribute to the technologies of the future.","Currently, I am focusing on iOS development and artificial intelligence. I am developing Dinnermind, a fully AI-powered calorie-tracking application. This is more than just an app—it\'s part of my journey to explore how AI can be integrated into everyday life.","For me, technology is not just a tool but a force that makes life easier and more efficient. By harnessing the potential of AI, I want to make a meaningful contribution to the future.","And yes, I haven\'t built an Iron Man suit—yet. But who knows what the future holds, right?"]},"experience":{"title":"Experience","senior":{"title":"Software Developer, Founder","company":"Dinnermind","period":"November 2024 - Present","description":"Developing a fully AI-powered calorie tracking application."},"developer":{"title":"Software Developer, Founder","company":"Acidalia Labs - Self Employed","period":"July 2020 - April 2024","description":"Developing cybersecurity and artificial intelligence projects."}},"education":{"title":"Education","degree":{"title":"Computer Engineering","school":"University Name","period":"2014 - 2018","description":"Education in software development, algorithms and data structures."}},"skills":{"title":"Technologies"},"contact":{"title":"Contact","content":"To get in touch with me or learn more about my projects:"}},"projects":{"title":"Projects","subtitle":"Some important projects I\'ve developed and technologies I\'ve used.","categories":{"web":"Web Application","backend":"Backend Service","mobile":"Mobile App","hardware":"Hardware"},"items":{"gateway":{"title":"API Gateway Service","description":"A high-performance API Gateway service. Ideal for microservice architecture with rate limiting, caching, authentication and load balancing features."},"rocket":{"title":"Thrust-Vectored Model Rocket","description":"Turkey\'s first model rocket with thrust vectoring system."},"fitness":{"title":"Dinnermind","description":"Fully AI-powered and assisted calorie tracking application."}}},"footer":{"rights":"All rights reserved."}}'),o=JSON.parse('{"nav":{"home":"Ana Sayfa","projects":"Projeler"},"home":{"title":"Merhaba, ben Hakan.","subtitle":"Yazılım geliştiricisi, yapay zeka tutkunu.","about":{"title":"Hakkımda","content":["Merhaba, ben Hakan.","K\xfc\xe7\xfckl\xfcğ\xfcmden beri teknolojiye olan ilgim hi\xe7 azalmadı. Yeni şeyler \xfcretmek, kod yazmak ve makinelerle konuşmak benim i\xe7in sadece bir meslek değil, aynı zamanda bir tutku. Her zaman bir şeyleri daha iyi, daha akıllı ve daha faydalı hale getirmeye \xe7alıştım.","Ge\xe7mişte model roketler, siber g\xfcvenlik, robotik ve front-end geliştirme gibi farklı alanlarda projeler \xfcrettim. T\xfcrkiye\'nin ilk itki y\xf6nlendirmeli model roketini yaptım, \xe7\xfcnk\xfc sınırları zorlamayı ve yeni şeyler denemeyi seviyorum. Ama asıl hedefim her zaman geleceğin teknolojilerine katkıda bulunmak oldu.","Şu anda iOS geliştirme ve yapay zeka alanlarında yoğun bir şekilde \xe7alışıyorum. Dinnermind adını verdiğim, tamamen yapay zeka destekli bir kalori takip uygulaması geliştiriyorum. Bu sadece bir uygulama değil, yapay zekanın g\xfcnl\xfck yaşama nasıl entegre edilebileceğini keşfetme yolculuğumun bir par\xe7ası.","Teknoloji benim i\xe7in sadece bir ara\xe7 değil, insanların hayatını kolaylaştıran ve daha verimli hale getiren bir g\xfc\xe7. Yapay zekanın sunduğu potansiyeli en iyi şekilde kullanarak, geleceğe k\xfc\xe7\xfck ama anlamlı bir katkı sunmak istiyorum.","Ve evet, hen\xfcz Iron Man zırhı yapmadım. Ama kimin ne zaman ne yapacağı belli olmaz, değil mi?"]},"experience":{"title":"Deneyim","senior":{"title":"Yazılım Geliştirici, Kurucu","company":"Dinnermind","period":"Kasım 2024 - G\xfcn\xfcm\xfcz","description":"Tamamen yapay zeka destekli kalori takip uygulaması geliştirme."},"developer":{"title":"Yazılım Geliştirici, Kurucu","company":"Acidalia Labs - Self Employed","period":"Temmuz 2020 - Nisan 2024","description":"Siber g\xfcvenlik ve yapay zeka projeleri geliştirme."}},"education":{"title":"Eğitim","degree":{"title":"Bilgisayar M\xfchendisliği","school":"\xd6rnek \xdcniversitesi","period":"2014 - 2018","description":"Bilgisayar bilimleri, yazılım m\xfchendisliği ve web teknolojileri \xfczerine eğitim."}},"skills":{"title":"Yetenekler"},"contact":{"title":"İletişim","content":"Bir proje \xfczerinde \xe7alışmak veya sadece merhaba demek i\xe7in benimle iletişime ge\xe7ebilirsiniz."}},"projects":{"title":"Projeler","subtitle":"Geliştirdiğim bazı \xf6nemli projeler","categories":{"web":"Web Uygulaması","backend":"Backend","mobile":"Mobil Uygulama","hardware":"Donanım"},"items":{"rocket":{"title":"İtki Y\xf6nlendirmeli Model Roket","description":"T\xfcrkiye\'nin ilk itki y\xf6nlendirme sistemine sahip model roketi."},"fitness":{"title":"Dinnermind","description":"Tamamen yapay zeka destekli ve asistanlı kalori takip uygulaması."}}},"footer":{"rights":"T\xfcm hakları saklıdır."}}'),l=JSON.parse('{"nav":{"home":"Accueil","projects":"Projets"},"home":{"title":"Bonjour, je suis Hakan.","subtitle":"D\xe9veloppeur logiciel, passionn\xe9 par l\'IA.","about":{"title":"\xc0 Propos","content":["Bonjour, je suis Hakan.","Depuis mon enfance, ma passion pour la technologie n\'a jamais faibli. Cr\xe9er de nouvelles choses, coder et interagir avec les machines n\'est pas seulement un m\xe9tier pour moi, c\'est une v\xe9ritable vocation. J\'ai toujours cherch\xe9 \xe0 rendre les choses plus intelligentes, plus efficaces et plus utiles.","Dans le pass\xe9, j\'ai travaill\xe9 sur des projets en mod\xe9lisme spatial, cybers\xe9curit\xe9, robotique et d\xe9veloppement front-end. J\'ai d\xe9velopp\xe9 la premi\xe8re fus\xe9e \xe0 pouss\xe9e vectorielle de Turquie, car j\'adore repousser les limites et explorer de nouvelles possibilit\xe9s. Mais mon objectif ultime a toujours \xe9t\xe9 de contribuer aux technologies du futur.","Aujourd\'hui, je me concentre sur le d\xe9veloppement iOS et l\'intelligence artificielle. Je d\xe9veloppe Dinnermind, une application de suivi des calories enti\xe8rement pilot\xe9e par l\'IA. Ce n\'est pas juste une application, mais une \xe9tape de mon parcours pour comprendre comment l\'intelligence artificielle peut s\'int\xe9grer dans la vie quotidienne.","Pour moi, la technologie n\'est pas seulement un outil, mais une force qui rend la vie plus simple et plus efficace. En exploitant le potentiel de l\'IA, je veux apporter une contribution significative \xe0 l\'avenir.","Et oui, je n\'ai pas encore construit l\'armure d\'Iron Man… mais qui sait ce que l\'avenir nous r\xe9serve ?"]},"experience":{"title":"Exp\xe9rience","senior":{"title":"D\xe9veloppeur Logiciel, Fondateur","company":"Dinnermind","period":"Novembre 2024 - Pr\xe9sent","description":"D\xe9veloppement d\'une application de suivi des calories enti\xe8rement aliment\xe9e par l\'IA."},"developer":{"title":"D\xe9veloppeur Logiciel, Fondateur","company":"Acidalia Labs - Auto-Entrepreneur","period":"Juillet 2020 - Avril 2024","description":"D\xe9veloppement de projets de cybers\xe9curit\xe9 et d\'intelligence artificielle."}},"education":{"title":"Formation","degree":{"title":"Ing\xe9nieur en Informatique","school":"Nom de l\'Universit\xe9","period":"2014 - 2018","description":"Formation en d\xe9veloppement logiciel, algorithmes et structures de donn\xe9es."}},"skills":{"title":"Technologies"},"contact":{"title":"Contact","content":"Pour me contacter ou en savoir plus sur mes projets:"}},"projects":{"title":"Projets","subtitle":"Quelques projets importants que j\'ai d\xe9velopp\xe9s et les technologies utilis\xe9es.","categories":{"web":"Application Web","backend":"Service Backend","mobile":"Application Mobile","hardware":"Mat\xe9riel"},"items":{"gateway":{"title":"Service API Gateway","description":"Un service API Gateway haute performance. Id\xe9al pour l\'architecture microservices avec limitation de d\xe9bit, mise en cache, authentification et \xe9quilibrage de charge."},"rocket":{"title":"Fus\xe9e Mod\xe8le \xe0 Pouss\xe9e Vectorielle","description":"Premi\xe8re fus\xe9e mod\xe8le de Turquie avec syst\xe8me de pouss\xe9e vectorielle."},"fitness":{"title":"Dinnermind","description":"Application de suivi des calories enti\xe8rement aliment\xe9e par l\'IA."}}},"footer":{"rights":"Tous droits r\xe9serv\xe9s."}}'),s=JSON.parse('{"nav":{"home":"首页","projects":"项目"},"home":{"title":"你好，我是 Hakan.","subtitle":"软件开发者，人工智能爱好者。","about":{"title":"关于我","content":["你好，我是哈坎。","从小到大，我对科技的热爱从未减退。创造新事物、编写代码、与机器互动，对我来说不仅仅是一份职业，而是一种真正的热情。我一直致力于让事物变得更加智能、更好、更有用。","过去，我曾参与模型火箭、网络安全、机器人技术和前端开发等不同领域的项目。我开发了土耳其首个推力矢量控制模型火箭，因为我喜欢挑战极限，探索新的可能性。但我的最终目标始终是为未来科技做出贡献。","目前，我专注于iOS 开发和人工智能。我正在开发Dinnermind，这是一款完全由人工智能驱动的卡路里追踪应用。这不仅仅是一个应用程序，更是我探索人工智能如何融入日常生活的一部分。","对我来说，技术不仅仅是一个工具，而是让生活更轻松、更高效的力量。通过利用人工智能的潜力，我希望为未来做出有意义的贡献。","是的，我还没有打造钢铁侠战甲——但未来充满未知，对吧？"]},"experience":{"title":"工作经验","senior":{"title":"软件开发工程师，创始人","company":"Dinnermind","period":"2024年11月 - 至今","description":"开发完全由人工智能驱动的卡路里追踪应用。"},"developer":{"title":"软件开发工程师，创始人","company":"Acidalia Labs - 个体经营","period":"2020年7月 - 2024年4月","description":"开发网络安全和人工智能项目。"}},"education":{"title":"教育背景","degree":{"title":"计算机工程","school":"大学名称","period":"2014 - 2018","description":"软件开发、算法和数据结构方面的教育。"}},"skills":{"title":"技术栈"},"contact":{"title":"联系方式","content":"如需联系我或了解更多关于我的项目："}},"projects":{"title":"项目","subtitle":"我开发的一些重要项目和使用的技术。","categories":{"web":"网络应用","backend":"后端服务","mobile":"移动应用","hardware":"硬件"},"items":{"gateway":{"title":"API 网关服务","description":"高性能API网关服务。具有速率限制、缓存、身份验证和负载均衡功能，适用于微服务架构。"},"rocket":{"title":"推力矢量控制模型火箭","description":"土耳其首个配备推力矢量控制系统的模型火箭。"},"fitness":{"title":"Dinnermind","description":"完全由人工智能驱动的卡路里追踪应用。"}}},"footer":{"rights":"版权所有。"}}'),c=JSON.parse('{"nav":{"home":"ホーム","projects":"プロジェクト"},"home":{"title":"はじめまして、Hakanです","subtitle":"ソフトウェア開発者、AI愛好者。","about":{"title":"プロフィール","content":["こんにちは、私はハカンです。","幼い頃から、私はテクノロジーへの情熱を持ち続けてきました。新しいものを作ること、コードを書くこと、機械と対話することは、私にとって単なる職業ではなく、本当の情熱です。常に物事をよりスマートに、より良く、より便利にすることを目指してきました。","過去には、モデルロケット、サイバーセキュリティ、ロボット工学、フロントエンド開発など、さまざまな分野でプロジェクトに取り組んできました。トルコ初の推力偏向制御を備えたモデルロケットを開発しました。なぜなら、私は限界を押し広げ、新しい可能性を探求するのが好きだからです。しかし、私の最終的な目標は、常に未来の技術に貢献することでした。","現在、私はiOS開発と人工知能に注力しています。完全にAIによって支えられたカロリー追跡アプリDinnermindを開発中です。これは単なるアプリではなく、AIが日常生活にどのように統合できるかを探求する旅の一部です。","私にとって、テクノロジーは単なるツールではなく、生活をより簡単に、より効率的にする力です。AIの可能性を活用することで、未来に意味のある貢献をしたいと考えています。","そして、はい、私はまだアイアンマンのスーツを作っていません。でも、未来はどうなるか分かりませんよね？"]},"experience":{"title":"職歴","senior":{"title":"ソフトウェア開発者、創業者","company":"Dinnermind","period":"2024年11月 - 現在","description":"完全にAIを活用したカロリー管理アプリケーションの開発。"},"developer":{"title":"ソフトウェア開発者、創業者","company":"Acidalia Labs - 自営業","period":"2020年7月 - 2024年4月","description":"サイバーセキュリティと人工知能プロジェクトの開発。"}},"education":{"title":"学歴","degree":{"title":"コンピュータ工学","school":"大学名","period":"2014年 - 2018年","description":"ソフトウェア開発、アルゴリズム、データ構造に関する教育。"}},"skills":{"title":"技術スタック"},"contact":{"title":"お問い合わせ","content":"ご連絡やプロジェクトについての詳細は以下まで："}},"projects":{"title":"プロジェクト","subtitle":"開発した主要なプロジェクトと使用技術の紹介。","categories":{"web":"ウェブアプリ","backend":"バックエンドサービス","mobile":"モバイルアプリ","hardware":"ハードウェア"},"items":{"gateway":{"title":"APIゲートウェイサービス","description":"高性能APIゲートウェイサービス。レート制限、キャッシング、認証、負荷分散機能を備えたマイクロサービスアーキテクチャに最適。"},"rocket":{"title":"推力偏向制御モデルロケット","description":"トルコ初の推力偏向制御システムを搭載したモデルロケット。"},"fitness":{"title":"Dinnermind","description":"完全にAIを活用したカロリー管理アプリケーション。"}}},"footer":{"rights":"すべての権利を保有します。"}}'),d=[{code:"en",name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7"},{code:"tr",name:"T\xfcrk\xe7e",flag:"\uD83C\uDDF9\uD83C\uDDF7"},{code:"fr",name:"Fran\xe7ais",flag:"\uD83C\uDDEB\uD83C\uDDF7"},{code:"zh",name:"中文",flag:"\uD83C\uDDE8\uD83C\uDDF3"},{code:"ja",name:"日本語",flag:"\uD83C\uDDEF\uD83C\uDDF5"}],u={en:a,tr:o,fr:l,zh:s,ja:c},p=(0,r.createContext)(void 0);function m(e){let{children:t}=e,[i,a]=(0,r.useState)(d[0]);return(0,r.useEffect)(()=>{let e=localStorage.getItem("language");if(e){let t=d.find(t=>t.code===e);t&&a(t)}},[]),(0,n.jsx)(p.Provider,{value:{currentLang:i,setLanguage:e=>{a(e),localStorage.setItem("language",e.code)},t:e=>{let t=e.split("."),n=u[i.code];for(let i of t){if(void 0===n)return e;n=n[i]}return n||e}},children:t})}function f(){let e=(0,r.useContext)(p);if(void 0===e)throw Error("useLanguage must be used within a LanguageProvider");return e}},347:()=>{},4475:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[725,441,517,358],()=>t(1608)),_N_E=e.O()}]);