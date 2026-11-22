// src/components/homeeditor/HomeEditorDemo.jsx
"use client";

import { useState } from "react";
import LiveEditor from "@/components/LiveEditor";

const starter = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: system-ui, sans-serif; text-align: center; padding: 2rem; }
      h1 { color: #059669; }
    </style>
  </head>
  <body>
    <h1>Hello, BookQubit!</h1>
    <p>Edit the code and see the result live.</p>
  </body>
</html>`;

export default function HomeEditorDemo() {
  const [code, setCode] = useState(starter);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-gray-200 md:border-b-0 md:border-r">
          <LiveEditor code={code} onChange={setCode} />
        </div>
        <div className="bg-white">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600">
            <span className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Result
          </div>
          <iframe
            title="preview"
            srcDoc={code}
            sandbox="allow-scripts"
            className="h-[300px] w-full bg-white"
          />
        </div>
      </div>
    </div>
  );
}
