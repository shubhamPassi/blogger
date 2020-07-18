$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /** click Event On Toggle Menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});