if ($('.map').length > 0) {
	ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init() {
		myMap = new ymaps.Map("map", {
			center: [53.909551121403645, 27.52265794047538],
			zoom: 17,
			controls: []
		}, {
			suppressMapOpenBlock: true
		});
		myMap.behaviors.disable('scrollZoom');
		myMap.controls.add('zoomControl', {
			position: {
				right: '10px',
				top: '200px'
			}
		});
		myPlacemark = new ymaps.Placemark([53.909551121403645, 27.52265794047538], {}, {
			iconLayout: 'default#image',
			iconImageHref: '../images/pin.png',
			iconImageSize: [70, 77],
			iconImageOffset: [-40, -75]
		});

		myMap.geoObjects.add(myPlacemark);

	}

} else {
	// не существует
}