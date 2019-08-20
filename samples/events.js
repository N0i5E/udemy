let btn = document.querySelectorAll("button"),
	wrap = document.querySelector(".wrapper"),
	youtube = document.querySelector("a");

btn[0].addEventListener('click', function () {
	alert('Вы нажали первую кнопку');
});

// btn[0].addEventListener('click', function() {
//   alert('Вы снова нажали первую кнопку');
// });

// btn[0].addEventListener('mouseenter', function() {
//   alert('Вы навели на первую кнопку');
// });

btn[0].addEventListener('click', function (event) {
	console.log(event);
	let target = event.target;
	target.style.display = "none";
	console.log("Произошло событие " + event.type + ' на элементе ' + event.target);
});

wrap.addEventListener('click', function () {
	console.log("Произошло событие " + event.type + ' на элементе ' + event.target);
});

youtube.addEventListener('click', function (event) {
	event.preventDefault();
	console.log("Произошло событие " + event.type + ' на элементе ' + event.target);
});

btn.forEach(function (item) {
	item.addEventListener('mouseleave', function () {
		console.log("Вышли");
	});
});
let elem = document.getElementById('elem');

// class Menu {
// 	handleEvent(event) {
// 		switch (event.type) {
// 			case 'mousedown':
// 				elem.innerHTML = "Нажата кнопка мыши";
// 				break;
// 			case 'mouseup':
// 				elem.innerHTML += "...и отжата.";
// 				break;
// 		}
// 	}
// }

// let menu = new Menu();
// elem.addEventListener('mousedown', menu);
// elem.addEventListener('mouseup', menu);

class Menu {
	handleEvent(event) {
		// mousedown -> onMousedown
		let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
		this[method](event);
	}

	onMousedown() {
		elem.innerHTML = "Кнопка мыши нажата";
	}

	onMouseup() {
		elem.innerHTML += "...и отжата.";
	}
}

let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);


let date1 = new Date(2013, 2, 1, 0, 70),
	date2 = new Date(2013, 2, 1, 1, 10);

	console.log(date1);
	console.log(date2);
	console.log(date1 === date2);