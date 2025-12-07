
document.getElementById("what").addEventListener('click', () => {
    document.getElementById("what").style.color = "green";
});
document.getElementById("img1").addEventListener('click', () => {
    document.getElementById("img1").src = "img/cat1.jpg";
});
document.getElementById("img2").addEventListener('click', () => {
    document.getElementById("img2").src = "img/cat2.jpg";
});
document.getElementById("img3").addEventListener('click', () => {
    document.getElementById("img3").src = "img/cat3.jpg";
});
document.getElementById("mainform").addEventListener("submit", (event)=>{ 
    event.preventDefault();
    document.querySelectorAll(".error-message").forEach(e => e.remove());

    let flagValid = true;

    const errorform = (message,input)=>{
        let error = document.createElement('div');
        error.textContent = message;
        error.className = 'error-message';
        error.style.color = "red";
        error.style.fontSize = "14px";
        input.parentElement.appendChild(error);
        flagValid = false;
    }

    const fields = [
        { el: "client-name", message: "Введите имя!", validate: val => val.trim() !== "" },
        { el: "client-email", message: "Некорректный Email!", validate: val => /^\S+@\S+\.\S+$/.test(val) },
        { el: "service-type", message: "Выберите тип услуги!", validate: val => val !== "" },
        { el: "priority", message: "Выберите приоритет!", validate: val => val !== "" },
        { el: "deadline", message: "Выберите дату выполнения!", validate: val => val !== "" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.el);
        if (!field.validate(input.value)) {
            errorform(field.message, input);
        }

    });
    if (flagValid) {
        let datas = 'Мы приняли заявку со следующими данными: \n';
        fields.forEach(field => { datas= datas + document.getElementById(field.el).value+ '\n'} );
        alert("Форма успешно отправлена!");
        alert(datas);
    }
    
});