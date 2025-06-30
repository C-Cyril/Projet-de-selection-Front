
function blagueAleatoire() {
  const apiURL = "https://projet-de-selection-back.onrender.com/blagues/random"
  const questionHTML = document.getElementById("question");
  const reponseHTML = document.getElementById("reponse");
  
  questionHTML.textContent = "test Ques";
  reponseHTML.textContent = "test Rep";
  
  fetch (apiURL).then(reponseApi => {
    if (!reponseApi.ok) {
      throw new Error('Erreur lors de la demande de blague');
    }
    return reponseApi.json();
  })
  .then(blague => {
    console.log(blague);
    questionHTML.textContent = "test question";
    reponseHTML.textContent = "test réponse";
  })
  .catch(error => {
    console.error('Error: ', error);
  });
  
};

