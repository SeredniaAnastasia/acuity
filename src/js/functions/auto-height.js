

console.log('auto')

function autoHeight(parentElementsClass){
    
    let parentElements = document.querySelector("." + parentElementsClass);
    const elements = document.querySelectorAll("."+parentElementsClass+" > li");
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
                heightBlock += Math.max(heightLeft, heightRight)
                elements[i].style.height = Math.max(heightLeft, heightRight)+"px"
                elements[i+counterHalf].style.height = Math.max(heightLeft, heightRight) + "px"
        }
    }else {
        heightBlock += heightLeft
    }
    
    }
    parentElements && (parentElements.style.height = (heightBlock+15)+"px");
}

autoHeight("footer__links-list")