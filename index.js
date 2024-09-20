const allOptions = document.querySelectorAll('.nav-options a');
const allSections = document.querySelectorAll('section');
let navClicked = false;

document.querySelector('.nav-options').addEventListener('click', (event) => {
  const elem = event.target;
  navClicked = true;
  setNavActive(elem);
  //delay to debounce scroll setNav
  setTimeout(() => {
    navClicked = false;
  }, 1000);
})

const setNavActive = (element) => {
  allOptions.forEach((item) => {
    if (item) {
      item.classList.remove('active');
    }
  })
  if (element) {
    element.classList.add('active');
  }
}

const onLoad = () => {
  const hash = document.location.hash;
  if (hash) {
    setNavActive(document.querySelector(`a[href='${hash}']`))
  }
}


document.onscroll = () => {
  if (!navClicked) {
    allSections.forEach((section) => {
      if (window.scrollY >= section.offsetTop) {
        setNavActive(document.querySelector(`a[href='#${section.id}']`))
      }
    })
    if ((window.innerHeight + window.scrollY) + 50 >= document.body.offsetHeight) {
      setNavActive(document.querySelector(`a[href='#${allSections[allSections.length - 1].id}']`))
    }
  }
}

onLoad();

window.addEventListener('load', function () {
  const loader = document.querySelector('#loader');
  setTimeout(() => {
    if (loader) {
      loader.classList.add('hide');
    }
  }, 800)

  console.log('loaded')
})