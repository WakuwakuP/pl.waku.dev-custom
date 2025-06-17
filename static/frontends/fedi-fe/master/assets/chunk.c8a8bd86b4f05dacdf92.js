(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{64:function(t,e,n){"use strict"
n.r(e)
var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t}).apply(this,arguments)}
function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,o,i=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}var a,c=n(68),s=n(73),u=/^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/,p=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._angular=e.angular||Object(c.f)().angular}return t.prototype.setupOnce=function(e,n){var r=this
this._angular?(this._getCurrentHub=n,this._angular.module(t.moduleName,[]).config(["$provide",function(t){t.decorator("$exceptionHandler",["$delegate",r._$exceptionHandlerDecorator.bind(r)])}])):s.a.error("AngularIntegration is missing an Angular instance")},t.prototype._$exceptionHandlerDecorator=function(e){var n=this
return function(o,i){var a=n._getCurrentHub&&n._getCurrentHub()
a&&a.getIntegration(t)&&a.withScope((function(t){i&&t.setExtra("cause",i),t.addEventProcessor((function(t){var e=t.exception&&t.exception.values&&t.exception.values[0]
if(e){var n=u.exec(e.value||"")
n&&(e.type=n[1],e.value=n[2],t.message=e.type+": "+e.value,t.extra=r({},t.extra,{angularDocs:n[3].substr(0,250)}))}return t})),a.captureException(o)})),e(o,i)}},t.id="AngularJS",t.moduleName="ngSentry",t}(),f=n(70),l=n(78),g=n(72),h=Object(c.f)(),v=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._levels=["log","info","warn","error","debug","assert"],e.levels&&(this._levels=e.levels)}return t.prototype.setupOnce=function(e,n){"console"in h&&this._levels.forEach((function(e){e in h.console&&Object(l.b)(h.console,e,(function(r){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i]
var a=n()
a.getIntegration(t)&&a.withScope((function(t){t.setLevel(f.a.fromString(e)),t.setExtra("arguments",o),t.addEventProcessor((function(t){return t.logger="console",t}))
var n=Object(g.b)(o," ")
"assert"===e?!1===o[0]&&(n="Assertion failed: "+(Object(g.b)(o.slice(1)," ")||"console.assert"),t.setExtra("arguments",o.slice(1)),a.captureMessage(n)):a.captureMessage(n)})),r&&Function.prototype.apply.call(r,h.console,o)}}))}))},t.id="CaptureConsole",t}(),m=function(){function t(e){this.name=t.id,this._options=r({debugger:!1,stringify:!1},e)}return t.prototype.setupOnce=function(e,n){e((function(e,r){var o=n().getIntegration(t)
return o&&(o._options.debugger,Object(c.c)((function(){o._options.stringify?(console.log(JSON.stringify(e,null,2)),r&&console.log(JSON.stringify(r,null,2))):(console.log(e),r&&console.log(r))}))),e}))},t.id="Debug",t}(),d=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(e,n){e((function(e){var r=n().getIntegration(t)
if(r){try{if(r._shouldDropEvent(e,r._previousEvent))return null}catch(t){return r._previousEvent=e}return r._previousEvent=e}return e}))},t.prototype._shouldDropEvent=function(t,e){return!(!e||!this._isSameMessageEvent(t,e)&&!this._isSameExceptionEvent(t,e))},t.prototype._isSameMessageEvent=function(t,e){var n=t.message,r=e.message
return!(!n&&!r||n&&!r||!n&&r||n!==r||!this._isSameFingerprint(t,e)||!this._isSameStacktrace(t,e))},t.prototype._getFramesFromEvent=function(t){var e=t.exception
if(e)try{return e.values[0].stacktrace.frames}catch(t){return}else if(t.stacktrace)return t.stacktrace.frames},t.prototype._isSameStacktrace=function(t,e){var n=this._getFramesFromEvent(t),r=this._getFramesFromEvent(e)
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
if(n=n,(r=r).length!==n.length)return!1
for(var o=0;o<r.length;o++){var i=r[o],a=n[o]
if(i.filename!==a.filename||i.lineno!==a.lineno||i.colno!==a.colno||i.function!==a.function)return!1}return!0},t.prototype._getExceptionFromEvent=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},t.prototype._isSameExceptionEvent=function(t,e){var n=this._getExceptionFromEvent(e),r=this._getExceptionFromEvent(t)
return!!(n&&r&&n.type===r.type&&n.value===r.value&&this._isSameFingerprint(t,e)&&this._isSameStacktrace(t,e))},t.prototype._isSameFingerprint=function(t,e){var n=t.fingerprint,r=e.fingerprint
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
n=n,r=r
try{return!(n.join("")!==r.join(""))}catch(t){return!1}},t.id="Dedupe",t}(),_=n(67),y=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._Ember=e.Ember||Object(c.f)().Ember}return t.prototype.setupOnce=function(e,n){var r=this
if(this._Ember){var o=this._Ember.onerror
this._Ember.onerror=function(e){if(n().getIntegration(t)&&n().captureException(e,{originalException:e}),"function"==typeof o)o.call(r._Ember,e)
else if(r._Ember.testing)throw e},this._Ember.RSVP.on("error",(function(e){n().getIntegration(t)&&n().withScope((function(t){Object(_.g)(e,Error)?(t.setExtra("context","Unhandled Promise error detected"),n().captureException(e,{originalException:e})):(t.setExtra("reason",e),n().captureMessage("Unhandled Promise error detected"))}))}))}else s.a.error("EmberIntegration is missing an Ember instance")},t.id="Ember",t}(),b=function(){function t(e){void 0===e&&(e={depth:3}),this._options=e,this.name=t.id}return t.prototype.setupOnce=function(e,n){e((function(e,r){var o=n().getIntegration(t)
return o?o.enhanceEventWithErrorData(e,r):e}))},t.prototype.enhanceEventWithErrorData=function(t,e){var n
if(!e||!e.originalException||!Object(_.d)(e.originalException))return t
var o=e.originalException.name||e.originalException.constructor.name,i=this._extractErrorData(e.originalException)
if(i){var a=r({},t.contexts),c=Object(l.c)(i,this._options.depth)
return Object(_.h)(c)&&(a=r({},t.contexts,((n={})[o]=r({},c),n))),r({},t,{contexts:a})}return t},t.prototype._extractErrorData=function(t){var e,n,r=null
try{var i=["name","message","stack","line","column","fileName","lineNumber","columnNumber"],a=Object.getOwnPropertyNames(t).filter((function(t){return-1===i.indexOf(t)}))
if(a.length){var c={}
try{for(var u=o(a),p=u.next();!p.done;p=u.next()){var f=p.value,l=t[f]
Object(_.d)(l)&&(l=l.toString()),c[f]=l}}catch(t){e={error:t}}finally{try{p&&!p.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}r=c}}catch(t){s.a.error("Unable to extract extra data from the Error object:",t)}return r},t.id="ExtraErrorData",t}(),E=n(77)
!function(t){t.Crash="crash",t.Deprecation="deprecation",t.Intervention="intervention"}(a||(a={}))
var x=function(){function t(e){void 0===e&&(e={types:[a.Crash,a.Deprecation,a.Intervention]}),this._options=e,this.name=t.id}return t.prototype.setupOnce=function(t,e){Object(E.e)()&&(this._getCurrentHub=e,new(Object(c.f)().ReportingObserver)(this.handler.bind(this),{buffered:!0,types:this._options.types}).observe())},t.prototype.handler=function(e){var n,r,i=this._getCurrentHub&&this._getCurrentHub()
if(i&&i.getIntegration(t)){var c=function(t){i.withScope((function(e){e.setExtra("url",t.url)
var n="ReportingObserver ["+t.type+"]",r="No details available"
if(t.body){var o,c={}
for(var s in t.body)c[s]=t.body[s]
e.setExtra("body",c),r=t.type===a.Crash?[(o=t.body).crashId||"",o.reason||""].join(" ").trim()||r:(o=t.body).message||r}i.captureMessage(n+": "+r)}))}
try{for(var s=o(e),u=s.next();!u.done;u=s.next())c(u.value)}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.id="ReportingObserver",t}()
function S(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r]
"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..")
return t}var O=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
function k(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n="",r=!1,o=t.length-1;o>=-1&&!r;o--){var i=o>=0?t[o]:"/"
i&&(n=i+"/"+n,r="/"===i.charAt(0))}return(r?"/":"")+(n=S(n.split("/").filter((function(t){return!!t})),!r).join("/"))||"."}function w(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}function C(t,e){var n=function(t){var e=O.exec(t)
return e?e.slice(1):[]}(t)[2]
return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}var j=function(){function t(e){var n=this
void 0===e&&(e={}),this.name=t.id,this._iteratee=function(t){if(!t.filename)return t
var e=/^[A-Z]:\\/.test(t.filename),r=/^\//.test(t.filename)
if(t.filename&&(e||r)){var o=e?t.filename.replace(/^[A-Z]:/,"").replace(/\\/g,"/"):t.filename,i=n._root?function(t,e){t=k(t).substr(1),e=k(e).substr(1)
for(var n=w(t.split("/")),r=w(e.split("/")),o=Math.min(n.length,r.length),i=o,a=0;a<o;a++)if(n[a]!==r[a]){i=a
break}var c=[]
for(a=i;a<n.length;a++)c.push("..")
return(c=c.concat(r.slice(i))).join("/")}(n._root,o):C(o)
t.filename="app:///"+i}return t},e.root&&(this._root=e.root),e.iteratee&&(this._iteratee=e.iteratee)}return t.prototype.setupOnce=function(e,n){e((function(e){var r=n().getIntegration(t)
return r?r.process(e):e}))},t.prototype.process=function(t){return t.exception&&Array.isArray(t.exception.values)?this._processExceptionsEvent(t):t.stacktrace?this._processStacktraceEvent(t):t},t.prototype._processExceptionsEvent=function(t){var e=this
try{return r({},t,{exception:r({},t.exception,{values:t.exception.values.map((function(t){return r({},t,{stacktrace:e._processStacktrace(t.stacktrace)})}))})})}catch(e){return t}},t.prototype._processStacktraceEvent=function(t){try{return r({},t,{stacktrace:this._processStacktrace(t.stacktrace)})}catch(e){return t}},t.prototype._processStacktrace=function(t){var e=this
return r({},t,{frames:t&&t.frames&&t.frames.map((function(t){return e._iteratee(t)}))})},t.id="RewriteFrames",t}(),$=function(){function t(){this.name=t.id,this._startTime=Date.now()}return t.prototype.setupOnce=function(e,n){e((function(e){var r=n().getIntegration(t)
return r?r.process(e):e}))},t.prototype.process=function(t){var e,n=Date.now()
return r({},t,{extra:r({},t.extra,(e={},e["session:start"]=this._startTime,e["session:duration"]=n-this._startTime,e["session:end"]=n,e))})},t.id="SessionTiming",t}(),T=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(e,n){e((function(e){var r=n().getIntegration(t)
return r?r.process(e):e}))},t.prototype.process=function(t){for(var e=this._getFramesFromEvent(t),n=e.length-1;n>=0;n--){var r=e[n]
if(!0===r.in_app){t.transaction=this._getTransaction(r)
break}}return t},t.prototype._getFramesFromEvent=function(t){var e=t.exception&&t.exception.values&&t.exception.values[0]
return e&&e.stacktrace&&e.stacktrace.frames||[]},t.prototype._getTransaction=function(t){return t.module||t.function?(t.module||"?")+"/"+(t.function||"?"):"<unknown>"},t.id="Transaction",t}(),A={id:"Tracing"},D={activated:"activate",beforeCreate:"create",beforeDestroy:"destroy",beforeMount:"mount",beforeUpdate:"update",created:"create",deactivated:"activate",destroyed:"destroy",mounted:"mount",updated:"update"},I=/(?:^|[-_/])(\w)/g,F="root",V=function(){function t(e){var n=this
this.name=t.id,this._componentsCache={},this._applyTracingHooks=function(t,e){if(!t.$options.$_sentryPerfHook){t.$options.$_sentryPerfHook=!0
var r=n._getComponentName(t),o=r===F,a={}
n._options.tracingOptions.hooks.forEach((function(s){var u=o?function(r){var o=Object(c.l)()
n._rootSpan?n._finishRootSpan(o,e):t.$once("hook:"+r,(function(){var t=e().getIntegration(A)
if(t){n._tracingActivity=t.constructor.pushActivity("Vue Application Render")
var r=t.constructor.getTransaction()
r&&(n._rootSpan=r.startChild({description:"Application Render",op:"Vue"}))}}))}.bind(n,s):function(o){var i=Array.isArray(n._options.tracingOptions.trackComponents)?n._options.tracingOptions.trackComponents.includes(r):n._options.tracingOptions.trackComponents
if(n._rootSpan&&i){var s=Object(c.l)(),u=D[o],p=a[u]
p?(p.finish(),n._finishRootSpan(s,e)):t.$once("hook:"+o,(function(){n._rootSpan&&(a[u]=n._rootSpan.startChild({description:"Vue <"+r+">",op:u}))}))}}.bind(n,s),p=t.$options[s]
Array.isArray(p)?t.$options[s]=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]))
return t}([u],p):t.$options[s]="function"==typeof p?[u,p]:[u]}))}},this._options=r({Vue:Object(c.f)().Vue,attachProps:!0,logErrors:!1,tracing:!0},e,{tracingOptions:r({hooks:["beforeMount","mounted","beforeUpdate","updated"],timeout:2e3,trackComponents:!1},e.tracingOptions)})}return t.prototype._getComponentName=function(t){if(!t)return"anonymous component"
if(t.$root===t)return F
if(!t.$options)return"anonymous component"
if(t.$options.name)return t.$options.name
if(t.$options._componentTag)return t.$options._componentTag
if(t.$options.__file){var e=C(t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),".vue")
return this._componentsCache[e]||(this._componentsCache[e]=e.replace(I,(function(t,e){return e?e.toUpperCase():""})))}return"anonymous component"},t.prototype._finishRootSpan=function(t,e){var n=this
this._rootSpanTimer&&clearTimeout(this._rootSpanTimer),this._rootSpanTimer=setTimeout((function(){if(n._tracingActivity){var r=e().getIntegration(A)
r&&(r.constructor.popActivity(n._tracingActivity),n._rootSpan&&n._rootSpan.finish(t))}}),this._options.tracingOptions.timeout)},t.prototype._startTracing=function(t){var e=this._applyTracingHooks
this._options.Vue.mixin({beforeCreate:function(){t().getIntegration(A)?e(this,t):s.a.error("Vue integration has tracing enabled, but Tracing integration is not configured")}})},t.prototype._attachErrorHandler=function(e){var n=this,r=this._options.Vue.config.errorHandler
this._options.Vue.config.errorHandler=function(o,i,a){var c={}
if(i)try{c.componentName=n._getComponentName(i),n._options.attachProps&&(c.propsData=i.$options.propsData)}catch(t){s.a.warn("Unable to extract metadata from Vue component.")}a&&(c.lifecycleHook=a),e().getIntegration(t)&&setTimeout((function(){e().withScope((function(t){t.setContext("vue",c),e().captureException(o)}))})),"function"==typeof r&&r.call(n._options.Vue,o,i,a),n._options.logErrors&&(n._options.Vue.util&&n._options.Vue.util.warn("Error in "+a+': "'+o.toString()+'"',i),console.error(o))}},t.prototype.setupOnce=function(t,e){this._options.Vue?(this._attachErrorHandler(e),this._options.tracing&&this._startTracing(e)):s.a.error("Vue integration is missing a Vue instance")},t.id="Vue",t}()
n.d(e,"Angular",(function(){return p})),n.d(e,"CaptureConsole",(function(){return v})),n.d(e,"Debug",(function(){return m})),n.d(e,"Dedupe",(function(){return d})),n.d(e,"Ember",(function(){return y})),n.d(e,"ExtraErrorData",(function(){return b})),n.d(e,"ReportingObserver",(function(){return x})),n.d(e,"RewriteFrames",(function(){return j})),n.d(e,"SessionTiming",(function(){return $})),n.d(e,"Transaction",(function(){return T})),n.d(e,"Vue",(function(){return V}))}}])

//# sourceMappingURL=chunk.c8a8bd86b4f05dacdf92-c6d6de4358464ba4d87fb1531b648cdd.map