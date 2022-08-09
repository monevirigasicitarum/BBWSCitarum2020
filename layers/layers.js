ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.735324, -6.794534, 108.401861, -5.682721]);
var wms_layers = [];


        var lyr_roadmap_0 = new ol.layer.Tile({
            'title': 'roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahSungaiCitarum_1 = new ol.format.GeoJSON();
var features_WilayahSungaiCitarum_1 = format_WilayahSungaiCitarum_1.readFeatures(json_WilayahSungaiCitarum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WilayahSungaiCitarum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahSungaiCitarum_1.addFeatures(features_WilayahSungaiCitarum_1);
var lyr_WilayahSungaiCitarum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahSungaiCitarum_1, 
                style: style_WilayahSungaiCitarum_1,
                interactive: true,
                title: '<img src="styles/legend/WilayahSungaiCitarum_1.png" /> Wilayah Sungai Citarum'
            });
var format_titikkegiatanrevisid_2 = new ol.format.GeoJSON();
var features_titikkegiatanrevisid_2 = format_titikkegiatanrevisid_2.readFeatures(json_titikkegiatanrevisid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_titikkegiatanrevisid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikkegiatanrevisid_2.addFeatures(features_titikkegiatanrevisid_2);
var lyr_titikkegiatanrevisid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikkegiatanrevisid_2, 
                style: style_titikkegiatanrevisid_2,
                interactive: true,
    title: 'titik kegiatan revisi d<br />\
    <img src="styles/legend/titikkegiatanrevisid_2_0.png" /> Belum Lelang<br />\
    <img src="styles/legend/titikkegiatanrevisid_2_1.png" /> Proses Lelang<br />\
    <img src="styles/legend/titikkegiatanrevisid_2_2.png" /> Terkontrak<br />'
        });
var format_DIKewenanganPusatWSCitarum_3 = new ol.format.GeoJSON();
var features_DIKewenanganPusatWSCitarum_3 = format_DIKewenanganPusatWSCitarum_3.readFeatures(json_DIKewenanganPusatWSCitarum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DIKewenanganPusatWSCitarum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIKewenanganPusatWSCitarum_3.addFeatures(features_DIKewenanganPusatWSCitarum_3);
var lyr_DIKewenanganPusatWSCitarum_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIKewenanganPusatWSCitarum_3, 
                style: style_DIKewenanganPusatWSCitarum_3,
                interactive: false,
                title: '<img src="styles/legend/DIKewenanganPusatWSCitarum_3.png" /> DI Kewenangan Pusat WS Citarum'
            });

lyr_roadmap_0.setVisible(true);lyr_WilayahSungaiCitarum_1.setVisible(true);lyr_titikkegiatanrevisid_2.setVisible(true);lyr_DIKewenanganPusatWSCitarum_3.setVisible(true);
var layersList = [lyr_roadmap_0,lyr_WilayahSungaiCitarum_1,lyr_titikkegiatanrevisid_2,lyr_DIKewenanganPusatWSCitarum_3];
lyr_WilayahSungaiCitarum_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WS': 'WS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_titikkegiatanrevisid_2.set('fieldAliases', {'Id': 'Id', 'Kode': 'Kode', 'Nama Paket': 'Nama Paket', 'Status': 'Status', 'Jenis Paket': 'Jenis Paket', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Output': 'Output', 'Outcome': 'Outcome', 'Kategori Kegiatan': 'Kategori Kegiatan', 'Pagu DIPA': 'Pagu DIPA', 'Dana': 'Dana', 'Pagu Pengadaan': 'Pagu Pengadaan', 'Nomor Kontrak': 'Nomor Kontrak', 'Tanggal Kontrak': 'Tanggal Kontrak', 'Nilai Kontrak': 'Nilai Kontrak', 'Rekanan': 'Rekanan', 'Realisasi': 'Realisasi', '% Keuangan': '% Keuangan', 'Link Tender': 'Link Tender', 'Foto': 'Foto', 'Link Foto': 'Link Foto', 'Lokasi Google Maps': 'Lokasi Google Maps', });
lyr_DIKewenanganPusatWSCitarum_3.set('fieldAliases', {'Id': 'Id', 'Nama_DI': 'Nama_DI', 'x': 'x', 'y': 'y', 'Kewenangan': 'Kewenangan', 'Luas': 'Luas', 'Luas_ha': 'Luas_ha', });
lyr_WilayahSungaiCitarum_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_titikkegiatanrevisid_2.set('fieldImages', {'Id': 'TextEdit', 'Kode': 'TextEdit', 'Nama Paket': 'TextEdit', 'Status': 'TextEdit', 'Jenis Paket': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Output': 'TextEdit', 'Outcome': 'TextEdit', 'Kategori Kegiatan': 'TextEdit', 'Pagu DIPA': 'TextEdit', 'Dana': 'TextEdit', 'Pagu Pengadaan': 'TextEdit', 'Nomor Kontrak': 'TextEdit', 'Tanggal Kontrak': '', 'Nilai Kontrak': 'TextEdit', 'Rekanan': 'TextEdit', 'Realisasi': 'TextEdit', '% Keuangan': 'TextEdit', 'Link Tender': 'TextEdit', 'Foto': 'ExternalResource', 'Link Foto': 'TextEdit', 'Lokasi Google Maps': 'TextEdit', });
lyr_DIKewenanganPusatWSCitarum_3.set('fieldImages', {'Id': 'Range', 'Nama_DI': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Kewenangan': 'TextEdit', 'Luas': 'TextEdit', 'Luas_ha': 'TextEdit', });
lyr_WilayahSungaiCitarum_1.set('fieldLabels', {'OBJECTID': 'no label', 'WS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_titikkegiatanrevisid_2.set('fieldLabels', {'Id': 'no label', 'Kode': 'header label', 'Nama Paket': 'header label', 'Status': 'header label', 'Jenis Paket': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'Output': 'header label', 'Outcome': 'header label', 'Kategori Kegiatan': 'header label', 'Pagu DIPA': 'header label', 'Dana': 'header label', 'Pagu Pengadaan': 'header label', 'Nomor Kontrak': 'header label', 'Tanggal Kontrak': 'header label', 'Nilai Kontrak': 'header label', 'Rekanan': 'header label', 'Realisasi': 'header label', '% Keuangan': 'header label', 'Link Tender': 'header label', 'Foto': 'header label', 'Link Foto': 'header label', 'Lokasi Google Maps': 'header label', });
lyr_DIKewenanganPusatWSCitarum_3.set('fieldLabels', {'Id': 'no label', 'Nama_DI': 'no label', 'x': 'no label', 'y': 'no label', 'Kewenangan': 'no label', 'Luas': 'no label', 'Luas_ha': 'no label', });
lyr_DIKewenanganPusatWSCitarum_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});