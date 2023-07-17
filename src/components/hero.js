// styling
import "../assets/css/hero.css";

// file
// import cvfile from "../assets/pdf/CV_PerezMadelyn.pdf";
// import cvfile from "https://myportfbucket.s3.ap-southeast-2.amazonaws.com/CV_PerezMadelyn.pdf";
// import cvfile from "https://github.com/M5ddie/MPEREZ-PORTFOLIO/blob/dc314b95bd8a56fca5e5b633dc7b91190ab72d77/src/assets/pdf/CV_PerezMadelyn.pdf";

import Button from 'react-bootstrap/Button';

// S3 test
import { GetObjectCommand } from "@aws-sdk/client-s3";
const { S3 } = require('@aws-sdk/client-s3');

const AccessKeyId = "AKIAV7OKLOT4MGA3BXDH",
      SecretKey = "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";
    //   SessionToken = zzzzzzzzzz;

const creds = {
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretKey
    // sessionToken: SessionToken
};

const s3Client = new S3({
    apiVersion: '2006-03-01',
    region: 'ap-southeast-2',
    credentials: creds
});

const HeroMP = () => {

    // const handleDownload = async () => {
    //     const command = new GetObjectCommand({
    //         Bucket: "myportfbucket",
    //         Key: "CV_PerezMadelyn.pdf"
    //       });
    
    //       try {
    //         const response = await s3Client.send(command);
    //         // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    //         const str = await response.Body.transformToString();
    //         console.log(str);
    //       } catch (err) {
    //         console.error(err);
    //       }
    // }

    const downloadFile = (bucketName, key) => {
        const s3 = new S3(s3Client.region);
      
        const params = {
          Bucket: bucketName,
          Key: key,
        };
      
        s3.getObject(s3Client, (err, data) => {
          if (err) {
            console.log(err, err.stack);
          } else {
            const url = URL.createObjectURL(new Blob([data.Body]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', key);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        });
      }

    return (
        <div className="heroDiv">
            <div className="coverLay"></div>
            <div className="heroContent text-light">
                <h1>Hi there! I'm Maddie and I'm a Web Developer.</h1>
                <p>I'm still working on this portfolio ^_^</p>
                {/* <a href={cvfile} download="CV_PerezMadelyn" target="_blank" rel="noopener noreferrer"> */}
                    {/* <Button type="submit" className="btnDownloadCV">Download CV</Button> */}
                    {/* <Button type="submit" onClick={handleDownload} className="btnDownloadCV">Download CV</Button> */}
                    <Button type="submit" onClick={downloadFile} className="btnDownloadCV">Download CV</Button>
                {/* </a> */}
            </div>

        </div>
    )
}

export default HeroMP