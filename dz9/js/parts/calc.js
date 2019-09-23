function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        counter = document.querySelector('.counter'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    console.log(totalValue);
    console.log(totalValue.innerHTML);

    totalValue.innerHTML = 0;

    function calcTotal() {
        let person = +persons.value,
            days = +restDays.value,
            city = +place.value;

        if ((person == '' || days == '') || (person == 0 || days == 0)) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = (days + person) * 4000 * city;
            // totalValue.innerHTML = total;
        }
    }

    counter.addEventListener('input', function () {
        let target = event.target;


        if (target && target.classList.contains('counter-block-input')) {
            calcTotal();
        }
        if (target && target.options) {
            calcTotal();
        }

    });
}

module.exports = calc;