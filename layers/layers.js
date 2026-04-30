var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Cuenca_Maipo_1 = new ol.format.GeoJSON();
var features_Cuenca_Maipo_1 = format_Cuenca_Maipo_1.readFeatures(json_Cuenca_Maipo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuenca_Maipo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuenca_Maipo_1.addFeatures(features_Cuenca_Maipo_1);
var lyr_Cuenca_Maipo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuenca_Maipo_1, 
                style: style_Cuenca_Maipo_1,
                popuplayertitle: 'Cuenca_Maipo',
                interactive: true,
                title: '<img src="styles/legend/Cuenca_Maipo_1.png" /> Cuenca_Maipo'
            });
var format_17_comunas_2 = new ol.format.GeoJSON();
var features_17_comunas_2 = format_17_comunas_2.readFeatures(json_17_comunas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_comunas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_comunas_2.addFeatures(features_17_comunas_2);
var lyr_17_comunas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17_comunas_2, 
                style: style_17_comunas_2,
                popuplayertitle: '17_comunas',
                interactive: true,
                title: '<img src="styles/legend/17_comunas_2.png" /> 17_comunas'
            });
var format_Inv_Embalses_DGA_DOH_Maipo_3 = new ol.format.GeoJSON();
var features_Inv_Embalses_DGA_DOH_Maipo_3 = format_Inv_Embalses_DGA_DOH_Maipo_3.readFeatures(json_Inv_Embalses_DGA_DOH_Maipo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inv_Embalses_DGA_DOH_Maipo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inv_Embalses_DGA_DOH_Maipo_3.addFeatures(features_Inv_Embalses_DGA_DOH_Maipo_3);
var lyr_Inv_Embalses_DGA_DOH_Maipo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inv_Embalses_DGA_DOH_Maipo_3, 
                style: style_Inv_Embalses_DGA_DOH_Maipo_3,
                popuplayertitle: 'Inv_Embalses_DGA_DOH_Maipo',
                interactive: true,
                title: '<img src="styles/legend/Inv_Embalses_DGA_DOH_Maipo_3.png" /> Inv_Embalses_DGA_DOH_Maipo'
            });
