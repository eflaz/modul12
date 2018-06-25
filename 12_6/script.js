var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');
document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
	var countryName = document.getElementById('country-name').value;
	if (!countryName.length) countryName = 'Poland';
	fetch(url + countryName).then(function(resp) {
		return resp.json();
	}).then(showCountriesList);
}

function showCountriesList(resp) {
	countriesList.innerHTML = '';
	resp.forEach(function(item) {
		var divEl = document.createElement('div');
		divEl.classList.add("country");
		divEl.innerHTML = "Name: " + item.name + '<br> Flag: <img src="' + item.flag + '"> <br> Capital: ' + item.capital;
		countriesList.appendChild(divEl);
	});
}