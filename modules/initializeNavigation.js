const showdiv = document.querySelector('.addbook');
const sectioncontact = document.querySelector('.sectioncontact');
const sectionbook = document.querySelector('.sectionbook');

const navL1 = document.querySelector('.L1');
const navL2 = document.querySelector('.L2');
const navL3 = document.querySelector('.L3');


export const F1 = () => {
 sectioncontact.style.display = 'none';
 sectionbook.style.display = 'block';
 showdiv.style.display = 'none';
 console.log('koqekrq');
}

export const F2 = () => {
 showdiv.style.display = 'block';
 sectioncontact.style.display = 'none';
 sectionbook.style.display = 'none';
 console.log('koqekrq');
}

export const F3 = () => {
 sectioncontact.style.display = 'block';
 sectionbook.style.display = 'none';
 showdiv.style.display = 'none';
 console.log('koqekrq');
}


navL1.addEventListener('click', F1);
navL2.addEventListener('click', F2);
navL3.addEventListener('click', F3);