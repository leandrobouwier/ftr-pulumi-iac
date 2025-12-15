import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("primeiro-bucket", {
    bucket: 'primeiro-bucket-pos-full',
    tags: {
        IAC: "true"
    }

});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
    name: 'primeiro-ecr-pos-full',
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IAC: "true",
    }
})

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name
export const ecrepositoryUrl = ecr.repositoryUrl
