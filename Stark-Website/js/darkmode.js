// SWITCHING IMAGE 

var icon = document.getElementById("icon");
        var LineDown = document.getElementById('linedown');
        var LineUp = document.getElementById('lineup');
        var LineDownthree = document.getElementById('linethree');
        var LineDownfour = document.getElementById('linefour');
        var LineDownfive = document.getElementById('linefive');
        var LineBox1 = document.getElementById('line-box1');
        var LineBox2 = document.getElementById('line-box2');
        var LineBox3 = document.getElementById('line-box3');
        var LineBox4 = document.getElementById('line-box4');


        icon.onclick = function()
            {
                document.body.classList.toggle("dark-theme");
                if(document.body.classList.contains("dark-theme"))
                {
                    icon.src="img/moon.png";
                    logo1.src="img/dark-logo.png";
                    logo2.src="img/dark-logo.png";

                    // BOX FOR TEAM LINE DARK MODE

                    LineDown.src = "img/line-down-dark.png";
                    LineUp.src = "img/line-up-dark.png";
                    LineDownthree.src = "img/line-down-dark.png";
                    LineDownfour.src = "img/line-up-dark.png";
                    LineDownfive.src = "img/line-down-dark.png";

                    // BOX FOR ROADMAP LINE DARK MODE

                    LineBox1.src = "img/line-dark-box1.png";
                    LineBox2.src = "img/line-dark-box2.png";
                    LineBox3.src = "img/line-dark-box3.png";
                    LineBox4.src = "img/line-dark-box4.png";

                }
                else{
                    icon.src="img/sun.png";
                    logo1.src="img/light-logo.png";   
                    lineup.src="img/line-up.png";   
                    logo2.src="img/light-logo.png";

                    // BOX FOR TEAM LINE LIGHT MODE

                    LineDown.src = "img/line-team.png";
                    LineUp.src = "img/line-up.png";
                    LineDownthree.src = "img/line-team.png";
                    LineDownfour.src = "img/line-up.png";
                    LineDownfive.src = "img/line-team.png";

                    // BOX FOR ROADMAP LINE LIGHT MODE

                    LineBox1.src = "img/line-box1.png";
                    LineBox2.src = "img/line-box2.png";
                    LineBox3.src = "img/line-box3.png";
                    LineBox4.src = "img/line-box4.png";
                    
                }
            }


// THEME SWITCHING

    $(".theme-switch").on("click", () => {
        $("body").toggleClass("light-theme");
    });