const loadPhone = async(text)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${text}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

}
const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerText = '';
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
    })

}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchText = document.getElementById('search-field');
    const text = searchText.value;
    loadPhone(text)
})


loadPhone("iphone");