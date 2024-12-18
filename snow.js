// Кар буртукчаларын тузүү жана анимациялоо
document.addEventListener("DOMContentLoaded", () => {
    const numberOfSnowflakes = 50; // Кар буртукчаларынын санын аныктоо

    // Кар буртукчаларын тузүү
    for (let i = 0; i < numberOfSnowflakes; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "&#10052;"; // Unicode үчүн кар буртучу
        snowflake.style.left = `${Math.random() * 100}vw`; // Кар буртукчасынын жайгашкан жерин тууралоо
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Ар бир буртучунун түшүү ылдамдыгы
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Ар бир буртучунун кечигүү убактысы

        document.body.appendChild(snowflake); // Кар буртукчаларын документке кошуу
    }
});
