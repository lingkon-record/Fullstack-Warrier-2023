import React, { useState } from 'react';

function ScriptWriter() {
  const [scriptContent, setScriptContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleInputChange = (e) => {
    const content = e.target.value;
    setScriptContent(content);

    // Calculate word count
    const words = content.split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);

    // Calculate sentence count (assuming sentences end with '.', '!', or '?')
    const sentences = content.split(/\.|!|\?/).filter((sentence) => sentence.length > 0);
    setSentenceCount(sentences.length);
  };

  const handleSave = () => {
    // Implement your save script functionality here
  };

  const handleFormat = () => {
    // Implement your script formatting functionality here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Script Writing App</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Input Section */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <h2 className="text-2xl font-bold mb-4">Script Input</h2>
          <textarea
            className="w-full h-40 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Write your script here..."
            value={scriptContent}
            onChange={handleInputChange}
          ></textarea>
          <div className="mt-4 space-x-2">
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={handleFormat}
            >
              Format
            </button>
          </div>
        </div>
        {/* Preview Section */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <h2 className="text-2xl font-bold mb-4">Script Preview</h2>
          <div className="border p-4 h-40 overflow-y-auto">
            <pre>{scriptContent}</pre>
          </div>
          <div className="mt-4">
            <div>
              <span className="font-semibold">Word Count:</span> {wordCount}
            </div>
            <div>
              <span className="font-semibold">Sentence Count:</span> {sentenceCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScriptWriter;