var format_Hidrografia_Maipo_4 = new ol.format.GeoJSON();
var features_Hidrografia_Maipo_4 = format_Hidrografia_Maipo_4.readFeatures(json_Hidrografia_Maipo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_Maipo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_Maipo_4.addFeatures(features_Hidrografia_Maipo_4);
var lyr_Hidrografia_Maipo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_Maipo_4, 
                style: style_Hidrografia_Maipo_4,
                popuplayertitle: 'Hidrografia_Maipo',
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_Maipo_4.png" /> Hidrografia_Maipo'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Cuenca_Maipo_1.setVisible(true);lyr_17_comunas_2.setVisible(true);lyr_Inv_Embalses_DGA_DOH_Maipo_3.setVisible(true);lyr_Hidrografia_Maipo_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Cuenca_Maipo_1,lyr_17_comunas_2,lyr_Inv_Embalses_DGA_DOH_Maipo_3,lyr_Hidrografia_Maipo_4];
lyr_Cuenca_Maipo_1.set('fieldAliases', {'fid': 'fid', 'COD_CUEN': 'COD_CUEN', 'NOM_CUEN': 'NOM_CUEN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_km2': 'Area_km2', });
lyr_17_comunas_2.set('fieldAliases', {'fid': 'fid', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'ID': 'ID', });
lyr_Inv_Embalses_DGA_DOH_Maipo_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_IDE': 'ID_IDE', 'FUENTE': 'FUENTE', 'FECHA_ACTU': 'FECHA_ACTU', 'LEVANTAMIE': 'LEVANTAMIE', 'COD_REG': 'COD_REG', 'REGION': 'REGION', 'COD_PROV': 'COD_PROV', 'PROVINCIA': 'PROVINCIA', 'COD_COM': 'COD_COM', 'COMUNA': 'COMUNA', 'NOM_EMBALS': 'NOM_EMBALS', 'ESTADO': 'ESTADO', 'AÑO_CONTR': 'AÑO_CONTR', 'ALTURA_MUR': 'ALTURA_MUR', 'COTA': 'COTA', 'MXLOCATION': 'MXLOCATION', 'MXSITEID': 'MXSITEID', 'FUENTE_INF': 'FUENTE_INF', 'PROPIETARI': 'PROPIETARI', 'RUT': 'RUT', 'FUENTE_NAT': 'FUENTE_NAT', 'USO_EMBALS': 'USO_EMBALS', 'TIPO_EMBAL': 'TIPO_EMBAL', 'MONITOREO_': 'MONITOREO_', 'TAMAÑO_EM': 'TAMAÑO_EM', 'UTM_ESTE': 'UTM_ESTE', 'UTM_NORTE': 'UTM_NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Hidrografia_Maipo_4.set('fieldAliases', {'cod_cuen': 'cod_cuen', 'cod_subc': 'cod_subc', 'cod_ssubc': 'cod_ssubc', 'nom_cuen': 'nom_cuen', 'nom_subc': 'nom_subc', 'nom_ssubc': 'nom_ssubc', 'strahler_n': 'strahler_n', 'nombre_bcn': 'nombre_bcn', 'tipo_bcn': 'tipo_bcn', 'nombre_mop': 'nombre_mop', 'tipo_mop': 'tipo_mop', 'direccion': 'direccion', 'shape_leng': 'shape_leng', 'ident': 'ident', });
lyr_Cuenca_Maipo_1.set('fieldImages', {'fid': 'TextEdit', 'COD_CUEN': 'TextEdit', 'NOM_CUEN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_17_comunas_2.set('fieldImages', {'fid': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'ID': 'Range', });
lyr_Inv_Embalses_DGA_DOH_Maipo_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_IDE': 'TextEdit', 'FUENTE': 'TextEdit', 'FECHA_ACTU': 'DateTime', 'LEVANTAMIE': 'TextEdit', 'COD_REG': 'TextEdit', 'REGION': 'TextEdit', 'COD_PROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COD_COM': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_EMBALS': 'TextEdit', 'ESTADO': 'TextEdit', 'AÑO_CONTR': 'TextEdit', 'ALTURA_MUR': 'TextEdit', 'COTA': 'TextEdit', 'MXLOCATION': 'TextEdit', 'MXSITEID': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'PROPIETARI': 'TextEdit', 'RUT': 'TextEdit', 'FUENTE_NAT': 'TextEdit', 'USO_EMBALS': 'TextEdit', 'TIPO_EMBAL': 'TextEdit', 'MONITOREO_': 'TextEdit', 'TAMAÑO_EM': 'TextEdit', 'UTM_ESTE': 'TextEdit', 'UTM_NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Hidrografia_Maipo_4.set('fieldImages', {'cod_cuen': 'TextEdit', 'cod_subc': 'TextEdit', 'cod_ssubc': 'TextEdit', 'nom_cuen': 'TextEdit', 'nom_subc': 'TextEdit', 'nom_ssubc': 'TextEdit', 'strahler_n': 'TextEdit', 'nombre_bcn': 'TextEdit', 'tipo_bcn': 'TextEdit', 'nombre_mop': 'TextEdit', 'tipo_mop': 'TextEdit', 'direccion': 'TextEdit', 'shape_leng': 'TextEdit', 'ident': 'TextEdit', });
lyr_Cuenca_Maipo_1.set('fieldLabels', {'fid': 'no label', 'COD_CUEN': 'no label', 'NOM_CUEN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area_km2': 'no label', });
lyr_17_comunas_2.set('fieldLabels', {'fid': 'hidden field', 'CUT_COM': 'hidden field', 'REGION': 'inline label - visible with data', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'header label - visible with data', 'SUPERFICIE': 'inline label - visible with data', 'ID': 'no label', });
lyr_Inv_Embalses_DGA_DOH_Maipo_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_IDE': 'no label', 'FUENTE': 'no label', 'FECHA_ACTU': 'no label', 'LEVANTAMIE': 'no label', 'COD_REG': 'no label', 'REGION': 'no label', 'COD_PROV': 'no label', 'PROVINCIA': 'no label', 'COD_COM': 'no label', 'COMUNA': 'no label', 'NOM_EMBALS': 'no label', 'ESTADO': 'no label', 'AÑO_CONTR': 'no label', 'ALTURA_MUR': 'no label', 'COTA': 'no label', 'MXLOCATION': 'no label', 'MXSITEID': 'no label', 'FUENTE_INF': 'no label', 'PROPIETARI': 'no label', 'RUT': 'no label', 'FUENTE_NAT': 'no label', 'USO_EMBALS': 'no label', 'TIPO_EMBAL': 'no label', 'MONITOREO_': 'no label', 'TAMAÑO_EM': 'no label', 'UTM_ESTE': 'no label', 'UTM_NORTE': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_Hidrografia_Maipo_4.set('fieldLabels', {'cod_cuen': 'hidden field', 'cod_subc': 'hidden field', 'cod_ssubc': 'hidden field', 'nom_cuen': 'no label', 'nom_subc': 'no label', 'nom_ssubc': 'hidden field', 'strahler_n': 'hidden field', 'nombre_bcn': 'inline label - always visible', 'tipo_bcn': 'no label', 'nombre_mop': 'inline label - always visible', 'tipo_mop': 'hidden field', 'direccion': 'hidden field', 'shape_leng': 'hidden field', 'ident': 'hidden field', });
lyr_Hidrografia_Maipo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});