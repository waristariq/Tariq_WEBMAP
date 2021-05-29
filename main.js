window.onload = init;

function init() {
    const map= new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([65.25, 34.25]),
            zoom:6
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map' 
    }) 
    afgh_bo = new ol.layer.Image({
        source: new ol.source.ImageWMS({
           url: 'https://geonode.wfp.org/geoserver/ows?SERVICE=WMS&',
           params: {
               LAYERS: 'afg_wfp_alcs_dist_geonode',
           }
           })

    });
    map.addLayer(afgh_bo);   
     
}