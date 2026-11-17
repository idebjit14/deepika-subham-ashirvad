const ceremony = new Date("2027-01-25T10:00:00+05:30").getTime();
const $ = (id) => document.getElementById(id);
function updateCountdown(){
  const diff = ceremony - Date.now();
  if(diff <= 0){
    $("days").textContent="00"; $("hours").textContent="00";
    $("minutes").textContent="00"; $("seconds").textContent="00";
    document.querySelector(".countdown-foot").textContent="Today is the day! We look forward to celebrating with you.";
    return;
  }
  const days=Math.floor(diff/86400000);
  const hours=Math.floor((diff%86400000)/3600000);
  const minutes=Math.floor((diff%3600000)/60000);
  const seconds=Math.floor((diff%60000)/1000);
  $("days").textContent=String(days).padStart(3,"0");
  $("hours").textContent=String(hours).padStart(2,"0");
  $("minutes").textContent=String(minutes).padStart(2,"0");
  $("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);
const phone="918670232181";
const message="Hello! I would like to confirm my attendance for the Ashirvad ceremony of Deepika & Subham on 25 January 2027 at 10:00 AM onwards. Best wishes!";
$("rsvp-link").href="https://wa.me/"+phone+"?text="+encodeURIComponent(message);
const toggle=document.querySelector(".menu-toggle");
const links=document.querySelector(".navlinks");
toggle.addEventListener("click",()=>{
  const open=links.classList.toggle("open");
  toggle.setAttribute("aria-expanded",String(open));
  toggle.textContent=open?"✕":"☰";
});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  links.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); toggle.textContent="☰";
}));



// Language gate: visitors choose once before entering the invitation.
const languageGate=document.getElementById("language-gate");
const translations={"With the blessings of our families": "পরিবারের আশীর্বাদে", "ASHIRVAD CEREMONY": "আশীর্বাদ অনুষ্ঠান", "A beautiful beginning, blessed by love and family.": "ভালোবাসা ও পরিবারের আশীর্বাদে এক সুন্দর সূচনা।", "Discover the celebration": "অনুষ্ঠানটি দেখুন", "Our Celebration": "আমাদের অনুষ্ঠান", "The Details": "অনুষ্ঠানের বিবরণ", "Families": "পরিবার", "RSVP": "উপস্থিতি জানান", "A New Chapter Begins": "শুরু হচ্ছে এক নতুন অধ্যায়", "With grateful hearts and the love of our families, we invite you to join us as we celebrate the Ashirvad ceremony of": "পরিবারের ভালোবাসা ও আশীর্বাদকে সঙ্গে নিয়ে, আমাদের আশীর্বাদ অনুষ্ঠানে আপনাদের সাদর আমন্ত্রণ জানাই", "Your presence and blessings will make this day even more special.": "আপনাদের উপস্থিতি ও আশীর্বাদ এই দিনটিকে আরও বিশেষ করে তুলবে।", "The celebration is approaching": "উৎসবের দিন এগিয়ে আসছে", "Counting the moments": "অপেক্ষার প্রহর গুনছি", "Days": "দিন", "Hours": "ঘণ্টা", "Minutes": "মিনিট", "Seconds": "সেকেন্ড", "The Celebration Details": "অনুষ্ঠানের বিবরণ", "WHEN · কখন": "কখন", "WHERE · কোথায়": "কোথায়", "Monday · 10:00 AM onwards": "সোমবার · সকাল ১০টা থেকে", "With love, at our venue": "আমাদের অনুষ্ঠানের স্থানে, ভালোবাসার আমন্ত্রণ", "We look forward to welcoming you.": "আপনাদের স্বাগত জানানোর অপেক্ষায় রইলাম।", "Open venue in Google Maps ↗": "Google Maps-এ অনুষ্ঠানস্থল দেখুন ↗", "Tap the map link for directions and the exact venue location.": "সঠিক ঠিকানা ও যাওয়ার পথ জানতে ম্যাপের লিঙ্কে চাপ দিন।", "Two families · One beautiful bond": "দুই পরিবার · এক সুন্দর বন্ধন", "With the Blessings of Our Families": "পরিবারের আশীর্বাদে", "THE BRIDE'S FAMILY": "কনের পরিবার", "THE GROOM'S FAMILY": "বরের পরিবার", "A little more to look forward to": "আরও একটি বিশেষ দিনের অপেক্ষায়", "And the next beautiful date...": "এরপরের সেই বিশেষ দিনটি...", "The wedding date will be revealed soon, with love and joy. Until then, let us celebrate this precious beginning together.": "বিয়ের শুভদিন খুব শীঘ্রই ভালোবাসা ও আনন্দের সঙ্গে জানানো হবে। ততদিন এই সুন্দর সূচনাকে একসঙ্গে উদযাপন করি।", "THE WEDDING DATE · COMING SOON": "বিয়ের তারিখ · শীঘ্রই জানানো হবে", "Your blessings mean the world": "আপনাদের আশীর্বাদ আমাদের কাছে অমূল্য", "Will You Join Us?": "আপনারা কি আমাদের সঙ্গে থাকবেন?", "Kindly let us know if you can be part of our special day. We can't wait to celebrate with you!": "আমাদের এই বিশেষ দিনে আপনাদের উপস্থিতি জানালে খুব আনন্দিত হব। একসঙ্গে উদযাপনের অপেক্ষায় রইলাম!", "RSVP on WhatsApp": "WhatsApp-এ উপস্থিতি জানান", "MADE WITH LOVE · 2027": "ভালোবাসায় তৈরি · ২০২৭", "Home": "হোম"};
function applyLanguage(lang){
  document.documentElement.lang=lang==="bn"?"bn":"en";
  document.body.classList.toggle("lang-bn",lang==="bn");
  if(lang==="bn"){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(node.parentElement.closest("#language-gate,.sound-toggle,script,style")) return;
      const key=node.nodeValue.trim();
      if(translations[key]) node.nodeValue=node.nodeValue.replace(key,translations[key]);
    });
    document.querySelector(".sound-label").textContent="শব্দ বন্ধ";
  }
  languageGate.classList.add("dismissed");
  setTimeout(()=>languageGate.remove(),850);
}
document.querySelectorAll(".language-choice").forEach(button=>{
  button.addEventListener("click",()=>applyLanguage(button.dataset.language));
});

