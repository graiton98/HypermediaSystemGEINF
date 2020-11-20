var prefix;
      cargarPrefix();
      function cargarPrefix() {
        let selectPrefix = document.querySelector("#selectState");
        prefixNumber.forEach(function (value) {
          let option = document.createElement("option");
          option.text = "+" + value.prefix;
          option.value = value.prefix;
          option.title = value.name;
          selectPrefix.add(option);
        });
      }