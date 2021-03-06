//Elementos
const resumeContainer = document.querySelector('.main-middle__resume-container');
const resumeContainerCopy = resumeContainer.cloneNode(true);

const discussionInitialContent = document.querySelector('.main-middle__discussions-initial-content');
const discussionInitialContentCopy = discussionInitialContent.cloneNode(true);

const cardContent = document.querySelector('.main_middle_card-content');
const cardContentCopy = cardContent.cloneNode(true);

const btnSeeMore = document.querySelector('.main-middle__see-more');
//Variavel para condição de fechamento
let canCloseResume = false;
let canCloseDiscussionForm = false;
let canCloseTopicSubmitted = false;


const discussionForm = `<p class="main-middle__discussions-p main-middle__discussions-form-p">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
<form class="main-middle__discussions-form flex flex--column">
  <label class="main-middle__discussions-form__label" for="issue">Assunto</label>
  <input class="main-middle__discussions-form__input" type="text" id="form-issue" name="issue" value="Defina um tópico sucinto para notificar os autores...">
  <label class="main-middle__discussions-form__label" for="content">Conteúdo</label>
  <input class="main-middle__discussions-form__input" type="text" id="form-content" name="content">
  <div class="main-middle__discussions-form__buttons flex flex--align-center flex--justify-space-between">
    <div class="flex">
      <img class="main-middle__discussions-form__icons" src="./assets/Shape.png" alt="bolder">
      <img class="main-middle__discussions-form__icons" src="./assets/Shape2.png" alt="italic">
    </div>
    <input class="main-middle__discussions-form__btnSubmit font-quicksand"type="submit" value="Enviar" onclick="submitTopic()">
  </div>
</form>
<div class="main-middle__divider"></div>`;

const topicSubmitted = `<h3 class="main-middle__h3 font-roboto">Seu tópico foi enviado com sucesso! :D</h3>
<p class="main-middle__discussions-p main-middle__discussions-submitted-p">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
<a class="main-middle__discussions-a font-quicksand" href="">Descubra outros trabalhos!</a>
<div class="main-middle__discussions-create-topic main-middle__discussions-create-new-topic">
  <div class="main-middle__divider"></div>
  <button
    class="main-middle__btn-create-topic main-middle__btn-create-new-topic font-quicksand flex flex--align-center flex--justify-center absolute" onclick="openCreateTopic()">
    criar novo tópico
  </button>
</div>
<div class="main-middle__discussions-submitted__card-topic--in-process relative">
  <div class="main-middle__discussions-submitted__card-topic-overlay flex flex--column flex--align-center flex--justify-center absolute">
    <img class="main-middle__card-topic-overlay__icon" src="./assets/doubleChecked.png" alt="checked">
    <h3 class="main-middle__h3 main-middle__card-topic-overlay__h3 font-quicksand">Aguardando feedback dos autores</h3>
    <a class="main-middle__discussions-a font-segoe-ui" href="">Editar tópico</a>
  </div>
  <div class="main-middle__card-topic main-middle__discussions-submitted__card-topic">
    <h3 class="main_middle__card-question_title font-quicksand">Assunto da pergunta aparece aqui</h3>
    <h5 class="main_middle__card-author-username font-quicksand">Carlos Henrique Santos</h5>
    <p class="main-middle__discussions-p main_middle__card-content font-quicksand">Comecinho da pergunta
      aparece aqui resente relato inscreve-se no campo da análise
      da dimensão e impacto de processo formativo situado impacto de processo formativo processo<span
        class="dots">...</span>
    </p>
  </div>
</div>`

