/* eslint-disable consistent-return */
const resolveafter2second = (x) => {
  return new Promise((resolve, reject) => {
    const existe = true;
    if (existe === true) {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    } else {
      reject(new Error('Null number'));
    }
  });
};

const doAddSometing = async (x) => {
  try {
    const a = await resolveafter2second(20);
    const b = await resolveafter2second(30);
    return x + a + b;
  } catch (err) {
    console.error(err);
  }
};

// useEffect(() => {
//   const tmp = document.createElement('div');
//   tmp.innerHTML = isPictograma;
//   const last = tmp.lastChild;

//   if (last) console.log('+++', last.querySelector('img').getAttribute('src'));
// }, [isPictograma]);

export default doAddSometing;
