function copy_to_clipboard(attr) {
  text = document.querySelector(attr).value;
  navigator.clipboard.writeText(text);
}

const elem = document.querySelector('#clickable');

elem.addEventListener('click', e => {
  elem.classList.add('clicked');
  copy_to_clipboard('.main-section__inputs-code')

  setTimeout(function() {
    elem.classList.remove('clicked');
  }, 1000);
});


function openDropdown(e) {
  const selector = e.path[1]
  if (window.innerWidth <= 500) return; 
  e.preventDefault();

  if (selector.querySelector('ul') == null) {
    const select = selector.children[0];
    select.classList.add('active');
    selector.classList.add('active');

    const dropDown = document.createElement('ul');
    dropDown.className = 'selector-options';
  
  
    [...select.children].filter( v => !v.hasAttribute('disabled') ).forEach(option => {
      const dropDownOption = document.createElement('li');
      dropDownOption.className = 'option';
      dropDownOption.textContent = option.textContent;
  
      dropDownOption.addEventListener('mousedown', e => {
        e.stopPropagation();
        select.value = option.value;
        selector.value = option.value;
        selector.classList.remove('active');
        select.classList.remove('active');

        select.dispatchEvent(new Event('change'));
        selector.dispatchEvent(new Event('change'));

        dropDown.remove();
      })
  
      dropDown.appendChild(dropDownOption);  
    })
  
    selector.appendChild(dropDown)

    document.addEventListener('click', e => {
      if(!selector.contains(e.target)) {
        selector.classList.remove('active');
        selector.children[0].classList.remove('active');
        dropDown.remove();
      }
    })

  } else {
    selector.classList.remove('active');
    selector.children[0].classList.remove('active');
    selector.querySelector('ul').remove();
  }
}

// show mobile history

function showMobileHistory(e) {
  const history = document.querySelector('.history-section');
  const background = document.querySelector('.bg-filter');

  background.style.cssText = 'display: block;'
  history.style.cssText = 'display: block;'
}

function hideMobileHistory() {
  const history = document.querySelector('.history-section');
  const background = document.querySelector('.bg-filter');

  background.style.removeProperty('display');
  history.style.removeProperty('display');
}