var engine;

(function () {
	var con
    var template = function (request) {
        var hbs, file, page,
			absolute = application.get("absolute");
        return absolute.findView(request, "themes/theme0");
    };

    engine = {
        render: function (data, meta) {
            print(template(meta.request)(data));
        }
    };
}());