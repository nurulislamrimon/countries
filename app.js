const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-button");
const popupContentContainer = document.getElementById("popup-content-container");
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="moreDetails('${country.name}')">Click to see details...</button>
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
        modalContent.innerHTML = `
        <h3><span class="popup-left-content">Name :</span> <span>${showDataCountry.name}</span></h3>
        <h3><span class="popup-left-content">Capital :</span> <span>${showDataCountry.capital}</span></h3>
        <h3><span class="popup-left-content">Total area :</span> <span>${showDataCountry.area}</span></h3>
        <h3><span class="popup-left-content">Population :</span> <span>${showDataCountry.population}</span></h3>
        <h3><span class="popup-left-content">Currencies :</span> <span>${showDataCountry.currencies}</span></h3>
        <h3><span class="popup-left-content">Languages :</span> <span>${showDataCountry.languages}</span></h3>
        <h3><span class="popup-left-content">Borders with :</span> <span>${showDataCountry.borders}</span></h3>
        <h3><span class="popup-left-content">Calling Code :</span> <span>${showDataCountry.callingCodes}</span></h3>
        <h3><span class="popup-left-content">Timezones :</span> <span>${showDataCountry.timezones}</span></h3>
        <h3><span class="popup-left-content">Region :</span> <span>${showDataCountry.region}</span></h3>
        <h3><span class="popup-left-content">Are Independent :</span> <span>${showDataCountry.independent}</span></h3>     
        `
    })
}
getCountries();

// ===========closeBtn=========
closeBtn.addEventListener("click", () => modalContent.style.display = "none")