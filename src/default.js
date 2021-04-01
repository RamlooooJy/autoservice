import './js/ui.min.js'
import './js/mask.min.js'
import './js/slick.min.js'
import './worksClick.js'
const minDate = Date.now();

	/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
(function (factory) {
	if (typeof define === "function" && define.amd) {

		// AMD. Register as an anonymous module.
		define(["../widgets/datepicker"], factory);
	} else {

		// Browser globals
		factory($.datepicker);
	}
}(function (datepicker) {
	datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "&#x3C;Пред",
		nextText: "След&#x3E;",
		currentText: "Сегодня",
		monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
			"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
			"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
		dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
		dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		weekHeader: "Нед",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "",
		dateFormat: "dd.mm.yy",
		showAnim: "slideDown",
		minDate,
		animated: true,
	};
	datepicker.setDefaults(datepicker.regional.ru);
	return datepicker.regional.ru;
}));
