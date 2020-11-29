<?php
session_start();
if(isset($_SESSION['usuario'])){
	if ($_SESSION['usuario']['Tipo_usuario']!="adrian_parodi") {
		header('Location:../alberto_cardenas/');

	
		header('Location:../alberto_sulllca_huaman/');
		header('Location:../alejandro_huaman/');
    }
	} else{
		header('Location:../../');
	}
 ?>
<!DOCTYPE html>
<html lang="en">

<head>
  
   <meta charset="UTF-8"/>

    <title>Adrian Parodi</title>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--  Datatables CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.css"/>  
     <!--font awesome con CDN-->  
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">  
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- CSS personalizado --> 
    <!--<link rel="stylesheet" href="main.css">  -->
      
    <!--datables CSS b谩sico-->
    <link rel="stylesheet" type="text/css" href="datatables/datatables.min.css"/>
    <!--datables estilo bootstrap 4 CSS-->  
    <link rel="stylesheet"  type="text/css" href="datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">
    <style>
    .table thead, .table tfoot{
        background-color: #5cb85c;
        color:azure;
    }
    	header{
        display: flex; 
        justify-content: space-between;
        align-items: center;
		background-color: #5cb85c; 
}
@media (max-width: 1000px){
        header{
         flex-direction: column;
         align-items: flex-start;
        }
}
h1{

   /*	background-color: #5cb85c;*/
			/*color: #FFFFFF;*/
			border-color: #6ea1cc !important;
			text-transform: uppercase;
			text-align: center;
				font-family: 'Helvetica', sans-serif; 
			margin:12px;
			font-size:30px;
}
.botoncito{
    margin:10px;
}

    </style>
</head>
<body>
<header>
<div class="botoncito" >
<button  type="submit" class="btn btn-dark" onclick="location.href='../salir.php'" >
	        <span  class="glyphicon glyphicon-log-out"></span> Cerrar Sesión
	      
	    </button>
	    </div>
	</header>
		<h1>Bienvenido <?php echo $_SESSION['usuario'] ['Nombre']?> </h1>
    <div class="container">
        <div class="row">
            <div class="col">
                
                <table id="example" class="table table-striped table-bordered" style="width:100%" >
                            <thead>
                                <tr>
                                    <th class="text-center">MES</th>
                                    <th class="text-center">FECHA</th>
                                    <th class="text-center">UNIDAD</th>
                                           <th class="text-center">DESTINO</th>
                                    <th class="text-center">DÍAS</th>
                                
                            </thead>
                            <tbody>
                                <?php
$hostname="localhost";
$username="";
$password="";
$db = "";
$dbh = new PDO("mysql:host=$hostname;dbname=$db", $username, $password);
foreach($dbh->query('SELECT mes,fecha,unidad,destino,dias 
FROM adrian_parodi
;') as $row) {
echo "<tr>"; 
echo "<td class='text-center'>" . $row['mes'] . "</td>";
echo "<td class='text-center'>" . $row['fecha'] . "</td>";
echo "<td class='text-center'>" . $row['unidad'] . "</td>";
echo "<td class='text-center'>" . $row['destino'] . "</td>";
echo "<td class='text-center'>" . $row['dias'] . "</td>";
echo "</tr>"; 
}
?>  
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th class="text-center"></th>
                                  
                                </tr>
                            </tfoot>
                </table> 
            </div>
        </div>
    </div>
     
  



     <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        
    <!--  Datatables JS-->
    <!--<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>   -->
    <!-- SUM()  Datatables-->
        <!-- datatables JS -->
    <script type="text/javascript" src="datatables/datatables.min.js"></script>    
    <script src="https://cdn.datatables.net/plug-ins/1.10.20/api/sum().js"></script>


    
    <script>
        $(document).ready(function () {
            $('#example').DataTable({
                  language: {
                    "lengthMenu": "Mostrar _MENU_ registros",
                       "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sSearch": "Buscar:",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    },
                
                },
                
                   "drawCallback":function(){
                      //alert("La tabla se está recargando"); 
                      var api = this.api();
                      $(api.column(4).footer()).html(
                          'TOTAL: '+api.column(4, {page:'current'}).data().sum()
                      )
                },
                 responsive: "true",
                dom: 'Bfrtilp',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: '<i class="fas fa-file-excel"></i> ',
                        titleAttr: 'Exportar a Excel',
                        className: 'btn btn-success'
                    },
                    {
                        extend: 'pdfHtml5',
                        text: '<i class="fas fa-file-pdf"></i> ',
                        titleAttr: 'Exportar a PDF',
                        className: 'btn btn-danger'
                    },
                    {
                        extend: 'print',
                        text: '<i class="fa fa-print"></i> ',
                        titleAttr: 'Imprimir',
                        className: 'btn btn-info'
                    },
                ]
                
            });
        });
    </script>
    
    
    
      <!-- jQuery, Popper.js, Bootstrap JS -->
    <!--<script src="jquery/jquery-3.3.1.min.js"></script>-->
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
      

    
      <script src="datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
    <script src="datatables/JSZip-2.5.0/jszip.min.js"></script>    
    <script src="datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
    <script src="datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script src="datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>
    
    
</body>
</html>