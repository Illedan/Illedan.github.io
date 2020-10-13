yolo = {

    a: function () {
        if (yolo.b) {
            return yolo.b();
        }

        return 2;
    },
    c: function () {
        document.getElementById("btn").innerHTML = yolo.a();
    }
};