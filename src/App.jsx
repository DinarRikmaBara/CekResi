import React, { useState, useRef, useEffect } from 'react';
import './App.css'
import Logo from "./logo";
import Marquee from "react-fast-marquee";


function App() {
  const [active, setactive] = useState(true);
  const [loading, setloading] = useState(false);
  const logoImages = [
    './Logo/1.jpg',
    './Logo/2.png',
    './Logo/3.jpg',
    './Logo/4.jfif',
    './Logo/5.png',
    './Logo/6.png',
  ];

  return (
    <div className='w-full min-h-screen bg-slate-400'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className="flex bg-white shadow-xl rounded-lg teks">
          <div className="card card-compact  w-[295px] h-[400px]">
            <div className="card-body text-center">
              <h1 className="card-title text-2xl mx-auto mt-4">Lacak Paket Anda</h1>
              <div className='mt-5'>
                <form action="#">
                  <select className="select select-bordered w-full max-w-xs mb-2">
                    <option disabled selected>Pengiriman?</option>
                    <option value="jne">JNE</option>
                    <option value="jnt">JNT</option>
                    <option value="jnt-cargo">JNT Cargo</option>
                    <option value="sicepat">SiCepat</option>
                    <option value="anteraja">AnterAja</option>
                    <option value="shopee-express">Shopee Express</option>
                    <option value="lazada-express">Lazada Express</option>
                    <option value="kurir-rekomendasi">Kurir Rekomendasi</option>
                  </select>
                  <input type="text" placeholder="Masukkan nomor pelacakan" className="input input-bordered w-full max-w-xs mb-3" />
                  <button type='submit' className="btn btn-primary btn-wide mx-auto text-lg" onClick={() => setactive(!active)}>
                    {
                      loading ?
                        (
                          <span className="loading loading-spinner"></span>
                        ) :
                        (
                          <span>Lacak</span>
                        )
                    }
                  </button>
                </form>
              </div>
              <footer className='footer mt-auto'>
                <Marquee>
                  {logoImages.map((src, index) => (
                    <Logo key={index} src={src} alt={`Logo ${index + 1}`} />
                  ))}
                </Marquee>
              </footer>
            </div>
          </div>
          <div className="card card-compact h-[400px]" style={{ display: active ? 'none' : '' }}>
            <div className="card-body overflow-y-scroll">
              <div className="">
                <ul>
                  <li className="flex">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-primary h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd" />
                      </svg>
                      <hr className="w-[4px] h-full bg-primary rounded-lg" />
                    </div>
                    <div className="pb-6">
                      <time className="font-mono italic">August 02, 05:40AM</time>
                      <div className="text-xl font-semibold">Sedang transit</div>
                      PUSAT TRANSIT [JAKARTA] MENUJU [JAMBI]
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
