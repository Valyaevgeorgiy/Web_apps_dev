
alert("Начинается проверка условия тестовых заданий...")

let count_an = prompt("Сколько вариантов ответа должно быть?", 4)
let score = prompt("Какое количество баллов необходимо за правильный ответ?", 1)
let topics = prompt("На какую тему составляете задание?", "Web-программирование")

let tests = (count_an <= 4) ?
    () => alert('Хорошо, учту, условие подходит!') :
    () => alert("Пересмотрите ещё раз регламенты составления заданий.");

let final_res = (score <= 1) ?
    () => alert("Балльность в целом соответствует норме, окей, всё супер)") :
    () => alert("Пересмотрите ещё раз регламенты составления заданий.");

let main_topic = (topics == "Web-программирование") ?
    () => alert("Понятно, тема актуальная, учту.") :
    () => alert("Введённая тема здесь не рассматривается, так что подумайте тщательней над главной темой");

tests();
final_res();
main_topic();