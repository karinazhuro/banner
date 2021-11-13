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

const alertWrapMonth = document.getElementById('alert-wrap-month');
const alertWrapYear = document.getElementById('alert-wrap-year');

const alertMonth = document.getElementById('alert-month');
const alertYear = document.getElementById('alert-year');

const monthlyPriceMonth = document.getElementById('monthly-price-month');
const monthlyPriceYear = document.getElementById('monthly-price-year');

const saleWrap = document.getElementById('sale');
const imgSale = document.getElementById('img-sale');
const saleText = document.getElementById('text-sale');

const offerPeriod = document.getElementsByClassName('offer-period');

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
	if (continueBtn.classList.contains('check-continue-month')) {
		location.href = "https://apple.com/";
	}

	if (continueBtn.classList.contains('check-continue-year')) {
		location.href = "https://google.com/";
	}
}

function getPeriod(btnMonth, btnYear,
									 month, year,
									 priceMonth, priceYear,
									 alertWrapMonth, alertWrapYear,
									 alertMonth, alertYear,
									 monthlyPriceMonth, monthlyPriceYear,
									 sale, img, text, btn) {
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
	
	btn === 'month' ? continueBtn.classList.add('check-continue-month') :
		continueBtn.classList.remove('check-continue-month');
	btn === 'year' ? continueBtn.classList.add('check-continue-year') :
		continueBtn.classList.remove('check-continue-year');
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
saleText.innerText = languages[lang]["-83%"];

document.getElementById('restore').innerText = languages[lang]["Restore"];
document.getElementById('title').innerHTML = languages[lang]["Unlimited Access<br>to All Features"];
document.getElementById('unlimited-doc').innerText = languages[lang]["Unlimited documents"];
document.getElementById('export').innerText = languages[lang]["Count mode"];
document.getElementById('ocr').innerText = languages[lang]["Text recognition (OCR)"];
document.getElementById('cancel-subscription').innerText = languages[lang]["Auto-renewable. Cancel anytime."];
document.getElementById('termsOfUse').innerText = languages[lang]["Terms of Use"];
document.getElementById('privacyPolicy').innerText = languages[lang]["Privacy Policy"];

document.addEventListener('DOMContentLoaded', (
	e, sale = false, img = false, text = false, btn = 'month') => getPeriod(
	btnMonth, btnYear,
	month, year,
	priceMonth, priceYear,
	alertWrapMonth, alertWrapYear,
	alertMonth, alertYear,
	monthlyPriceMonth, monthlyPriceYear,
	sale, img, text, btn)
);

continueBtn.addEventListener('click', transition);

Array.prototype.forEach.call(offerPeriod, item => {
	item.addEventListener('click', () => {
		let sale = false;
		let img = false;
		let text = false;

		if (item === btnMonth) getPeriod(
			btnMonth, btnYear,
			month, year,
			priceMonth, priceYear,
			alertWrapMonth, alertWrapYear,
			alertMonth, alertYear,
			monthlyPriceMonth, monthlyPriceYear,
			sale, img, text, 'month');
		if (item === btnYear) getPeriod(
			btnYear, btnMonth,
			year, month,
			priceYear, priceMonth,
			alertWrapYear, alertWrapMonth,
			alertYear, alertMonth,
			monthlyPriceYear, monthlyPriceMonth,
			!sale, !img, !text, 'year');
	})
});