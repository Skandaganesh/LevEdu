"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import useFetch from '../../hooks/useFetch';


const CreateQuiz = ({ getQuizID = () => { } }) => {
  const [formData, setFormData] = useState({
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
    correct_option: '',
    explanation: '',
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
      console.log(baseUrl);

      const res = await createData(baseUrl + '/quiz', 'POST', formData, 201);
      console.log(res);

      if (!res) {
        throw new Error('An error occured while creating quiz');
      } else getQuizID(res.data.quiz_id);
    } catch (err) {
      console.log("an error occured", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Create New Video</h1> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="question" className="block text-sm font-medium text-gray-700">question</Label>
          <Textarea name="question" value={formData.question} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="option_1" className="block text-sm font-medium text-gray-700">Option 1</Label>
          <Input type="text" name="option_1" value={formData.option_1} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="option_2" className="block text-sm font-medium text-gray-700">Option 2</Label>
          <Input type="text" name="option_2" value={formData.option_2} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="option_3" className="block text-sm font-medium text-gray-700">Option 3</Label>
          <Input type="text" name="option_3" value={formData.option_3} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="option_4" className="block text-sm font-medium text-gray-700">Option 4</Label>
          <Input type="text" name="option_4" value={formData.option_4} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="correct_option" className="block text-sm font-medium text-gray-700">Correct Option</Label>
          <Input type="text" name="correct_option" value={formData.correct_option} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <Label htmlFor="explanation" className="block text-sm font-medium text-gray-700">Explanation</Label>
          <Textarea name="explanation" value={formData.explanation} onChange={handleChange} required={true} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <Button type="submit" disabled={loading} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          {loading ? 'Creating...' : 'Create Quiz'}
        </Button>
      </form>
    </div>
  );
};

export default CreateQuiz;