const cardComments = `<p class="main_middle__card-content-p font-quicksand">
Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo 
formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e 
impacto de processo formativo situado impacto de processo formativo processo?
</p>

<div class="main_middle__card-footer flex flex--justify-space-between">
  <img src="./assets/maisInformacoes.png" alt="mais informações" class="more_info_icon">
  <button class="main_middle__btn-like flex flex--align-center flex--justify-center"><img src="./assets/like.png" alt="like"></button>
  <p class="main_middle__card-footer__p .font-segoe-ui">4 likes</p>
  <p class="main_middle__card-footer__p .font-segoe-ui">4 respostas</p>
</div>

<div class="main-middle__card-comments">
  <div class="main_middle__card-comment-container flex flex--column flex--justify-center">
    <div class="flex flex--justify-space-between">
      <h5 class="main_middle__card-author-username bolder font-quicksand bolder">Adriano da Silva</h5>
      <div class="flex">
        <span class="main_middle__card-author-type">Autor</span>
        <img class="main_middle__card-check-icon" src="./assets/doublecheckorange.png" alt="doublecheck">
      </div>
    </div>
    <p class="main_middle__card-content-p font-quicksand">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se
     no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
  </div>

  <div class="main_middle__card-comment-container flex flex--column flex--justify-center">
    <div>
      <h5 class="main_middle__card-author-username font-quicksand bolder white">Carlos Henrique Santos</h5>
    </div>
    <p class="main_middle__card-content-p font-quicksand">Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.</p>
    <p class="main_middle__card-content-p font-quicksand">Obrigada pela resposta, muito interessante o seu trabalho! </p>
  </div>

  <div class="main_middle__card-comment-container flex flex--column flex--justify-center">
    <div class="flex flex--justify-space-between">
      <h5 class="main_middle__card-author-username font-quicksand bolder">Carmila Ferreira Andrade</h5>
      <div class="flex">
        <span class="main_middle__card-author-type">Coautor</span>
        <img class="main_middle__card-check-icon" src="./assets/doublecheckorange.png" alt="doublecheck">
      </div>
    </div>
    <p class="main_middle__card-content-p font-quicksand">Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo 
    formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
    <p class="main_middle__card-content-p font-quicksand">Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo 
      formativo processo.</p>
  </div>

  <div class="main_middle__card-comment-container flex flex--column flex--justify-center">
    <div class="flex flex--justify-space-between">
      <h5 class="main_middle__card-author-username font-quicksand bolder">Ana Carolina</h5>
      <div class="flex">
        <span class="main_middle__card-author-type">Coautor</span>
        <img class="main_middle__card-check-icon" src="./assets/doublecheckorange.png" alt="doublecheck">
      </div>
    </div>
    <p class="main_middle__card-content-p font-quicksand">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo 
    formativo processo.</p>
  </div>
</div>`

//handler functions
const seeMore = () =>{
  const resumeDiv = document.createElement('div');
  //criando um array para armazenar os textos
  const texts = [];
  //adicionando ao array de textos os textos do resumo
  texts.push(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.'));
  texts.push(document.createTextNode('Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.'));
  texts.push(document.createTextNode('Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.'));
  texts.push(document.createTextNode('Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
  //Criando paragrafos com o array de textos, setando a classe "main-middle__resume font-quicksand" para todos e adicionando à resumeDiv
  createParagraphsInElement(texts, resumeDiv, "main-middle__resume font-quicksand")
  //resetando o innerHTML do resumo container para ser a nova div
  resumeContainer.innerHTML = resumeDiv.innerHTML;
  //dando permissão para fechar o container do ver mais
  canCloseResume = true;
}
const openCreateTopic = () =>{
  //mudando o innerHTML
  discussionInitialContent.innerHTML = discussionForm;
  //dando permissão para fechar o container do form
  canCloseDiscussionForm = true;
}
const submitTopic = () =>{
  discussionInitialContent.innerHTML = topicSubmitted;
  canCloseDiscussionForm = false;
  canCloseTopicSubmitted = true;
}
const openComments = () =>{
  cardContent.innerHTML = cardComments;
}


//verifica o array buttonsOpen, se o target tiver incluido nesse objeto, a function close desconsidera
const closeSeeMore = (event) =>{
    //verifica se o target do click não é o btn de ver mais e se temos permissão para fechar o container, voltar ao default 
    if(event.target.innerHTML !== btnSeeMore.innerHTML && canCloseResume === true){
        //reseta o innerHTML para o elemento antigo de antes de clicar no ver mais
        console.log(event)
        resumeContainer.innerHTML = resumeContainerCopy.innerHTML;
        //reseta a permissão de fechar o ver mais para o estado inicial, que é false
        canCloseResume = false;
    }
}
const nav = document.querySelector('.close');
const btnTeste2 = document.querySelector('.teste2');
const btnTeste1 = document.querySelector('.teste1');

const abrirMenu = () =>{
  // nav.style.opacity = "100%";
  nav.style.display = "flex";
  nav.style.zIndex = "4";
  btnTeste2.style.display = "flex";
  // btnTeste2.zIndex = "5";
  btnTeste1.style.display = "none";
}

const fecharMenu = () =>{  
  nav.style.display = "none";
  // nav.style.opacity = "0";
  btnTeste2.style.display = "none";
  btnTeste1.style.display = "flex";
}

