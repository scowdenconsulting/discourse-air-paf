import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'with-plugin-sample',
    initialize() {

        withPluginApi('0.8', api => {
            api.onPageChange(x => {
                if (x == "/login") {
                    //var xmlhttp = new XMLHttpRequest();
                    //var url = "http://ip.jsontest.com/";

                    //xmlhttp.onreadystatechange = function () {
                    //    if (this.readyState == 4 && this.status == 200) {
                    //        var myArr = JSON.parse(this.responseText);
                    //        myFunction(myArr);
                    //    }
                    //};
                    //xmlhttp.open("GET", url, true);
                    //xmlhttp.send();

                    //function myFunction(arr) {
                    //    var out = "";
                    //    var i;
                    //    for (i = 0; i < arr.length; i++) {
                    //        out += '<a href="' + arr[i].url + '">' +
                    //            arr[i].display + '</a><br>';
                    //    }
                    //    document.getElementById("id01").innerHTML = out;
                    //}
                    fetch("https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json")
                        .then((response) => response.json())
                        .then((data) => console.log(data));
                }
            });
        });

    }
}