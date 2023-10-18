import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsSearch }
  from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

function Home() {

  const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUNE',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'AUG',
      uv: 3490,
      pv: 5300,
      amt: 2100,
    },
    {
      name: 'SEP',
      uv: 3490,
      pv: 6300,
      amt: 2100,
    },
    {
      name: 'OCT',
      uv: 3490,
      pv: 1300,
      amt: 2100,
    },
    {
      name: 'NOV',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'DEC',
      uv: 3490,
      pv: 8300,
      amt: 2100,
    },
  ];
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <BsFillArchiveFill className='card_icon' />
            <div className='con'>
              <p>PRODUCTS</p>
              <h1>$198k</h1>
              <p>37.8% this month</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <BsFillGrid3X3GapFill className='card_icon' />
            <div className='con'>
              <p>ORDERS</p>
              <h1>$2.4k</h1>
              <p>3.8% this month</p>
            </div>
          </div>

        </div>
        <div className='card'>
          <div className='card-inner'>
            <BsPeopleFill className='card_icon' />
            <div className='con'>
              <p>BALANCE</p>
              <h1>$2.5k</h1>
              <p>2% this month</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <BsFillBellFill className='card_icon' />
            <div className='con'>
              <p>TOTAL SALES</p>
              <h1>$89k</h1>
              <p>11.8% this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 40,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
      <div className='product-sec'>
        <div className='product-sell'>
          <div className=''>
            <h3>Product Sell</h3>
            <p>Product Name</p>
          </div>
          <div>
            <div className='search'>
              <BsSearch className='icon' />
            </div>
          </div>
          <div className=''>
            <button>Last 10 days</button >
          </div>
        </div>
        <div className='Product'>
          <div className='flex5'>
            <div className='flex'>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
              <div className='none'>
                <h3>Product 3D</h3>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className='flex2'>
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
            </div>
          </div>
          <div className='flex5'>
            <div className='flex'>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
              <div className='none'>
                <h3>Product 3D</h3>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className='flex2'>
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
            </div>
          </div>
          <div className='flex5'>
            <div className='flex'>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
              <div className='none'>
                <h3>Product 3D</h3>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className='flex2'>
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
            </div>
          </div>
          <div className='flex5'>
            <div className='flex'>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
              <div className='none'>
                <h3>Product 3D</h3>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className='flex2'>
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home