const button = document.querySelector(".show-more");
const rowProjectsTwo = document.querySelector(".row-2");

rowProjectsTwo.style.display = "none";

const showMore = () => {
	if (rowProjectsTwo.style.display === "flex") {
		rowProjectsTwo.style.display = "none";
		button.innerHTML = "View More";
	} else if (rowProjectsTwo.style.display === "none") {
		rowProjectsTwo.style.display = "flex";
		button.innerHTML = "View More";
	}
};

button.addEventListener("click", showMore);
