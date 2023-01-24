import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let delayValue = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(delayValue)
      .then(() => {
        Notify.success(`✅ Fulfilled promise ${i} in ${delayValue}ms`);
      })
      .catch(() => {
        Notify.failure(`❌ Rejected promise ${i} in ${delayValue}ms`);
      });
    delayValue += Number(step.value);
  }

  e.currentTarget.reset();
}

function createPromise(delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res();
      } else {
        rej();
      }
    }, delay);
  });

  return promise;
}
