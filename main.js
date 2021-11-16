'use strict';

import en from './localization/en.js';
import es from "./localization/es.js";
import fr from "./localization/fr.js";
import ja from "./localization/ja.js";
import nl from "./localization/nl.js";
import ru from "./localization/ru.js";
import zh from "./localization/zh.js";

const continueBtn = document.getElementById('continue');

function getElements() {
	return {
		btnMonth: document.getElementById('btn-month'),
		btnYear: document.getElementById('btn-year'),
		month: document.getElementById('month'),
		year: document.getElementById('year'),
		priceMonth: document.getElementById('price-month'),
		priceYear: document.getElementById('price-year'),
		alertWrapMonth: document.getElementById('alert-wrap-month'),
		alertWrapYear: document.getElementById('alert-wrap-year'),
		alertMonth: document.getElementById('alert-month'),
		alertYear: document.getElementById('alert-year'),
		monthlyPriceMonth: document.getElementById('monthly-price-month'),
		monthlyPriceYear: document.getElementById('monthly-price-year'),
		saleWrap: document.getElementById('sale'),
		imgSale: document.getElementById('img-sale'),
		saleText: document.getElementById('text-sale'),
		offerPeriod: document.getElementsByClassName('offer-period'),
		checkPeriod: document.getElementsByClassName('check-period'),
		period: document.getElementsByClassName('period'),
	}
}

function getPeriod(item) {
	const {
		btnMonth, btnYear,
		month, year,
		priceMonth, priceYear,
		alertWrapMonth, alertWrapYear,
		alertMonth, alertYear,
		monthlyPriceMonth, monthlyPriceYear,
		saleWrap, imgSale, saleText
	} = getElements();

	const sale = false;
	const img = false;
	const text = false;
	let period = 'month';

	switch (item) {
		case btnMonth:
			changePeriod(btnMonth, btnYear,
				month, year,
				priceMonth, priceYear,
				alertWrapMonth, alertWrapYear,
				alertMonth, alertYear,
				monthlyPriceMonth, monthlyPriceYear,
				saleWrap, imgSale, saleText,
				sale, img, text, period);
			break;

		case btnYear:
			period = 'year';

			changePeriod(btnYear, btnMonth,
				year, month,
				priceYear, priceMonth,
				alertWrapYear, alertWrapMonth,
				alertYear, alertMonth,
				monthlyPriceYear, monthlyPriceMonth,
				saleWrap, imgSale, saleText,
				!sale, !img, !text, period);
			break;
	}
}

function setLang() {
	const localLang = navigator.language.slice(0, 2);
	const urlParamLang = new URLSearchParams(window.location.search);

	if (!localStorage.getItem('lang')) localStorage.setItem('lang', localLang);
	if (localStorage.getItem('lang') !== urlParamLang.get('lang')) {
		localStorage.setItem('lang', urlParamLang.get('lang'));
		window.location.search = `lang=${localStorage.getItem('lang')}`;
		history.pushState(null, null, `lang=${localStorage.getItem('lang')}`);
	}

	return localStorage.getItem('lang');
}

function changePeriod(btnMonth, btnYear,
											month, year,
											priceMonth, priceYear,
											alertWrapMonth, alertWrapYear,
											alertMonth, alertYear,
											monthlyPriceMonth, monthlyPriceYear,
											saleWrap, imgSale, saleText,
											sale, img, text, period) {
	btnMonth.classList.add('check-offer-period');
	month.classList.add('check-period');
	priceMonth.classList.add('check-offer-total-price');
	alertWrapMonth.classList.add('check-alert-wrap');
	alertMonth.classList.add('check-alert-text');
	monthlyPriceMonth.classList.add('check-monthly-price');

	btnYear.classList.remove('check-offer-period');
	year.classList.remove('check-period');
	priceYear.classList.remove('check-offer-total-price');
	alertWrapYear.classList.remove('check-alert-wrap');
	alertYear.classList.remove('check-alert-text');
	monthlyPriceYear.classList.remove('check-monthly-price');

	sale ? saleWrap.classList.add('check-sale') : saleWrap.classList.remove('check-sale');
	img ? imgSale.classList.add('check-img-sale') : imgSale.classList.remove('check-img-sale');
	text ? saleText.classList.add('check-sale-text') : saleText.classList.remove('check-sale-text');

	period === 'month' ? continueBtn.classList.add('check-continue-month') :
		continueBtn.classList.remove('check-continue-month');
	period === 'year' ? continueBtn.classList.add('check-continue-year') :
		continueBtn.classList.remove('check-continue-year');
}

function addText(elements, lang) {
	const languages = {
		en,
		es,
		fr,
		ja,
		nl,
		ru,
		zh,
	};

	const priceForMonth = "$9.99";
	const priceForYear = "$19.99";
	const monthlyPriceForYear = "$1.66";

	const {
		month,
		year,
		priceMonth,
		priceYear,
		alertMonth,
		alertYear,
		monthlyPriceMonth,
		monthlyPriceYear,
		saleText,
	} = elements;


	month.innerText = languages[lang]["Monthly"];
	year.innerText = languages[lang]["Annually"];
	priceMonth.innerHTML = languages[lang]["<strong>{{price}}</strong><br>per month"].replace('{{price}}', priceForMonth);
	priceYear.innerHTML = languages[lang]["<strong>{{price}}</strong><br>per year"].replace('{{price}}', priceForYear);
	alertMonth.innerText = languages[lang]["3 DAYS FREE"];
	alertYear.innerText = languages[lang]["MOST POPULAR"];
	monthlyPriceMonth.innerText = languages[lang]["{{price}}/month"].replace('{{price}}', priceForMonth);
	monthlyPriceYear.innerText = languages[lang]["{{price}}/month"].replace('{{price}}', monthlyPriceForYear);
	continueBtn.innerText = languages[lang]["Continue"];
	saleText.innerText = languages[lang]["-83%"];

	document.getElementById('restore').innerText = languages[lang]["Restore"];
	document.getElementById('title').innerHTML = languages[lang]["Unlimited Access<br>to All Features"];
	document.getElementById('unlimited-doc').innerText = languages[lang]["Unlimited documents"];
	document.getElementById('export').innerText = languages[lang]["Count mode"];
	document.getElementById('ocr').innerText = languages[lang]["Text recognition (OCR)"];
	document.getElementById('cancel-subscription').innerText = languages[lang]["Auto-renewable. Cancel anytime."];
	document.getElementById('termsOfUse').innerText = languages[lang]["Terms of Use"];
	document.getElementById('privacyPolicy').innerText = languages[lang]["Privacy Policy"];
}

function transition() {
	if (continueBtn.classList.contains('check-continue-month')) {
		location.href = "https://apple.com/";
	}

	if (continueBtn.classList.contains('check-continue-year')) {
		location.href = "https://google.com/";
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const elements = getElements();

	getPeriod(elements.btnMonth);
	addText(elements, setLang());
});

continueBtn.addEventListener('click', transition);

Array.prototype.forEach.call(getElements().offerPeriod, item => {
	item.addEventListener('click', () => {
		getPeriod(item)
	})
});
