

console.log('auto')

function autoHeight(parentElementsClass){
      
    let parentElements = document.querySelector("." + parentElementsClass);
    const elements = document.querySelectorAll("."+parentElementsClass+" > *");
    const counter = elements.length
    const counterHalf = Math.ceil(counter/2)
    
    let heightBlock = 0;
    
    for(let i=0; i<counterHalf; i++) {
        let stylesLeft = window.getComputedStyle(elements[i]);
        let heightLeft = parseFloat(stylesLeft.getPropertyValue('height')) + parseFloat(stylesLeft.getPropertyValue('margin-bottom'))
    
        if(i+counterHalf < counter ){
            let stylesRight = window.getComputedStyle(elements[i+counterHalf]);
            let heightRight = parseFloat(stylesRight.getPropertyValue('height')) + parseFloat(stylesRight.getPropertyValue('margin-bottom'))
            if (heightLeft === heightRight){
                heightBlock += heightLeft

            }else {
                // heightBlock += Math.max(heightLeft, heightRight)
                // elements[i].style.height = Math.max(heightLeft, heightRight)+"px"
                // elements[i+counterHalf].style.height = Math.max(heightLeft, heightRight) + "px"

                if(heightLeft > heightRight){
                    elements[i+counterHalf].style.height = heightLeft + "px"
                } else {
                elements[i].style.height = heightRight+"px"
                }
        }
    }else {
        heightBlock += heightLeft
    }
    
    }
    parentElements && (parentElements.style.height = (heightBlock+15)+"px");
}

autoHeight("footer__links-list")


// setInterval(()=>{
//     // Створити новий елемент li
//     var newLi = document.createElement('li');
//     newLi.className = 'footer__links-item'; // Додаємо клас
    
//     // Створити новий елемент a
//     var newLink = document.createElement('a');
//     newLink.className = 'footer__links-link'; // Додаємо клас
//     newLink.href = '#'; // Встановлюємо атрибут href
//     newLink.textContent = 'Help & Support'; // Встановлюємо текст внутрішнього вмісту
    
//     // Додаємо елемент a як дочірній для елемента li
//     newLi.appendChild(newLink);
    
//     // Додаємо елемент li до потрібного батьківського елемента в DOM
//     // Наприклад, можливо, у вас є вже існуючий список ul з класом "footer__links-list"
//     var parentUl = document.querySelector('.footer__links-list');
//     parentUl.appendChild(newLi);

// },5000)

// let parentElements1 = document.getElementsByClassName('footer__links-item').length
// console.log(parentElements1)
// setInterval(()=>{
//     let parentElements2 = document.getElementsByClassName('footer__links-item').length
//     console.log(parentElements2)
//     if(!(parentElements1===parentElements2)){
//     console.log('parentElements2*********')

//         parentElements1 = parentElements2
//         autoHeight("footer__links-list");
//     }
// }, 500)

