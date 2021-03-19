const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had shift key down
  // AND check if they are checking it, not unchecking it
  let inBetween = false;
  // If shift key is held down (shift property on MouseEvent, triggered by click, is set to true) and clicked input element/checkbox has checked set to true
  // console.log(e); // Logs MouseEvent
  // console.log(this); // Logs input element that's clicked
  if (e.shiftKey && this.checked) {
    // Loop over every checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        // All checkboxes are iterated over top to bottom. inBetween flag will be set to true starting with whichever comes first: current clicked input or lastChecked input, and it will remain true until it reaches the one after whichever comes last - then it will be false again, and thus won't be checked by the if statement below that sets checked to true
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // lastChecked will be set. Once handleCheck is triggered a second time, it will be initialized and remain with that value until parser reaches this line again, AFTER running the forEach above (if conditions are met, i.e., shift key is being held down and current checkbox is checked, of course)
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  // Click event/MouseEvent has a property 'shift' that is set to true if shift is held down during click
  checkbox.addEventListener('click', handleCheck)
);
