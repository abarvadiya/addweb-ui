import { S3 } from "aws-sdk";
import s3Client from "../config/s3.connection";

interface UploadFileParams {
  Bucket: string;
  Key: string;
  Body: Buffer | Uint8Array | Blob | string;
  ContentType: string;
}

export const uploadFile = async (file: File, filePath: string) => {
  const convertToBlob = new Blob([file], {
    type: file.type,
  });

  const s3Params: UploadFileParams = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME || "",
    Key: filePath,
    Body: convertToBlob,
    ContentType: file.type,
  };
  const result = await s3Client.upload(s3Params).promise();
  return result;
};

export const deleteFile = (fileKey: string): Promise<S3.DeleteObjectOutput> =>
  new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME || "",
      Key: fileKey,
    };
    s3Client.deleteObject(params, (err: Error, data: S3.DeleteObjectOutput) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
