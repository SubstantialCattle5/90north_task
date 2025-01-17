import json
import boto3
import base64
import os
from botocore.exceptions import BotoCoreError, ClientError

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    try:
        bucket_name = event.get('bucket_name', 'buckettostorepdfsthroughlambda')
        file_name = event.get('file_name')
        file_content = event.get('file_content')
        content_type = event.get('content_type', 'application/octet-stream')

        if not bucket_name or not file_name or not file_content:
            raise KeyError("One or more required parameters are missing: 'bucket_name', 'file_name', 'file_content'.")
        decoded_file_content = base64.b64decode(file_content)

            # Upload the file to S3
        s3_client.put_object(
                Bucket=bucket_name,
                Key=file_name,
                Body=decoded_file_content,
                ContentType=content_type
            )

        return {
                "statusCode": 200,
                "body": json.dumps({
                    "message": "File uploaded successfully",
                    "file_url": f"https://{bucket_name}.s3.amazonaws.com/{file_name}"
                })
            }

    except KeyError as e:
        return {
            "statusCode": 400,
            "body": json.dumps({
                "error": "Missing required parameter",
                "details": str(e)
            })
        }
    except (BotoCoreError, ClientError) as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": "Failed to upload file",
                "details": str(e)
            })
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": "An unexpected error occurred",
                "details": str(e)
            })
        }

