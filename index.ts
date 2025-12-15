import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
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

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;



export const ecrName = ecr.name
export const ecrepositoryUrl = ecr.repositoryUrl
