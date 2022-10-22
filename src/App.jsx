import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from "react";
import FileSaver from "file-saver";
import UploadFile from "./UploadFile";

const App = () => {
  const [value, setValue] = useState([{
      brandColor: 'ddddd',
      fontFamily: 'dddddd',
      faviconImage: 'favicon',
  }]);
    // console.log(value);

    const downloadFile = () => {
        const themeData = new File([JSON.stringify(value)], "theme_data.txt",
            {type: "text/plain; charset=utf-8"});
        FileSaver.saveAs(themeData);
    }

  return (
    <div className="App">
        <Form.Group className="color-group mb-3">
            <Form.Control
                type="text"
                onChange={e => setValue(e.target.value)}
                placeholder="Enter text"
                value={value}
            />
        </Form.Group>
        <Button variant="success" onClick={downloadFile}>Download JSON</Button>
        <UploadFile />
    </div>
  );
}

export default App;

