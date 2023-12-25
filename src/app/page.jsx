import React from "react";

function HomePage() {
  return (
    <>
      <script src="https://app.embed.im/snow.js" defer></script>
      <section className="h-[calc(100vh-0em)] flex justify-center items-center bg-gradient-to-b from-blue-900 to-blue-500">
        <div className="text-center p-8 rounded-lg  w-1/2 ">
        
        <h1 className="text-red-800 text-center w-full max-w-500px mx-auto font-kalam font-sans text-7xl leading-tight italic bold">
          ¡Feliz Navidad!
        </h1>


          <h2 className="text-white font-sans">
            Hooola Dianaa,
            Primero que todo espero que estes bien y que hayas pasado una bella noche buena.
            <br></br>Hice esta pequeña pagina de felicitación de navidad,
            no es muy vistosa, aun estoy aprendiendo esta tecnología y me enredo jajajaja,  btw el regalo no es esta pagina ewe<br></br>
            En fin, sin mucho más que colocar aquí, dale click a la imagen para pasar a la siguiente pagina ;D
          </h2>
          <div className="mt-6">
            <a
              href="/happy/happyxmas"
              className="text-orange-500 hover:underline transition duration-300 transform hover:scale-105"
            >
              <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6c6aebb-2bf9-4796-80e9-0400f1229d7f/dewr9xa-58b6961e-f692-458b-8170-e73769fee73e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2YzZhZWJiLTJiZjktNDc5Ni04MGU5LTA0MDBmMTIyOWQ3ZlwvZGV3cjl4YS01OGI2OTYxZS1mNjkyLTQ1OGItODE3MC1lNzM3NjlmZWU3M2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H4NxpqucfCBub1XQDjktBbYhFqxvpy18IREeEYS6cDo"
          alt="Feliz navidad modo animu"
          className="mx-auto w-500 h-500 object-cover rounded-full  "
        />
            </a>
            <svg
              className="h-4 w-4 inline-block ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default HomePage;
