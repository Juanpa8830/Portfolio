/* eslint-disable no-unused-vars */

let VisibleMenu = false;

// hide/show menu

function ShowHideMenu() {
  if (VisibleMenu) {
    document.getElementById('nav').classList = '';
    VisibleMenu = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    VisibleMenu = true;
  }
}

function select() {
  // hide menu once I select an option

  document.getElementById('nav').classList = '';
  VisibleMenu = false;
}

// skills animations
function skillsEffect() {
  const skills = document.getElementById('skills');
  const DistanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (DistanceSkills >= 300) {
    const habilidades = document.getElementsByClassName('progress');
    habilidades[0].classList.add('javascript');
    habilidades[1].classList.add('htmlcss');
    habilidades[2].classList.add('react');
    habilidades[3].classList.add('Ruby');
    habilidades[4].classList.add('postgre');
    habilidades[5].classList.add('Github');
    habilidades[6].classList.add('Collaboration');
    habilidades[7].classList.add('Communication');
    habilidades[8].classList.add('discipline');
    habilidades[9].classList.add('creativity');
    habilidades[10].classList.add('Problem-Solving');
    habilidades[11].classList.add('planning');
  }
}
// Apply skills animations when scrolling window
window.onscroll = function scrollHandler() {
  skillsEffect();
};

select();

// email form validation
const errorMessage = document.getElementById('error_message');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    errorMessage.textContent = 'Only LowerCase characters are allowed in email!!!';
    errorMessage.style.display = 'inline-block';
  } else {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  }
});

window.onload = function resetForm() {
  const form = document.getElementById('form');
  form.reset();
};
