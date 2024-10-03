<html lang="en">
<head>
<title>Passionate about user interface designing, developing, and helping brands scalability</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="User Interface Designer, Web Designer, Web Developer,  eCommerce Frontend Developer"/>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" />
<link href="css/custom.css" rel="stylesheet" />

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
<?php 
$to = "peerashaik786@gmail.com"; // this is your Email address
$from = $_POST['email']; // this is the sender's Email address
$subject = "Form submission";
$subject2 = "You have just subscribed to the PeeraShaik's newsletter!";
$message =  $from . " just subscribed for your Newsletter" ;
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

//Headers
$headers .= "From: <".$from. ">"; 
$headers2 = "From:" . $to;
if(isset($_POST['submit'])){    
mail($to,$subject,$message,$headers);
mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
echo "You have subscribed to my newsletter. Thank you, I will contact you shortly.";
// You can also use header('Location: thank_you.php'); to redirect to another page.
// You cannot use header and echo together. It's one or the other.
} ?>
</head>
<body>

<!-- Header Section -->
<div class="header text-center">
      <a class="link" href="/ui"><h1 class="title">Shaik Peera</h1></a>
      <p class="small m-0">DESIGN <span>|</span> DEVELOP <span>|</span> TECHY <span>|</span> MENTOR</p>
</div>

<!-- Navbar Section -->
<nav class="navbar">
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="navbar-toggler" for="menu-btn"><span class="navicon"></span></label>

      <div class="collapse navbar-collapse menu" id="navmenu">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="/ui/about.html" class="nav-link">ABOUT</a>
            </li>
            <li class="nav-item">
                <a href="/ui/skills.html" class="nav-link">SKILLS</a>
            </li>
            <li class="nav-item">
                <a href="/ui/experience.html" class="nav-link">PATRONS</a>
            </li>
            <li class="nav-item">
                <a href="/ui/works.html" class="nav-link">WORKS</a>
            </li>
            <li class="nav-item">
                <a href="/ui/contact.html" class="nav-link">CONTACT</a>
            </li>
        </ul>
      </div>
</nav>

<div class="hero-banner contact">
  <div class="headings">
    <h2 class=" text-center">CONTACT</h2>
  </div>
  <div class="overlay"></div>
  <div class="pic"></div>
</div>

<div class="content mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4 contact">
        <div>
          <h5><i class="bi bi-telephone-fill"></i> Phone:</h5>
          <p>+91 9632413905</p>
          <br />
          <h5><i class="bi bi-people-fill"></i> Skype/Teams:</h5>
          <p>peera.shaik</p>
          <br />
          <h5><i class="bi bi-envelope-fill"></i> Email:</h5>
          <a href="mailto:peerashaik786@gmail.com">peerashaik786@gmail.com</a>
          <br />
          <address>
            <h5><i class="bi bi-map-fill"></i> Address:</h5>
            <p class="m-0">
              13-57, Road no-8, P&T Colony, <br />
              Kodanadaramanagar, Dilsukhnagar,<br />
              Hyderabad, Telangana - 500060
            </p>
          </address>
        </div>

        <form method="post" id="userForm" name="userForm">
          <div class="cotent" style="background-color: grey">
            <h2>Subscribe to my Newsletter</h2>
            <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.</p>
            <input type="text" placeholder="Name" name="name" required>
            <input type="text" placeholder="Email address" name="mail" required>
            <label>
              <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
            </label>
            <button type="submit" class="btn btn-black green" name="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <div class="col-md-8">
        <p>Please contact from any of the medium shared on left to serve you better.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0429666229174!2d78.52536347493412!3d17.36166538352114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f3392aeae1%3A0xcd793fc995785c3a!2s13-57%2C%20Saroornagar%2C%20Kodandaram%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1725111380820!5m2!1sen!2sin" style="border:0;width: 100%; min-height: 500px;margin-top: 20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="footer mt-5">
  <div class="container">
    <ul class="nav">
      <li class="nav-item"><a href="/ui/about.html" class="nav-link link">About</a></li>
      <li class="nav-item"><a href="/ui/skills.html" class="nav-link link">Skills</a></li>
      <li class="nav-item"><a href="/ui/experience.html" class="nav-link link">Patrons</a></li>
      <li class="nav-item"><a href="/ui/works.html" class="nav-link link">Works</a></li>
      <li class="nav-item"><a href="/ui/contact.html" class="nav-link link">Contact</a></li>
    </ul>
    <ul class="nav social">
      <li><a class="link" href="Magento2-Frontend-Developer-PeeraShaik.pdf" download="Magento2-Frontend-Developer-PeeraShaik.PDF">Download - RESUME</a></li>
      <li class="ms-2">
        <a href="https://www.facebook.com/peera.shaik" target="_blank"><i class="bi bi-facebook"></i></a>
      </li>
      <li class="ms-2">
        <a href="https://www.instagram.com/peerashaik786" target="_blank"><i class="bi bi-instagram"></i></i></a>
      </li>
      <li class="ms-2">
        <a href="https://www.linkedin.com/in/peerashaik/" target="_blank"><i class="bi bi-linkedin"></i></a>
      </li>
    </ul>
  </div>
</footer>
<div class="copyright text-center py-4">
    <p class="m-0">© <span id='date'></span> Shaik'sWeb. All rights reserved.</p>
</div>
<a href="#" class="back-to-top"><i class="bi bi-arrow-up-circle-fill"></i></a>

</body>
</html>