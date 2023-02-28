const loadPhone = async(text)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${text}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

}
const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerText = '';
    phones = phones.slice(0,6);
    const notFound = document.getElementById('no-found-message');
    if(phones.length ===0){
        notFound.classList.remove('d-none');

    }
    else{
        notFound.classList.add('d-none');
    }
    
    phones.forEach(phone =>{
        console.log(phone)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        <div class="card p-4">
              <img src="${phone.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
    `
    phoneContainer.appendChild(makeDiv);
    });
    toggoleSpinner(false);
    

}

document.getElementById('btn-search').addEventListener('click',function(){
    toggoleSpinner(true);
    const searchText = document.getElementById('search-field');
    const text = searchText.value;
    loadPhone(text)
})

// Loader or spinner

const toggoleSpinner = isLoading =>{
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}


// loadPhone("iphone");