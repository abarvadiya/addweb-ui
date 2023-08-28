import { S3 } from "aws-sdk";

const s3Client = new S3({
  region: process.env.NEXT_PUBLIC_S3_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
});

export default s3Client;
