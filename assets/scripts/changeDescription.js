const changeDescription = (nameCard, text) => {
	let infoSkills = document.querySelector("#info-skills");
	let cardName = document.querySelector(".card-name");

	document.querySelector(nameCard).addEventListener("mouseover", () => {
		infoSkills.innerHTML = text;
		if (nameCard === ".html") {
			cardName.innerHTML = " Html ";
		}
		if (nameCard === ".css") {
			cardName.innerHTML = " Css ";
		}
		if (nameCard === ".js") {
			cardName.innerHTML = " JavaScript ";
		}

		if (nameCard === ".responsive") {
			cardName.innerHTML = " Responsive";
		}
		if (nameCard === ".accessibility") {
			cardName.innerHTML = " Accessibility";
		}
	});

	document.querySelector(nameCard).addEventListener("mouseout", () => {
		infoSkills.innerHTML = "";
		cardName.innerHTML = "";
	});

	changeDescription("HTML 5");

	changeDescription("CSS 3");

	changeDescription("JAVASCRIPT");

	changeDescription("RESPONSIVE");

	changeDescription("ACCESSIBILITY");
};
