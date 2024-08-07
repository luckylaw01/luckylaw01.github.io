<!-- Design an email template for the School of Advanced programming student when they enroll. I'll use the template with EmailJs service. It should be clean, professional and integrate logo,picturea and links -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            overflow: hidden;
        }

        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            display: block;
        }

        .main {
            background: #fff;
            padding: 20px;
        }

        .main h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .main p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .main a {
            background: #333;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            display: inline-block;
        }

        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
    </style>
</head>

<body>
    <header>
        <img src="logo.png" alt="School of Advanced Programming" class="logo">
    </header>
    <div class="container">
        <div class="main">
            <h1>Welcome to the School of Advanced Programming</h1>
            <p>Dear Student,</p>
            <p>Thank you for enrolling in the School of Advanced Programming. We are excited to have you as a student and look forward to helping you achieve your goals.</p>
            <p>Our courses are designed to provide you with the skills and knowledge you need to succeed in the field of programming. Whether you are a beginner or an experienced programmer, we have a course that is right for you.</p>
            <p>If you have any questions or need assistance, please do not hesitate to contact us. We are here to help you every step of the way.</p>
            <a href="https://soapinstitute.live">Visit our website</a>
        </div>
    </div>
    <footer>
        &copy; 2024 School of Advanced Programming
    </footer>
</body>

</html>