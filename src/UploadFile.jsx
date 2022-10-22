import {useRef, useState} from "react";

const hostUrl = '/upload';

const UploadFile = () => {
    const filePicker = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();
    
    const handleChange = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0]);
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please selected file');
            return;
        }

        const formData = new FormData();
        formData.append('file', setSelectedFile);

        const res = await fetch(hostUrl, {
            method: 'POST',
            body: formData,
        });
        const data = res.json();

        setUploaded(data);
    }

    const handelPick = () => {
        filePicker.current.click();
    }
    return (
        <div>
            <button onClick={handelPick}>Pick me!</button>
            <div>
                <input
                    ref={filePicker}
                    type="file"
                    style={{ width: 0, height: 0 }}
                    onChange={handleChange}
                    accept="image/*"
                />
            </div>

            <button onClick={handleUpload}>Upload now!</button>

            {uploaded && (
                <div>
                    <h2>}{uploaded.fileName}</h2>
                    <img src={uploaded.filePath} alt='img'/>
                </div>
            )}
        </div>
    )
}

export default UploadFile;
