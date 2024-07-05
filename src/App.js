import './App.css';
import list from './Data.json';
import React from 'react';

function App() {

  return (
    <div className="App">
      <div className='container'>
      <div className='row '>
          <div className='col  justify-content-between d-flex mt-4'>
            <h3>Last Transactions</h3>
            <h6 className='text-secondary'>Sell All</h6>
          </div>
        </div>

        {
          list.map( data => {
            return(
            <div className='row mt-4 justify-content-between persons'>
              <div className='col-lg-3 col-sm-6 d-flex'>

                <div className='image1'>
               <img src={data.imageURL} alt={data.Name} className='rounded-circle'/>
               </div>
               <div className='left_side'>
               <h3>{data.Name}</h3>
               <p>{data.last_Date} {data.time}</p>
               </div>
              </div>

              {/* {data.imageURL} */}

                              <div className='col-lg-3 col-sm-6 d-flex '>
                              <div className='right_side'>
                              <h3>${data.amount}</h3>
                              <p>{data.process}</p>
                              </div>
                              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
