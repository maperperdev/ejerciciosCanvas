window.addEventListener("load", iniciar, false);

function iniciar() {
  var canvas = document.getElementById("myCan");
  var ctx = canvas.getContext("2d");
  canvas.width = "800";
  canvas.height = "500";
  var color = "red";
  const anchuraBorrar = document.getElementById("anchuraBorra");
  const alturaBorrar = document.getElementById("alturaBorrar");
  const selectorColor = document.getElementById("selectorColor");
  const numeroFiguras = document.getElementById("numFiguras");

  const btnCuadrado = document.getElementById("btnCuadrado");
  btnCuadrado.addEventListener("click", () => {
    var coordenadas = recojeCoordenadas();
    if (recojeNumeroFiguras() == 1) {
      dibujaCuadrado(coordenadas[0], coordenadas[1], extraeColor());
    } else {
      var reduccion = 10;
      for (let i = 0; i < recojeNumeroFiguras(); i++) {
        dibujaCuadrado(coordenadas[0], coordenadas[1], extraeColor(), reduccion * i);
      }
    }
  }, false);

  const btnTriangulo = document.getElementById("btnTriangulo");
  btnTriangulo.addEventListener("click", () => {
    var coordenadas = recojeCoordenadas();
    if (recojeNumeroFiguras() == 1) {
      dibujaTriangulo(coordenadas[0], coordenadas[1], extraeColor());
    } else {
      var reduccion = 10;
      for (let i = 0; i < recojeNumeroFiguras(); i++) {
        dibujaTriangulo(coordenadas[0], coordenadas[1], extraeColor(), reduccion * i);
      }

    }
  }, false);

  const btnCirculo = document.getElementById("btnCirculo");
  btnCirculo.addEventListener("click", () => {
    var coordenadas = recojeCoordenadas();
    if (recojeNumeroFiguras() == 1) {
      dibujaCirculo(coordenadas[0], coordenadas[1], extraeColor());
    } else {
      var reduccion = 10;
      for (let i = 0; i < recojeNumeroFiguras(); i++) {
        dibujaCirculo(coordenadas[0], coordenadas[1], extraeColor(), reduccion * i);
      }
    }
  }, false);

  const btnAreaBorrada = document.getElementById("btnAreaBorrada");
  btnAreaBorrada.addEventListener("click", () => {
    var coordenadas = recojeCoordenadas();
    areaBorrada(coordenadas[0], coordenadas[1]);
  }, false);


  function dibujaCuadrado(x, y, color, reduccion = 0) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.strokeRect(x + reduccion, y + reduccion, 150 - 2 * reduccion, 150 - 2 * reduccion);
    ctx.save();
  }

  function dibujaCirculo(x, y, color, reduccion = 0) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 100 - reduccion, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.save();
  }

  function dibujaTriangulo(x, y, color, reduccion = 0) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + reduccion, y + reduccion);
    ctx.lineTo(x + reduccion, y + 150 - 2 * reduccion);
    ctx.lineTo(x + 150 - 2 * reduccion, y + reduccion);
    ctx.lineTo(x + reduccion, y + reduccion);
    ctx.closePath();
    ctx.stroke();
    ctx.save();
  }

  function extraeColor() {
    for (const element of selectorColor.getElementsByTagName("option")) {
      if (element.selected) {
        return element.value;
      }
    }
  }

  function areaBorrada(x, y) {
    ctx.save();
    var anchura = (anchuraBorrar.value == "") ? 0 : anchuraBorrar.value;
    var altura = (alturaBorrar.value == "") ? 0 : alturaBorrar.value;
    ctx.clearReact(x, y, anchura, altura);
  }

  function recojeCoordenadas() {
    var coorX = (document.getElementById("coorX").value.length == 0) ? 0 : +document.getElementById("coorX").value;
    var coorY = (document.getElementById("coorY").value.length == 0) ? 0 : +document.getElementById("coorY").value;
    return [coorX, coorY];
  }

  function recojeNumeroFiguras() {
    return (numeroFiguras.value.length == 0) ? 1 : numeroFiguras.value;
  }
}
