import Layout from "../../components/Layout";

export const getStaticProps = async (ctx) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3004/categories`);
  const categories = await res.json()
  return {
    props: {
      categories,
    },
  }
}

function Index(props) {
  const { categories } = props;
  console.log(process.env);
  return (
    <Layout headTitle="Categories" currPage="categories">
      <div>
        <div className="sm:px-6 w-full">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
              <button
                className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Add Categories
                </p>
              </button>
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              #
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            categories.length > 0 ? categories.map((category, index) => (
                              <tr className="border-b" key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  { index + 1 }
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  { category.nama }
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-content-center">
                                  <button
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700 transition ease-in-out duration-150"
                                  >
                                    Edit
                                  </button>
                                  
                                  <button
                                    className="ml-3 inline-flex items-center px-3 py-2
                                    border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            )) : <tr>
                              <td colSpan="3">No categories found</td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;