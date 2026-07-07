  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40));
 
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    Object.assign(navLinks.style, {
      flexDirection:'column', position:'fixed', top:'70px', right:'24px',
      background:'#241B3B', padding:'20px 28px', border:'1px solid rgba(255,255,255,0.15)', gap:'18px'
    });
  });
 
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target);} });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
 
  const form = document.getElementById('quoteForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = 'Thanks — your message has been noted. Our team will reach out shortly.';
    form.reset();
  });
 
  document.getElementById('year').textContent = new Date().getFullYear();
 
  // mining gallery: cursor-based tilt
  document.querySelectorAll('.gallery-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rotateX = ((y - r.height / 2) / (r.height / 2)) * -7;
      const rotateY = ((x - r.width / 2) / (r.width / 2)) * 7;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`Hello Degist International,

I would like to make an enquiry.

*Full Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Sector of Interest:* ${service}

*Message:*
${message}`;

    const whatsappURL = "https://wa.me/254712563484?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
