const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];


  // individuo elementi di interesse

  const slider = document.getElementById('containerpic')

  const sx = document.getElementById('sx')
  const dx = document.getElementById('dx')
  
  

  let arrowClick = 0;

  // aggiungi controlli

  sx.addEventListener('click', function(){
        
        document.querySelector('.item.active').classList.remove('active')
        arrowClick--;
        
        imgs[arrowClick].classList.add('active')
        console.log(arrowClick)
  })


  dx.addEventListener('click', function(){
    alert('ok')
    document.querySelector('.item.active').classList.remove('active')
    arrowClick++;

    imgs[arrowClick].classList.add('active')
    console.log(arrowClick)
})




 // slider.innerHTML += '<img src="./'+images[0].image+'" alt="" class="item active"></img>'

let primo = 'active';

 images.forEach( (img)=> {


 slider.innerHTML += '<img src="./'+img.image+'" alt="" class="item '+primo+'"></img>'

 primo = '';
 
}
)


const imgs = document.getElementsByClassName('item');
console.log(imgs)




