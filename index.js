let buttons = document.querySelectorAll(".portfolio-menu button");

let cards = document.querySelectorAll(".card");

buttons.forEach((button)=>{

    button.addEventListener("click", ()=>{

        let filter = button.innerText;

        cards.forEach((card)=>{

            if(filter == "All"){

                card.style.display = "block";

            }

            else if(card.innerHTML.includes(filter)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});