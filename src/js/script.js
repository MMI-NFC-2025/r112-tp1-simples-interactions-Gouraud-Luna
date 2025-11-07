// TODO
const metrouge = document.querySelector('#a-mettre-en-rouge');
metrouge.style.color = 'red';
const clickrouge = document.querySelector('#en-rouge-suite-a-click');
clickrouge.addEventListener("click",()=>clickrouge.style.color = 'red');
const ttH2 = document.querySelectorAll('h2');
ttH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = 'red';
    });
});