const button = document.querySelector('button')

button.addEventListener('click', sage)
function sage(){
    alert('Store coming soon! Sage is currently taste testing');
}
try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  