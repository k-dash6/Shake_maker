async function take_values (){
    var checkboxes = document.getElementsByClassName('checkbox');
    var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
         }
      }
//    return checkboxesChecked; // для использования в нужном месте
    const result = await eel.convert_value_py(checkboxesChecked)();
    document.getElementById("output").value = result;
    }

document.getElementById("submit").onclick = take_values;

