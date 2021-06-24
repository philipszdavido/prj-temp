const { blogs } = require("./template/data/data.json");
const createEntry = async ({ model, entry, files }) => {
  console.log("Called:", model, entry, files);
};

const importBlogs = async () => {
  return Promise.all(
    blogs.map((blog) => {
      return createEntry({ model: "blogs", entry: blog });
    })
  );
};

importBlogs();
