function VerificaTecla(event) {
    var query = "";
    if (event.keyCode === 13) {
        query = $('input[name=pesquisa]').val();
        pesquisaTags(query);
    }
}

function carregarTudo() {
    var itens = "";

    jQuery.ajax({
        type: "get",
        url: 'dados.php?q=listaReceitas',
        cache: false,
        dataType: 'json',
        contentType: 'utf-8',
        beforeSend: function () {
            $("h2").html("Carregando...");
        },
        error: function () {
            $("h2").html("ERRO NO BANCO DE DADOS");
        },
        success: function (retorno) {
            if (retorno[0].erro) {
                $("h2").html(retorno[0].erro);
            } else {
                for (var i = 0; i < retorno.length; i++) {
                    itens += "<tr>";
                    itens += "<td>" + retorno[i].NomeRec + "</td>";
                    itens += "<td>" + retorno[i].Tipo + "</td>";
                    itens += "<td>" + retorno[i].Origem + "</td>";
                    itens += "<td>" + retorno[i].Ingredientes + "</td>";
                    itens += "<td>" + retorno[i].Modo + "</td>";
                    itens += "<td>" + retorno[i].Tag1 + "</td>";
                    itens += "<td>" + retorno[i].Tag2 + "</td>";
                    itens += "<td>" + retorno[i].Tag3 + "</td>";
                    itens += "<td>" + retorno[i].Tag4 + "</td>";
                    itens += "<td>" + retorno[i].Tag5 + "</td>";
                    itens += "<td>" + retorno[i].Tag6 + "</td>";
                    itens += "<td>" + retorno[i].Tag7 + "</td>";
                    itens += "<td>" + retorno[i].Tag8 + "</td>";
                    itens += "<td>" + retorno[i].Tag9 + "</td>";
                    itens += "<td>" + retorno[i].Tag10 + "</td>";
                    itens += "</tr>";
                }
                $("#tabela").html(itens);
                $("h2").html("Carregado");
            }
        }
    });
}

function pesquisaTags(query) {
    var itens = "";

    jQuery.ajax({
        type: 'get',
        url: "dados.php?q=pesquisaTags&tags=" + query,
        cache: false,
        dataType: "json",
        contentType: 'utf-8',
        success: function (retorno) {
            if (retorno[0].erro) {
                $("h2").html(retorno[0].erro);
            } else {
                for (var i = 0; i < retorno.length; i++) {
                    var id = retorno[i].idReceitas;
                    itens += "<tr>";
                    itens += '<td><a href="receita.php?id=' + id + '">' + retorno[i].NomeRec + "</td>";
                    itens += "<td>" + retorno[i].Tipo + "</td>";
                    itens += "<td>" + retorno[i].Origem + "</td>";
                    itens += "</tr>";
                }
                $("#resultado").html(itens);
                $("h2").html("Carregado");
            }
        }
    });
}

function receita(id) {
    var itens = "";
    
    jQuery.ajax({
        type:'get',
        url: 'dados.php?q=receita&id=' + id,
        cache: false,
        dataType: "json",
        contentType: 'utf-8',
        success: function(retorno){
            if(retorno[0].erro){
                $("h2").html(retorno[0].erro);
            }else{
                for(var i= 0; i<retorno.length; i++){
                    itens += "<tr>";
                    itens += "<td>" + retorno[i].Foto + "</td>";
                    itens += "<td>" + retorno[i].NomeRec + "</td>";
                    itens += "<td>" + retorno[i].Tipo + "</td>";
                    itens += "<td>" + retorno[i].Origem + "</td>";
                    itens += "<td>" + retorno[i].Ingredientes + "</td>";
                    itens += "<td>" + retorno[i].Modo + "</td>";
                    itens += "</tr>";
                }
                $("#receita").html(itens);
                $("h2").html("Carregado");
            }
        }
    });
}



