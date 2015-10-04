function VerificaTecla(event) {
    var x = event.keyCode; 
    console.log(x);
    /*if (event.keyCode === 13) {
        var query = $('input[name=pesquisa]').val();
        alert(query);
        //pesquisaTags(query);
    }*/
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
                    itens += "<tr>";
                    itens += "<td>" + retorno[i].NomeRec + "</td>";
                    itens += "<td>" + retorno[i].Tipo + "</td>";
                    itens += "<td>" + retorno[i].Origem + "</td>";
                }
                $("resultado").html(itens);
                $("h2").html("Carregado");
            }
        }
    });
}



