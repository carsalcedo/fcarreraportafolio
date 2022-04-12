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

        const btn = d.getElementById('button');

        d.getElementById('contact-form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
        
        btn.value = 'Sending...';

        const serviceID = 'service_hxzfxb7';
        const templateID = 'template_nx6oqc9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            d.getElementById('mensaje-sent').classList.remove('none');
                btn.value = 'Send Message';
                d.getElementById('contact-form').reset();

                setTimeout(() => {
                    d.getElementById('mensaje-sent').classList.add('none');
                }, 2000);

            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            });
        });




   /* d.addEventListener("submit", (e) =>{
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
    });*/


}

contactFormValidation()