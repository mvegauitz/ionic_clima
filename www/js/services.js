angular.module('starter.services', [])

.factory('Unidades', function() {
	var unidades = 'metric';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
})
.factory('Ciudad', function() {
	var unidades = 'cancun';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
})

.factory('Dias', function() {
	var unidades = '7';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
});
