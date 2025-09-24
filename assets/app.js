// Minimal JS: waitlist form (mailto fallback or Formspree)
// 1) By default, uses mailto to your address (works without backend)
// 2) To use Formspree, set FORMSPREE_ENDPOINT and toggle USE_FORMSPREE=true.
const USE_FORMSPREE = false;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

function onWaitlistSubmit(e){
  e.preventDefault();
  const email = document.getElementById('waitlist_email').value.trim();
  if(!email){ alert("Please enter a valid email."); return; }
  if(USE_FORMSPREE){
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    }).then(r => {
      if(r.ok){ alert("Thanks! You're on the list."); e.target.reset(); }
      else{ alert("Submission failed. Please try again later."); }
    }).catch(()=> alert("Network error. Try again."));
  } else {
    const to = "info@yourdomain.com";
    window.location.href = `mailto:${to}?subject=Cashup Waitlist&body=Email:%20${encodeURIComponent(email)}`;
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  const f = document.getElementById("waitlist_form");
  if(f) f.addEventListener("submit", onWaitlistSubmit);
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});