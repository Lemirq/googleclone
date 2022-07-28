const data = [
	{
		name: "Chrome",
		img: "https://lh3.googleusercontent.com/7hNVq4eXYDqKikz_x6QUIN1x3ArrF3IzcaNWS6TQpna79BIWfNfnRviifT6hBugE7mYpKpiM7Ps7YN5XkGFmXaTyTKjiYsUoNquxGvQ=h120",
	},
	{
		name: "Calendar",
		img: "https://lh3.googleusercontent.com/DaaQa-Y-b3_IAhu6SBFb2vRl8PFR5iuCLwLszc16_OTlLrEFvFF9P4CS0ui-414nG9016ul3dQD1R3mHtmMx4P1bIA-zRXuPpFN4yw=h120",
	},
	{
		name: "Earth",
		img: "https://lh3.googleusercontent.com/HWgUyUNqdsifoczBOT-DYy-hV_ldW-cwWkz3tvlY0eQysaY1ra4D1bkfE-0BVFUlk5wComQdca8g-fwiPcOhdMHoMjqiiNh2TD2b=h120",
	},
	{
		name: "Gmail",
		img: "https://lh3.googleusercontent.com/mK6uPlO8TKCVSU8TsniV0pOUB0SSETbAPB_QUaaJ96qbBdZwaygmzf_bWRTIHmCNKgJ2hhn86KSfEAHvHN-P2EjFWAxPd77ob_2k8ew=h120",
	},
	{
		name: "Google Classroom",
		img: "https://lh3.googleusercontent.com/Qvc6rWiGG_a6LNQ7Yx5vMmve_5ku8TG7z4vmWG7VBkbcOQfOSE2BS7eBcD1NUOWTsbs9A_Vh-mJpKtsGtG_0f7sIGFy5LwhdOLRg4w=h120",
	},
	{
		name: "Google Duo",
		img: "https://lh3.googleusercontent.com/tWYS85wpzFKE2mcGmUj1spMgqETy8SbDrY3UFp4z2g-Y8yY2BhwmsNWHhqGyiW-N6qZd8nMB-vRDSctWy1eTKY5N8B9ethFs3czbjg=h120",
	},
	{
		name: "Google Chat",
		img: "https://lh3.googleusercontent.com/z3dgQsXgGqfadzIUmpGI_ppolUy7H6fgqIbtW_qzLXcBww0nOby8TEE3e_fW84Qa7zeAwe339f5VLkqRD6jk7Z9sEaVh5Y_yaPG9nw=h120",
	},
	{
		name: "Google Drive",
		img: "https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h120",
	},
	{
		name: "Chrome",
		img: "https://lh3.googleusercontent.com/7hNVq4eXYDqKikz_x6QUIN1x3ArrF3IzcaNWS6TQpna79BIWfNfnRviifT6hBugE7mYpKpiM7Ps7YN5XkGFmXaTyTKjiYsUoNquxGvQ=h120",
	},
	{
		name: "Contacts",
		img: "https://lh3.googleusercontent.com/m5HIvqrNJHr2w5VXuNapBWKSx6YZTU7lIhffkIgDQU_VbpYAfkgXt2Un2ks_wzTn7vrfkyllWMLouCcOcBwfakYylBMe_9PwYm7_=h120",
	},
	{
		name: "Authenticator",
		img: "https://lh3.googleusercontent.com/7j1-9AjGTjyFcEDU5lJw2BpZNYWNKgkxegHVv012Pm5OPBratN5ZsNVtpILRwXqE5Givogcj2VMswYdKR1dKvLvo2EQFSM0p7yTxYw=h120",
	},
	{
		name: "Exposure Notifications",
		img: "https://lh3.googleusercontent.com/BAdl6REglGY2I2v6M3ETITNCpgS4Y8ac0hJtEQh6o8ggV776HEb3Lmw7REmTQmTon5B8s0dB-tHBYwuosM1V0MwXR5tMWChtAOwu-hOQWQTn7xWIUw=h120",
	},
	{
		name: "Docs",
		img: "https://lh3.googleusercontent.com/Ac9zapU8rN332VMysmJIaTk1Nk-3IGzqCwFS-6PwDFUFpEzEBKPTGWfIFN4BXL3eHP5s1DJP2tyh8NTS8_LjvXHzpkyZC2fu58Ov=h120",
	},
	{
		name: "Slides",
		img: "https://lh3.googleusercontent.com/aD5GNhlaU2d70gmSy5ioL1dMSUZN9cHDWPLkIBLhCsJ-BgcGUm-PD6o8XExZcx1i2iZV6PH0P8v3ceg0x7Tzd_OZ5FV0nXs5mX15sgA=h120",
	},
	{
		name: "Sheets",
		img: "https://lh3.googleusercontent.com/tvQvvubDZ2r6Ou8zxkVzkIvddC1snCCq4xD4dhafjAJhHLDsEvHDEUms9RyVH_g-nI_8yTyeahZshZqwMV0NdHxD-K9v-Zbm4DF2vds=h120",
	},
	{
		name: "Forms",
		img: "https://lh3.googleusercontent.com/p5lVJAicHuI6Ra6jtpYimNt53JZQNCcN06a-Q4fUaNVFo3cjVisZMY_UwBTg5fv2MUkrbwbfTw70N9-bbTfejp9S8rUNadIhWiqh=h120",
	},
];

