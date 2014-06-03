/******************************************************/
/*       cyr-loadingOverlay jquery plugin             */
/*                                                    */
/* Author : Cyrakuse (cyrakuse@live.fr)               */
/* Version : 1.0.0                                    */
/******************************************************/

(function ( $ ) {
    // Fonction qui démarre le plugin
    $.fn.loadingStart=function(options) {
        //Définition des options
        var settings = $.extend({
            overlay_color: "#FFFFFF",
            loading_img: 'loading-spinner-large.gif',
            overlay_opacity: 0.8,
            text: 'Chargement en cours...',
            textColor: '#000',
            textSize: '20px'
        }, options);
        //Définition des styles CSS
        var style="<style id='loading-style'>\n";
        style+=".loading-overlay {\n";
        style+="position: absolute;\n";
        style+="top: 0;\n";
        style+="left: 0;\n";
        style+="width: 100%;\n";
        style+="height: 100%;\n";
        style+="}\n";
        style+=".loading-overlay {\n";
        style+="z-index: 1010;\n";
        style+="background: "+settings.overlay_color+";\n";
        style+="opacity: "+settings.overlay_opacity+";\n";
        style+="}\n";
        style+=".loading-img {\n";
        style+="z-index: 1020;\n";
        style+="position: relative;\n";
        style+="background: transparent url('"+settings.loading_img+"') 50% 50% no-repeat;\n";
        style+="height: 64px;\n";
        style+="margin: auto;\n";
        style+="top: 30%;\n";
        style+="}\n";
        style+=".loading-text {\n";
        style+="color: "+settings.textColor+";\n";
        style+="z-index: 1030;\n";
        style+="position: relative;\n";
        style+="text-align: center;\n";
        style+="top: 30%;\n";
        style+="width: 100%;\n";
        style+="font-size: "+settings.textSize+";\n";
        style+="}\n";
        
        // injecter les styles CSS
        this.append(style);
        // injecter le cadre blanc (overlay)
        this.append("<div class='loading-overlay'><div class='loading-img'></div><div class='loading-text'><b>"+settings.text+"</b></div></div>");
    }
    // Fonction qui arrête le plugin
    $.fn.loadingStop=function() {
        // Supprime les styles CSS
        this.children("#loading-style").remove();
        // Supprime le cadre blanc (overlay)
        this.children(".loading-overlay").remove();
        // Supprime l'image de chargement
        this.children(".loading-img").remove();
    }


}( jQuery ));
