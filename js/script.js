const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');
const tabContentOne = document.getElementById('tab-content-1');
const tabContentTwo = document.getElementById('tab-content-2');
const tabContentThree = document.getElementById('tab-content-3');

function selectTab(e) {
  removeBorder();
  hideContent();

  this.classList.add('active');

  console.log(this.id);

  const tabContentItem = document.querySelector(`#content-${this.id}`);
  tabContentItem.classList.remove('hidden');
}

// Remove bottom border
function removeBorder() {
  tabs.forEach((item) => {
    item.classList.remove('active');
  });
}

// Hide Tab content
function hideContent() {
  tabContents.forEach((tab) => {
    tab.classList.add('hidden');
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', selectTab);
});
