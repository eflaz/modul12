// OGÓLNA FUNKCJA
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '3296',
	'X-Auth-Token': 'a5183cfab4f065e8a2b06561446cb713'
};

function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');
	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);
	return element;
}

function getBoard() {
	fetch(baseUrl + '/board', {
		headers: myHeaders
	}).then(function(resp) {
		return resp.json();
	}).then(function(resp) {
		setupColumns(resp.columns);
	});
}

function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function(card) {
		var cardObj = new Card(card.id, card.name);
		col.addCard(cardObj);
	});
}

getBoard();