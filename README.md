# Camping Gear Website

*A Static Website Project Showcasing Outdoor Adventure Gear*

_Deployed and hosted on Amazon S3 for fast, reliable, and scalable static website hosting._

## About the Website

This is a **static website** showcasing a camping gear and essentials store. It highlights the services offered, a portfolio of camping adventures, the company’s story, team members, and a contact form. The website is designed for outdoor enthusiasts looking for quality camping equipment such as tents, grills, backpacks, and lighting solutions.

Key features include:

- Responsive navigation and sections: Home, Services, Portfolio, About Us, Contact
- Service descriptions with images
- Portfolio gallery showcasing camping adventures
- Company story, vision, and team profiles
- Contact form with address, phone, email, and business hours
- Font Awesome icons for UI enhancement

---

## Project Structure

```
├── index.html
├── css/
│   └── styles.css
├── JavaScript/
│   └── script.js
├── assets/
└── README.md

````

**Note:** The folder name for images is `Assest/` — ensure this matches exactly in your folder and file names.

---

## Deployment on AWS S3 (Static Website Hosting)

Follow these steps to host the website on AWS S3:

1. **Create an S3 Bucket:**
   - Log in to the AWS Management Console.
   - Navigate to S3 and create a new bucket.
   - Bucket name should be globally unique.
   - Choose the AWS region closest to your target audience.

2. **Enable Static Website Hosting:**
   - Select the bucket.
   - Go to the **Properties** tab.
   - Scroll down to **Static website hosting** and enable it.
   - Choose **Use this bucket to host a website**.
   - Set **Index document** to `index.html`.

3. **Upload Website Files:**
   - Upload `index.html`, the `CSS` folder, the `JavaScript` folder, and the `Assest` folder.
   - Make sure folder structure and filenames exactly match those referenced in your HTML.

4. **Set Bucket Policy for Public Access:**
   - Under **Permissions** tab, add the following bucket policy (replace `your-bucket-name`):

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
      ]
    }
    ```

5. **Access Your Website:**
   - Use the website endpoint URL provided under the static website hosting section.

---

## Handling Images and Assets

- All images are stored inside the `Assest/` folder.
- Ensure the folder and filenames are case-sensitive and match the paths in your HTML.
- If you rename the folder, update the image `src` paths in `index.html`.

---
