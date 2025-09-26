// Fixed countdown to August 31, 2026 00:00:00 America/Toronto (UTC-4 in summer).
// Target date NEVER changes (no reset on reload).
const targetISO = "2026-08-31T00:00:00-04:00";

function updateCountdown(){
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const d = Math.floor(diff / (1000*60*60*24));
  diff -= d*(1000*60*60*24);
  const h = Math.floor(diff / (1000*60*60));
  diff -= h*(1000*60*60);
  const m = Math.floor(diff / (1000*60));
  diff -= m*(1000*60);
  const s = Math.floor(diff / 1000);

  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");
  if(dd) dd.textContent = String(d).padStart(2,'0');
  if(hh) hh.textContent = String(h).padStart(2,'0');
  if(mm) mm.textContent = String(m).padStart(2,'0');
  if(ss) ss.textContent = String(s).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
  const userBtn = document.getElementById("btn-users");
  const merchBtn = document.getElementById("btn-merchants");
  if(userBtn){
    userBtn.addEventListener("click", () => { window.location.href = "users.html"; });
  }
  if(merchBtn){
    merchBtn.addEventListener("click", () => { window.location.href = "merchants.html"; });
  }
});
