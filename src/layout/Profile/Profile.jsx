import React from "react";

const Profile = () => {
  return (
    <section className="text-gray-600 dark:bg-gray-900 dark:text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-white mb-4">
            Update your Bio.
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <form className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="text" placeholder="Full Name" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="text" placeholder="Email Address" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="number" placeholder="Phone Number" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="text" placeholder="Area" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="text" placeholder="House, Flat" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
          
          <div className="p-3 sm:w-1/2 w-full">
            <div className="h-full">
              <input type="text" placeholder="Hello" className="w-full bg-gray-100 dark:bg-gray-800 rounded flex p-6 h-full items-center" />
            </div>
          </div>
        </form>
        <button className="flex mx-auto mt-10 w-1/2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Click to Update
        </button>
      </div>
    </section>
  );
};

export default Profile;
