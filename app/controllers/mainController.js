const mainController = {

    // méthode pour la page d'accueil
    homePage(request, response) {
      response.render("index")
    }
}

module.exports = mainController;