// Clear search field at start of page
document.getElementById("search").value = "";

//Dark Mode & Light Mode

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function () {
		drklight();
	});

function drklight() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		document.body.classList.remove("light-mode");
		document.body.classList.add("dark-mode");
		document.querySelector("#drk").innerHTML = "Light Theme";
	} else {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light-mode");
		document.querySelector("#drk").innerHTML = "Dark Theme";
	}
}
drklight();
if (window.innerWidth > 450){
function clrScheme() {
	if (document.body.classList.contains("light-mode")) {
		document.body.classList.remove("light-mode");
		document.body.classList.add("dark-mode");
		document.querySelector("#drk").innerHTML = "Light Theme";
	} else {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light-mode");
		document.querySelector("#drk").innerHTML = "Dark Theme";
	}
}}

var place = document.getElementById("location");

// Location
fetch(
	"https://ipgeolocation.abstractapi.com/v1/?api_key=f2f98f8a8d96407c8b5d200946ac6590"
)
	.then(function (response) {
		return response.json();
	})
	.then(function (payload) {
		var getcity = payload.city;
		var getcountry = payload.country;
		var getip = payload.ip_address;
		var getregion = payload.region;
		console.log(getcity, getcountry, getip, getregion);
		place.innerHTML =
			getcity +
			",\u00A0" +
			getregion +
			",\u00A0" +
			getcountry +
			"\u00A0|\u00A0" +
			getip;
	});

//Search
const bar = document.querySelector("#input");
const search = document.querySelector("#search");
const cancel = document.querySelector("#cancel");
const gs = document.querySelector("#gs");

function link(){
	let val = search.value;
	let link = "https://www.google.com/search?q=" + val;
	window.open(link, "_self");
}

gs.addEventListener("click", function () {
	link();
});

bar.addEventListener("click", function () {
	search.focus();
});

search.addEventListener("keydown", function (event) {
	if (event.keyCode == 13) {
		link();
	}
});

search.addEventListener("input", function () {
	if (search.value == "") {
		document.querySelector("#cancel").style.display = "none";
	} else {
		document.querySelector("#cancel").style.display = "flex";
	}
});

cancel.addEventListener("click", function () {
	search.value = "";
	document.querySelector("#cancel").style.display = "none";
});

// Settings

const settings = document.querySelector("#settings");
const wrapper = document.querySelector("#wrapper");
settings.addEventListener("click", function () {
	if (wrapper.style.display === "") {
		wrapper.style.display = "flex";
	} else if (wrapper.style.display === null) {
		wrapper.style.display = "flex";
	} else {
		wrapper.style.display = "flex";
	}
});

