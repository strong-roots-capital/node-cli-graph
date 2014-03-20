function foo (x) {
    return x / 2;
}

function FunctionGraph (options) {

    var self = this;
    self._graph = [];

    options.width = options.width || 60;
    options.height = options.height || 40;
    options.center = options.center || {
        x: options.width / 2
      , y: options.height / 2
    }

    for (var i = 0; i < options.height; ++i) {
        self._graph[i] = [];
        for (var ii = 0; ii < options.width; ++ii) {
            self._graph[i].push("");
        }
    }

    self._graph[options.center.x][options.center.y] = "+";

    for (var i = 0; i < options.width; ++i) {
        var character = "-";
        if (i === options.center.x) {
            character = "+";
        } else if (i === options.width - 1) {
            character = ">";
        }

        self.graph[i][options.center.y] = character;
    }

    for (var i = 0; i < options.height; ++i) {
        var character = "|";
        if (i === options.center.y) {
            character = "+";
        } else if (i === 0) {
            character = "^";
        }

        self.graph[options.center.x][i] = character;
    }

    self.toString = function () {
        var str = "";
        for (var i = 0; i < self._graph.length; ++i) {
            str += self._graph[i].join("") + "\n";
        }

        return str;
    };
}

var graph = new FunctionGraph ({
    height: 20
  , width: 30
});

console.log(graph.toString());
