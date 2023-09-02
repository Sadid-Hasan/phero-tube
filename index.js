const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");
  const trimeData = data.data.slice(0, 4);
  trimeData.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <a onclick="handleLoadnews('${category.category_id}')" class="tab btn btn-xs  text-justify rounded-sm  md:btn-md lg:w-20">${category.category}</a>
    `;
    tabContainer.appendChild(div);
  });
};

const handleLoadnews = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  data.data.forEach((news) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img  class ="max-w-sm h-64" src="${news.thumbnail}" />
        </figure>
        <div class="card-body">
          <div class="flex">
            <div>
              <div class="avatar online">
                <div class="w-14 rounded-full">
                  <img src="${news.authors[0].profile_picture}" />
                </div>
              </div>
            </div>
            <div>
              <h2 class="card-title">
                ${news.title}
              </h2>
              <h6>${news.authors[0].profile_name}</h6>
              <h7>${news.others.views} views</h7>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(div);
  });
};
handleCategory();
