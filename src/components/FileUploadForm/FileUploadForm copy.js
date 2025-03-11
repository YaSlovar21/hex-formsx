import { Button } from '@mui/joy';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { filesLoad } from '../../services/actions/orders';

function FileUploadForm({orderId}) {
  const [fileList, setFileList] = useState(null);


  const dispatch = useDispatch();

  const handleFileChange = (evt) => {
    setFileList(evt.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    dispatch(filesLoad(orderId, data));

    /* 👇 Uploading the files using the fetch API to the server
    fetch(`https://api.hexie.ru/orders/${orderId}/files`, {
      method: 'POST',
      body: data, 
      credentials: 'include',
      headers: {
        "Authorization": "Bearer 234",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
            setFileList(null)
        })
        .catch((err) => console.error(err));*/
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <div>
      <input className="bg-primary-lightgray outline-none border-1 border-primary-green border-dotted" type="file" onChange={handleFileChange} multiple />

      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
          </li>
        ))}
      </ul>

      <Button onClick={handleUploadClick}>Upload</Button>
    </div>
  );
}

export default FileUploadForm;