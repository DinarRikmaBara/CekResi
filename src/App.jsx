import React, { useState, useRef, useEffect } from 'react';
import './App.css'
import Card from './component/Card';
import { Logo } from './component/Logo';
import { Select } from './component/Select';


function App() {
  const [active, setactive] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setdata] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleTrackingNumber = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    const courier = selectedValue;
    const awb = trackingNumber;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.binderbyte.com/v1/track?api_key=dae0fd2adca4f59bdb2ca3381a497284bf05b4911e5cb7be0685f06c2a480081&courier=${courier}&awb=${awb}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        setdata(result.data);
        console.log(result.data);
        // setLoading(false);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
      }
    };

    await fetchData();
  };

  return (
    <div className='w-full min-h-screen bg-slate-400'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className="flex bg-white shadow-xl rounded-lg teks">
          <Card widht='w-[295px]'>
            <div className='my-auto flex flex-col'>
              <h1 className="card-title text-2xl mx-auto mt-4 text-center">Lacak Paket Anda</h1>
              <div className='mt-6'>
                <form onSubmit={handleSubmit}>
                  <Select selectedValue={selectedValue} handleChange={handleChange} />
                  <input required type="text" value={trackingNumber}
                    onChange={handleTrackingNumber} placeholder="Masukkan nomor pelacakan" className="input input-bordered w-full max-w-xs input-md mb-3 text-base h-11" />
                  <button type='submit' className="btn btn-sm h-11 btn-primary btn-wide mx-auto text-lg"  >
                    {/* {
                      loading ?
                        (
                          <span className="loading loading-spinner"></span>
                        ) :
                        (
                          <span>Lacak</span>
                        )
                    } */}
                    <span>Lacak</span>

                  </button>
                </form>
              </div>
            </div>
            <Logo></Logo>
          </Card>
          {
            data && data.history ? (
              <Card widht='overflow-y-scroll w-[400px]'>
                <div className="">
                  <div className='grid grid-cols-6 gap-x-2  py-3'>
                    <div>pengirim</div>
                    <div className='col-span-5'>: {data.detail.shipper}</div>
                    <div></div>
                    <div className=' col-span-5'>{data.detail.origin}</div>
                    <div className='pt-5 font-semibold'>penerima</div>
                    <div className='col-span-5 pt-5 font-semibold'>: {data.detail.receiver}</div>
                    <div ></div>
                    <div className=' col-span-5 font-semibold'>{data.detail.destination}</div>
                  </div>
                  <ul>
                    {
                      data.history.map((item, index) => (
                        <li className="flex" key={index}>
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
                            <time className="font-mono italic">{item.date}</time>
                            <p></p>
                            {item.desc}
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Card>
            ) : (data && <p className="text-gray-500 mt-2">No history available.</p>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
