const myInput = document.querySelector('#myInput');
const label = document.getElementById('label');

const divImage = document.getElementById('image');

console.log(label);

myInput.addEventListener('change', () => {
  const reader = new FileReader();
  const files = myInput.files;

  for (let i = 0; i < files.length; i++) {
    const img = new Image();
    reader.readAsDataURL(files[i]);
    reader.onload = function () {
      img.src = reader.result;

      divImage.appendChild(img);

      // label.style.backgroundImage = `url(${reader.result})`;
    };
  }
});

try {
  const a = 'hello';
  a = 'test';
} catch (error) {
  throw TypeError();
} finally {
  console.log('finnaly');
}
