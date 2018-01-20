/*
    closure
    defini la fonction anonyme, son scope et ses "dependances", en l'occurence jQuery qui retourne sa bonne initialisation
    (function(){ ... })(jQuery)
 */
(function () {
    /*
        définition des variables
     */
    let seriesList;
    let seriesEpisodesList;

    /*
        definition de la fonction qui initialise l'ecoute  sur le champ de saisie et le traitement lié
     */
    let initSeriesTitleSearchProcessing = function () {
        $("#seriesTitleSearch").on("keyup", event => {
                /*
                    du fait de l'utilisation d'une fonction fléchée le 'this' dans cette fonction fait référence au 'this' de (function(){...}(jQuery))
                    on ne peut donc pas utiliser $(this).val() pour acceder a l'input
                    on va alors utiliser $(event.currentTarget), soit l'element sur lequel a été declenché l'evenement
                  */
                let seriesTitleSearchValue = $(event.currentTarget)
                    .val()
                    .toLowerCase() // transforme en minuscule
                    .trim(); // enleve les blancs au debut et fin de chaine

                /*
                    si le champ recupéré est vide ben ca sert a rien de faire
                 */
                if (seriesTitleSearchValue == "") {
                    $("#seriesDetail").html($("<li>la t'as rien tappé </li>"));

                } else {
                    $("#seriesDetail").html("");// on remet le contenu affiché a vide

                    /*
                        on filtre la liste des series pour retrouver celles qui correspondent
                     */
                    let matchingSeries = seriesList.filter(
                        a => a.seriesName.toLowerCase().indexOf(seriesTitleSearchValue) > -1
                    );

                    /*
                    creation d'un buffer/tampon on l'on stocke ce que l'on souhaite ecrire
                     */
                    let bufferString = "";

                    // boucle sur le tableau des series qui correspondent
                    for (let matchingSerie of matchingSeries) {
                        bufferString += "<li>";
                        bufferString += matchingSerie.seriesName;
                        bufferString += "<ul>";
                        /*
                            on filtre la liste des listes d'episodes pour retrouver celle qui correspond
                        */
                        let matchingSerieEpisodesLists = seriesEpisodesList.filter(
                            b => b.serie_id == matchingSerie.id
                        );

                        /*
                            on sait que dans tous les cas un tableau est retourné
                            mais on ne souhaite que la premiere liste de listes
                        */
                        if (matchingSerieEpisodesLists.length) {
                            let matchingSerieEpisodesList = matchingSerieEpisodesLists[0];

                            // boucle sur le tableau des listes d'episode qui correspondent
                            for (let episode of matchingSerieEpisodesList.episodes_list) {
                                bufferString += "<li>" + episode.episodeName + "</li>";
                            }
                        }

                        bufferString += "</ul>";
                        bufferString += "</li>";
                    }
                    $("#seriesDetail").append($(bufferString));
                }
            }
        );

        /*
            tentative de recuperation du tableau de series
         */
        $.ajax("js/seriesList.json")
            .done(data => {
                /*
                    si ca marche on met le tableau recupéré dans la liste des series
                    et on tentve de recuperer le tableau des episodes
                */
                seriesList = data;
                $.ajax("js/seriesEpisodesList.json")
                    .done(data => {
                        /*
                            si ca marche on met le tableau recupéré dans la liste des episodes
                            et on initialise l'écoute sur le champ de saisie
                        */
                        seriesEpisodesList = data;
                        initSeriesTitleSearchProcessing();
                    })
                    .fail(function () {
                        /* si ca marche pas ben c'est dla merde */
                        alert("error");
                    });
            })
            .fail(function () {
                /* si ca marche pas ben c'est dla merde */
                alert("FAIL");
            })
            .always(function () {
                alert("j'ai fait ce que j'ai pu");
            });
    }
})(jQuery)
