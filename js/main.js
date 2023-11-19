
const colors=["red", "green","blue", "pink", "brown", "yellow"];
const colorPickList=[...colors,...colors];
const cardsCount=colorPickList.length;
const cards=document.querySelector('.cards');

let activeCard=null;
let countAppearingCard=0;

function buildCard(color)
{
    let parent=document.createElement('div');
    parent.classList.add('col-md-3');
    let child=document.createElement('div');
    child.classList.add('card');
    child.setAttribute('data-color',color); 
    child.setAttribute('data-appearingColor','false');
    parent.appendChild(child);

    parent.addEventListener('click',function(){
        child.style.backgroundColor=color;
        let child_appearing_color=child.getAttribute('data-appearingColor');
        if(activeCard === child || child_appearing_color === 'true')
        {
            return;
        }
        if(activeCard === null)
        {
            activeCard=child;
            return;
        }

        // card match
        let activeColor=activeCard.getAttribute('data-color');
        let childColor=child.getAttribute('data-color');
        if(activeColor === childColor)
        {
            child.setAttribute('data-appearingColor',true);
            activeCard.setAttribute('data-appearingColor',true);
            activeCard=null;
            countAppearingCard = countAppearingCard + 2;
            if(countAppearingCard === cardsCount)
            {
                alert('you win ! refersh page again to play');
            }
            return;
        }


        //card not match 
        setTimeout(function(){
            activeCard.style.backgroundColor=null;
            child.style.backgroundColor=null;
            activeCard=null;
            return;
        },1000)
    })
    return parent;
}

for(let i=0 ; i<cardsCount ; i++)
{                     
    let randomIndex=Math.floor(Math.random()*colorPickList.length); 
    let color=colorPickList[randomIndex];
    colorPickList.splice(randomIndex,1);
    let card=buildCard(color);
    cards.appendChild(card);   
}































// dom => docement object model 
/**
 * create element in js and access to file html 
 * change style element html
 * add class ,remove class,replace ,toggle class 
 * make event on element 
 */

    //                          html => dom 

    //                  head                   body 
                     
    // title link meta                     h1 p 
/**
 * getElementById => return one element
 * getElementsByClassName => return html collection 
 * getElementsByName=> retrun nodelist
 * getElementsByTagName => return html collection 
 * querySelectorAll =>  retrun nodelist
 * querySelector=> return one element
 */

    // let demo = document.getElementsByClassName('.demo');
    // let demo =document.getElementById('demo');
    // demo.addEventListener('mouseover',function (){
    //     demo.classList.toggle('text-info');
    // })
    // demo.style.color='red';
    // demo.style.backgroundColor='blue';
    // demo.classList.toggle('text-info');

    // console.log(Array.from(demo));
                     