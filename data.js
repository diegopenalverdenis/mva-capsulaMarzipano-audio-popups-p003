var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-general-galeria",
      "name": "Vista General Galeria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.8784388775995193,
        "pitch": -0.010636694502025534,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.5680438042868818,
          "pitch": 0.05539051379608928,
          "rotation": 0,
          "target": "1-galeria-retratos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-galeria-retratos",
      "name": "galeria-retratos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1353524846844607,
        "pitch": -0.005088522015711305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.1151365736086944,
          "pitch": 0.0448046160023754,
          "rotation": 0,
          "target": "0-vista-general-galeria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.47176558809437275,
          "pitch": 0.10619658433318335,
          "title": "El Viejo y el Mar",
          "text": "Acuarela sobre papel. Artista: Pedro Ocando"
        },
        {
          "yaw": 0.9798038062649415,
          "pitch": 0.08916243583354344,
          "title": "Nostalgia de los Años",
          "text": "Acuarela sobre Papel, Artista: Juan Alban."
        }
      ]
    }
  ],
  "name": "MVA-Capsula Expositiva-Prueba001",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
