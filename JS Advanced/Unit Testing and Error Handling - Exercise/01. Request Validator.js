function requestValidator (obj) {
    if(!obj.hasOwnProperty('method') || obj.method !== 'GET' && obj.method !== 'POST'&& obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!obj.hasOwnProperty('uri') || obj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!obj.hasOwnProperty('version') && obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0' ) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    } else {
        return obj;
    }
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));

  console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  ));

  console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  ));