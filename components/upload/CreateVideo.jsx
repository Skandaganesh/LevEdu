"use client"

import React, { useEffect, useState } from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {FileInput} from '@/components/ui/fileInput';
import { Textarea } from "@/components/ui/textarea"
import useFetch from '../../hooks/useFetch';
import OptionSelector from '../../components/ui/OptionSelector';
import useUpload from '@/firebase/api/useUpload';

const CreateVideo = ({ quiz_id,flashcard_id }) => {
  const initFormData = {
    edu_id: '1',
    flashcard_id:flashcard_id,
    quiz_id:quiz_id,
    top_id: '',
    vid_url: '',
    thumbnail_url: '',
    tags: '',
    prerequisites: '',
    description: '',
    vid_len: '',
  } 

  const [formData, setFormData] = useState(initFormData);

  const [loading, setLoading] = useState(false);

  const createData = useFetch();
  const { handleUpload,url,progress } = useUpload();
  
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

      await handleUpload(formData.vid_url);
      console.log(url,progress);
    //   console.log(baseUrl);

    //   const res = await createData(baseUrl + '/video', 'POST', formData, 201);
    //   console.log(res);

      if (!res) {
        throw new Error('An error occured while creating quiz');
      }
    } catch (err) {
      console.log("an error occured", err);
    } finally {
      setLoading(false);
    }
  };

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    try {
        
        createData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/curriculum/topics`, 'GET', null, 200).then(res => {
            if (!res) {
                throw new Error('An error occured while fetching topics');
            }else{
                setTopics(res.data);
            }
        })
    } catch (err) {
        console.log("An error occured", err);
    }
  },[])

  const handleSelectTopic = (selectedOption) => {
    const { top_id } = selectedOption;
    setFormData(p => ({...p,top_id:top_id}));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FileInput label="Add Video" accept="video/*" name="vid_url" onChange={handleChange} required={true} />
        <FileInput label="Add Thumbnail" accept="image/*" name="thumbnail_url" onChange={handleChange} required={true} />
        <div>
          <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
          <Textarea type="text" name="description" value={formData.description} onChange={handleChange} required={true} />
        </div>
        <div>
          <Label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</Label>
          <Textarea type="text" name="tags" value={formData.tags} onChange={handleChange} required={true} />
        </div>
        <div>
          <Label htmlFor="prerequisites" className="block text-sm font-medium text-gray-700">Prerequisites</Label>
          <Input type="text" name="prerequisites" value={formData.prerequisites} onChange={handleChange} required={true} />
        </div>
        <div>
        <Label htmlFor="topics" className="block text-sm font-medium text-gray-700">Select Topic</Label>
        <OptionSelector  options={topics} onSelect={handleSelectTopic} />
        </div>
        <div>
          <Label htmlFor="quiz_id" className="block text-sm font-medium text-gray-700">Quiz ID</Label>
          <Input type="text" name="quiz_id" value={formData.quiz_id} onChange={handleChange} required={true} disabled={true} />
        </div>
        <div>
          <Label htmlFor="flashcard_id" className="block text-sm font-medium text-gray-700">Flashcard ID</Label>
          <Input type="text" name="flashcard_id" value={formData.flashcard_id} onChange={handleChange} required={true} disabled={true} />
        </div>
        <Button type="submit" disabled={loading} >
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </form>
    </div>
  );
};

export default CreateVideo;