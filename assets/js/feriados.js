$(document).ready(function()
{
    var pData

    $.ajax(
    {
        type: "GET",
        url: `https://www.feriadosapp.com/api/holidays.json`,
        dataType: "json",
        success: function(pTempData)
        {
            pData = pTempData

            sendHTML()

            console.log("Conexion exitosa")
        },
        error: function(pTempData)
        {
            console.log("Error en la conexion")
        },
        async: true,
    })

    let sendHTML = () =>
    {
        let tablePart = ""

        for (let i = 0; i < pData.data.length; i++)
        {
            tablePart += `<tr>`
            tablePart += `<td>${pData.data[i].date}</td>`
            tablePart += `<td>${pData.data[i].title}</td>`
            tablePart += `<td>${pData.data[i].extra}</td>`
            tablePart += `<td>${pData.data[i].law}</td>`
            tablePart += `<td>${pData.data[i].law_id.join(" - ")}</td>`
            tablePart += `</tr>`
        }

        console.log(tablePart)

        $(".mainTable").html
        (
        `<table>
            <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Ley</th>
                <th>ID Ley</th>
            </tr>
            ${tablePart}
        </table>`
        );
    }
});
