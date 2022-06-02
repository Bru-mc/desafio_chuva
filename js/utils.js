const createParagraphsInElement = (textArray, element, className) =>{
  textArray.forEach((text)=> {
    const paragraph = document.createElement('p');
    paragraph.appendChild(text);
    if(className){
      paragraph.className = className;
    }
    element.appendChild(paragraph);
  }); 
}
// const createElementsInElement = (objElements, element) =>{
//   Object.keys(objElements).forEach((key)=>{

//   })
// }