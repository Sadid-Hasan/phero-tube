const handleCategory =async () =>{
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");
    const trimeData =data.data.slice(0,4);
    trimeData.forEach((category) =>{
       // console.log(category)
        const div = document.createElement("div");
        div.innerHTML =`
        <a onclick="handleLoadnews('${category.category_id}')" class ="tab">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });
};
 
const handleLoadnews = async (categoryId) => {
    const response = await fetch (
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data =await response.json();
    const cardContainer = document.getElementById("card-container");
    data.data.forEach((news)=>{
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src=${news.thumbnail}
          />
        </figure>
        <div class="card-body">
        <div class="flex">
              <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                  </div>
                </div>
              </div>
              <div>
          <h2 class="card-title">
            Biden Pledges Nearly $3 Billion To Ukraine
          </h2>
          <h6>Jimmy Dane</h6>
          <small>2022-08-24 17:27:34</small>
        </div>
      </div>
      `;
      cardContainer.appendChild(div);
    });
};
handleCategory();