(function(){
 var b=document.querySelector('.burger'),n=document.querySelector('nav.main');
 if(b)b.addEventListener('click',function(){n.classList.toggle('open')});
 document.querySelectorAll('.nav-item>button').forEach(function(btn){
   btn.addEventListener('click',function(e){
     if(window.matchMedia('(max-width:960px)').matches){e.preventDefault();btn.parentNode.classList.toggle('open')}
   });
 });
 // scroll-reveal entrance animations
 (function(){
   var root=document.documentElement;
   if(!root.classList.contains('anim')) return;
   if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
   var sel='.sec-head,.scard,.feat,.step,.pricewrap,.areas a,.cta-band,.faq details,'+
           '.article .body>h2,.article .body>h3,.article .body>p,.article .body>ul,.article .body>ol,'+
           '.article .body>.tw,.article .body>.faq,.article .body>img,.aside';
   var els=[].slice.call(document.querySelectorAll(sel));
   if(!els.length) return;
   els.forEach(function(el){el.classList.add('reveal')});
   // stagger items inside grids/lists
   [].forEach.call(document.querySelectorAll('.grid,.steps,.areas,.faq'),function(g){
     var i=0;[].forEach.call(g.children,function(c){if(c.classList.contains('reveal')){c.style.transitionDelay=(Math.min(i,6)*80)+'ms';i++;}});
   });
   function showAll(){els.forEach(function(el){el.classList.add('in')});}
   if(!('IntersectionObserver' in window)){showAll();return;}
   var io=new IntersectionObserver(function(ents){
     ents.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
   },{threshold:0.08,rootMargin:'0px 0px -5% 0px'});
   els.forEach(function(el){io.observe(el)});
   // safety net: never leave content hidden if the observer never fires
   setTimeout(showAll,2600);
 })();
})();