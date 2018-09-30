class Bind {

    constructor(modelo, view, ...propriedades) {
        let proxy = ProxyFactory.create(modelo, propriedades, modelo => {
            view.update(modelo);
        });
        view.update(modelo);
        return proxy;
    }
}