
# 🌐 AWS S3 Static Website Hosting

This project hosts a static website using **Amazon S3**. The site is fully client-side, using HTML, CSS, and JavaScript.

---

## 🚀 Features

- Host a static website using AWS S3
- Optional CloudFront CDN for improved performance
- HTTPS via AWS Certificate Manager (ACM)
- Custom domain with Route 53 (optional)
- SEO-ready and mobile-responsive design

---

## 📁 Project Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── JavaScript/
│   └── script.js
├── assets/
└── README.md

```
## 🛠️ Deployment Steps

### 1. Create an S3 Bucket

- Go to AWS S3 → Create Bucket
- Bucket name must match your domain name (e.g., `example.com`)
- Uncheck **Block all public access**
- Enable static website hosting (upload your `index.html` and optionally `error.html`)

### 2. Set Bucket Policy

Add a bucket policy to allow public access:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::example.com/*"
  }]
}
```
