"use client"

import React, { useState } from 'react'
import CreateVideo from '@/components/upload/CreateVideo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CreateFlashCard from "@/components/upload/CreateFlashCard"
import CreateQuiz from '@/components/upload/CreateQuiz'


const page = () => {

  const initFormData = {
    flashcard_id: '',
    quiz_id: '',
  }

  const [formData, setFormData] = useState(initFormData);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Create New Topic Video</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Step 1 - Create Quiz</AccordionTrigger>
          <AccordionContent>
            <CreateQuiz getQuizID={(id) => setFormData(p => ({...p,quiz_id:id}))} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Step 2 - Create Flashcard</AccordionTrigger>
          <AccordionContent>
            <CreateFlashCard getFlashCardID={(id) => setFormData(p => ({...p,flashcard_id:id}))} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Step 3 - Create Video</AccordionTrigger>
          <AccordionContent>
            <CreateVideo flashcard_id={formData.flashcard_id} quiz_id={formData.quiz_id} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default page