document.querySelector("#wrapper").addEventListener("click", function () {
	document.querySelector("#wrapper").style.display = "none";
});

// Detect iphone or android
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Windows Phone";
	}

	if (/android/i.test(userAgent)) {
		document
			.querySelector("#getapp")
			.addEventListener("click", function () {
				window.open(
					"https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en&gl=US",
					"_self"
				);
			});
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		document.body.style.minHeight = 'window.innerHeight' + 'px';
		document
			.querySelector("#getapp")
			.addEventListener("click", function () {
				window.open(
					"https://apps.apple.com/ca/app/google/id284815942",
					"_self"
				);
			});
	}
}

getMobileOperatingSystem();


// Skit
const dialogues = {
	0: "Don't press that button",
	1: "Don't press it",
	2: "What did I just say?",
	3: "Stop that",
	4: "Did you know there are lots of other fun things you could be doing with the internet right now instead of poking this button?",
	5: "Like using AI to generate images",
	6: "Or watching the entire Vsauce channel",
	7: "But your puny little mammal brain can't grasp that",
	8: "Poke my boring little feedback button for the hundredth time? Or participate in an elaborate treasure hunt that would make Indiana Jones jealous?",
	9: "...",
	10: "...",
	11: "Please stop you'll make the button dirty",
	12: "OK that's it",
	13: "I will launch the entire world's nuclear weapons arsenal",
	14: "Directed right at you",
	15: "3..",
	16: "2..",
	17: "1..",
	18: "They're on their way right now",
	19: "Soon you will regret annoying the supercomputer that controls the earth"
};

var v = 0;

document.querySelector("#feedback").addEventListener("click", function () {
  if (v < 20){
	if (v === 0) {
        para = document.createElement("p");
        tn = document.createTextNode(dialogues[v]);
        para.appendChild(tn);
        para.setAttribute("id", "dialogues");
        const el = document.querySelector("#section-container");
        el.appendChild(para);
    }	
    if (v !== 0){
        dia = document.querySelector('#dialogues');
        dia.innerHTML = dialogues[v];
    }
	console.log(v);}
	v++;
	if (v === 21){
		window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_self')
	}
});

// Sidebar
const btn = document.querySelector('#menu')
const sbar = document.querySelector('#sidebar')
const olay = document.querySelector('#overlay')
btn.addEventListener('click', function(){
sbar.style.left = '0'
document.body.style.overflow = 'hidden';
})

$('#menu').click(function(){
	$('#overlay').fadeIn(300);
})
$('#overlay').click(function(){
	document.body.style.overflow = 'inherit';
	$('#sidebar').css('left', '-300px')
	$('#overlay').fadeOut(300);
})




// Breakpoints 



if (window.innerWidth < 450){
	document.querySelector('#drk').remove()

	document.querySelector('[data-black="black"]').setAttribute('id', 'drk')
	document.querySelector('[data-black="black"]').setAttribute('onclick', 'clrScheme()')

	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		document.querySelector("#drk > p").innerHTML = 'Light Theme';
		document.querySelector('#dark').style.display = 'block';
	} else {
		document.querySelector("#drk > p").innerHTML = "Dark Theme";
		document.querySelector('#light').style.display = 'block';
	}

	function clrScheme(){
		if (document.body.classList.contains("light-mode")) {
			document.body.classList.remove("light-mode");
			document.body.classList.add("dark-mode");
			document.querySelector("#drk > p").innerHTML = 'Light Theme';
			document.querySelector('#light').style.display = 'none';
			document.querySelector('#dark').style.display = 'block';
			
		} else {
			document.body.classList.remove("dark-mode");
			document.body.classList.add("light-mode");
			document.querySelector("#drk > p").innerHTML = "Dark Theme";
			document.querySelector('#dark').style.display = 'none';
			document.querySelector('#light').style.display = 'block';
	
		}}
}