// Optional, original bell-like ambient tones. Sound starts only after a visitor taps.
let audioContext=null,soundOn=false,melodyTimer=null,noteIndex=0;
const notes=[659.25,783.99,987.77,783.99,880,783.99,659.25,587.33];
function playBell(freq){
  if(!audioContext||!soundOn)return;
  const now=audioContext.currentTime,osc=audioContext.createOscillator(),gain=audioContext.createGain();
  osc.type="sine";osc.frequency.setValueAtTime(freq,now);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.065,now+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+1.1);
  osc.connect(gain);gain.connect(audioContext.destination);osc.start(now);osc.stop(now+1.15);
}
const soundButton=document.getElementById("sound-toggle");
soundButton.addEventListener("click",async()=>{
  if(!audioContext)audioContext=new(window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==="suspended")await audioContext.resume();
  soundOn=!soundOn;soundButton.classList.toggle("active",soundOn);soundButton.setAttribute("aria-pressed",String(soundOn));
  soundButton.querySelector(".sound-label").textContent=soundOn?(document.documentElement.lang==="bn"?"শব্দ চালু":"Sound on"):(document.documentElement.lang==="bn"?"শব্দ বন্ধ":"Sound off");
  if(soundOn){playBell(notes[noteIndex++%notes.length]);melodyTimer=setInterval(()=>playBell(notes[noteIndex++%notes.length]),1450);}
  else{clearInterval(melodyTimer);melodyTimer=null;}
});

// Gentle reveal-on-scroll and hover effects.
document.querySelectorAll("main section,.detail-card,.family-card,.future-frame").forEach(el=>el.classList.add("reveal"));
if("IntersectionObserver"in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}else{document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));}
