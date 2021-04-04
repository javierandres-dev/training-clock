'use strict';
const d = document,
  $period = d.getElementById('period'),
  $time = d.getElementById('time'),
  $seconds = d.getElementById('seconds'),
  $date = d.getElementById('date'),
  months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ],
  days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

d.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    showClock();
  }, 1000);
});

function showClock() {
  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    dayName = date.getDay(),
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  let hour = undefined,
    dots = undefined,
    period = undefined;
  if (hours === 0) {
    hour = 12;
    period = 'AM';
  } else if (hours > 12) {
    hour = setFormat(hours) - 12;
    period = 'PM';
  } else {
    hour = hours;
    period = 'AM';
  }
  seconds % 2 === 0 ? (dots = '') : (dots = 'v-hidden');
  $period.textContent = `${period}`;
  $time.innerHTML = `
    ${hour} <span class=${dots}>:</span> ${setFormat(minutes)}
  `;
  $seconds.textContent = `${setFormat(seconds)}`;
  $date.textContent = `${days[dayName]}, ${day} ${months[month]}, ${year}`;
}

function setFormat(num) {
  let value = undefined;
  num < 10 ? (value = `0${num}`) : (value = num);
  return value;
}
