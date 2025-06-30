
function blagueAleatoire() {
  const apiURL = "https://projet-de-selection-back.onrender.com/blagues/random"
  const questionHTML = document.getElementById("question");
  const reponseHTML = document.getElementById("reponse");

  fetch (apiURL).then(reponseApi => {
    if (!reponseApi.ok) {
      throw new Error('Erreur lors de la demande de blague');
    }
    return reponseApi.json();
  })
  .then(blague => {
    questionHTML.textContent = blague.question;
    reponseHTML.textContent = blague.reponse;
  })
  .catch(error => {
    console.error('Error: ', error);
  });
};