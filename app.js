const input=document.getElementById('fontInput');
const preview=document.getElementById('previewText');
input.addEventListener('input',()=>preview.textContent=input.value||'ลองพิมพ์ข้อความของคุณ');
document.querySelectorAll('.weight-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.weight-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); preview.style.fontWeight=btn.dataset.weight;
}));
document.querySelector('[data-buy="commercial"]').addEventListener('click',()=>{
  window.location.assign('https://buy.stripe.com/9B68wPeuT5lUcDaaJCdIA00');
});
