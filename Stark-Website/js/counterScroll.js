//    COUNTER SCROLL HOME      //

(function ($) {
    var controller = new ScrollMagic.Controller();

    /*------------------------------------*\
        $NUMBERS
    \*------------------------------------*/

            function animateNumber() {
                $(".js-count").each(function () {
                    var $this = $(this),
                        countTo = $this.attr("data-count");
                    $({ countNum: $this.text() }).animate(
                        {
                            countNum: countTo
                        },
                        {
                            duration: 1500,
                            easing: "linear",
                            step: function () {
                                // Count up with commas
                                $this.text(Math.floor(this.countNum).toLocaleString("en"));
                            },
                            complete: function () {
                                // Add comma after done counting
                                $this.text(this.countNum.toLocaleString("en"));
                                var data=document.getElementById('users').innerText;    
                                
                                if(data = "999+"){
                                    users.innerText = "1K+"; 
                                }
                                
                            }
                        }
                    );
                });
            }

            new ScrollMagic.Scene({
                triggerElement: ".count"
            })
                .on("enter", function () {
                    $(".count").addClass("pod--animated");
                    animateNumber();
                })
                .on("leave", function () {
                    $(".count").removeClass("pod--animated");
                })
                .addTo(controller);
        })(jQuery);







//    COUNTER SCROLL CONVERT DESKTOP      //


(function ($) {
    var controller = new ScrollMagic.Controller();

    /*------------------------------------*\
        $NUMBERS
    \*------------------------------------*/

            function animateNumber() {
                $(".js-count2").each(function () {
                    var $this = $(this),
                        countTo = $this.attr("data-count");
                    $({ countNum: $this.text() }).animate(
                        {
                            countNum: countTo
                        },
                        {
                            duration: 3000,
                            easing: "linear",

                            step: function () {
                                // Count up with commas
                                $this.text(Math.floor(this.countNum).toLocaleString("en"));
                            },
                            complete: function () {
                            // Add comma after done counting
                            $this.text(this.countNum.toLocaleString("en"));
                            var data=document.getElementById('users2').innerText;    
                                
                                if(data = "999+"){
                                    users2.innerText = "1K+"; 
                            }
                        }
                        }
                    );
                });
            }

            new ScrollMagic.Scene({
                triggerElement: ".convert-section"
            })
                .on("enter", function () {
                    $(".convert-section").addClass("pod--animated");
                    animateNumber();
                })
                .on("leave", function () {
                    $(".convert-section").removeClass("pod--animated");
                })
                .addTo(controller);
        })(jQuery);





// COUNTER SCROLL JS CONVERT MOBILE SIZE   //


(function ($) {
    var controller = new ScrollMagic.Controller();

    /*------------------------------------*\
        $NUMBERS
    \*------------------------------------*/

            function animateNumber() {
                $(".js-count3").each(function () {
                    var $this = $(this),
                        countTo = $this.attr("data-count");
                    $({ countNum: $this.text() }).animate(
                        {
                            countNum: countTo
                        },
                        {
                            duration: 2500,
                            easing: "linear",

                            step: function () {
                                // Count up with commas
                                $this.text(Math.floor(this.countNum).toLocaleString("en"));
                            },
                            complete: function () {
                            // Add comma after done counting
                            $this.text(this.countNum.toLocaleString("en"));
                            var data=document.getElementById('users3').innerText;    
                                
                                if(data = "999+"){
                                    users3.innerText = "1K+"; 
                            }
                        }
                        }
                    );
                });
            }

            new ScrollMagic.Scene({
                triggerElement: ".right-texts2"
            })
                .on("enter", function () {
                    $(".right-texts2").addClass("pod--animated");
                    animateNumber();
                })
                .on("leave", function () {
                    $(".right-texts2").removeClass("pod--animated");
                })
                .addTo(controller);
        })(jQuery);
