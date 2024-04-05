// Pour compenser la hauteur de la section fixée afin d'éviter que le contenu ne soit caché sous celle-ci
const fixedSectionHeight = document.getElementById('fixed-section').offsetHeight;
document.querySelector('.content').style.marginTop = fixedSectionHeight + 'px';
