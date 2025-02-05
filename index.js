// <-----load pets function----->
const loadPets = async () => {
  loadingSpinner(true);

  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    const pets = data.pets;

    setTimeout(() => {
      showPets(pets);
    }, 2000);
  } catch (error) {
    console.error("Error occurs", error);
  }
};
// <-----Show pets function----->
const showPets = (pets) => {
  const cardsContainer = document.getElementById("cards-container");
  const noSearchMessage = document.getElementById("no-search-message");

  cardsContainer.textContent = "";

  if (pets.length === 0) {
    loadingSpinner(false);
    noSearchMessage.classList.remove("hidden");
    cardsContainer.classList.add("hidden");
    return;
  }

  noSearchMessage.classList.add("hidden");
  cardsContainer.classList.remove("hidden");

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList.add("card", "border", "border-[#CFCFCF]");

    card.innerHTML = `
          <div class="w-11/12 mx-auto mt-5">
              <figure class="w-full rounded-lg">
                  <img class="w-full object-cover" src="${pet.image}" alt="${
      pet.image
    } image" />
              </figure>
          </div>
          <div class="card-body p-0 w-11/12 mx-auto">
              <h2 class="card-title mt-5">${
                pet.pet_name || "Not available"
              }</h2>
              <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                  <p class="text-gray-500">Breed: ${
                    pet.breed || "Not available"
                  }</p>
              </div>
              <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <p class="text-gray-500">Birth: ${
                    pet.date_of_birth || "Not available"
                  }</p>
              </div>
              <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p class="text-gray-500">Gender: ${
                    pet.gender || "Not available"
                  }</p>
              </div>
              <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p class="text-gray-500">Price : ${
                    pet.price || "Not available"
                  }$</p>
              </div>

              <!-- divider -->
              <div class="divider text-gray-500"></div>

              <!-- buttons functionalities -->
              <div class="flex justify-between items-center gap-1 md:gap-2 lg:gap-1 pb-5">
                  <button onclick="likeButton('${pet.petId}', '${
      pet.image
    }')" class="btn bg-white border border-gray-200 text-teal-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                      </svg>
                  </button>
                  <button onclick="adoptModal(this)" class="btn bg-white border border-gray-200 text-teal-700 font-extrabold">Adopt</button>

                  <button onclick="openModal('${
                    pet.petId
                  }')" class="btn bg-white border border-gray-200 text-teal-700 font-extrabold">Details</button>
              </div>
          </div>
      `;

    cardsContainer.append(card);
  });

  loadingSpinner(false);
};

// <-----load Buttons function----->
const loadButtons = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/categories"
    );
    const data = await res.json();
    const categories = data.categories;
    categories.forEach((category) => {
      displayButton(category);
    });
  } catch (error) {
    console.error("Error occurs", error);
  }
};

// <-----Show Button function----->
const displayButton = (category) => {
  const buttonContainer = document.getElementById("button-container");

  const categoryButton = document.createElement("button");
  categoryButton.classList.add("btn", "md:w-1/5", "font-bold");
  categoryButton.textContent = category.category;

  categoryButton.addEventListener("click", async () => {
    const allButtons = buttonContainer.querySelectorAll("button");
    allButtons.forEach((button) =>
      button.classList.remove("bg-[#e6f1f2]", "rounded-[120px]", "font-bold")
    );

    categoryButton.classList.add(
      "bg-[#e6f1f2]",
      "rounded-[120px]",
      "font-bold"
    );

    await categoryWiseButton(category.category);
  });

  const buttonIcon = document.createElement("img");
  buttonIcon.src = category.category_icon;
  buttonIcon.alt = `${category.category} icon`;
  buttonIcon.style.width = "30px";
  buttonIcon.style.height = "30px";
  categoryButton.prepend(buttonIcon);

  buttonContainer.appendChild(categoryButton);
};
// <-----category Buttons function----->
const categoryWiseButton = async (categoryButtonType) => {
  loadingSpinner(true);

  const cardsContainer = document.getElementById("cards-container");
  const likeImageContainer = document.getElementById("like-image-container");

  cardsContainer.classList.add("hidden");
  likeImageContainer.classList.add("hidden");

  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${categoryButtonType}`
    );
    const data = await res.json();
    const categoryData = data.data;

    setTimeout(() => {
      showPets(categoryData);
      cardsContainer.classList.remove("hidden");
      likeImageContainer.classList.remove("hidden");
      loadingSpinner(false);
    }, 2000);
  } catch (error) {
    console.error("Error occurs", error);
  }
};
// <-----Like Buttons function----->
const likeButton = (petId, image) => {
  const likeImageContainer = document.getElementById("like-image-container");

  const likeImage = document.createElement("img");
  likeImage.src = image;
  likeImage.alt = `${image} image`;

  likeImage.classList.add("rounded-lg");
  likeImageContainer.appendChild(likeImage);
};
// <-----modal function----->
const openModal = async (petId) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
    );
    const data = await res.json();
    const petData = data.petData;
    showPetDetails(petData);
  } catch (error) {
    console.error("Error occurs", error);
  }
};
// <-----spinner function----->
const loadingSpinner = (isLoading) => {
  const spinner = document.getElementById("spinner");

  isLoading
    ? spinner.classList.remove("hidden")
    : spinner.classList.add("hidden");
};
// <-----Sort Buttons function----->
const sortPetByPrice = (pets) => {
  const sortByPrice = pets.sort(
    (firstPrice, secondPrice) => secondPrice.price - firstPrice.price
  );
  showPets(sortByPrice);
};
const sortedButton = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    const pets = data.pets;
    sortPetByPrice(pets);
  } catch (error) {
    console.error("Error occurs", error);
  }
};
let count = 3;
// <-----Adopt Buttons function----->
const adoptModal = (button) => {
  const adoptBtn = document.getElementById("adopt-btn");
  const myModal = document.getElementById("my_modal_4");
  const countdown = document.getElementById("countdown");

  button.disabled = true;

  count = 3;
  countdown.textContent = count;
  myModal.showModal();

  const countDownNumber = setInterval(() => {
    count--;
    countdown.textContent = count;

    if (count === 0) {
      clearInterval(countDownNumber);
      myModal.close();

      button.textContent = "Adopted";
    }
  }, 1000);
};
