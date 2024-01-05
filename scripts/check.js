fetch("https://api.github.com/repos/JodaOrg/global-tz/releases/latest").then(x => x.json()).then(json => {
    const current = require("../data/packed/latest.json").version;
    const remote = json.tag_name.replace("gtz", "");
    if(current !== remote) {
        console.log("Update available");
    } else {
        console.log("Already up to date");
    }
});