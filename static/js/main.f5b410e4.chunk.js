(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(64)},35:function(e,t,n){},36:function(e,t,n){},4:function(e,t,n){"use strict";(function(e){var a=n(2),r=n(1),i=n(20),o=n.n(i),l=n(27),s=n.n(l),c=function(){function t(){Object(a.a)(this,t),this.basePath="http://localhost:3000".replace(/\/+$/,""),this.authentications={Bearer:{type:"bearer"}},this.defaultHeaders={},this.timeout=6e4,this.cache=!0,this.enableCookies=!1,"undefined"===typeof window&&(this.agent=new o.a.agent),this.requestAgent=null,this.plugins=null}return Object(r.a)(t,[{key:"paramToString",value:function(e){return void 0==e||null==e?"":e instanceof Date?e.toJSON():e.toString()}},{key:"buildUrl",value:function(e,t,n){var a=this;e.match(/^\//)||(e="/"+e);var r=this.basePath+e;return null!==n&&void 0!==n&&(r=n+e),r=r.replace(/\{([\w-]+)\}/g,function(e,n){var r;return r=t.hasOwnProperty(n)?a.paramToString(t[n]):e,encodeURIComponent(r)})}},{key:"isJsonMime",value:function(e){return Boolean(null!=e&&e.match(/^application\/json(;.*)?$/i))}},{key:"jsonPreferredMime",value:function(e){for(var t=0;t<e.length;t++)if(this.isJsonMime(e[t]))return e[t];return e[0]}},{key:"isFileParam",value:function(t){var a;try{a=n(60)}catch(r){}return!!(a&&a.ReadStream&&t instanceof a.ReadStream)||("function"===typeof e&&t instanceof e||("function"===typeof Blob&&t instanceof Blob||"function"===typeof File&&t instanceof File))}},{key:"normalizeParams",value:function(e){var t={};for(var n in e)if(e.hasOwnProperty(n)&&void 0!=e[n]&&null!=e[n]){var a=e[n];this.isFileParam(a)||Array.isArray(a)?t[n]=a:t[n]=this.paramToString(a)}return t}},{key:"buildCollectionParam",value:function(e,t){if(null==e)return null;switch(t){case"csv":return e.map(this.paramToString).join(",");case"ssv":return e.map(this.paramToString).join(" ");case"tsv":return e.map(this.paramToString).join("\t");case"pipes":return e.map(this.paramToString).join("|");case"multi":return e.map(this.paramToString);default:throw new Error("Unknown collection format: "+t)}}},{key:"applyAuthToRequest",value:function(e,t){var n=this;t.forEach(function(t){var a=n.authentications[t];switch(a.type){case"basic":(a.username||a.password)&&e.auth(a.username||"",a.password||"");break;case"bearer":a.accessToken&&e.set({Authorization:"Bearer "+a.accessToken});break;case"apiKey":if(a.apiKey){var r={};a.apiKeyPrefix?r[a.name]=a.apiKeyPrefix+" "+a.apiKey:r[a.name]=a.apiKey,"header"===a.in?e.set(r):e.query(r)}break;case"oauth2":a.accessToken&&e.set({Authorization:"Bearer "+a.accessToken});break;default:throw new Error("Unknown authentication type: "+a.type)}})}},{key:"deserialize",value:function(e,n){if(null==e||null==n||204==e.status)return null;var a=e.body;return(null==a||"object"===typeof a&&"undefined"===typeof a.length&&!Object.keys(a).length)&&(a=e.text),t.convertToType(a,n)}},{key:"callApi",value:function(e,t,n,a,r,i,l,c,u,m,d,h,p){var f=this,g=this.buildUrl(e,n,h),v=o()(t,g);if(null!==this.plugins)for(var y in this.plugins)this.plugins.hasOwnProperty(y)&&v.use(this.plugins[y]);this.applyAuthToRequest(v,c),"GET"===t.toUpperCase()&&!1===this.cache&&(a._=(new Date).getTime()),v.query(this.normalizeParams(a)),v.set(this.defaultHeaders).set(this.normalizeParams(r)),this.requestAgent&&v.agent(this.requestAgent),v.timeout(this.timeout);var b=this.jsonPreferredMime(u);if(b?"multipart/form-data"!=b&&v.type(b):v.header["Content-Type"]||v.type("application/json"),"application/x-www-form-urlencoded"===b)v.send(s.a.stringify(this.normalizeParams(i)));else if("multipart/form-data"==b){var k=this.normalizeParams(i);for(var w in k)k.hasOwnProperty(w)&&(this.isFileParam(k[w])?v.attach(w,k[w]):v.field(w,k[w]))}else null!==l&&void 0!==l&&v.send(l);var E=this.jsonPreferredMime(m);return E&&v.accept(E),"Blob"===d?v.responseType("blob"):"String"===d&&v.responseType("string"),this.enableCookies&&("undefined"===typeof window?this.agent._attachCookies(v):v.withCredentials()),v.end(function(e,t){if(p){var n=null;if(!e)try{n=f.deserialize(t,d),f.enableCookies&&"undefined"===typeof window&&f.agent._saveCookies(t)}catch(a){e=a}p(e,n,t)}}),v}},{key:"hostSettings",value:function(){return[{url:"http://localhost:3000",description:"No description provided"}]}},{key:"getBasePathFromSettings",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.hostSettings();if(e<0||e>=n.length)throw new Error("Invalid index "+e+" when selecting the host settings. Must be less than "+n.length);var a=n[e],r=a.url;for(var i in a.variables)if(i in t){if(!a.variables[i].enum_values.includes(t[i]))throw new Error("The variable `"+i+"` in the host URL has invalid value "+t[i]+". Must be "+a.variables[i].enum_values+".");r=r.replace("{"+i+"}",t[i])}else r=r.replace("{"+i+"}",a.variables[i].default_value);return r}}],[{key:"parseDate",value:function(e){return new Date(e)}},{key:"convertToType",value:function(e,n){if(null===e||void 0===e)return e;switch(n){case"Boolean":return Boolean(e);case"Integer":return parseInt(e,10);case"Number":return parseFloat(e);case"String":return String(e);case"Date":return t.parseDate(String(e));case"Blob":return e;default:if(n===Object)return e;if("function"===typeof n.constructFromObject)return n.constructFromObject(e);if(Array.isArray(n)){var a=n[0];return e.map(function(e){return t.convertToType(e,a)})}if("object"===typeof n){var r,i;for(var o in n)if(n.hasOwnProperty(o)){r=o,i=n[o];break}var l={};for(var o in e)if(e.hasOwnProperty(o)){var s=t.convertToType(o,r),c=t.convertToType(e[o],i);l[s]=c}return l}return e}}},{key:"constructFromObject",value:function(e,n,a){if(Array.isArray(e))for(var r=0;r<e.length;r++)e.hasOwnProperty(r)&&(n[r]=t.convertToType(e[r],a));else for(var i in e)e.hasOwnProperty(i)&&(n[i]=t.convertToType(e[i],a))}}]),t}();c.CollectionFormatEnum={CSV:",",SSV:" ",TSV:"\t",PIPES:"|",MULTI:"multi"},c.instance=new c,t.a=c}).call(this,n(45).Buffer)},60:function(e,t){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),o=n.n(i),l=(n(35),n(2)),s=n(1),c=n(9),u=n(8),m=n(10),d=function(e){return r.a.createElement("header",{id:"header"},r.a.createElement("nav",{id:"nav-bar"},r.a.createElement("a",{href:"#home",className:"nav-link"},"Home"),r.a.createElement("a",{href:"#about",className:"nav-link"},"About"),r.a.createElement("div",{className:"menu"},r.a.createElement("button",{className:"dropbtn"},"Menu",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("a",{href:"#appetizers",className:"nav-link"},"Appetizers"),r.a.createElement("br",null),r.a.createElement("a",{href:"#sideorders",className:"nav-link"},"Side Orders"),r.a.createElement("br",null),r.a.createElement("a",{href:"#breakfast",className:"nav-link"},"Breakfast"),r.a.createElement("br",null),r.a.createElement("a",{href:"#kidsmenu",className:"nav-link"},"Kids Menu"),r.a.createElement("br",null),r.a.createElement("a",{href:"#sandwichbaskets",className:"nav-link"},"Sandwiches & Baskets"),r.a.createElement("br",null),r.a.createElement("a",{href:"#bfs",className:"nav-link"},"Beef, Chicken, & Shrimp"),r.a.createElement("br",null),r.a.createElement("a",{href:"#beverages",className:"nav-link"},"Beverages"),r.a.createElement("br",null))),r.a.createElement("a",{href:"#gallery",className:"nav-link"},"Gallery"),r.a.createElement("a",{href:"#contact",className:"nav-link"},"Contact")))},h=(n(36),n(13)),p=function(e){return r.a.createElement("div",null,e.menuItem.title," ",r.a.createElement("span",{style:{color:"black"}},e.menuItem.price),e.authenticated&&r.a.createElement(h.a,{to:"/menu/".concat(e.menuItem.id)},"Edit"))},f=function(e){return r.a.createElement("div",{style:{border:"4px solid-black",borderRadius:"5px",backgroundColor:"white"},id:e.id},r.a.createElement("h2",null,e.name),e.menuItems.map(function(t,n){return r.a.createElement(p,{menuItem:t,authenticated:e.authenticated})}))},g=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Menu"),r.a.createElement(f,{name:"Appetizers",id:"appetizers",menuItems:e.menuItems.filter(function(e){return"appetizers"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Side Orders",id:"sideorders",menuItems:e.menuItems.filter(function(e){return"sides"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Breakfast",id:"breakfast",menuItems:e.menuItems.filter(function(e){return"breakfast"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Kids Menu",id:"kidsmenu",menuItems:e.menuItems.filter(function(e){return"kids"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Sandwiches & Baskets",id:"sandwichbaskets",menuItems:e.menuItems.filter(function(e){return"baskets"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Dinners",id:"bfs",menuItems:e.menuItems.filter(function(e){return"entrees"===e.category}),authenticated:e.authenticated}),r.a.createElement(f,{name:"Beverages",id:"beverages",menuItems:e.menuItems.filter(function(e){return"beverages"===e.category}),authenticated:e.authenticated}))},v=function(e){var t=e.number;return r.a.createElement("div",null,r.a.createElement("a",{href:"tel:".concat(t)},"Call",t))},y=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{id:"contact",style:{borderRadius:"5px",backgroundColor:"white"}},r.a.createElement("p",null,"Business Hours:"),r.a.createElement("p",null,"Monday-Thursday: 7am/8pm Friday-Saturday: 7am/9pm"),r.a.createElement("p",null,"We would love to hear from you! Remember we do carry out!"),r.a.createElement("p",null,"Contact us so we can get in touch about your catering needs!!"),r.a.createElement(v,{number:"(701)-453-3452"}),"Catering:",r.a.createElement(v,{number:"(701)-453-3413"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:backdraftbbqnd@gmail.com"},"Email Us")),r.a.createElement("iframe",{id:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.36710009526!2d-101.73908468416074!3d48.31502264676407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52df4783895a2599%3A0xa07fcafccd80dde!2s213+Main+St+N%2C+Berthold%2C+ND+58718!5e0!3m2!1sen!2sus!4v1556233846926!5m2!1sen!2sus",width:"600",height:"450",frameborder:"0",allowfullscreen:!0})))},b=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",{id:"about",style:{borderRadius:"5px",margin:"0 auto",backgroundColor:"white"}},r.a.createElement("p",null,"Backdraft Cafe and BBQ is a small town diner in the middle of Berthold, ND. We strive to bring you high quality food and atmosphere. It is the home of the one and only Backdraft Brisket Burger, a cheese burger with a slice of some of the best smoked brisket you may ever taste. The diner was established November 2018, under the management of Kalvin Myers, and his daughter Christa. These two take great pride in what they dish up! Not only does this small town eatery have a top tier location, they will bring the food to you!! Call now to place your catering needs!")))},k=n(4),w=function(){function e(t,n){Object(l.a)(this,e),e.initialize(this,t,n)}return Object(s.a)(e,null,[{key:"initialize",value:function(e,t,n){e.code=t,e.message=n}},{key:"constructFromObject",value:function(t,n){return t&&(n=n||new e,t.hasOwnProperty("code")&&(n.code=k.a.convertToType(t.code,"Number")),t.hasOwnProperty("message")&&(n.message=k.a.convertToType(t.message,"String"))),n}}]),e}();w.prototype.code=void 0,w.prototype.message=void 0;var E=w,T=function(){function e(t,n,a,r){Object(l.a)(this,e),e.initialize(this,t,n,a,r)}return Object(s.a)(e,null,[{key:"initialize",value:function(e,t,n,a,r){e.id=t,e.price=n,e.title=a,e.category=r}},{key:"constructFromObject",value:function(t,n){return t&&(n=n||new e,t.hasOwnProperty("id")&&(n.id=k.a.convertToType(t.id,"String")),t.hasOwnProperty("price")&&(n.price=k.a.convertToType(t.price,"String")),t.hasOwnProperty("title")&&(n.title=k.a.convertToType(t.title,"String")),t.hasOwnProperty("category")&&(n.category=k.a.convertToType(t.category,"String"))),n}}]),e}();T.prototype.id=void 0,T.prototype.price=void 0,T.prototype.title=void 0,T.prototype.category=void 0,T.CategoryEnum={appetizers:"appetizers",sides:"sides",breakfast:"breakfast",kids:"kids",baskets:"baskets",entrees:"entrees",beverages:"beverages"};var O=T,I=function(){function e(t){Object(l.a)(this,e),this.apiClient=t||k.a.instance}return Object(s.a)(e,[{key:"addMenuItem",value:function(e,t){var n=e;if(void 0===e||null===e)throw new E("Missing the required parameter 'menuItem' when calling addMenuItem");var a=O;return this.apiClient.callApi("/menu_item","POST",{},{},{},{},n,["Bearer"],["application/json"],["application/json"],a,null,t)}},{key:"deleteMenuitem",value:function(e,t){if(void 0===e||null===e)throw new E("Missing the required parameter 'id' when calling deleteMenuitem");var n={id:e};return this.apiClient.callApi("/menu_item/{id}","DELETE",n,{},{},{},null,["Bearer"],[],["application/json"],null,null,t)}},{key:"editMenuItem",value:function(e,t,n){var a=t;if(void 0===e||null===e)throw new E("Missing the required parameter 'id' when calling editMenuItem");if(void 0===t||null===t)throw new E("Missing the required parameter 'menuItem' when calling editMenuItem");var r={id:e},i=O;return this.apiClient.callApi("/menu_item/{id}","PATCH",r,{},{},{},a,["Bearer"],["application/json"],["application/json"],i,null,n)}},{key:"getMenuItem",value:function(e,t){if(void 0===e||null===e)throw new E("Missing the required parameter 'id' when calling getMenuItem");var n={id:e},a=O;return this.apiClient.callApi("/menu_item/{id}","GET",n,{},{},{},null,[],[],["application/json"],a,null,t)}},{key:"getMenuItems",value:function(e){var t=[O];return this.apiClient.callApi("/menu_item","GET",{},{},{},{},null,[],[],["application/json"],t,null,e)}}]),e}(),j=new I,S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={category:"appetizers",price:"",title:""},n.ondelete=function(){j.apiClient.authentications.Bearer.accessToken=n.props.auth.getIdToken(),1==window.confirm("Are you sure you want to delete ".concat(n.state.title,"?"))&&(j.deleteMenuitem(n.props.match.params.id),window.location.replace("/"))},n.onsubmit=function(){j.apiClient.authentications.Bearer.accessToken=n.props.auth.getIdToken(),n.props.match.params.id?j.editMenuItem(n.props.match.params.id,{category:n.state.category,price:n.state.price,title:n.state.title,id:""}):(j.addMenuItem({category:n.state.category,price:n.state.price,title:n.state.title,id:""},function(e,t,n){console.log(t)}),window.location.reload())},n.oncategory=function(e){n.setState({category:e.target.value},function(){return console.log(n.state.category)})},n.onprice=function(e){n.setState({price:e.target.value},function(){return console.log(n.state.price)})},n.ontitle=function(e){n.setState({title:e.target.value},function(){return console.log(n.state.title)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&j.getMenuItem(this.props.match.params.id,function(t,n,a){console.log(n),e.setState({category:n.category,price:n.price,title:n.title})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Menu Item"),r.a.createElement("div",{id:"additem",style:{borderRadius:"5px",backgroundColor:"white"}},r.a.createElement("div",null,r.a.createElement("label",{id:"catagory-label",for:"catagory"},"Category"),r.a.createElement("select",{onChange:this.oncategory},r.a.createElement("option",{value:"appetizers"},"Appetizers"),r.a.createElement("option",{value:"sides"},"Sides"),r.a.createElement("option",{value:"breakfast"},"Breakfast"),r.a.createElement("option",{value:"kids"},"Kids"),r.a.createElement("option",{value:"baskets"},"Baskets"),r.a.createElement("option",{value:"entrees"},"Entrees"),r.a.createElement("option",{value:"beverages"},"Beverages"))),r.a.createElement("div",null,r.a.createElement("label",{id:"name-label"},"Name"),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",required:!0,onChange:this.ontitle,value:this.state.title})),r.a.createElement("div",null,r.a.createElement("label",{id:"number-label"},"Price"),r.a.createElement("input",{id:"number",type:"number",min:"0.01",step:"0.01",placeholder:"1.99",required:!0,onChange:this.onprice,value:this.state.price})),r.a.createElement("button",{onClick:this.onsubmit},"Submit"),r.a.createElement("button",{onClick:this.ondelete},"Delete")))}}]),t}(a.Component),C=function(){function e(t,n){Object(l.a)(this,e),e.initialize(this,t,n)}return Object(s.a)(e,null,[{key:"initialize",value:function(e,t,n){e.id=t,e.url=n}},{key:"constructFromObject",value:function(t,n){return t&&(n=n||new e,t.hasOwnProperty("id")&&(n.id=k.a.convertToType(t.id,"String")),t.hasOwnProperty("url")&&(n.url=k.a.convertToType(t.url,"String"))),n}}]),e}();C.prototype.id=void 0,C.prototype.url=void 0;var A=C,M=function(){function e(t){Object(l.a)(this,e),this.apiClient=t||k.a.instance}return Object(s.a)(e,[{key:"addGalleryImage",value:function(e,t){var n=e;if(void 0===e||null===e)throw new E("Missing the required parameter 'body' when calling addGalleryImage");var a=A;return this.apiClient.callApi("/gallery","POST",{},{},{},{},n,["Bearer"],["image/png"],["application/json"],a,null,t)}},{key:"deleteGalleryImage",value:function(e,t){if(void 0===e||null===e)throw new E("Missing the required parameter 'id' when calling deleteGalleryImage");var n={id:e};return this.apiClient.callApi("/gallery/{id}","DELETE",n,{},{},{},null,["Bearer"],[],["application/json"],null,null,t)}},{key:"getGalleryImages",value:function(e){var t=[A];return this.apiClient.callApi("/gallery","GET",{},{},{},{},null,[],[],["application/json"],t,null,e)}}]),e}(),B=new M,P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={url:""},n.ondelete=function(){1==window.confirm("Are you sure you want to delete ".concat(n.state.title,"?"))&&B.deleteGalleryImage(n.props.match.params.id)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&B.getGalleryImage(this.props.match.params.id,function(t,n,a){console.log(n),e.setState({url:n.url})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Gallery"),r.a.createElement("div",{id:"addimg",style:{borderRadius:"5px",margin:"0 auto",backgroundColor:"white",width:"45%"}},r.a.createElement("div",null,r.a.createElement("label",{id:"name-label"},"Name"),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",required:!0}),r.a.createElement("input",{id:"file",type:"file",required:!0})),r.a.createElement("button",{onClick:this.ondelete},"Delete")))}}]),t}(a.Component),N=n(11),z=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Gallery"),r.a.createElement("div",{id:"gallery",style:{borderRadius:"5px",backgroundColor:"white"}},e.gallery.map(function(t){return r.a.createElement(r.a.Fragment,null,e.loggedIn&&r.a.createElement(h.a,{to:"admin/gallery/".concat(t.id)},"Edit")," ",r.a.createElement("img",{key:t.id,src:t.url}))})))},q=n(28),x=function(){function e(t){Object(l.a)(this,e),this.history=null,this.auth0=new q.a.WebAuth({domain:"backdraft.auth0.com",clientID:"wel5Q5i3sc19pl4NtqhuO0AKOnoENpSQ",redirectUri:"$[window.origin}/callback",responseType:"token id_token"}),this.history=t,this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(s.a)(e,[{key:"login",value:function(){this.auth0.authorize()}}]),Object(s.a)(e,[{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.history.replace("/"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.history.replace("/")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log("renew error",t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),this.auth0.logout({returnTo:window.location.origin}),this.history.replace("/")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}(),D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Loading...")}}]),t}(a.Component),F=n(29),G=n.n(F)()(),_=new x(G),R=new I,K=new M,L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={menuItems:[],gallery:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.getMenuItems(function(t,n,a){console.log(n),e.setState({menuItems:n||[]})}),K.getGalleryImages(function(t,n,a){console.log(n),e.setState({gallery:n||[]})}),"true"===localStorage.getItem("isLoggedIn")&&_.renewSession()}},{key:"render",value:function(){var e=this;return r.a.createElement(N.b,{history:G},r.a.createElement("div",{className:"App"},r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/callback",render:function(e){return/access_token|id_token|error/.test(e.location.hash)&&_.handleAuthentication(),r.a.createElement(D,e)}}),r.a.createElement(N.a,{path:"/menu/:id",render:function(e){return r.a.createElement(S,Object.assign({},e,{auth:_}))}}),r.a.createElement(N.a,{path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(g,{menuItems:e.state.menuItems,authenticated:_.isAuthenticated()}),r.a.createElement(z,{gallery:e.state.gallery}),r.a.createElement(y,null),_.isAuthenticated()?r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return _.logout()}},"Logout"),r.a.createElement(S,Object.assign({},t,{auth:_})),r.a.createElement(P,Object.assign({},t,{auth:_}))):r.a.createElement("button",{type:"button",onClick:function(){return _.login()}},"Login"))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.f5b410e4.chunk.js.map