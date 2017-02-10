$(() => {
    var model = new PharkleModel(),
        view = new PharkleView(model),
        controller = new PharkleController(model, view);
});