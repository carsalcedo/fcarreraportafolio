const d = document;

   function contactFormValidation(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    d.addEventListener("keyup", e =>{
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            console.log($input, pattern);
            
            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }

            if(!pattern){
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    });


    d.addEventListener("submit", (e) =>{
        e.preventDefault();
        alert("enviando formulario");

        const $response = d.querySelector(".contact-form-response");

        setTimeout(() =>{
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() =>{
                $response.classList.add("none");
            }, 3000)
            
        }, 3000);
    });


}

contactFormValidation()