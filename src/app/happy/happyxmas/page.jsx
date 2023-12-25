import React from 'react';

function Happyxmas() {
  return (
    <>
      <script src="https://app.embed.im/snow.js" defer></script>
      <section className="h-[calc(100vh-0rem)] flex justify-center items-center bg-gradient-to-b from-red-900 to-red-500">
        <div className="text-center p-8 rounded-lg bg-white w-1/2 shadow-lg">
          <h1 className="text-gray-800 text-4xl md:text-5xl font-bold mb-4">¡Te ha llegado un regalo!</h1>
          
          <div className="mt-6">
            <a
              href="https://download1349.mediafire.com/fh3c9cl2i2rgb5jlXtQrKCxcTIkSecNM4BO-l9yPz8Iwmr4Xp4frykozcPNarPKzSu1uob_z5C8h2lDifiL64zdMFM1oi7MDcHQhHLI8DQDISibHevQpjMnTCKwEQKtn9MbrN2WlXggto28XQmF2P2Aa_qAOdOwGEhKyhj8S6OiH/c7eu0aifuipk9m3/Regalo.zip"
              className="text-orange-500 hover:underline transition duration-300 transform hover:scale-105"
            >
                <img
          src="https://static.tvtropes.org/pmwiki/pub/images/present_nh_inv_icon_png.png"
          alt="Feliz navidad modo animu"
          className="mx-auto w-500 h-500 object-cover rounded-full  "
        />
            </a>
            <svg className="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Happyxmas;