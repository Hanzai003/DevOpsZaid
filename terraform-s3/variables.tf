variable "aws_region" {
  description = "AWS region to create resources in"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "S3 bucket name for the website"
  type        = string
  default     = "devopszaid-static-site-zaid-20260104"
}