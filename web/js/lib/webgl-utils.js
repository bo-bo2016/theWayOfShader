// webgl-utils.js
WebGLUtils=function(){var o=function(e,n){for(var t=["webgl","experimental-webgl","webkit-3d","moz-webgl"],i=null,o=0;o<t.length;++o){try{i=e.getContext(t[o],n)}catch(e){}if(i)break}return i};return{create3DContext:o,setupWebGL:function(e,n,t){t=t||function(e){var n=document.getElementsByTagName("body")[0];if(n){var t=window.WebGLRenderingContext?'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>':'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';e&&(t+="<br/><br/>Status: "+e),n.innerHTML='<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">'+t+"</div>"}},e.addEventListener&&e.addEventListener("webglcontextcreationerror",function(e){t(e.statusMessage)},!1);var i=o(e,n);return i||(window.WebGLRenderingContext,t("")),i}}}(),window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,n){window.setTimeout(e,1e3/60)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout);
