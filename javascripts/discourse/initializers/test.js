import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'with-plugin-sample',
    initialize() {

        withPluginApi('0.8', api => {
            api.onPageChange(x => {
                if (x == "/login") {
                    debugger;
                    document.getElementsByClassName("login-required").innerHTML = "<h1>Testing</h1>"
                    //fetch("https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json")
                    //    .then((response) => response.json())
                    //    .then((data) => console.log(data));
                }
            });
        });

    }
}