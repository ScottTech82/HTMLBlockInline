
class UtilityService {

    /*
    * http://127.0..1/user-detail.html?id=1&a=0&b=1&c=2
    * strip all but data after question mark.
    * id=1&a=0&b=1&c=2
    * substring by the ampersand in an array..
    * ["id=1", "a=0", "b=1", "c=2"]
    * iterate through collection and split by equal sign key=value.
    * {id: 1, a: 0, b: 1, c: 2}
    */
    static getUrlParms = () => {
        let url = document.URL;
        // splie on ?
        let parameters = url.split("?")[1]
        parameters = parameters.split("&");
        let json = {};
        for(let parameter of parameters) {
            let keyValue = parameter.split("=");
            json[keyValue[0]]=keyValue[1];
        }
        return json;
    }
}