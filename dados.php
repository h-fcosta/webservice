<?php

$link = mysql_connect("localhost", "root", "usbw") or die("Falha ao conectar ao servidor" . mysql_error());
$bd = mysql_select_db("matchfood", $link) or die("Falha ao conectar ao servidor" . mysql_error());

header('Content-Type: text/plain');

@$action = $_GET['q'];
$result = array('status' => 'false');

if ($action == 'pesquisaTags') {
    @$cons = $_GET['tags'];

    $query = mysql_query("SELECT idReceitas, NomeRec, Tipo, Origem FROM matchfood.receitas where tag1 LIKE '%" . $cons . "%' or tag2 LIKE '%" . $cons . "%' or tag3 LIKE '%" . $cons . "%'
                        or tag4 LIKE '%" . $cons . "%' or tag5 LIKE '%" . $cons . "%' or tag6 LIKE '%" . $cons . "%' or tag7 LIKE '%" . $cons . "%' or tag8 LIKE '%" . $cons . "%'
                        or tag9 LIKE '%" . $cons . "%' or tag10 LIKE '%" . $cons . "%';");
    $num = mysql_num_rows($query);
    
    for ($i = 0; $i < $num; $i++) {
        $dados[] = mysql_fetch_assoc($query);
    }
} else
if ($action == 'listaReceitas') {
    $sql = mysql_query("SELECT * FROM receitas");
    $num = mysql_num_rows($sql);

    for ($i = 0; $i < $num; $i++) {
        $dados[] = mysql_fetch_assoc($sql);
    }
}else
    if($action == 'receita'){
        @$id = $_GET['id'];
        
        $query = mysql_query("SELECT Foto, NomeRec, Tipo, Origem, Ingredientes, Modo FROM receitas where idReceitas = '$id';");
         
        $num = mysql_num_rows($query);
        
        for($i = 0; $i<$num;$i++){
            $dados[] = mysql_fetch_assoc($query);
        }
    }

echo json_encode($dados, JSON_PRETTY_PRINT);
