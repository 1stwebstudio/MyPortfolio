(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"52u9":function(e,n,t){"use strict";var i,a,o,r,l,c,m,d,s,p,u,h,b,g,f,w=t("MUpH"),x=t("dI71"),E=t("q1tI"),v=t.n(E),I=t("JI6e"),y=t("7vrA"),_=t("3Z9Z"),k=t("Wbzz"),H=t("vOnD"),C=t("T58H"),O=t.n(C),j=function(e){function n(n){var t;return(t=e.call(this,n)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(x.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var e=H.b.section.withConfig({displayName:"Hero__Section",componentId:"sc-1e5bw89-0"})(i||(i=Object(w.a)(["\n            position: relative;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n            background-image: url(",");\n            background-size: cover;\n            background-repeat: no-repeat;\n        "])),this.props.background.childImageSharp.fluid.src),n=H.b.div.withConfig({displayName:"Hero__Overlay",componentId:"sc-1e5bw89-1"})(a||(a=Object(w.a)(["\n            width: 100%;\n            display: flex;\n            align-items: center;\n            background-color: rgba(0,0,0,.5);\n        "]))),t=H.b.h1.withConfig({displayName:"Hero__Heading1",componentId:"sc-1e5bw89-2"})(o||(o=Object(w.a)(["\n            font-size: 80px;\n            font-family: Teko;\n            line-height: 40px;\n            color: #fff;\n            font-weight: 400;\n            text-transform: uppercase;\n            @media (min-width:768px) {\n                margin-left: 4px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 40px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n        "]))),x=H.b.h2.withConfig({displayName:"Hero__Heading2",componentId:"sc-1e5bw89-3"})(r||(r=Object(w.a)(["\n            font-size: 120px;\n            color: #fff;\n            font-weight: 700;\n            text-transform: uppercase;\n            background: -webkit-linear-gradient(left, #00ffff , #007a7a);\n            background: -o-linear-gradient(right, #00ffff, #007a7a);\n            background: -moz-linear-gradient(right, #00ffff, #007a7a);\n            background: linear-gradient(to right, #00ffff , #007a7a); \n           -webkit-background-clip: text;\n           -webkit-text-fill-color: transparent;\n            @media (max-width:767px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n           @media (min-width:768px) and (max-width:1500px) {\n                font-size: 70px;\n            }\n        "]))),E=H.b.div.withConfig({displayName:"Hero__Type",componentId:"sc-1e5bw89-4"})(l||(l=Object(w.a)(["\n            font-size: 50px;\n            line-height: 50px;\n            color: #fff;\n            text-transform: uppercase;\n            @media (min-width:768px) {\n                margin-left: 6px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 23px;\n                line-height: 20px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n            span {\n                font-family: Teko;\n            }\n        "]))),k=H.b.div.withConfig({displayName:"Hero__Content",componentId:"sc-1e5bw89-5"})(c||(c=Object(w.a)(["\n            position: relative;\n            z-index: 10\n        "]))),C=H.b.div.withConfig({displayName:"Hero__Separator",componentId:"sc-1e5bw89-6"})(m||(m=Object(w.a)(["\n            height: 5px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 30px;\n            @media (min-width:768px) {\n                margin-left: 6px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n        "]))),j=H.b.div.withConfig({displayName:"Hero__BottomContent",componentId:"sc-1e5bw89-7"})(d||(d=Object(w.a)(["\n            position: absolute;\n            width: 100%;\n            bottom: -14%;\n            z-index: 2;\n            @media (min-width:1025px) and (max-width: 1400px) {    \n                bottom: -35%;\n            }\n            @media (max-width:767px) {\n                position: relative;\n                bottom: 0;\n            } \n            @media (min-width:768px) and (max-width: 1023px) {    \n                bottom: -25%;\n            }\n        "]))),z=Object(H.b)(I.a).withConfig({displayName:"Hero__ServiceCol",componentId:"sc-1e5bw89-8"})(s||(s=Object(w.a)(["\n            padding: 0;\n            border-right: #444;\n            &.no-border {\n                border-right: none;\n            }\n            @media (max-width:500px) {\n                border-right:none;\n            }\n        "]))),S=H.b.div.withConfig({displayName:"Hero__Service",componentId:"sc-1e5bw89-9"})(p||(p=Object(w.a)(["\n            min-height: 300px;\n            background-color: #111;\n            transition: .2s;\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n            &:hover {\n                background-color: #222;\n            }\n        "]))),N=H.b.div.withConfig({displayName:"Hero__ServiceContent",componentId:"sc-1e5bw89-10"})(u||(u=Object(w.a)(["\n            padding: 40px;\n            color: #fff;\n        "]))),D=H.b.h4.withConfig({displayName:"Hero__ServiceHeading",componentId:"sc-1e5bw89-11"})(h||(h=Object(w.a)(["\n            font-size: 30px;\n            font-weight: 400;\n            font-family: Teko;\n        "]))),T=H.b.div.withConfig({displayName:"Hero__ServiceSeparator",componentId:"sc-1e5bw89-12"})(b||(b=Object(w.a)(["\n            height: 5px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 10px;\n        "]))),W=H.b.div.withConfig({displayName:"Hero__ServiceIcon",componentId:"sc-1e5bw89-13"})(g||(g=Object(w.a)(["\n            margin-bottom: 20px;\n            img {\n                max-height: 70px;\n            }\n        "]))),q=H.b.p.withConfig({displayName:"Hero__ServiceText",componentId:"sc-1e5bw89-14"})(f||(f=Object(w.a)(["\n            font-size: 14px;\n            font-weight: 300;\n            color: #c5c5c5;\n        "])));return v.a.createElement(e,{id:"home"},v.a.createElement(n,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},v.a.createElement(y.a,null,v.a.createElement(k,null,v.a.createElement(t,null,"Creative"),v.a.createElement(x,null,"Digital Agency"),v.a.createElement(C,null),v.a.createElement(E,null,v.a.createElement(O.a,{options:{strings:["App Developers","Web Designers","UX Designers"],autoStart:!0,loop:!0}}))))),v.a.createElement(j,null,v.a.createElement(y.a,null,v.a.createElement(_.a,null,v.a.createElement(z,{md:4,style:{borderRight:this.state.width>500?"1px solid #444":"none"}},v.a.createElement(S,null,v.a.createElement(N,null,v.a.createElement(W,null,v.a.createElement("img",{src:this.props.webexpertIcon.childImageSharp.fluid.src,alt:"web experts"})),v.a.createElement(D,null,"Web Experts"),v.a.createElement(T,null),v.a.createElement(q,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum.")))),v.a.createElement(z,{md:4,style:{borderRight:this.state.width>500?"1px solid #444":"none"}},v.a.createElement(S,null,v.a.createElement(N,null,v.a.createElement(W,null,v.a.createElement("img",{src:this.props.mobileIcon.childImageSharp.fluid.src,alt:"mobile experts"})),v.a.createElement(D,null,"Mobile Experts"),v.a.createElement(T,null),v.a.createElement(q,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum.")))),v.a.createElement(z,{md:4},v.a.createElement(S,null,v.a.createElement(N,null,v.a.createElement(W,null,v.a.createElement("img",{src:this.props.seoIcon.childImageSharp.fluid.src,alt:"seo experts"})),v.a.createElement(D,null,"SEO Experts"),v.a.createElement(T,null),v.a.createElement(q,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum."))))))))},n}(v.a.Component);n.a=function(e){return v.a.createElement(k.a,{query:"1841624728",render:function(n){var t=n.background,i=n.webexpertIcon,a=n.mobileIcon,o=n.seoIcon;return v.a.createElement(j,Object.assign({background:t,webexpertIcon:i,mobileIcon:a,seoIcon:o},e))}})}},RXBc:function(e,n,t){"use strict";t.r(n);var i=t("dI71"),a=t("q1tI"),o=t.n(a),r=t("I/Ru"),l=t("TJpk"),c=t.n(l),m=t("52u9"),d=t("ib1x"),s=t("4TlK"),p=t("c/NE"),u=t("fCgY"),h=t("YYeU"),b=t("D29n"),g=t("mGfl"),f=function(e){function n(){return e.apply(this,arguments)||this}return Object(i.a)(n,e),n.prototype.render=function(){var e=this.props.data.site;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,e.meta.title),o.a.createElement("meta",{name:"description",content:e.meta.description})),o.a.createElement(r.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","team","clients","contact"]},o.a.createElement(m.a,null),o.a.createElement(d.a,null),o.a.createElement(s.a,null),o.a.createElement(p.a,null),o.a.createElement(u.a,null),o.a.createElement(h.a,null),o.a.createElement(b.a,null),o.a.createElement(g.a,null)))},n}(o.a.Component);n.default=f}}]);
//# sourceMappingURL=component---src-pages-index-js-c319c8e8827c59e6aaca.js.map