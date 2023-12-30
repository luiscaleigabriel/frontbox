
function actionMenu() {

    const menuToggle = document.getElementById('toggle');
    const menuItens = document.getElementById('navbarmobile');

    menuToggle.classList.toggle('action-menu');
    menuItens.classList.toggle('open-menu');

}