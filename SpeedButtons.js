var buttons = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

// Creating Elements
function getButtonsHtml() {
	var buttonsHtml = '';

	buttonsHtml = "<div id='speedButtons'>"
	for (var i = 0; i <= buttons.length - 1; i++) {
		buttonsHtml += "<button id='" + buttons[i] + "' class='btn";
		if (buttons[i] == 1) {
			buttonsHtml += " selected";
		}
		buttonsHtml += "'>";
		buttonsHtml += buttons[i] + "</button>";
	}
	buttonsHtml += "</div>"

	return buttonsHtml;
}

function getNodeByText(className, text) {
	let elements = document.getElementsByClassName(className);
	elements = Array.from(elements);
	return elements.find(e => e.textContent === text);
}

function changeSpeed(speed) {
	const settingButton = document.getElementsByClassName('ytp-settings-button')[0];
	settingButton.click();
	const optionNode = getNodeByText('ytp-menuitem-label', 'Playback speed');
	optionNode.click();

	if (speed === '1') {
		speed = 'Normal';
	}
	console.log('Speed', speed);

	const speedNode = getNodeByText('ytp-menuitem-label', speed);
	speedNode.click();
}

// Appending to Player
$('#player-api').append(getButtonsHtml());
$('#speedButtons > .btn').on('click', function(e) {
	var selectedButton = e.target;
	var speed = $(selectedButton).attr('id');

	if (!$(selectedButton).hasClass('selected')) {
		$('.btn').removeClass('selected');
		$(selectedButton).addClass('selected');
		changeSpeed(speed);
	}
});
