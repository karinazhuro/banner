'use strict';

import en from './localization/en.js';
import es from "./localization/es.js";
import fr from "./localization/fr.js";
import ja from "./localization/ja.js";
import nl from "./localization/nl.js";
import ru from "./localization/ru.js";
import zh from "./localization/zh.js";

const lang = document.getElementsByTagName("html")[0].getAttribute("lang");

const continueBtn = document.getElementById('continue');

const btnMonth = document.getElementById('btn-month');
const btnYear = document.getElementById('btn-year');

const month = document.getElementById('month');
const year = document.getElementById('year');

const priceMonth = document.getElementById('price-month');
const priceYear = document.getElementById('price-year');

const alertMonth = document.getElementById('alert-month');
const alertYear = document.getElementById('alert-year');

const monthlyPriceMonth = document.getElementById('monthly-price-month');
const monthlyPriceYear = document.getElementById('monthly-price-year');

const saleWrap = document.getElementById('sale');
const imgSale = document.getElementById('img-sale');
const saleText = document.getElementById('sale-text');

const offerPeriodCheck = document.getElementsByClassName('offer-period');

const priceForMonth = "$9.99";
const priceForYear = "$19.99";
const monthlyPriceForYear = "$1.66";

const languages = {
	en,
	es,
	fr,
	ja,
	nl,
	ru,
	zh,
};

function transition() {
	return location.href = "https://apple.com/";
}

function checkedMonth(btnMonth, btnYear,
											month, year,
											priceMonth, priceYear,
											alertMonth, alertYear,
											monthlyPriceMonth, monthlyPriceYear,
											sale, img, text) {
	btnMonth.classList.remove('offer-check-period');
	month.classList.remove('check-period');
	priceMonth.classList.remove('check-offer-total-price');
	alertMonth.classList.remove('check-alert-text');
	monthlyPriceMonth.classList.remove('check-monthly-price');

	sale ? saleWrap.classList.remove('check-sale') : saleWrap.classList.add('check-sale');
	img ? imgSale.classList.remove('check-img-sale') : imgSale.classList.add('check-img-sale');
	text ? saleText.classList.remove('check-sale-text') : saleText.classList.add('check-sale-text');

	btnYear.classList.add('offer-check-period');
	year.classList.add('check-period');
	priceYear.classList.add('check-offer-total-price');
	alertYear.classList.add('check-alert-text');
	monthlyPriceYear.classList.add('check-monthly-price');
}

month.innerText = languages[lang]["Monthly"];
year.innerText = languages[lang]["Annually"];
priceMonth.innerHTML = languages[lang]["<strong>{{price}}</strong><br>per month"].replace('{{price}}', priceForMonth);
priceYear.innerHTML = languages[lang]["<strong>{{price}}</strong><br>per year"].replace('{{price}}', priceForYear);
alertMonth.innerText = languages[lang]["3 DAYS FREE"];
alertYear.innerText = languages[lang]["MOST POPULAR"];
monthlyPriceMonth.innerText = languages[lang]["{{price}}/month"].replace('{{price}}', priceForMonth);
monthlyPriceYear.innerText = languages[lang]["{{price}}/month"].replace('{{price}}', monthlyPriceForYear);
continueBtn.innerText = languages[lang]["Continue"];

continueBtn.addEventListener('click', transition);
document.getElementById('restore').innerText = languages[lang]["Restore"];
document.getElementById('title').innerHTML = languages[lang]["Unlimited Access<br>to All Features"];
document.getElementById('unlimited-doc').innerText = languages[lang]["Unlimited documents"];
document.getElementById('export').innerText = languages[lang]["Count mode"];
document.getElementById('ocr').innerText = languages[lang]["Text recognition (OCR)"];
document.getElementById('sale-text').innerText = languages[lang]["-83%"];
document.getElementById('cancel-subscription').innerText = languages[lang]["Auto-renewable. Cancel anytime."];
document.getElementById('termsOfUse').innerText = languages[lang]["Terms of Use"];
document.getElementById('privacyPolicy').innerText = languages[lang]["Privacy Policy"];

Array.prototype.forEach.call(offerPeriodCheck, item => {
	item.addEventListener('click', () => {
		let sale = false;
		let img = false;
		let text = false;
		if (item === btnMonth) checkedMonth(
			btnMonth, btnYear,
			month, year,
			priceMonth, priceYear,
			alertMonth, alertYear,
			monthlyPriceMonth, monthlyPriceYear,
			sale, img, text);
		if (item === btnYear) checkedMonth(
			btnYear, btnMonth,
			year, month,
			priceYear, priceMonth,
			alertYear, alertMonth,
			monthlyPriceYear, monthlyPriceMonth,
			!sale, !img, !text);
	})
});