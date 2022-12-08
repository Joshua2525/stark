function originalText(){

    document.getElementById('faqs').style.display="block";
    document.getElementById('community1').style.display="none";
    document.getElementById('community2').style.display="none";
    document.getElementById('community3').style.display="none";

}

function changeText(){

    document.getElementById('faqs').style.display="none";
    document.getElementById('community1').style.display="block";
    document.getElementById('community2').style.display="none";
    document.getElementById('community3').style.display="none";

}

function changeText1(){

    document.getElementById('faqs').style.display="none";
    document.getElementById('community1').style.display="none";
    document.getElementById('community2').style.display="block";
    document.getElementById('community3').style.display="none";
}

function changeText2(){

    document.getElementById('faqs').style.display="none";
    document.getElementById('community1').style.display="none";
    document.getElementById('community2').style.display="none";
    document.getElementById('community3').style.display="block";
}


const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})

