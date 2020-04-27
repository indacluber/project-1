//ця стрічка коду для того, щоб наші команди виконувалися після того, як всі елементи стрінки завантажились
$(document).ready(function () {
  //тут ми вказаємо клік на який елемент ми відслідковуємо
  $(".portfolio-menu-item").on("click", function () {
    //забираємо клас active у всіх елментів меню табів портфоліо
    $(".portfolio-menu-item").removeClass("active");
    //додаємо клас active елементу, на який був здійснений клік
    $(this).addClass("active");
    //забираємо клас active у всіх блоків з фотографіями
    $(".portfolio-body-item").removeClass("active");
    //додаємо клас active відповідному блоку з фото до обраного пункту нафігації
    $("#tab" + $(this).data("tab_id")).addClass("active");
  });
});
