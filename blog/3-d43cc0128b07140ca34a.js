(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(80),l=a.n(i);a.d(t,"a",function(){return l.a});a(215),a(11).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},212:function(e,t){e.exports={siteUrl:"https://blog.kushalbhalaik.xyz",postsPerPage:5,siteTitleMeta:"Blog - kushalbhalaik.xyz",siteDescriptionMeta:"kushal bhalaik's blog",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Blog - kushalbhalaik.xyz",siteIcon:"favicon.png",backgroundColor:"#fcfcfc",themeColor:"#15171A"}},214:function(e,t,a){"use strict";a(21);var n=a(220),r=a(0),i=a.n(r),l=a(213),o=a.n(l),c=a(211),s=a(216),g=a.n(s),m=a(222),d=a.n(m),u=(a(212),a(203),function(e){var t=e.data,a=e.children,n=e.bodyClass,r=(e.isHome,t.allGhostSettings.edges[0].node);return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("html",{lang:r.lang}),i.a.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:g.a}),i.a.createElement("style",{type:"text/css"},""+r.codeinjection_styles),i.a.createElement("script",{"data-ad-client":"ca-pub-1533259080190708",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),i.a.createElement("body",{className:n})),i.a.createElement("div",{className:"viewport"},i.a.createElement("div",{className:"viewport-top"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},i.a.createElement("a",{class:"navbar-brand",href:"/"},i.a.createElement("img",{class:"navbar-logo logo",src:d.a})),i.a.createElement("button",{className:"navbar-toggler collapsed position-relative",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",null," "),i.a.createElement("span",null," "),i.a.createElement("span",null," ")),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item header active-nav-item"},i.a.createElement("a",{className:"nav-link",href:"/"}," ","Blog"," ")),i.a.createElement("li",{className:"nav-item header"},i.a.createElement("a",{className:"nav-link",href:"https://downtok.in/pages/leaderboard.html"}," ","Leaderboard"," "))))),i.a.createElement("main",{className:"site-main"},a)),i.a.createElement("div",{className:"viewport-bottom"},i.a.createElement("footer",{className:"footer mt-auto text-center p-3"},i.a.createElement("span",{className:"text-muted"},"© 2019-20 Downtok.in")))))}),p=function(e){return i.a.createElement(c.b,{query:"275539649",render:function(t){return i.a.createElement(u,Object.assign({data:t},e))},data:n})},A=a(226),h=a(217),b=function(e){var t=e.post,a="/"+t.slug+"/",n=Object(h.readingTime)(t);return i.a.createElement("div",{className:"row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative"},i.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},i.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},t.tags&&i.a.createElement("div",{className:"post-card-tags"},i.a.createElement(A.Tags,{post:t,visibility:"public",autolink:!1}))),i.a.createElement("h3",{className:"mb-1"},t.title),i.a.createElement("div",{className:"post-card-footer-right"},i.a.createElement("div",{className:"mb-2 text-muted"},n)),i.a.createElement("div",{className:"mb-1 text-muted"}),i.a.createElement("p",{className:"card-text mb-auto"},t.excerpt,"..."),i.a.createElement("a",{href:a,className:"stretched-link"},"Read"),t.featured&&i.a.createElement("span",null,"Featured")),i.a.createElement("div",{className:"col-auto d-none d-lg-block p-4"},t.feature_image&&i.a.createElement("img",{className:"bd-placeholder-img",width:"200",height:"250",src:t.feature_image,alt:"Bootstrap Icons - Overview"})))},E=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath,r=t.humanPageNumber,l=t.numberOfPages;return i.a.createElement("nav",{className:"pagination",role:"navigation"},i.a.createElement("div",null,a&&i.a.createElement(c.a,{to:a,rel:"prev"},"Previous")),l>1&&i.a.createElement("div",{className:"pagination-location"},"Page ",r," of ",l),i.a.createElement("div",null,n&&i.a.createElement(c.a,{to:n,rel:"next"},"Next")))},f=(a(50),function(e){var t=e.data,a=e.navClass;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){return e.url.match(/^\s?http(s?)/gi)?i.a.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):i.a.createElement(c.a,{className:a,to:e.url,key:t},e.label)}))});f.defaultProps={navClass:"site-nav-item"};a.d(t,"a",function(){return p}),a.d(t,"c",function(){return b}),a.d(t,"b",function(){return E})},215:function(e,t,a){var n;e.exports=(n=a(221))&&n.default||n},216:function(e,t,a){e.exports=a.p+"static/favicon-4f545741e1d5325b84f3bcbfe58738c6.ico"},219:function(e,t,a){"use strict";a(21);var n=a(239),r=a(0),i=a.n(r),l=a(211),o=a(223),c=a.n(o),s=a(212),g=a.n(s),m=(a(12),a(20),a(245)),d=a(213),u=a.n(d),p=a(218),A=a.n(p),h=a(62),b=a.n(h),E=function(e){var t=[];return t.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+e.twitter.replace(/^@/,"")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null),t=A.a.compact(t),{name:e.name||null,sameAsArray:t.length?'["'+A.a.join(t,'", "')+'"]':null,image:e.profile_image||null,facebookUrl:e.facebook?"https://www.facebook.com/"+e.facebook.replace(/^\//,"")+"/":null}};E.defaultProps={fetchAuthorData:!1},E.PropTypes={primaryAuthor:b.a.shape({name:b.a.string.isRequired,profile_image:b.a.string,website:b.a.string,twitter:b.a.string,facebook:b.a.string}).isRequired};var f=E,w=function(e){var t=e.image;return t?i.a.createElement(u.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:g.a.shareImageWidth}),i.a.createElement("meta",{property:"og:image:height",content:g.a.shareImageHeight})):null},v=a(217),y=function(e){var t=e.data,a=e.settings,n=e.canonical,r=t;a=a.allGhostSettings.edges[0].node;var l=f(r.primary_author),o=A.a.map(Object(v.tags)(r,{visibility:"public",fn:function(e){return e}}),"name"),s=o[0]||"",m=r.feature_image?r.feature_image:A.a.get(a,"cover_image",null),d=a.logo||g.a.siteIcon?c.a.resolve(g.a.siteUrl,a.logo||g.a.siteIcon):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||r.excerpt}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.og_title||r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.og_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{property:"article:published_time",content:r.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:r.updated_at}),o.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),l.facebookUrl&&i.a.createElement("meta",{property:"article:author",content:l.facebookUrl}),i.a.createElement("meta",{name:"twitter:title",content:r.twitter_title||r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.twitter_description||r.excerpt||r.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:n}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:l.name}),s&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),s&&i.a.createElement("meta",{name:"twitter:data2",content:s}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+l.name+'",\n                            '+(l.image?l.sameAsArray?'"image": "'+l.image+'",':'"image": "'+l.image+'"':"")+"\n                            "+(l.sameAsArray?'"sameAs": '+l.sameAsArray:"")+"\n                        },\n                        "+(o.length?'"keywords": "'+A.a.join(o,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+n+'",\n                        "datePublished": "'+r.published_at+'",\n                        "dateModified": "'+r.updated_at+'",\n                        '+(m?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+m+'",\n                                "width": "'+g.a.shareImageWidth+'",\n                                "height": "'+g.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+d+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "description": "'+(r.meta_description||r.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+g.a.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(w,{image:m}))},V=function(e){return i.a.createElement(l.b,{query:"1004981455",render:function(t){return i.a.createElement(y,Object.assign({settings:t},e))},data:m})},W=a(258),x=function(e){var t=e.data,a=e.settings,n=e.canonical,r=e.title,l=e.description,o=e.image,s=e.type;a=a.allGhostSettings.edges[0].node;var m=c.a.resolve(g.a.siteUrl,a.logo||g.a.siteIcon),d=o||t.feature_image||A.a.get(a,"cover_image",null);return d=d?c.a.resolve(g.a.siteUrl,d):null,l=l||t.meta_description||t.description||g.a.siteDescriptionMeta||a.description,r=""+(r||t.meta_title||t.name||t.title),i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:r}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:r}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "'+s+'",\n                        "url": "'+n+'",\n                        '+(d?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+d+'",\n                                "width": "'+g.a.shareImageWidth+'",\n                                "height": "'+g.a.shareImageHeight+'"\n                            },':"")+'\n                        "publisher": {\n                            "@type": "Organization",\n                            "name": "'+a.title+'",\n                            "logo": {\n                                "@type": "ImageObject",\n                                "url": "'+m+'",\n                                "width": 60,\n                                "height": 60\n                            }\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+g.a.siteUrl+'"\n                        },\n                        "description": "'+l+'"\n                    }\n                ')),i.a.createElement(w,{image:d}))},G=function(e){return i.a.createElement(l.b,{query:"3093436507",render:function(t){return i.a.createElement(x,Object.assign({settings:t},e))},data:W})},U=a(259),F=function(e){var t=e.data,a=e.settings,n=e.canonical;a=a.allGhostSettings.edges[0].node;var r=f(t),l=r.image||A.a.get(a,"cover_image",null),o=t.name+" - "+a.title,c=t.bio||g.a.siteDescriptionMeta||a.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,o),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{property:"og:site_name",content:a.title}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:o}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{name:"twitter:title",content:o}),i.a.createElement("meta",{name:"twitter:description",content:c}),i.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Person",\n                        "name": "'+t.name+'",\n                        '+(r.sameAsArray?'"sameAs": '+r.sameAsArray+",":"")+'\n                        "url": "'+n+'",\n                        '+(l?'"image": {\n                                "@type": "ImageObject",\n                                "url": "'+l+'",\n                                "width": "'+g.a.shareImageWidth+'",\n                                "height": "'+g.a.shareImageHeight+'"\n                            },':"")+'\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+g.a.siteUrl+'"\n                        },\n                        "description": "'+c+'"\n                    }\n                ')),i.a.createElement(w,{image:l}))},L=function(e){return i.a.createElement(l.b,{query:"4112685740",render:function(t){return i.a.createElement(F,Object.assign({settings:t},e))},data:U})},j=function(e){var t=e.data,a=e.settings,n=e.title,r=e.description,l=e.image,o=e.location,s=c.a.resolve(g.a.siteUrl,o.pathname),m=t.ghostPost,d=t.ghostTag,u=t.ghostAuthor,p=t.ghostPage;return a=a.allGhostSettings.edges[0].node,m?i.a.createElement(V,{data:m,canonical:s}):d?i.a.createElement(G,{data:d,canonical:s,type:"Series"}):u?i.a.createElement(L,{data:u,canonical:s}):p?i.a.createElement(G,{data:p,canonical:s,type:"WebSite"}):(n=n||g.a.siteTitleMeta||a.title,r=r||g.a.siteDescriptionMeta||a.description,l=(l=l||a.cover_image||null)?c.a.resolve(g.a.siteUrl,l):null,i.a.createElement(G,{data:{},canonical:s,title:n,description:r,image:l,type:"WebSite"}))};j.defaultProps={data:{}};var q=function(e){return i.a.createElement(l.b,{query:"2233248733",render:function(t){return i.a.createElement(j,Object.assign({settings:t},e))},data:n})};a.d(t,"a",function(){return q})},220:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"blog.kushalbhalaik.xyz",description:"Thoughts, stories and ideas.",logo:null,icon:null,cover_image:"https://static.ghost.org/v3.0.0/images/publication-cover.png",facebook:"ghost",twitter:"@tryghost",lang:"en",timezone:"Etc/UTC",codeinjection_head:"\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-42093653-2\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-42093653-2');\n<\/script>\n",codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://ghost.org/docs/"}]}}]},file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAARlAAAEZQAGA43XUAAACtElEQVQ4y8WUX0hTcRTHz71XkXzrJcKSegjNTZ0WUqSRE1Pnpl420915pwtnQyGtjMqSoqCgB6GHiqAgCN/qpRB6iajV/mBoiSX9eeipF7X9UTe33d3f6d6froKYziD6weV3OOf8PnzPPb/fAfjnKxb6ZSdCwM3Og67ODbt7xqmr2OrdAGx5FRYNAkSCLOACl399mtU2v+I0go9VQ4UWz0ahwbQhTZuX09l81Na2e6FY8GasMAuWgvtBDt/Y/PRrX4nBfbvI7q9SQ0VHPKwCY1bK94Om9eWa6rjVvQ5QQkCC+SMzWGZ+hxqrV1JArlRqveURzc2qdYPb3pe2ISmgmQLlcGznyGfUtbyWtIKPlIpTWNzueXDhxNgmNS3b9JZZ7/+lgC2ACQQSlvLufXxRznuSus4J1Fk9cZ39PW7jfTOaxsdlaipT/4a5K15Mp3AVGAspwLgCjCplLx+u2vvs4B7Ru1AoTmOBxR291nETp0T7EzW1ib/DLHY2rwOkClVgBHMCs23UN4hbem33P03YuxCdNYii4aHqRlcJgwKfGZBLRhSFiUZ6sNM0hGJtBDsaJLRZMWkWxuiFEHhG5jsyASZUGGq/zLhQbxxF0YGS2UqSvI1gqxOJyXFFTSXNdpYYj67dZTYaaFG7XD0+mfgmDEbQ0IPJxu4YGl1IGpwSMXQfo6qrrSAbnGu+4xWFuGzJW1rAOdNwHCv6MVFzSsbaM0j0/R+I/jjtLjZ0g1xPuUCautJeG/peuUigEuLh6Pb5efQ7bo1j+TlJqjw/Sg4M5VBAnStLNjnoETltuT8nTJhuuaG5rUpjBgCxAKF3VypMqgdoFVh6WQVnNh+yF7//4cMduUAqz9KXQapOAx46mfksZJXxpXyMopYzPp8ELBhiAvqrKworLgHZN/yXQ1bdf7f/x/oBXJ9sJ3p8D8oAAAAASUVORK5CYII=",width:30,height:30,src:"/static/10e2268ceec42421f5741d6825ebb096/5d6f9/ghost-icon.png",srcSet:"/static/10e2268ceec42421f5741d6825ebb096/5d6f9/ghost-icon.png 1x,\n/static/10e2268ceec42421f5741d6825ebb096/bbdf9/ghost-icon.png 1.5x,\n/static/10e2268ceec42421f5741d6825ebb096/43244/ghost-icon.png 2x"}}}}}},221:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),i=a(114);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},222:function(e,t){e.exports="data:image/png;base64,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"},239:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"blog.kushalbhalaik.xyz",description:"Thoughts, stories and ideas."}}]}}}},245:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"blog.kushalbhalaik.xyz",description:"Thoughts, stories and ideas.",logo:null,icon:null,cover_image:"https://static.ghost.org/v3.0.0/images/publication-cover.png",facebook:"ghost",twitter:"@tryghost",lang:"en",timezone:"Etc/UTC",codeinjection_head:"\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-42093653-2\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-42093653-2');\n<\/script>\n",codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://ghost.org/docs/"}]}}]}}}},258:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"blog.kushalbhalaik.xyz",description:"Thoughts, stories and ideas.",logo:null,icon:null,cover_image:"https://static.ghost.org/v3.0.0/images/publication-cover.png",facebook:"ghost",twitter:"@tryghost",lang:"en",timezone:"Etc/UTC",codeinjection_head:"\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-42093653-2\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-42093653-2');\n<\/script>\n",codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://ghost.org/docs/"}]}}]}}}},259:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"blog.kushalbhalaik.xyz",description:"Thoughts, stories and ideas.",logo:null,icon:null,cover_image:"https://static.ghost.org/v3.0.0/images/publication-cover.png",facebook:"ghost",twitter:"@tryghost",lang:"en",timezone:"Etc/UTC",codeinjection_head:"\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-42093653-2\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-42093653-2');\n<\/script>\n",codeinjection_foot:null,codeinjection_styles:"",navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://ghost.org/docs/"}]}}]}}}}}]);
//# sourceMappingURL=3-d43cc0128b07140ca34a.js.map