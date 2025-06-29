const apiURL = "https://projet-de-selection-back.onrender.com/blagues/random"
const questionHTML = document.getelementByClassName("question");
const questionHTML = document.getelementByClassName("reponse");

//test
let button = document.querySelector('button');
button.addEventListener('click', function(){
  alert('Test');
});
/*
function blagueAleatoire () {
  fetch (apiURL).then(reponseApi => {
    if (!reponseApi.ok) {
      throw new Error('Erreur lors de la demande de blague');
    }
    return reponseApi;
  })
  .then(blague => {
    questionHTML.textContent = "test question";
    reponseHTML.textContent = "test réponse";
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
*/
