const input=document.getElementById('fontInput');
const preview=document.getElementById('previewText');
input.addEventListener('input',()=>preview.textContent=input.value||'ลองพิมพ์ข้อความของคุณ');
document.querySelectorAll('.weight-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.weight-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); preview.style.fontWeight=btn.dataset.weight;
}));
document.querySelector('[data-buy="commercial"]').addEventListener('click',()=>{
  alert('ต้นแบบหน้าเว็บพร้อมแล้ว — ขั้นถัดไปเชื่อมระบบชำระเงินจริงและดาวน์โหลดไฟล์อัตโนมัติ');
});
