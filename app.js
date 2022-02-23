const getCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then(stringData => stringData.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const listContainer = document.getElementById("list");
    countries.forEach(country => {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `
        <img class="shadow" width="200" height="100" src="${country.flag}">
        <h3>${country.name}</h3>
        <h5>Capital: <span class="color-red">${country.capital}</span></h5>
        <button onclick="moreDetails('${country.name}')">Click to see details...</button>
        `;
        listContainer.appendChild(card);
    });
}
const moreDetails = (name) => {
    fetch(`https://restcountries.com/v2/name/${name}`)
        .then(sData => sData.json())
        .then(data => showMoreDetails(data));
}
const showMoreDetails = showDataCountries => {
    showDataCountries.forEach(showDataCountry => {
        console.log(showDataCountry);
        alert(`
        Name: ${showDataCountry.name}
        Capital: ${showDataCountry.capital}
        Total area: ${showDataCountry.area}
        Population: ${showDataCountry.population}
        Currencies: ${showDataCountry.currencies}
        Languages: ${showDataCountry.languages}
        Borders with: ${showDataCountry.borders}
        Calling Code: ${showDataCountry.callingCodes}
        Timezones: ${showDataCountry.timezones}
        Region: ${showDataCountry.region}
        Are Independent: ${showDataCountry.independent}
        `)
    })
}
getCountries();