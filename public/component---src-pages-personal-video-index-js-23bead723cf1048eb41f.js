(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{KZxz:function(e,n,t){"use strict";t.r(n);var a,i,o,r,s,l,p,c,d,m,h,u=t("dI71"),f=t("q1tI"),x=t.n(f),g=t("TJpk"),b=t.n(g),w=t("I/Ru"),v=t("MUpH"),E=t("Wbzz"),y=t("vOnD"),j=t("T58H"),O=t.n(j),H=t("P4Lp"),_=t.n(H),N=t("aQOR"),z=function(e){function n(n){var t;return(t=e.call(this,n)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(u.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions),document.body.addEventListener("mousemove",(function(e){var n,t=-.1*e.clientX/8,a=-.1*e.clientY/8,i=document.getElementsByClassName("parallax-hero-item");for(n=0;n<i.length;n++)i[n].style.transform="translate("+t+"px,"+a+"px)"}))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var e=y.b.section.withConfig({displayName:"HeroPersonalVideo__Section",componentId:"ej280d-0"})(a||(a=Object(v.a)(["\n            position: relative;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n\n            background-size: cover;\n            background-repeat: no-repeat;\n        "]))),n=y.b.div.withConfig({displayName:"HeroPersonalVideo__VideoContainer",componentId:"ej280d-1"})(i||(i=Object(v.a)(["\n            width: 100%;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            position: relative;\n            video {\n                position: absolute;\n            }\n        "]))),t=y.b.div.withConfig({displayName:"HeroPersonalVideo__Heading",componentId:"ej280d-2"})(o||(o=Object(v.a)(["\n            .glitch {\n                font-size: 140px;\n                line-height: 140px;\n                font-weight: 600;\n                color: #fff;\n                @media (max-width: 767px) {\n                    font-size: 40px;\n                    line-height: 50px;\n                }\n            }\n        "]))),d=y.b.h2.withConfig({displayName:"HeroPersonalVideo__SubHeading",componentId:"ej280d-3"})(r||(r=Object(v.a)(["\n            font-size: 18px;\n            font-weight: 300;\n            color: #ccc;\n            text-transform: uppercase;\n            letter-spacing: 4px;\n        "]))),m=y.b.div.withConfig({displayName:"HeroPersonalVideo__Type",componentId:"ej280d-4"})(s||(s=Object(v.a)(["\n            font-size: 50px;\n            line-height: 50px;\n            color: #fff;\n            text-transform: uppercase;\n            margin-left: 6px;\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 23px;\n                line-height: 20px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n            span {\n                font-family: Teko;\n            }\n        "]))),h=Object(y.c)(l||(l=Object(v.a)(["\n            0% {\n              background-position: 15% 0%;\n            }\n            50% {\n              background-position: 85% 100%;\n            }\n            100% {\n              background-position: 15% 0%;\n            }\n          "]))),u=y.b.div.withConfig({displayName:"HeroPersonalVideo__HeadingBox",componentId:"ej280d-5"})(p||(p=Object(v.a)(["\n            height: 500px;\n            width: 900px;\n            margin: auto;\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            &:after {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                border-radius: 5px;\n                background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n                background-size: 300% 300%;\n                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);\n            }\n            &.animate:after {\n                animation: "," 2s ease-in-out infinite;\n            }\n            @media (max-width: 767px) {\n                height: 350px;\n            }\n        "])),h),f=y.b.a.withConfig({displayName:"HeroPersonalVideo__Resume",componentId:"ej280d-6"})(c||(c=Object(v.a)(["\n            color: #fff;\n            text-decoration: none;\n            border-bottom: 2px solid;\n            font-weight: 300;\n            transition: .5s;\n            margin-top: 40px;\n            &:hover {\n                color: #fff;\n                text-decoration: none;\n                border-color: #04e5e5;\n            }\n        "])));return x.a.createElement(e,{id:"home"},x.a.createElement(n,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},x.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,style:{height:this.state.width>=1024&&this.state.width<1200?"100%":"auto"}},x.a.createElement("source",{src:_.a,type:"video/mp4"})),x.a.createElement(u,{className:"parallax-hero-item animate"},x.a.createElement(d,{className:"parallax-hero-item"},"Hello, I'm"),x.a.createElement(t,{className:"parallax-hero-item"},x.a.createElement(N.a,{text:"John Doe"})),x.a.createElement(m,{className:"parallax-hero-item"},x.a.createElement(O.a,{options:{strings:["App Developer","Web Designer","UX Developer"],autoStart:!0,loop:!0}})),x.a.createElement(f,{href:"./"},"Download Resume")),this.shapes()))},t.shapes=function(){var e=Object(y.c)(d||(d=Object(v.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-40px);\n            }\n        "]))),n=Object(y.c)(m||(m=Object(v.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        "]))),t=y.b.img.withConfig({displayName:"HeroPersonalVideo__Shape",componentId:"ej280d-7"})(h||(h=Object(v.a)(["\n            position: absolute;\n            height: 50px;\n            &.move-up {\n                animation: "," 5s infinite  alternate;\n            }\n            &.move-down {\n                animation: "," 5s infinite  alternate;\n            }\n            @media (max-width: 767px) {\n                height: 20px;\n            }\n        "])),e,n);return this.props.shapes.map((function(e,n){return x.a.createElement(t,{style:{left:10*(n+1)+"%",bottom:Math.random()*(+((n+1)%2==0?10:90)-+((n+1)%2==0?5:80))+ +((n+1)%2==0?5:80)+"%"},key:n,src:e.node.childImageSharp.fluid.src,alt:"shape",className:Math.floor(10*Math.random())%2==0?"move-up":"move-down"})}))},n}(x.a.Component),C=function(e){return x.a.createElement(E.a,{query:"102623836",render:function(n){var t=n.shapes;return x.a.createElement(z,Object.assign({shapes:t.edges},e))}})},I=t("cJaV"),k=t("PgA9"),P=t("Codp"),D=t("3Aop"),V=t("Nq0h"),S=t("YVUD"),W=function(e){function n(){return e.apply(this,arguments)||this}return Object(u.a)(n,e),n.prototype.render=function(){var e=this.props.data.site;return x.a.createElement("div",null,x.a.createElement(b.a,null,x.a.createElement("title",null,e.meta.title),x.a.createElement("meta",{name:"description",content:e.meta.description})),x.a.createElement(w.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","clients","contact"]},x.a.createElement(C,null),x.a.createElement(I.a,null),x.a.createElement(k.a,null),x.a.createElement(P.a,null),x.a.createElement(D.a,null),x.a.createElement(V.a,null),x.a.createElement(S.a,null)))},n}(x.a.Component);n.default=W},P4Lp:function(e,n,t){e.exports=t.p+"static/loop-5735d771367ec151ce5345d25cbeb808.mp4"}}]);
//# sourceMappingURL=component---src-pages-personal-video-index-js-23bead723cf1048eb41f.js.map