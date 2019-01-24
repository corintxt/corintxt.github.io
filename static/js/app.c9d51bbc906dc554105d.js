webpackJsonp([0],{"3REB":function(t,e){},"7fsY":function(t,e){},GTos:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},a,!1,function(t){i("GTos")},null,null).exports,n=i("/ocq"),s=i("Ubyc"),l=i.n(s),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("h1",[this._v("Corin Faife is a journalist "),e("br"),this._v(" interested in\n    "),e("vue-typer",{attrs:{text:["technology","automation","surveillance","blockchain","accountability","web 3.0","digital labour"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":200,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"blink"}})],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#/portfolio"}},[this._v("\n        portfolio\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#/contact"}},[this._v("\n        contact\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#/about"}},[this._v("\n        about\n      ")])])])}]};var h=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Corin Faife"}}},c,!1,function(t){i("3REB")},"data-v-a9b73012",null).exports,u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Hi.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("br"),t._v(" "),t._m(2),t._v("\n     |\n  "),t._m(3),t._v("\n     |\n  "),t._m(4)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-body"},[i("p",[t._v("I'm a journalist interested in technology, politics, and the politics of technology. ")]),t._v(" "),i("p",[t._v("I think a lot about the incentives baked into social and technological systems,\n      and how these bring the interests of owners, coordinators and end users into conflict.")]),t._v(" "),i("p",[t._v("I'm also fascinated by self-governing communities and alternatives to hierarchical and/or capitalist modes of organisation.")]),t._v(" "),i("p",[t._v("After started my career in London, then moving to Montréal, I'm now based in New York.")]),t._v(" "),i("p",[t._v("I also write Corincast, a bi-weekly(ish) newsletter with short essays and interesting links, published through Tinyletter.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticStyle:{padding:"3px","text-align":"center"},attrs:{action:"https://tinyletter.com/corincast",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/corincast', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[e("p",{attrs:{id:"subscribe"}},[e("label",{attrs:{for:"tlemail"}},[this._v("To subscribe, enter your email here:")])]),this._v(" "),e("p",[e("input",{staticStyle:{width:"140px"},attrs:{type:"text",name:"email",id:"tlemail"}})]),this._v(" "),e("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),this._v(" "),e("input",{attrs:{type:"submit",value:"Subscribe"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/"}},[this._v(" home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/portfolio"}},[this._v(" portfolio ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/contact"}},[this._v(" contact ")])])}]};var d=i("VU/8")({name:"About",data:function(){return{msg:"About"}}},u,!1,function(t){i("7fsY")},"data-v-0a5478e6",null).exports,p=i("nI/b"),m=i.n(p),v={name:"Portfolio",data:function(){return{articles:m.a.articles}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v("Portfolio")]),t._v(" "),i("h2",[t._v("A non-exhaustive list of articles:")]),t._v(" "),i("div",{staticClass:"portfolio-container"},[i("table",{attrs:{id:"portfolio"}},[t._m(0),t._v(" "),t._l(t.articles,function(e){return i("tr",[i("td",{attrs:{id:"date"}},[t._v("\n           "+t._s(e.date)+"\n          ")]),t._v(" "),i("td",[i("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])]),t._v(" "),i("td",{attrs:{id:"publication"}},[i("em",[t._v(t._s(e.publication))])])])})],2)]),t._v(" "),i("br"),t._v(" "),t._m(1),t._v("\n     |\n  "),t._m(2),t._v("\n     |\n  "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Date")]),this._v(" "),e("th",[this._v("Title")]),this._v(" "),e("th",[this._v("Publication")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/"}},[this._v(" home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/contact"}},[this._v(" contact ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/about"}},[this._v(" about ")])])}]};var f=i("VU/8")(v,b,!1,function(t){i("PyUR")},"data-v-00ec808a",null).exports,_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Use these details to get in touch:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("br"),t._v(" "),t._m(2),t._v("\n     |\n  "),t._m(3),t._v("\n     |\n  "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("\n    twitter: "),e("a",{attrs:{href:"https://twitter.com/corintxt",target:"_blank"}},[this._v("@corintxt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("\n    email: "),e("a",{attrs:{href:"mailto:corin.faife@gmail.com",target:"_blank"}},[this._v("corin.faife[at]gmail.com")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/"}},[this._v(" home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/portfolio"}},[this._v(" portfolio ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#/about"}},[this._v(" about ")])])}]};var w=i("VU/8")({name:"Contact",data:function(){return{msg:"Contact"}}},_,!1,function(t){i("c/ve")},"data-v-670340a6",null).exports;o.a.use(n.a),o.a.use(l.a);var y=new n.a({routes:[{path:"/",name:"Hello World",component:h},{path:"/portfolio",name:"PortfolioLink",component:f},{path:"/contact",name:"ContactPage",component:w},{path:"/about",name:"AboutPage",component:d}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:y,components:{App:r},template:"<App/>"})},PyUR:function(t,e){},"c/ve":function(t,e){},"nI/b":function(t,e){t.exports={articles:[{date:"2018-10-25",title:"We Asked Crypto News Outlets If They’d Take Money to Cover a Project. More Than Half Said Yes",publication:"BREAKER",url:"https://breakermag.com/we-asked-crypto-news-outlets-if-theyd-take-money-to-cover-a-project-more-than-half-said-yes/"},{date:"2018-10-24",title:"The Battle Over Europe’s Air",publication:"HowWeGetToNext",url:"https://howwegettonext.com/the-battle-over-europes-air-c646e041c7f"},{date:"2018-09-27",title:"The Authors of 'Blockchain and the Law' Want You to Rethink the Internet",publication:"BREAKER",url:"https://breakermag.com/the-authors-of-blockchain-and-the-law-want-you-to-rethink-the-internet/"},{date:"2018-08-15",title:"The U.N.’s Powerful New Way To Aid Refugees",publication:"BREAKER",url:"https://breakermag.com/the-u-n-s-powerful-new-way-to-aid-refugees/"},{date:"2018-07-19",title:"'Inspector Gadget': How drones are saving lives",publication:"UnHerd.com",url:"https://unherd.com/2018/07/inspector-gadget-drones-saving-lives/"},{date:"2018-06-19",title:"This Programmer Scraped LinkedIn to Find People Who Work at ICE",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/435myg/programmer-used-linkedin-to-find-ice-employees-database"},{date:"2018-06-01",title:"The Government Wants Your Medical Data",publication:"The Outline",url:"https://theoutline.com/post/4754/the-government-wants-your-medical-data"},{date:"2018-03-23",title:"Cryptocurrency Companies Are Rushing to Gobble up Canada's Cheap Electricity",publication:"Gizmodo Earther",url:"https://earther.gizmodo.com/cryptocurrency-companies-are-rushing-to-gobble-up-canad-1823982984"},{date:"2018-03-14",title:"The Mobile Revolution Will Be Monetized",publication:"AdAge",url:"https://adage.com/article/digital/mobile-revolution-monetized/312686/"},{date:"2017-10-02",title:"The Safe Way to Build a Smart City",publication:"CityLab",url:"https://www.citylab.com/solutions/2017/10/municipal-open-data-smart-city-guidelines-seattle-lessons/541578/"},{date:"2017-09-26",title:"Who Gets To Be Perfect?",publication:"HowWeGetToNext",url:"https://howwegettonext.com/who-gets-to-be-perfect-3efba410fd63"},{date:"2017-07-26",title:"How Witchcraft Became A Brand",publication:"BuzzFeed",url:"https://www.buzzfeed.com/corinfaife/how-witchcraft-became-a-brand"},{date:"2017-07-13",title:"A New Browser Is Making Peer-to-Peer Web Hosting More User-Friendly",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/bjxy9d/a-new-browser-is-making-peer-to-peer-web-hosting-more-user-friendly"},{date:"2017-06-01",title:"How 4Chan's Structure Creates a 'Survival of the Fittest' for Memes",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/ywzm8m/how-4chans-structure-creates-a-survival-of-the-fittest-for-memes"},{date:"2017-05-31",title:"The Creator of JavaScript Just Launched a Cryptocurrency to Improve Online Ads",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/a3zw3p/the-creator-of-javascript-just-launched-a-cryptocurrency-for-online-ads"},{date:"2017-05-23",title:"Why Elon Musk’s Tunnel System Can’t Solve Congestion in LA",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/43g8yn/why-elon-musks-tunnel-system-cant-solve-congestion-in-la"},{date:"2017-05-02",title:"Advertisers Are Racing to Understand the Meaning Behind Your Social Media Posts",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/ypyajx/advertisers-are-racing-to-understand-the-meaning-behind-your-social-media-posts"},{date:"2017-03-31",title:"Orlando Wants to Conquer The Public's Fear of Self-Driving Cars",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/9a78p8/self-driving-cars-fear-orlando"},{date:"2017-03-10",title:"The Hidden Systems at Work Behind Gentrification",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/pgw3pv/the-hidden-systems-at-work-behind-gentrification"},{date:"2017-03-01",title:"How Self-Driving Cars Could Protect Minority Drivers",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/8qb98z/how-self-driving-cars-could-protect-minority-drivers"},{date:"2017-01-27",title:"Meme Collectors Are Using the Blockchain to Keep Rare Pepes Rare",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/aejvdb/collectors-are-using-the-blockchain-to-keep-rare-pepes-rare"},{date:"2017-01-19",title:"Drivers Use Tesla Autopilot at Their Own Risk, Investigators Conclude",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/xyg3m3/drivers-use-tesla-autopilot-at-their-own-risk-investigators-conclude"},{date:"2017-01-13",title:"The Web Divided",publication:"HowWeGetToNext",url:"https://howwegettonext.com/heterotextual-relationships-cdcea7b7181e"},{date:"2017-01-13",title:"Google Squashed a Chrome Extension that Flooded Ad Networks With Disinformation",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/nz7m7m/google-squashed-a-chrome-extension-that-flooded-ad-networks-with-disinformation"},{date:"2017-01-10",title:"The Mine of the Future Is Run by Drones",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/yp34pj/the-mine-of-the-future-is-run-by-drones"},{date:"2016-12-14",title:"The DDoS vigilantes trying to silence Black Lives Matter",publication:"Ars Technica",url:"https://arstechnica.com/information-technology/2016/12/hack_attacks_on_black_lives_matter/"},{date:"2016-12-11",title:"Why Bitcoin’s Remittance Disruption Slowed to a Crawl",publication:"CoinDesk",url:"https://www.coindesk.com/why-bitcoins-remittance-disruption-slowed-to-a-crawl"},{date:"2016-12-09",title:"You Should Be Able to Use Tesla's Self-Driving Mode to Make Money",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/4xapnd/tesla-self-driving-vehicle-drm"},{date:"2016-11-19",title:"How South Africa’s ‘Shark Tank’ Saw its First Bitcoin Investment",publication:"CoinDesk",url:"https://www.coindesk.com/south-africas-shark-tank-saw-first-bitcoin-investment"},{date:"2016-10-30",title:"Making Sense of Hillary Clinton’s Bitcoin Rejection",publication:"CoinDesk",url:"https://www.coindesk.com/making-sense-hillary-clintons-bitcoin-rejection"},{date:"2016-10-08",title:"Live Free or Mine: How Libertarians Fell in Love With Bitcoin",publication:"CoinDesk",url:"https://www.coindesk.com/live-free-or-mine-how-libertarians-fell-in-love-with-bitcoin"},{date:"2016-08-29",title:"How Banks Make It Difficult for Trans Customers",publication:"VICE Canada",url:"https://www.vice.com/en_ca/article/yvepwg/how-banks-make-it-difficult-for-trans-customers"},{date:"2016-08-18",title:"Steemit Is Like Reddit, But Where Upvotes Equal a Cryptocurrency Payout",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/jpgv3p/steemit-is-like-reddit-but-where-upvotes-equal-a-cryptocurrency-payout"},{date:"2016-07-22",title:"Toronto’s Sports Teams Are Hyperreal",publication:"HowWeGetToNext",url:"https://howwegettonext.com/torontos-sports-teams-are-hyperreal-f5a38ec56385"},{date:"2016-06-25",title:"Go on a ‘ Trip’ and Cure Your Depression",publication:"HowWeGetToNext",url:"https://howwegettonext.com/go-on-a-trip-and-cure-your-depression-372af5df77a2"},{date:"2016-05-31",title:"Why Arson Is So Common in Middlesbrough",publication:"VICE UK",url:"https://www.vice.com/en_uk/article/yvjed7/cleveland-arson-high-rate-crimes-across-the-uk"},{date:"2016-05-19",title:"No one can stop teenagers from watching porn – not even David Cameron",publication:"The Independent",url:"https://www.independent.co.uk/voices/despite-the-tory-government-s-best-efforts-to-ban-porn-in-the-queen-s-speech-you-can-t-stop-a7037321.html"},{date:"2016-04-12",title:"The Rebirth of the City-State",publication:"HowWeGetToNext",url:"https://howwegettonext.com/the-rebirth-of-the-city-state-1d005f7c4eb7"},{date:"2016-03-30",title:"Crimes Across the UK: Why Burglary Is So Common in Leeds",publication:"VICE UK",url:"https://www.vice.com/en_uk/article/3bwjdn/leeds-why-high-rate-burglary-crime"},{date:"2016-03-29",title:"Iran’s ‘National Internet’ Offers Connectivity at the Cost of Censorship",publication:"Motherboard",url:"https://motherboard.vice.com/en_us/article/yp3pxg/irans-national-internet-offers-connectivity-at-the-cost-of-censorship"},{date:"2016-03-20",title:"What Polyamory Taught Me About Love",publication:"Refinery29",url:"https://www.refinery29.com/en-gb/problem-polyamory-rules-lessons"},{date:"2016-02-04",title:"How Full-Time Airbnb Landlords Are Making the Housing Crisis Even Worse",publication:"VICE UK",url:"https://www.vice.com/en_uk/article/zng743/airbnb-london-rentals-housing-deregulation-act"},{date:"2015-01-23",title:"A New Form of ID Allows You to Be a Citizen of the World",publication:"VICE UK",url:"https://www.vice.com/en_uk/article/nnqxed/blockhains-first-citizen-328"},{date:"2014-08-13",title:"Teenage Thieves, Fence Hoppers and Smuggled Drugs: On Patrol with Security at Boomtown Festival",publication:"VICE UK",url:"https://www.vice.com/en_uk/article/pp4yxk/shadowing-boomtown-security-279"},{date:"2014-05-07",title:"Kenyan sex workers using HIV drugs instead of condoms",publication:"The Guardian",url:"http://www.theguardian.com/global-development/poverty-matters/2014/may/07/kenya-sex-workers-hiv-aids-drugs-condoms"},{date:"2014-05-06",title:"Care in Kenya: Behind the scenes",publication:"New Internationalist",url:"https://newint.org/blog/2014/05/06/kenya-careleavers"}]}}},["NHnr"]);
//# sourceMappingURL=app.c9d51bbc906dc554105d.js.map