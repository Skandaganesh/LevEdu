"use client"

import React, { useState } from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import useFetch from '../../hooks/useFetch';


const CreateFlashCard = ({ getFlashCardID=()=>{} }) => {
  const [formData, setFormData] = useState({
    description: '',
    rsrc_url: '',
    top_id: ''
  });

  const [loading, setLoading] = useState(false);

  const createData = useFetch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      setLoading(true);
      
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      // console.log(baseUrl);
      
      const res = await createData(baseUrl+'/flashcard', 'POST', formData, 201);
      console.log(res);
      
      if (!res) {
        throw new Error('An error occured while creating flashcard');
      }else getFlashCardID(res.data.flashcard_id);
    } catch (err) {
      console.log("an error occured", err);
    }finally{
      setLoading(false);}
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Create New Video</h1> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
          <Textarea name="description" value={formData.description} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="rsrc_url" className="block text-sm font-medium text-gray-700">Resource URL</Label>
          <Input type="text" name="rsrc_url" value={formData.rsrc_url} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="top_id" className="block text-sm font-medium text-gray-700">Topic ID</Label>
          <Input type="text" name="top_id" value={formData.top_id} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <Button type="submit" disabled={loading} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          {loading ? 'Creating...' : 'Create Flashcard'}
        </Button>
      </form>
    </div>
  );
};

export default CreateFlashCard;
