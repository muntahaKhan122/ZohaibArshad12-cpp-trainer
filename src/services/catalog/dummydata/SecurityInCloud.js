export const SecurityInCloud = {
  column: ["Field", "Value"],
  data: [
    ["Number of Actions*", "170"],
    ["Identity Management", "AWS IAM, bucket ACL, object ACL"],
    ["Number of IAM Permissions*", "141"],
    ["Resource-Level Statement", "Yes"],
    ["Recourse-based policy", "Bucket"],
    ["Tag-based ABAC", "Yes"],
    ["CloudTrail Coveragefor APIs", `99.3% (missing 1)`],
    ["Number of CloudTrail Event Names*", "138"],
    ["CloudWatch Events", "via CloudTrail"],
    ["VPC endpoint", "Yes (interface + Gateway)"],
    ["VPC endpoint Policy", "Yes"],
    ["Network Filtering", "No"],
    ["Encryption-at-rest", "Yes (SSE-KMS, SSE-S3, SSE-C)"],
    ["Encryption-in-transit (inc.Endpoint protocol)", "Yes but HTTP supported"],
    ["CloudFormation", "4"],
  ],
};
export const SecurityOfCloud = {
  column: ["Field", "Value"],
  data: [
    ["Global Assurance Program Coverage (i.e. SOC, PCI, ISO)*", "6 out of 10"],
    [
      "Specific Assurance Program Coverage (e.g. FedRAMP, HIPAA BAA)*",
      "16 out of 16",
    ],
  ],
};
export const AppendixObject = {
  column: [
    "id",
    "Description",
    "Feature Class ID",
    "IAM Permission",
    "Event",
    "API",
  ],
  data: [
    [
      "S3.A1",
      "Aborts a multipart upload",
      "S3.FC1",
      "s3: AbortMultipartUpload",
      "AbortMultipartUpload",
      "AbortMultiportUpload",
    ],
    [
      "S3.A2",
      "Grants permission to allow circumvention of governnance-mode object retention settings for DeleteObject, DeleteObjects and PutObjectRetention) ",
      "S3.FC17",
      "s3:BypassGovernanceRetention",
      "-",
      "-",
    ],
    [
      "S3.A3",
      "Completes a multipart upload by assembling previously uploaded parts",
      "S3.FC1",
      "s3:PutObject",
      "CompleteMultipartUpload",
      "CompleteMultipartUpload",
    ],
    [
      "S3.A4",
      "Creates a copy of an object that is already stored in Amazon S3",
      "S3.FC1",
      "s3:GetObject s3:PutObject",
      "CopyObject",
      "CopyObject",
    ],
    [
      "S3.A5",
      "Creates a new bucket",
      "S3.FC5",
      "s3:CreateBucket",
      "CreateBucket",
      "CreateBucket",
    ],
    [
      "S3.A6",
      "Initiates a multipart upload and returns an upload ID",
      "S3.FC1",
      "s3: GetObject s3: PutObject",
      "CreateMultipartUpload",
      "CreateMultipartUpload",
    ],
    [
      "S3.A1",
      "Aborts a multipart upload",
      "S3.FC1",
      "s3: AbortMultipartUpload",
      "AbortMultipartUpload",
      "AbortMultiportUpload",
    ],
    [
      "S3.A2",
      "Grants permission to allow circumvention of governnance-mode object retention settings for DeleteObject, DeleteObjects and PutObjectRetention) ",
      "S3.FC17",
      "s3:BypassGovernanceRetention",
      "-",
      "-",
    ],
    [
      "S3.A3",
      "Completes a multipart upload by assembling previously uploaded parts",
      "S3.FC1",
      "s3:PutObject",
      "CompleteMultipartUpload",
      "CompleteMultipartUpload",
    ],
    [
      "S3.A4",
      "Creates a copy of an object that is already stored in Amazon S3",
      "S3.FC1",
      "s3:GetObject s3:PutObject",
      "CopyObject",
      "CopyObject",
    ],
    [
      "S3.A5",
      "Creates a new bucket",
      "S3.FC5",
      "s3:CreateBucket",
      "CreateBucket",
      "CreateBucket",
    ],
    [
      "S3.A6",
      "Initiates a multipart upload and returns an upload ID",
      "S3.FC1",
      "s3: GetObject s3: PutObject",
      "CreateMultipartUpload",
      "CreateMultipartUpload",
    ],
    [
      "S3.A1",
      "Aborts a multipart upload",
      "S3.FC1",
      "s3: AbortMultipartUpload",
      "AbortMultipartUpload",
      "AbortMultiportUpload",
    ],
    [
      "S3.A2",
      "Grants permission to allow circumvention of governnance-mode object retention settings for DeleteObject, DeleteObjects and PutObjectRetention) ",
      "S3.FC17",
      "s3:BypassGovernanceRetention",
      "-",
      "-",
    ],
    [
      "S3.A3",
      "Completes a multipart upload by assembling previously uploaded parts",
      "S3.FC1",
      "s3:PutObject",
      "CompleteMultipartUpload",
      "CompleteMultipartUpload",
    ],
    [
      "S3.A4",
      "Creates a copy of an object that is already stored in Amazon S3",
      "S3.FC1",
      "s3:GetObject s3:PutObject",
      "CopyObject",
      "CopyObject",
    ],
    [
      "S3.A5",
      "Creates a new bucket",
      "S3.FC5",
      "s3:CreateBucket",
      "CreateBucket",
      "CreateBucket",
    ],
    [
      "S3.A6",
      "Initiates a multipart upload and returns an upload ID",
      "S3.FC1",
      "s3: GetObject s3: PutObject",
      "CreateMultipartUpload",
      "CreateMultipartUpload",
    ],
  ],
};

export const CKMatrix = {
  column: [
    "Initial Access",
    "Execution",
    "Persistence",
    "Privilege Escalation",
    "Defense Evasion",
    "Credential Access",
    "Discovery",
    "Discovery",
    "Lateral Movement",
    "Collection",
    "Exfiltration",
    "impact",
  ],
  data: [
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Recon of AWS root account emails using email ACL grantee feature [S3.T19]",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Recon of AWS root account emails using email ACL grantee feature [S3.T19]",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Recon of AWS root account emails using email ACL grantee feature [S3.T19]",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Recon of AWS root account emails using email ACL grantee feature [S3.T19]",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
    [
      "",
      "",
      "",
      "Gain access by modifying or deleting important object tags [S3.T33]",
      "Exfiltrate data via ungoverned S3 endpoint [S3.T45]",
      "",
      "Recon of AWS root account emails using email ACL grantee feature [S3.T19]",
      "Reduce bucket security by modify the bucket public access block [S3.T52]",
      "Move prod data in non-prod environment [S3.T11]",
      "Bucket takeover to gather data [S3.T1]",
      "Grant unauthorized access to a private bucket by changing bucket ACL [S3.T4]",
    ],
  ],
};
