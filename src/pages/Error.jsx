// import React from 'react'

const Error = () => {
  return (
    <div className="w-full">
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <div className="flex items-center justify-center"> 
          <img
            src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
            alt="404"
            className="w-64"
          />
        </div>
  
        <p className="text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Go back to Home
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Error;
