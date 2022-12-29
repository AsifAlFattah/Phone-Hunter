// Load Data
const loadPhones = async(searchText,datalimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data,datalimit);
};
// Display Data
 const displayPhones = (phones,dataLimit) =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = ``;
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length>12){
        phones = phones.slice(0,12);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    
    const warningSection = document.getElementById('warning');
    if(phones.length===0){
        warningSection.classList.remove('d-none');
    }
    else{
        warningSection.classList.add('d-none');
    }
    for(const phone of phones){
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(div);
    }
    toggleSpinner(false);
 };

//  loadPhones('phone',12);

const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadPhones(searchValue,dataLimit);
    // searchField.value = '';
};

// Search
 document.getElementById('button-addon2').addEventListener('click',function(){
    processSearch(12);
 });
// Spinner
 const toggleSpinner = isLoading =>{
    const spinner = document.getElementById('spinner-section');
    if(isLoading){
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
 };
// Show All
document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
});
