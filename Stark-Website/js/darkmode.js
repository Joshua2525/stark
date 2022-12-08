// SWITCHING IMAGE 

var icon = document.getElementById("icon");
        var LineDown = document.getElementById('linedown');
        var LineUp = document.getElementById('lineup');
        var LineDownthree = document.getElementById('linethree');
        var LineDownfour = document.getElementById('linefour');
        var LineDownfive = document.getElementById('linefive');


        icon.onclick = function()
            {
                document.body.classList.toggle("dark-theme");
                if(document.body.classList.contains("dark-theme"))
                {
                    icon.src="img/sun.png";
                    logo1.src="img/light-logo.png";   
                    lineup.src="img/line-up.png";   
                    logo2.src="img/light-logo.png";
                    LineDown.src = "img/line-team.png";
                    LineUp.src = "img/line-up.png";
                    LineDownthree.src = "img/line-team.png";
                    LineDownfour.src = "img/line-up.png";
                    LineDownfive.src = "img/line-team.png";


                }
                else{
                    icon.src="img/dark1.png";
                    logo1.src="img/dark-logo.png";
                    logo2.src="img/dark-logo.png";
                    LineDown.src = "img/line-down-dark.png";
                    LineUp.src = "img/line-up-dark.png";
                    LineDownthree.src = "img/line-down-dark.png";
                    LineDownfour.src = "img/line-up-dark.png";
                    LineDownfive.src = "img/line-down-dark.png";

                    
                }
            }


// THEME SWITCHING

    $(".theme-switch").on("click", () => {
        $("body").toggleClass("light-theme");
    });