$(document).ready(function (){
            $("#go_contact").click(function (){
                $(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#contact").offset().top
                    }, 2000);
                });
            });
        });