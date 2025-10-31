'use client';

import { useState, KeyboardEvent } from 'react';

interface TagInputProps {
  label: string;
  tags: string[];
  setTags: (tags: string[]) => void;
  error?: string;
}

export default function TagInput({
  label,
  tags,
  setTags,
  error
}: TagInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '') {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div
        className={`flex flex-wrap items-center w-full p-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md`}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-gray-600 hover:text-gray-800"
              onClick={() => removeTag(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent outline-none"
          placeholder="Add a tag..."
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
