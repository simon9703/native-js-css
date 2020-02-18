var linear = function(e, a, g, f) {
    return (g * e) / f + a
  },
  easeInOutQuad = function(e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return (g / 2) * e * e + a
    }
    e--
    return (-g / 2) * (e * (e - 2) - 1) + a
  },
  easeOutQuad = function(e, a, g, f) {
    e /= f
    return -g * e * (e - 2) + a
  },
  easeOutQuad = function(e, a, g, f) {
    e /= f
    return -g * e * (e - 2) + a
  },
  easeInCubic = function(e, a, g, f) {
    e /= f
    return g * e * e * e + a
  },
  easeOutCubic = function(e, a, g, f) {
    e /= f
    e--
    return g * (e * e * e + 1) + a
  },
  easeInOutCubic = function(e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return (g / 2) * e * e * e + a
    }
    e -= 2
    return (g / 2) * (e * e * e + 2) + a
  },
  easeInQuart = function(e, a, g, f) {
    e /= f
    return g * e * e * e * e + a
  },
  easeOutQuart = function(e, a, g, f) {
    e /= f
    e--
    return -g * (e * e * e * e - 1) + a
  },
  easeInOutQuart = function(e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return (g / 2) * e * e * e * e + a
    }
    e -= 2
    return (-g / 2) * (e * e * e * e - 2) + a
  },
  easeInQuint = function(e, a, g, f) {
    e /= f
    return g * e * e * e * e * e + a
  },
  easeOutQuint = function(e, a, g, f) {
    e /= f
    e--
    return g * (e * e * e * e * e + 1) + a
  },
  easeInOutQuint = function(e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return (g / 2) * e * e * e * e * e + a
    }
    e -= 2
    return (g / 2) * (e * e * e * e * e + 2) + a
  },
  easeInSine = function(e, a, g, f) {
    return -g * Math.cos((e / f) * (Math.PI / 2)) + g + a
  },
  easeOutSine = function(e, a, g, f) {
    return g * Math.sin((e / f) * (Math.PI / 2)) + a
  },
  easeInOutSine = function(e, a, g, f) {
    return (-g / 2) * (Math.cos((Math.PI * e) / f) - 1) + a
  },
  easeInExpo = function(e, a, g, f) {
    return g * Math.pow(2, 10 * (e / f - 1)) + a
  },
  easeOutExpo = function(e, a, g, f) {
    return g * (-Math.pow(2, (-10 * e) / f) + 1) + a
  },
  easeInOutExpo = function(e, a, g, f) {
    return g * (-Math.pow(2, (-10 * e) / f) + 1) + a
  },
  easeInCirc = function(e, a, g, f) {
    e /= f
    return -g * (Math.sqrt(1 - e * e) - 1) + a
  },
  easeOutCirc = function(e, a, g, f) {
    e /= f
    e--
    return g * Math.sqrt(1 - e * e) + a
  },
  easeInOutCirc = function(e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return (-g / 2) * (Math.sqrt(1 - e * e) - 1) + a
    }
    e -= 2
    return (g / 2) * (Math.sqrt(1 - e * e) + 1) + a
  },
  easeInOutElastic = function(g, e, k, j, f, i) {
    if (g == 0) {
      return e
    }
    if ((g /= j / 2) == 2) {
      return e + k
    }
    if (!i) {
      i = j * (0.3 * 1.5)
    }
    if (!f || f < Math.abs(k)) {
      f = k
      var h = i / 4
    } else {
      var h = (i / (2 * Math.PI)) * Math.asin(k / f)
    }
    if (g < 1) {
      return -0.5 * (f * Math.pow(2, 10 * (g -= 1)) * Math.sin(((g * j - h) * (2 * Math.PI)) / i)) + e
    }
    return f * Math.pow(2, -10 * (g -= 1)) * Math.sin(((g * j - h) * (2 * Math.PI)) / i) * 0.5 + k + e
  },
  easeInElastic = function(g, e, k, j, f, i) {
    if (g == 0) {
      return e
    }
    if ((g /= j) == 1) {
      return e + k
    }
    if (!i) {
      i = j * 0.3
    }
    if (!f || f < Math.abs(k)) {
      f = k
      var h = i / 4
    } else {
      var h = (i / (2 * Math.PI)) * Math.asin(k / f)
    }
    return -(f * Math.pow(2, 10 * (g -= 1)) * Math.sin(((g * j - h) * (2 * Math.PI)) / i)) + e
  },
  easeOutElastic = function(g, e, k, j, f, i) {
    if (g == 0) {
      return e
    }
    if ((g /= j) == 1) {
      return e + k
    }
    if (!i) {
      i = j * 0.3
    }
    if (!f || f < Math.abs(k)) {
      f = k
      var h = i / 4
    } else {
      var h = (i / (2 * Math.PI)) * Math.asin(k / f)
    }
    return f * Math.pow(2, -10 * g) * Math.sin(((g * j - h) * (2 * Math.PI)) / i) + k + e
  },
  easeInOutBack = function(e, a, h, g, f) {
    if (f == undefined) {
      f = 1.70158
    }
    if ((e /= g / 2) < 1) {
      return (h / 2) * (e * e * (((f *= 1.525) + 1) * e - f)) + a
    }
    return (h / 2) * ((e -= 2) * e * (((f *= 1.525) + 1) * e + f) + 2) + a
  },
  easeInBack = function(e, a, h, g, f) {
    if (f == undefined) {
      f = 1.70158
    }
    return h * (e /= g) * e * ((f + 1) * e - f) + a
  },
  easeOutBack = function(e, a, h, g, f) {
    if (f == undefined) {
      f = 1.70158
    }
    return h * ((e = e / g - 1) * e * ((f + 1) * e + f) + 1) + a
  }
