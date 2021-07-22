// search field effect


function searchbar(){
    var inpField = document.querySelector('.search-tab-container')
    var inp = document.getElementById('search-field')

    inpField.style.backgroundColor = 'white'
    inpField.style.width = '500px'
    inp.style.color = 'black'
    inp.style.border = 'none'
   

}


//back to original search field

function closesearch(){
    var inpField = document.querySelector('.search-tab-container')
    var inp = document.getElementById('search-field')

    inpField.style.backgroundColor = 'black'
    inpField.style.width = '245px'
}

//hover div over category

function showCategory(){
      var category = document.querySelector('.category')
      var category_arrow = document.querySelector('.category-arrow')
       category_arrow.style.transform = 'rotate(180deg)'
}
function closeCategory(){
    var category = document.querySelector('.category')
      var category_arrow = document.querySelector('.category-arrow')
       category_arrow.style.transform = 'rotate(0)'
}

// hover div over brand

function showBrand(){
    var brand = document.querySelector('.brand')
    var brand_arrow = document.querySelector('.brand-arrow')
     brand_arrow.style.transform = 'rotate(180deg)'
}
function closeBrand(){
  var brand = document.querySelector('.brand')
    var brand_arrow = document.querySelector('.brand-arrow')
     brand_arrow.style.transform = 'rotate(0)'
}


// sticky nav bar
window.addEventListener("scroll",function(){
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0);
})


//modal_container
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')

function showCheckout(){
    modal_container.classList.add('showModal');
    
}

function closeModal(){
    modal_container.classList.remove('showModal');
}
