const link_introduction = document.querySelector(".introduction");
const link_privacy = document.querySelector(".privacy");
const link_service = document.querySelector(".service");
const technolgy = document.querySelector(".technolgy");
const link_faq = document.querySelector(".faq");

document
	.getElementById("introduction")
	.addEventListener("click", introductionActive);

function introductionActive() {
	document.getElementById("text_introduction").classList.add("active");
}

addEventListener("click", function () {
	if (link_introduction == click) {
		document.getElementById("text_introduction").classList.add("active");
	}
});

document
	.getElementById("privacy")
	.addEventListener("click", introductionPrivacy);
function introductionPrivacy() {
	document.getElementById("text_privacy").classList.add("active");
}
