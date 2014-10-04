Package.describe({
    summary: "Principal graph"
});

Package.onUse(function (api) {
    api.use(['meteor-platform', 'accounts-base', 'mylar:basic-crypto', 'ejson', 'mylar:timing', 'http', 'mylar:async'], ['client', 'server']);

    api.imply(['mylar:timing', 'mylar:async', 'mylar:basic-crypto']);
    api.addFiles(['graphmodel.js', 'certs.js', 'principal.js', 'collection_hook.js'], ['client', 'server']);

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
