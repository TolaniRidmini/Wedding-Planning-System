<html>

<head>
    <title>IMAGINE wedding planners</title>
    <link rel="stylesheet" href="../css/signup.css" />
    <link rel="stylesheet" href="../css/location_css.css" />
    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap" rel="stylesheet">

    <script src="../js/location_js.js"></script>
    
    <script src="../js/Admin.js">
    </script>

    <script>
        document.wirte(Date());
    </script>
</head>
<body>
   
    <div class="productdata" id="tbl" style="border-style: groove; border-color: #04454B;">
        <table border="0" width="100%" class="table1">
            <tr>
                <th width="17%" align="left"><img class="logo" src="../images/logomain.jpeg" width="200px" height="150px"></th>
                <th align="left"><h1 class="topic"><b>Wedding Planners</b></h1></th>
                <th width="33%" align="right">
                    <a href="https://courseweb.sliit.lk/login/index.php"><button class="b1"><b class="b3">Log-in</b></button></a><br /><br />
                    <a href="https://courseweb.sliit.lk/login/index.php"><button class="b1"><b class="b3">Sign-in</b></button></a>
                </th>
            </tr>
        </table>
        <hr class="hl" />
        <ul class="menu">
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">Home</b></a></li>
            <li class="left"><a href="#"><b class="b2">Content</b></a></li>
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">Contact us</b></a></li>
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">About us</b></a></li>
        </ul>
        <br><br>
    </div>
    <div id="signin">
        <center>
            <h1>Create a New Account</h1>
        </center>
    </div>

    <div class="header">
    <h2>Register</h2>
  </div>
  
  <form method="POST" action="Regupdate.php" name="register">

    <div class="input-group">
      <label>First Name</label>
      <input type="text" name="firstname" placeholder="First name" required> 
    </div>
	<div class="input-group">
      <label>Last Name</label>
      <input type="text" name="lastname"  placeholder="First name" required> 
    </div>
    <div class="input-group">
      <label>Email</label>
      <input type="email" name="email" placeholder="abc@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" required> 
    </div>
	<div class="input-group">
      <label>Contact Number</label>
      <input type="text" name="contact" pattern="[0-9]{10}" placeholder="+012345678" required> 
    </div>
	<div class="input-group">
      <label>Date of Birth</label>
      <input type="Date" name="DOB" required>
    </div>
	<div class="a">
	<label>Gender  |</label>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
    </div>
    <div class="input-group">
      <label>Password</label>
      <input type="password" name="pwd" required>
    </div>
    <div class="input-group">
      <label>Confirm password</label>
      <input type="password" name="cnfrmpwd" required>
    </div>
    <div class="input-group">
      <button type="submit" class="btn" name="register">Sign Up</button>
    </div>
    <p>
      Already a member? <a href="login.php">Login</a>
    </p>
  </form>
        </center>
    </div>

    <div class="productdata" id="tbl" style="border-style: groove; border-color: #04454B;">
        <table width="100%">
            <tr>
                <td>
                    <b>
                        copyright@2020 Imagine Wedding planning Pvt.Ltd.All rights reserved<br />
                        Payment method via<br />
                        <a href="https://courseweb.sliit.lk/login/index.php">click here to view registered organizations.</a><br />
                        <img src="../images/i4.jpeg" width="180px" />
                    </b>
                </td>
                <td align="right">
                    <h2>
                        Follow us on
                        <a href="https://www.facebook.com/login/"><img src="../images/fi1.jpeg" width="40px" /></a>
                        <br />
                        <a href="https://www.google.com/search?ei=_0xwX6aSB5qU4-EPqMK6yA4&q=youtube&oq=yo&gs_lcp=CgZwc3ktYWIQARgAMgoIABCxAxCDARBDMgQIABBDMgcIABCxAxBDMgQIABBDMgQIABBDMgIIADIFCAAQsQMyBQgAELEDMgUILhCxAzIFCAAQsQM6BAgAEEc6CwgAELEDEIMBEJECOggIABCxAxCDAToCCC5QtApYqxRg-yNoAXACeAOAAdYBiAH1CpIBBTAuOC4xmAEAoAEBqgEHZ3dzLXdperABAMgBCMABAQ&sclient=psy-ab"><img src="../images/fi3.jpeg" width="40px" /></a>
                        <br />
                        <a href="https://www.instagram.com/?hl=en"><img src="../images/fi2.jpeg" width="40px" /></a>
                        <br />
                        <a href="https://twitter.com/login?lang=en"><img src="../images/fi4.jpeg" width="40px" /></a>
                    </h2>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>