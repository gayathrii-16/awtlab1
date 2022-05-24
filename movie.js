async function movies(){
    const url ="https://imdb-api.com/API/AdvancedSearch/k_ao4ezqek/?genres=action"
    const resp =await fetch(url);
    var data = await resp.json();
    console.log(data);
    var table='<table id="mytable" border = "1" cell padding="1">';
    table+='<tr> <th> Name </th> <th> Stars </th></tr>';

    let {results} =data;
    results.forEach(element=>{
        let{title,stars}=element;
        table+='<tr>';
        table+='<td>' +title +'<td>';
        table+='<td>' +stars +'<td>';
        table+='<tr>';

    })
    table+='</table>';
    document.getElementById("result").innerHTML=table;
}
 <html>
    <head>
        <title>MOVIES</title>
        <script src ="moviefetch.js"></script</script>
    </head>
    <body>
        <center>
            <h1>Movies Data</h1><br>
            <button id="button" onclick = "movies()">submit</button>
            <br>
            <div id ="result"></div>
        </center>
    </body>
</html>
