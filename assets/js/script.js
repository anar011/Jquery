

$(document).ready(function () {


    let users = [];

    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }


    $("button").click(function () {
        $("ul").empty();
        let user1 = $(".name").val()
        let user2 = $(".surname").val()

        users.push({
            id: user1 + new Date().getMilliseconds(),
            name: user1,
            surname: user2

        })



        localStorage.setItem("users", JSON.stringify(users))


        for (const item of users) {

            $("ul").append($(`<li data-id="${item.id}" class="list-group-item">${item.name + " " + item.surname}</li>`));


        }

        $(".name").val("")
        $(".surname").val("")


    })

    for (const item of users) {

        $("ul").append($(`<li data-id="${item.id}" class="list-group-item">${item.name + " " + item.surname}</li>`));


    }



    $(document).on("click", ("ul li"), function () {

        users = users.filter(u => u.id != $(this).attr("data-id"))
        localStorage.setItem("users", JSON.stringify(users))


        $(this).remove()


    })










    //slider


    $(document).click(".slider .left");

    $(document).click(".slider .right");



    let leftIcon = $(document).click(".slider .left");

    let rightIcon = $(document).click(".slider .right");



    function rightSlider() {
        let activeImage = $(document).click(".active");
        if (activeImage.nextElementSibling != null) {
            activeImage.classList.remove("active");
            activeImage.nextElementSibling.classList.add("active");

        } else {
            activeImage.classList.remove("active");
            activeImage.parentNode.firstElementChild.classList.add("active");
        }


    }


    function leftSlider() {
        let activeImage = document.querySelector(".active");
        if (activeImage.previousElementSibling != null) {
            activeImage.classList.remove("active");
            activeImage.previousElementSibling.classList.add("active");

        } else {
            activeImage.classList.remove("active");
            activeImage.parentNode.lastElementChild.classList.add("active");
        }


    }



    $(rightIcon).addClass("click", rightSlider);

    $(leftIcon).addClass("click", leftSlider);



    $(rightIcon).addClass("mouseover", rightSlider);

    $(leftIcon).addClass("mouseover", leftSlider);



    setInterval(() => {
        rightSlider()
    }, 2000);



})


