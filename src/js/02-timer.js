import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      startButton.addEventListener('click', countDownTime);

      function countDownTime() {
        const timer = setInterval(() => {
          startButton.disabled = true;
          const dataChoosen = selectedDates[0].getTime();
          const nowTime = new Date().getTime();
          const timeLeft = dataChoosen - nowTime;

          const { days, hours, minutes, seconds } = convertMs(timeLeft);

          daysValue.innerHTML = days < 10 ? addLeadingZero(days) : days;
          hoursValue.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          minutesValue.innerHTML =
            minutes < 10 ? addLeadingZero(minutes) : minutes;
          secondsValue.innerHTML =
            seconds < 10 ? addLeadingZero(seconds) : seconds;

          if (timeLeft < 1000) {
            clearInterval(timer);
            startButton.disabled = false;
          }
        }, 1000);
      }
      function addLeadingZero(value) {
        const stringValue = String(value);
        return stringValue.padStart(2, '0');
      }
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }
    }
  },
};

flatpickr(input, options);
