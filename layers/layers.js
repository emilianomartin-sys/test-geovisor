var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Cortado_1 = new ol.format.GeoJSON();
var features_Cortado_1 = format_Cortado_1.readFeatures(json_Cortado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortado_1.addFeatures(features_Cortado_1);
var lyr_Cortado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cortado_1, 
                style: style_Cortado_1,
                popuplayertitle: 'Cortado',
                interactive: true,
                title: '<img src="styles/legend/Cortado_1.png" /> Cortado'
            });
var format_comunasrms_2 = new ol.format.GeoJSON();
var features_comunasrms_2 = format_comunasrms_2.readFeatures(json_comunasrms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunasrms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunasrms_2.addFeatures(features_comunasrms_2);
var lyr_comunasrms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunasrms_2, 
                style: style_comunasrms_2,
                popuplayertitle: 'comunas rms',
                interactive: true,
                title: '<img src="styles/legend/comunasrms_2.png" /> comunas rms'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Cortado_1.setVisible(true);lyr_comunasrms_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Cortado_1,lyr_comunasrms_2];
lyr_Cortado_1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'codcan': 'codcan', 'nomcan': 'nomcan', 'n_acciones': 'n_acciones', 'porc_reves': 'porc_reves', 'origen': 'origen', 'fuentehid': 'fuentehid', 'tipo_canal': 'tipo_canal', 'oua': 'oua', 'oua_tipo': 'oua_tipo', 'jv': 'jv', 'ou_id': 'ou_id', 'jv_id': 'jv_id', 'f_trazado': 'f_trazado', 'f_num_acc': 'f_num_acc', 'f_orign_fh': 'f_orign_fh', 'f_revest': 'f_revest', 'f_oua': 'f_oua', });
lyr_comunasrms_2.set('fieldAliases', {'fid': 'fid', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Cortado_1.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'codcan': 'TextEdit', 'nomcan': 'TextEdit', 'n_acciones': 'TextEdit', 'porc_reves': 'TextEdit', 'origen': 'TextEdit', 'fuentehid': 'TextEdit', 'tipo_canal': 'TextEdit', 'oua': 'TextEdit', 'oua_tipo': 'TextEdit', 'jv': 'TextEdit', 'ou_id': 'TextEdit', 'jv_id': 'TextEdit', 'f_trazado': 'TextEdit', 'f_num_acc': 'TextEdit', 'f_orign_fh': 'TextEdit', 'f_revest': 'TextEdit', 'f_oua': 'TextEdit', });
lyr_comunasrms_2.set('fieldImages', {'fid': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Cortado_1.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'codcan': 'no label', 'nomcan': 'no label', 'n_acciones': 'no label', 'porc_reves': 'no label', 'origen': 'no label', 'fuentehid': 'no label', 'tipo_canal': 'no label', 'oua': 'no label', 'oua_tipo': 'no label', 'jv': 'no label', 'ou_id': 'no label', 'jv_id': 'no label', 'f_trazado': 'no label', 'f_num_acc': 'no label', 'f_orign_fh': 'no label', 'f_revest': 'no label', 'f_oua': 'no label', });
lyr_comunasrms_2.set('fieldLabels', {'fid': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_comunasrms_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});