const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

export default function Card() {
  return (
    <div className="container py-14 mx-auto ">
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h3 className="text-3xl font-bold text-gray-800">Card Component</h3>
      </div>

      {/* Card Grid */}
      <div className="relative mx-auto max-w-7xl py-10">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {response.results.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col overflow-hidden"
            >
              <div className="mb-12 flex flex-col overflow-hidden">
                {/* image */}
                <a href="/blog-post">
                  <div class="shrink-0">
                    <img
                      class="h-48 w-full rounded-lg object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </a>

                {/* content */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex-1">
                    <a className="mt-5 block space-y-3">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-base font-normal">{item.body}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
