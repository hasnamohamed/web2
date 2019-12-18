<?php if(isset($_POST['template'])){
    $template=json_decode($_POST['template'],true);
    $conn=new mysqli("localhost","root","","h");
    if($conn ->connect_error){
        die($conn ->connect_error);
    }
    $date=$template["date"];
    $target=$template["target"];
    $type=$template["type"];
    $sql="Insert Into template Values('$date','$target','$type')";
    $conn -> query($sql);
    if($conn ->affected_rows > 0)
    {
        echo "Inserted successfully";
    }
    else
    {
        echo "Sorry : problem with Insertion";
    }
}

if(isset($GET['template'])){
    $sql="select * from template"; 
    $conn=new mysqli("localhost","root","","h");
    if($conn ->connect_error){
        die($conn ->connect_error);
    }
   if($result=$conn->query($sql))
   {
       $rows=array();
       while($row=$result ->fetch_assoc()){
           array_push($rows,$row);
       }
       echo json_encode($rows);
    }
   }
    else
    {
        echo "Sorry : No Data to retrive";
    }

?>