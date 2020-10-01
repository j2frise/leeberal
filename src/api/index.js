import config from '../config'

export default {
    request(method, uri, token, data = null) {
        if (!uri) {
            console.error('fonction de api requiere uri')
            return
        }
        var url = config.serverURI + uri
        var setUrl
        var headers = {'Content-Type': 'application/json'}
        
        method = method.toLowerCase()
        
        
        if (token != null) {
            headers['Authorization'] = token
        }
        
        if(method == 'get') {
            setUrl = data == null? fetch(url, {method: method.toUpperCase(), headers: headers}): fetch(`${url}?${data}`, {method: method.toUpperCase(), headers: headers})
        } else if(method == 'post' || method == 'put') {
            if(data == null) {
                console.error('veillez envoyer les données pour cette methode')
                return
            }
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
            let options = {
                            method: method.toUpperCase(),
                            headers: headers,
                            body: data
                        }
            setUrl = fetch(url,options)
        } else if(method == 'post_file' || method == 'put_file') {
            var myMethod = method == 'post_file'?"POST":"PUT";
            
            if(data == null) {
                console.error('veillez envoyer les données pour cette methode')
                return
            }
            //headers['Content-Type'] = 'multipart/form-data';
            delete headers['Content-Type'];

            let options = {
                    method: myMethod,
                    headers: headers,
                    body: data
                }
            setUrl = fetch(url, options)
        } else {
            console.error('cette methode n\'est pas prise en compte par l\'api')
            return
        }
        return setUrl
        .then(response => response.json())
        
    }
    
}
