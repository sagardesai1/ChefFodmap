export const metadata = {
    title: 'Sign In - Simple',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  
  export default function Home() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-30 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2">Generate a recipe.</h2>
            </div>
  
            {/* Form */}
            <div className="flex flex-row">
              <div className="w-1/3">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Meal Type</label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      </div>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      </div>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Generate</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex flex-col py-10 px-16 w-full ml-20 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                <h4 className="h4 pb-4 text-center">Title</h4>
                <p className="pb-4 text-center">Description</p>
                <div className="flex flex-row justify-evenly pb-8">
                  <p className="">Prep Time: </p>
                  <p className="">Cook Time: </p>
                  <p className="">Servings: </p>
                </div>
                
                <h4 className="h4 pb-8">Ingredients</h4>
                <h4 className="h4 pb-8">Cooking Steps</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  