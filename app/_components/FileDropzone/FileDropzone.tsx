/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sort-imports */
import {InlineIcon} from '@iconify/react/dist/iconify.js';
import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';

interface UploadedFile {
  name: string;
  progress: number;
  complete: boolean;
}

const FileDropzone: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const newFile: UploadedFile = {name: file.name, progress: 0, complete: false};
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
      uploadFile(file);
    });
  }, []);

  const uploadFile = (file: File) => {
    const totalUploadTime = 3000;
    const updateInterval = 250;

    const interval = setInterval(() => {
      setUploadedFiles((prevFiles) =>
        prevFiles.map((f) => {
          if (f.name === file.name) {
            const newProgress = Math.min(f.progress + (updateInterval / totalUploadTime) * 100, 100);
            return {...f, progress: newProgress, complete: newProgress === 100};
          }
          return f;
        })
      );

      if (uploadedFiles.some((f) => f.name === file.name && f.progress >= 100)) {
        clearInterval(interval);
      }
    }, updateInterval);
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: true});

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        {...getRootProps()}
        className="w-full cursor-pointer rounded-md border-2 border-dashed border-gray-200 p-6 hover:border-gray-300"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          <p className="flex items-center justify-center text-gray-700">
            {' '}
            <InlineIcon icon="material-symbols:upload" width="30" /> ارفق الملفات الداعمة
          </p>
          <p className="mt-2 text-sm text-gray-500">صيغة الملفات المدعومة: PNG, JPG, PDF</p>
          <p className="mt-2 text-sm text-gray-500">يجب ان يكون حجم الملف اقل من 4 ميجا بايت</p>
        </div>
      </div>
      {uploadedFiles.map((file, index) => (
        <div key={index} className="mt-2 flex w-full items-center justify-between">
          <div className="text-sm text-gray-700">{file.name}</div>
          <button onClick={() => removeFile(file.name)} className="mx-2 text-red-500 hover:text-red-700">
            لغو
          </button>
          <div className="h-2.5 w-full rounded-full bg-[#EDEDED]">
            <div className="h-2.5 rounded-full bg-[#57BEC5]" style={{width: `${file.progress}%`}}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileDropzone;
