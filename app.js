const getCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then(stringData => stringData.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const listContainer = document.getElementById("list");
    countries.forEach(country => {
        console.log(country.population);
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `
        <img width="200" height="100" src="${country.flag}">
        <h3>${country.name}</h3>
        <h5>Capital: <span class="color-red">${country.capital}</span></h5>
        <h6>Population: <em>${country.population}</em></h6>
        `;
        listContainer.appendChild(card);
    });
}
getCountries();