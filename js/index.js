const resumeContainer = document.querySelector('.resume_container');
const resumeContainerCopy = resumeContainer.cloneNode(true);
const btnSeeMore = document.querySelector('.see_more');
let canCloseResume = false;

const seeMore = () =>{
    //criando um array para armazenar os textos
    const resumeDiv = document.createElement('div');
    const text = [];
    //adicionando ao array de textos os textos do resumo
    text.push(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.'));
    text.push(document.createTextNode('Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.'));
    text.push(document.createTextNode('Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.'));
    text.push(document.createTextNode('Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
    //percorrendo o array de li e adicionando cada um a Ul
    text.forEach((text)=> {
        let p = document.createElement('p');
        p.appendChild(text);
        p.className = "resume";
        resumeDiv.appendChild(p);
    }); 
    //restando o innerHTML do resumo para ser a nova ul
    resumeContainer.innerHTML = resumeDiv.innerHTML;
    //dando permissão para fechar o container do ver mais
    canCloseResume = true;
}

const closeSeeMore = (event) =>{
    //verifica se o target do click não é o btn de ver mais e se temos permissão para fechar o container, voltar ao default 
    if(event.target.innerHTML !== btnSeeMore.innerHTML && canCloseResume === true){
        //reseta o innerHTML para o elemento antigo de antes de clicar no ver mais
        resumeContainer.innerHTML = resumeContainerCopy.innerHTML;
        //reseta a permissão de fechar o ver mais para o estado inicial, que é false
        canCloseResume = false;
    }
}