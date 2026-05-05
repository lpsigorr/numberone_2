// ====== PAGE NAVIGATION ======
function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Remove active from all nav links
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Activate nav link
  const navLink = document.getElementById('nav-' + page);
  if (navLink) navLink.classList.add('active');

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Prevent default
  return false;
}

// ====== TABS (Professionnels page) ======
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const content = document.getElementById('tab-' + tab);
  if (content) content.classList.add('active');

  // Find and activate the clicked button
  event.target.classList.add('active');
}

// ====== MOBILE MENU ======
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ====== HERO IMAGE SLIDESHOW ======
let heroIdx = 0;
const heroImgs = document.querySelectorAll('.hero-photos img');

function cycleHero() {
  heroImgs.forEach(img => img.classList.remove('active'));
  heroIdx = (heroIdx + 1) % heroImgs.length;
  heroImgs[heroIdx].classList.add('active');
}

if (heroImgs.length > 0) {
  setInterval(cycleHero, 3500);
}

// ====== PREVENT DEFAULT ON NAV LINKS ======
document.querySelectorAll('.nav-links a[onclick]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});