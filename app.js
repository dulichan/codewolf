var caramel = require('caramel');

caramel.configs({
    context: '/codewolf',
    cache: true,
    negotiation: true,
    themer: function () {
        /*var meta = caramel.meta();
        if(meta.request.getRequestURI().indexOf('gadget') != -1) {
            return 'modern';
        }*/
        return 'theme0';
    }/*,
    languagesDir: '/i18n',
    language: function() {
        return 'si';
    }*/
});