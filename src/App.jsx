import React, { useState } from 'react'
import './App.css'

function Table({ form }) {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-6">
      <thead>
         <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">No</th>
          <th className="border border-gray-300 px-4 py-2">Nama</th>
          <th className="border border-gray-300 px-4 py-2">Umur</th>
          <th className="border border-gray-300 px-4 py-2">Gender</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>
          <th className="border border-gray-300 px-4 py-2">Rokok</th>
        </tr>
      </thead>
      <tbody>
        {form.map((data, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{data.name}</td>
            <td className="border border-gray-300 px-4 py-2">{data.age}</td>
            <td className="border border-gray-300 px-4 py-2">{data.gender}</td>
            <td className="border border-gray-300 px-4 py-2">{data.smoker}</td>
            <td className="border border-gray-300 px-4 py-2">{data.cigar}</td>
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
  const [smoker, setSmoker] = useState('')
  const [cigar, setCigar] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, { name, age, gender, smoker, cigar }])
    setName('')
    setAge('')
    setGender('')
    setSmoker('')
    setCigar([])
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Siapa nama anda?</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="mb-1 font-medium">Berapa umur anda?</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Apa jenis kelamin anda?</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input 
                type="radio"
                name="gender"
                id="gender1"
                value="Laki-laki"
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="gender1">Laki-laki</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio"
                name="gender"
                id="gender2"
                value="Perempuan"
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="gender2">Perempuan</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="perokok" className="mb-1 font-medium">Apakah anda perokok?</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="smoker"
                id="perokok1"
                value="Perokok"
                onChange={(e) => setSmoker(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="perokok1">Ya</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="smoker"
                id="perokok2"
                value="Bukan Perokok"
                onChange={(e) => setSmoker(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="perokok2">Bukan</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="cigar" className="mb-1 font-medium">Jika anda perokok, rokok apa yang anda pernah coba?</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cigar"
                id="ggfilter"
                value="Gudang Garam Filter"
                onChange={(e) => setCigar(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="ggfilter">Gudang Garam Filter</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cigar"
                id="luckystrike"
                value="Lucky Strike"
                onChange={(e) => setCigar(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="luckystrike">Lucky Strike</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cigar"
                id="marlboro"
                value="Marlboro"
                onChange={(e) => setCigar(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="marlboro">Marlboro</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cigar"
                id="esse"
                value="Esse"
                onChange={(e) => setCigar(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="esse">Esse</label>
            </div>
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <Table form={formData} />
    </div>
  )
}
export default App

