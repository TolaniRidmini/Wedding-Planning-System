<!DOCTYPE html>
<html>
<head>
<title>IMAGINE wedding planners</title>
<link rel="stylesheet" type="text/css" href="../css/require.css"/>
<script src="../js/javascriptphpsac.js"></script>

<body>
<div class="productdata" id="tbl" style="border-style: groove; border-color: #04454B;">
        <table border="0" width="100%" class="table1">
            <tr>
                <th width="17%" align="left"><img class="logo" src="../images/logomain.png" width="200px" height="150px"></th>
                <th align="left"><h1 class="topic"><b>Wedding Planners</b></h1></th>
                <th width="33%" align="right">
                    <a href="https://courseweb.sliit.lk/login/index.php"><button class="b1"><b class="b3">Log-in</b></button></a><br /><br />
                    <a href="https://courseweb.sliit.lk/login/index.php"><button class="b1"><b class="b3">Sign-in</b></button></a>
                </th>
            </tr>
        </table>
		<br>
        <hr class="hl" />
        <ul class="menu">
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">Home</b></a></li>
            <li class="left"><a href="#"><b class="b2">Content</b></a></li>
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">Contact us</b></a></li>
            <li class="left"><a href="https://courseweb.sliit.lk/login/index.php"><b class="b2">About us</b></a></li>
        </ul><br><br>
		
    </div>
	<center>
	<h1 style="color:red"> REQUIREMENT FORUM</h1></center>
	<center>
	<form action="insert2.php" method="POST">
  <table>
   <tr>
    <td> First Name :</td>
	<br>
    <td><input type="text" name="firstname" rows="5" cols="20" style="width:250px;" placeholder="Enter Your First Name Here" required></td>
   </tr>
   <tr>
    <td> Last Name :</td>
	<td><input type="text" name="lastname" rows="5" cols="20" style="width:250px;" placeholder="Enter Your Last Name Here" required></td>
   </tr>
   <td> Address : </td>
   <br>
   <td> <input type="text" name="address" rows="10" cols="50" style="width:800px;" required></td>
   <tr>
    <td>Requirement Type:</td>
    <td>
	<select name="requirementtype" required>
      <option selected hidden value="">Select requirement type</option>
      <option value="Photography">Photography</option>
      <option value="Videography">Videography</option>
      
    </select>
   </tr>
    <tr>
    <td>Your Area:</td>
    <td>
	<select name="area" required>
      <option selected hidden value="">Select Area</option>
      <option value="colombo">Colombo</option>
      <option value="kandy">Kandy</option>
      <option value="other">Other</option>
    </select>
   </tr>
   <tr>
    <td>Gender :</td>
    <td>
     <input type="radio" name="gender" value="m" required>Male
     <input type="radio" name="gender" value="f" required>Female
    </td>
   </tr>
   <tr>
   <td>Date Of Birth :</td>
   <td> <input type="text" name="dateofbirth" rows="10" cols="50" style="width:300px;" required></td>
   </tr>
  <td>
      <tr>
    <td>Email :</td>
    <td><input type="email" name="email" required></td>
   </tr> 
   <tr>
    <td>Phone no :</td>
    <td>
     <select name="phoneCode" required>
      <option selected hidden value="">Select Code</option>
      <option value="+77">+77</option>
      <option value="+78">+78</option>
      <option value="+79">+79</option>
      <option value="+73">+73</option>
      <option value="+94">+94</option>
      <option value="+74">+74</option>
     </select>
     <input type="phone" name="phone" required>
    </td>
   </tr> 
   <tr>
    <td>Requirements :</td>
    <td><input type="text" name="requirements" rows="50" cols="50" style="width:1000px;" placeholder="Enter special requirements Here "required></td>
   </tr> 
  <center> <tr>
  
    <td><input type="submit" value="Submit"></td>
   </tr></center>
  </table>
 </form>
 </div>

	</center>  
	
	
  <center>
	<?php
	   
	   $today = "2020-09-09";
	$status;
	$shipDay = "2020-09-21";
	echo "<h2>Today is " . date("Y/m/d") . "<br></h2>";

	echo "<h3>It is " . date("l") . "</h3>";
	   
	?>
	</center>
	
	<!--codepen.io-->
<div class="gallery" id="gallery">
        <div class="gallery-item">
            <div class="content"><img src="../images/VID1.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/VID2.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/VID3.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/VID4.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/wed1.jpg" alt=""></div>
        </div>
       
      <div class="gallery-item">
            <div class="content"><img src="../images/sd.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/WD.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/SHI.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/NT.jpg" alt=""></div>
        </div> 
        
        
        <div class="gallery-item">
            <div class="content"><img src="../images/LM.jpg" alt=""></div>
        </div> 
        
        <div class="gallery-item">
            <div class="content"><img src="../images/SS.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/CP.png" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/DR.png" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/MM.jpg" alt=""></div>
        </div>
       
        <div class="gallery-item">
            <div class="content"><img src="../images/wedd.jpg" alt=""></div>
        </div>
     

		
	<
	

	</body>