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
var format_cuencamaipo_1 = new ol.format.GeoJSON();
var features_cuencamaipo_1 = format_cuencamaipo_1.readFeatures(json_cuencamaipo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuencamaipo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuencamaipo_1.addFeatures(features_cuencamaipo_1);
var lyr_cuencamaipo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cuencamaipo_1, 
                style: style_cuencamaipo_1,
                popuplayertitle: 'cuenca maipo',
                interactive: true,
                title: '<img src="styles/legend/cuencamaipo_1.png" /> cuenca maipo'
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
var format_RedHidro_3 = new ol.format.GeoJSON();
var features_RedHidro_3 = format_RedHidro_3.readFeatures(json_RedHidro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidro_3.addFeatures(features_RedHidro_3);
var lyr_RedHidro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidro_3, 
                style: style_RedHidro_3,
                popuplayertitle: 'Red Hidro',
                interactive: true,
                title: '<img src="styles/legend/RedHidro_3.png" /> Red Hidro'
            });
var format_EstacionesMetereolgicas_4 = new ol.format.GeoJSON();
var features_EstacionesMetereolgicas_4 = format_EstacionesMetereolgicas_4.readFeatures(json_EstacionesMetereolgicas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesMetereolgicas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesMetereolgicas_4.addFeatures(features_EstacionesMetereolgicas_4);
var lyr_EstacionesMetereolgicas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesMetereolgicas_4, 
                style: style_EstacionesMetereolgicas_4,
                popuplayertitle: 'Estaciones Metereológicas',
                interactive: true,
                title: '<img src="styles/legend/EstacionesMetereolgicas_4.png" /> Estaciones Metereológicas'
            });
var format_APR_5 = new ol.format.GeoJSON();
var features_APR_5 = format_APR_5.readFeatures(json_APR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APR_5.addFeatures(features_APR_5);
var lyr_APR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APR_5, 
                style: style_APR_5,
                popuplayertitle: 'APR',
                interactive: true,
                title: '<img src="styles/legend/APR_5.png" /> APR'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_cuencamaipo_1.setVisible(true);lyr_17_comunas_2.setVisible(true);lyr_RedHidro_3.setVisible(true);lyr_EstacionesMetereolgicas_4.setVisible(true);lyr_APR_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_cuencamaipo_1,lyr_17_comunas_2,lyr_RedHidro_3,lyr_EstacionesMetereolgicas_4,lyr_APR_5];
lyr_cuencamaipo_1.set('fieldAliases', {'fid': 'fid', 'COD_CUEN': 'COD_CUEN', 'NOM_CUEN': 'NOM_CUEN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_km2': 'Area_km2', });
lyr_17_comunas_2.set('fieldAliases', {'fid': 'fid', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'ID': 'ID', });
lyr_RedHidro_3.set('fieldAliases', {'cod_cuen': 'cod_cuen', 'cod_subc': 'cod_subc', 'cod_ssubc': 'cod_ssubc', 'nom_cuen': 'nom_cuen', 'nom_subc': 'nom_subc', 'nom_ssubc': 'nom_ssubc', 'strahler_n': 'strahler_n', 'nombre_bcn': 'nombre_bcn', 'tipo_bcn': 'tipo_bcn', 'nombre_mop': 'nombre_mop', 'tipo_mop': 'tipo_mop', 'direccion': 'direccion', 'shape_leng': 'shape_leng', 'ident': 'ident', });
lyr_EstacionesMetereolgicas_4.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'id': 'id', 'estacion': 'estacion', 'latitud': 'latitud', 'longitud': 'longitud', 'altitud': 'altitud', 'codreg': 'codreg', 'codprov': 'codprov', 'codcom': 'codcom', 'comuna': 'comuna', 'institucio': 'institucio', 'area': 'area', 'region': 'region', });
lyr_APR_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DETALLE': 'DETALLE', 'COMUNA': 'COMUNA', 'COD': 'COD', 'ID': 'ID', 'IDCOD': 'IDCOD', 'GLOBALID': 'GLOBALID', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'ESTADO_EDI': 'ESTADO_EDI', 'DESCRIPCIO': 'DESCRIPCIO', 'LOCALIDAD': 'LOCALIDAD', });
lyr_cuencamaipo_1.set('fieldImages', {'fid': 'TextEdit', 'COD_CUEN': 'TextEdit', 'NOM_CUEN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_17_comunas_2.set('fieldImages', {'fid': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'ID': 'Range', });
lyr_RedHidro_3.set('fieldImages', {'cod_cuen': 'TextEdit', 'cod_subc': 'TextEdit', 'cod_ssubc': 'TextEdit', 'nom_cuen': 'TextEdit', 'nom_subc': 'TextEdit', 'nom_ssubc': 'TextEdit', 'strahler_n': 'TextEdit', 'nombre_bcn': 'TextEdit', 'tipo_bcn': 'TextEdit', 'nombre_mop': 'TextEdit', 'tipo_mop': 'TextEdit', 'direccion': 'TextEdit', 'shape_leng': 'TextEdit', 'ident': 'TextEdit', });
lyr_EstacionesMetereolgicas_4.set('fieldImages', {'fid': '', 'gid': '', 'id': '', 'estacion': '', 'latitud': '', 'longitud': '', 'altitud': '', 'codreg': '', 'codprov': '', 'codcom': '', 'comuna': '', 'institucio': '', 'area': '', 'region': '', });
lyr_APR_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'DETALLE': '', 'COMUNA': '', 'COD': '', 'ID': '', 'IDCOD': '', 'GLOBALID': '', 'X_UTM': '', 'Y_UTM': '', 'ESTADO_EDI': '', 'DESCRIPCIO': '', 'LOCALIDAD': '', });
lyr_cuencamaipo_1.set('fieldLabels', {'fid': 'no label', 'COD_CUEN': 'no label', 'NOM_CUEN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area_km2': 'no label', });
lyr_17_comunas_2.set('fieldLabels', {'fid': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'inline label - visible with data', 'SUPERFICIE': 'no label', 'ID': 'no label', });
lyr_RedHidro_3.set('fieldLabels', {'cod_cuen': 'no label', 'cod_subc': 'no label', 'cod_ssubc': 'no label', 'nom_cuen': 'no label', 'nom_subc': 'no label', 'nom_ssubc': 'no label', 'strahler_n': 'no label', 'nombre_bcn': 'no label', 'tipo_bcn': 'no label', 'nombre_mop': 'no label', 'tipo_mop': 'no label', 'direccion': 'no label', 'shape_leng': 'no label', 'ident': 'no label', });
lyr_EstacionesMetereolgicas_4.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'id': 'no label', 'estacion': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'altitud': 'no label', 'codreg': 'no label', 'codprov': 'no label', 'codcom': 'no label', 'comuna': 'no label', 'institucio': 'no label', 'area': 'no label', 'region': 'no label', });
lyr_APR_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'DETALLE': 'inline label - always visible', 'COMUNA': 'no label', 'COD': 'no label', 'ID': 'no label', 'IDCOD': 'no label', 'GLOBALID': 'no label', 'X_UTM': 'no label', 'Y_UTM': 'no label', 'ESTADO_EDI': 'no label', 'DESCRIPCIO': 'no label', 'LOCALIDAD': 'no label', });
lyr_APR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});