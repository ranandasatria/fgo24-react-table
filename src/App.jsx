import React, { useState } from 'react'
import './App.css'

function Table({ form }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {form.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function App() {
  const [formData, setFormData] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, { name, age, gender }]);
    setName('')
    setAge('')
    setGender('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Siapa nama anda?</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Berapa umur anda?</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Apa jenis kelamin anda?</label>
          <input 
          type="radio"
          name="gender"
          id="gender1"
          value='Laki-laki'
          onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor='gender2'>Laki-laki</label>
          <input 
          type="radio"
          name="gender"
          id="gender2"
          value='Perempuan'
          onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor='gender2'>Perempuan</label>
          

        </div>
        <button type="submit">Submit</button>
      </form>
      <Table form={formData} />
    </div>
  )
}

export default App