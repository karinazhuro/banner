'use strict';

import en from './localization/en.js';
import es from "./localization/es.js";
import fr from "./localization/fr.js";
import ja from "./localization/ja.js";
import nl from "./localization/nl.js";
import ru from "./localization/ru.js";
import zh from "./localization/zh.js";


const lang = document.getElementsByTagName("html")[0].getAttribute("lang");
const priceMonth = "$9.99";
const priceYear = "$19.99";
const monthlyPriceYear = "$1.66";
const languages = {
	en,
	es,
	fr,
	ja,
	nl,
	ru,
	zh,
};

document.getElementById('restore').innerText = languages[lang]["Restore"];
document.getElementById('title').innerHTML = languages[lang]["Unlimited Access<br>to All Features"];
document.getElementById('unlimited-doc').innerText = languages[lang]["Unlimited documents"];
document.getElementById('export').innerText = languages[lang]["Count mode"];
document.getElementById('ocr').innerText = languages[lang]["Text recognition (OCR)"];
document.getElementById('month').innerText = languages[lang]["Monthly"];
document.getElementById('price-month').innerHTML = languages[lang]["<strong>{{price}}</strong><br>per month"]
	.replace('{{price}}', priceMonth);
document.getElementById('year').innerText = languages[lang]["Annually"];
document.getElementById('price-year').innerHTML = languages[lang]["<strong>{{price}}</strong><br>per year"]
	.replace('{{price}}', priceYear);
document.getElementById('alert-month').innerText = languages[lang]["3 DAYS FREE"];
document.getElementById('alert-year').innerText = languages[lang]["MOST POPULAR"];
document.getElementById('monthly-price-month').innerText = languages[lang]["{{price}}/month"]
	.replace('{{price}}', priceMonth);
document.getElementById('monthly-price-year').innerText = languages[lang]["{{price}}/month"]
	.replace('{{price}}', monthlyPriceYear);
document.getElementById('sale-text').innerText = languages[lang]["-83%"];
