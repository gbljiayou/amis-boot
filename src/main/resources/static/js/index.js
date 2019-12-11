function initApp() {
    var amis = amisRequire('amis/embed');
    amis.embed('#root', {
        type: 'page',
        title: 'AMIS Demo',
        body: 'hello world'
    });
}