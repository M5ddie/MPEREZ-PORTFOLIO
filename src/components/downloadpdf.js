import AWS from 'aws-sdk';

const downloadFile = (bucketName, key) => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: bucketName,
    Key: key,
  };

  s3.getObject(params, (err, data) => {
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
