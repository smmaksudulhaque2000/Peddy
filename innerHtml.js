// <-----Show Modal function----->
const showPetDetails = (petData) => {
  const showAllDetails = document.getElementById("my_modal_5");
  showAllDetails.innerHTML = `
                <div class="modal-box w-11/12 mx-auto p-10">
                    <div class="">
                        <figure class="w-full text-center">
                            <img class="w-full rounded-lg" src="${
                              petData.image
                            }" alt="${petData.image}" class="w-1/2 mx-auto" />
                        </figure>
                    </div>
  
                    <h2 class="text-lg font-bold pt-6">${petData.pet_name}</h2>
  
                    <div class="grid grid-cols-2 pt-4 gap-4">
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                            <p class="text-gray-500">Breed: ${
                              petData.breed || "Not available"
                            }</p>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <p class="text-gray-500">Birth: ${
                              petData.date_of_birth || "Not available"
                            }</p>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p class="text-gray-500">Gender: ${
                              petData.gender || "Not available"
                            }</p>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-gray-500">Price : ${
                              petData.price || "Not available"
                            }$</p>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
  
                            <p class="text-gray-500">Vaccinated status: ${
                              petData.gender || "Not available"
                            }</p>
                        </div>
                    </div>
  
                    <!-- divider -->
                    <div class="divider text-gray-500"></div>
  
                    <h3 class="font-bold pt-2">Details Information</h3>
                    <p class="py-4 text-gray-500">
                        ${petData.pet_details || "Not available"}
                    </p>
                    <div class="modal-action">
                        <form method="dialog" class="w-full">
                            <button class="btn bg-teal-200 text-teal-800 font-extrabold w-full">Cancel</button>
                        </form>
                    </div>
                </div>
    `;
  my_modal_5.showModal();
};
