$(document).ready(function(){
    $(function(){
        $("#head").load("./includes/meta.html");
        $("#header").load("./includes/header.html");
        $("#footer").load("./includes/footer.html");
    });
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    $('#accordian li h3').click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $('#accordian ul .row').not().slideUp();
        $(this).next().slideDown(function(){
            $parent.addClass('active').siblings().removeClass('active');
        });
    });