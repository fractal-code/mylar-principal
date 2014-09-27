Package.describe({
    summary: "Principal graph",
});

Package.on_use(function (api) {

    var where = ['client', 'server'];

    api.use(['standard-app-packages', 'accounts-base', 'mylar:basic-crypto', 'ejson', 'mylar:timing', 'http', 'mylar:async'],
	    where);

    api.imply(['standard-app-packages', 'mylar:timing', 'mylar:async', 'mylar:basic-crypto']);
    api.add_files(['graphmodel.js', 'certs.js', 'principal.js', 'collection_hook.js'], where);

    // TODO: just export one variable containing all these
    api.export("Principal");
    api.export("PrincAttr");
    api.export("Principals");
    api.export("is_indexable");
    api.export("rand_field_name");
    api.export("search_field_name");
    api.export("WrappedKeys");
    api.export("active_attacker");
});
