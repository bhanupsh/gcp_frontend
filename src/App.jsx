import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://gcp-backend-api-b6wrw6tzdq-el.a.run.app/api/comments')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
      <section id="center">
       <h2>Welcome to the GCP Frontend App</h2>
        <p>This is a simple React application that fetches data from a backend API deployed on Google Cloud Platform.</p>
        <h3>Data from Backend API:</h3>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default App
