/* Dependencias:
	- jQuery.js
	- json.js
	- layout.js
	- filtros.js
*/

function cargador( div_json, div_filtros, div_layout, div_tabla ) {

	this.div_json = div_json;
	this.div_filtros = div_filtros;
	this.div_layout = div_layout;
	this.div_tabla = div_tabla;

	this.init = function() {

		var me = this;
		$("#" + this.div_json)
			.load(
				"./parciales/json.html", 
				function() {
					new json()
						.init()
						.evento_cargar = function(datos) { 
							me.initLayout( datos );
						};
				}
			);

	}

	this.initLayout = function( datos ) {

		new filtros()
			.init(
				this.div_filtros, 
				new layout()
					.init(datos, this.div_layout, this.div_tabla)
		);

	}

}