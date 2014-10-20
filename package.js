Package.describe({
    summary: "Principal graph",
    name: "mylar:principal",
    version: "0.1.2",
    git: "https://github.com/gliesesoftware/mylar-principal.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['meteor-platform', 'http', 'accounts-base'], ['client', 'server']);
    api.use(['mylar:basic-crypto@0.1.0', 'mylar:timing@0.1.0', 'mylar:async@0.1.0'], ['client', 'server']);

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
