(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{OqMM:function(e,n,t){"use strict";t.r(n);var a,i,o,r,s,l,c,p,m,d,h,u=t("dI71"),f=t("q1tI"),g=t.n(f),b=t("TJpk"),w=t.n(b),x=t("I/Ru"),v=t("MUpH"),E=t("Wbzz"),k=t("vOnD"),y=t("T58H"),O=t.n(y),H=t("aQOR"),j=function(e){function n(n){var t;return(t=e.call(this,n)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(u.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions),window.pageYOffset<window.innerHeight&&document.body.addEventListener("mousemove",(function(e){var n,t=-.05*e.clientX/8,a=-.05*e.clientY/8,i=document.getElementsByClassName("parallax-hero-item");for(n=0;n<i.length;n++)i[n].style.transform="translate("+t+"px, "+a+"px)"}))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var e=k.b.section.withConfig({displayName:"HeroPersonal__Section",componentId:"wka24b-0"})(a||(a=Object(v.a)(["\n            position: relative;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n            background-image: url(",");\n            background-size: cover;\n            background-repeat: no-repeat;\n        "])),this.props.background.childImageSharp.fluid.src),n=k.b.div.withConfig({displayName:"HeroPersonal__Overlay",componentId:"wka24b-1"})(i||(i=Object(v.a)(["\n            width: 100%;\n            display: flex;\n            align-items: center;\n            background-color: rgba(0,0,0,.7);\n        "]))),t=k.b.div.withConfig({displayName:"HeroPersonal__Heading",componentId:"wka24b-2"})(o||(o=Object(v.a)(["\n            .glitch {\n                font-size: 140px;\n                line-height: 140px;\n                font-weight: 600;\n                color: #fff;\n                @media (max-width: 767px) {\n                    font-size: 40px;\n                    line-height: 50px;\n                }\n            }\n        "]))),m=k.b.h2.withConfig({displayName:"HeroPersonal__SubHeading",componentId:"wka24b-3"})(r||(r=Object(v.a)(["\n            font-size: 18px;\n            font-weight: 300;\n            color: #ccc;\n            text-transform: uppercase;\n            letter-spacing: 4px;\n        "]))),d=k.b.div.withConfig({displayName:"HeroPersonal__Type",componentId:"wka24b-4"})(s||(s=Object(v.a)(["\n            font-size: 50px;\n            line-height: 50px;\n            color: #fff;\n            text-transform: uppercase;\n            margin-left: 6px;\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 23px;\n                line-height: 20px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n            span {\n                font-family: Teko;\n            }\n        "]))),h=Object(k.c)(l||(l=Object(v.a)(["\n            0% {\n              background-position: 15% 0%;\n            }\n            50% {\n              background-position: 85% 100%;\n            }\n            100% {\n              background-position: 15% 0%;\n            }\n          "]))),u=k.b.div.withConfig({displayName:"HeroPersonal__HeadingBox",componentId:"wka24b-5"})(c||(c=Object(v.a)(["\n            height: 500px;\n            width: 900px;\n            margin: auto;\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            position: relative;\n            &:after {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                border-radius: 5px;\n                background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n                background-size: 300% 300%;\n                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);\n            }\n            &.animate:after {\n                animation: "," 2s ease-in-out infinite;\n            }\n            @media (max-width: 767px) {\n                height: 350px;\n            }\n        "])),h),f=k.b.a.withConfig({displayName:"HeroPersonal__Resume",componentId:"wka24b-6"})(p||(p=Object(v.a)(["\n            color: #fff;\n            text-decoration: none;\n            border-bottom: 2px solid;\n            font-weight: 300;\n            transition: .5s;\n            margin-top: 40px;\n            &:hover {\n                color: #fff;\n                text-decoration: none;\n                border-color: #04e5e5;\n            }\n        "])));return g.a.createElement(e,{id:"home"},g.a.createElement(n,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},g.a.createElement(u,{className:"parallax-hero-item animate"},g.a.createElement(m,{className:"parallax-hero-item"},"Hello, I'm"),g.a.createElement(t,{className:"parallax-hero-item"},g.a.createElement(H.a,{text:"John Doe"})),g.a.createElement(d,{className:"parallax-hero-item"},g.a.createElement(O.a,{options:{strings:["App Developer","Web Designer","UX Developer"],autoStart:!0,loop:!0}})),g.a.createElement(f,{href:"./"},"Download Resume")),this.shapes()))},t.shapes=function(){var e=Object(k.c)(m||(m=Object(v.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-40px);\n            }\n        "]))),n=Object(k.c)(d||(d=Object(v.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        "]))),t=k.b.img.withConfig({displayName:"HeroPersonal__Shape",componentId:"wka24b-7"})(h||(h=Object(v.a)(["\n            position: absolute;\n            height: 50px;\n            &.move-up {\n                animation: "," 3s infinite alternate;\n            }\n            &.move-down {\n                animation: "," 3s infinite alternate;\n            }\n            @media (max-width: 767px) {\n                height: 20px;\n            }\n        "])),e,n);return this.props.shapes.map((function(e,n){return g.a.createElement(t,{style:{left:10*(n+1)+"%",bottom:Math.random()*(+((n+1)%2==0?10:90)-+((n+1)%2==0?5:80))+ +((n+1)%2==0?5:80)+"%"},key:n,src:e.node.childImageSharp.fluid.src,alt:"shape",className:Math.floor(10*Math.random())%2==0?"move-up":"move-down"})}))},n}(g.a.Component),_=function(e){return g.a.createElement(E.a,{query:"3914203281",render:function(n){var t=n.background,a=n.shapes;return g.a.createElement(j,Object.assign({background:t,shapes:a.edges},e))}})},N=t("cJaV"),I=t("PgA9"),z=t("Codp"),C=t("3Aop"),D=t("Nq0h"),P=t("YVUD"),S=function(e){function n(){return e.apply(this,arguments)||this}return Object(u.a)(n,e),n.prototype.render=function(){var e=this.props.data.site;return g.a.createElement("div",null,g.a.createElement(w.a,null,g.a.createElement("title",null,e.meta.title),g.a.createElement("meta",{name:"description",content:e.meta.description})),g.a.createElement(x.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","clients","contact"]},g.a.createElement(_,null),g.a.createElement(N.a,null),g.a.createElement(I.a,null),g.a.createElement(z.a,null),g.a.createElement(C.a,null),g.a.createElement(D.a,null),g.a.createElement(P.a,null)))},n}(g.a.Component);n.default=S}}]);
//# sourceMappingURL=component---src-pages-personal-index-js-059474c7788237631860.js.map