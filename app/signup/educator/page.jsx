"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {Button} from '@/components/ui/button';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from "react-redux";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Lakshadweep", "Delhi", "Puducherry", "Other"
];

const EducatorSignUp = () => {
  const auth = useSelector(state => state.user.auth);

  useEffect(() => {
    if (auth) {
      router.push('/');
    }
  },[auth]);
  
  const [educatorData, setEducatorData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    street: "",
    state: "",
    degree: "",
    experience: 0,
    language: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducatorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createData = useFetch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();

    const { city,degree,email,experience,language,name,password,phone,state,street } = educatorData;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const payload = { 
      edu_name: name,
      edu_email: email,
      edu_password: password,
      edu_phone : phone,
      city : city,
      street : street,
      state : state,
      highest_degree : degree,
      experience : experience,
      lang : language
     };
     setLoading(true);
     const res = await createData(baseUrl+'/user/educator/signup', 'POST', payload, 201);
    //  console.log(res);

     if (!res) {
      throw new Error('An error occured while creating educator');
    }else router.push('/login');
  } catch (err) {
    console.log("an error occured", err);
  }finally{
    setLoading(false);}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Educator Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={educatorData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={educatorData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            value={educatorData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="phone"
            value={educatorData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            value={educatorData.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="street"
            value={educatorData.street}
            onChange={handleInputChange}
            placeholder="Street"
            className="w-full p-3 border rounded-md"
            required
          />
          <select
            name="state"
            value={educatorData.state}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
            required
          >
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="degree"
            value={educatorData.degree}
            onChange={handleInputChange}
            placeholder="Highest Degree"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="number"
            name="experience"
            value={educatorData.experience}
            onChange={handleInputChange}
            placeholder="Experience (Years)"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="language"
            value={educatorData.language}
            onChange={handleInputChange}
            placeholder="Languages Known"
            className="w-full p-3 border rounded-md"
          />
          <Button type="submit" disabled={loading} className="mt-4 bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-900">
          {loading ? 'Creating...' : 'Create Educator'}
        </Button>
        </form>
      </div>
    </div>
  );
};

export default EducatorSignUp;
