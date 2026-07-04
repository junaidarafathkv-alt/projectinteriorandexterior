var APP_DATA = {
  "scenes": [
    {
      "id": "0-out-side-front-view",
      "name": "OUT SIDE FRONT VIEW",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2821267561427674
      },
      "linkHotspots": [
        {
          "yaw": 1.7191065179692817,
          "pitch": 0.19911884621393128,
          "rotation": 0,
          "target": "1-out-side-corner"
        },
        {
          "yaw": -1.3244617926443745,
          "pitch": 0.17101762303790835,
          "rotation": 0,
          "target": "2-porch"
        },
        {
          "yaw": 0.17763281826406185,
          "pitch": 0.10142256495459989,
          "rotation": 0,
          "target": "3-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-out-side-corner",
      "name": "OUT SIDE CORNER",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17608303234684186,
          "pitch": 0.0784881318736268,
          "rotation": 0,
          "target": "3-sitout"
        },
        {
          "yaw": -0.4874727432485191,
          "pitch": 0.2178509165144984,
          "rotation": 0,
          "target": "0-out-side-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-porch",
      "name": "PORCH",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0543143623345568,
          "pitch": 0.19405870680934356,
          "rotation": 0,
          "target": "0-out-side-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sitout",
      "name": "SITOUT",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6974599020304133,
          "pitch": 0.237802757411,
          "rotation": 0,
          "target": "4-gf-living"
        },
        {
          "yaw": 1.8807965402392508,
          "pitch": 0.2114494316686084,
          "rotation": 0,
          "target": "0-out-side-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gf-living",
      "name": "GF LIVING",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.520989592787794,
          "pitch": 0.27793452318767464,
          "rotation": 0,
          "target": "5-gf-hall"
        },
        {
          "yaw": -1.3490881894251334,
          "pitch": -0.8218837913728692,
          "rotation": 0,
          "target": "14-ff-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-hall",
      "name": "GF HALL",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6114398863089203,
          "pitch": 0.08314252267929234,
          "rotation": 0,
          "target": "11-gf-m-bed"
        },
        {
          "yaw": 0.19730594664468804,
          "pitch": 0.0627658864998395,
          "rotation": 0,
          "target": "6-wash-uniit"
        },
        {
          "yaw": -0.0885123705207711,
          "pitch": 0.13487675422580025,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": -0.8073865412751644,
          "pitch": 0.29800190638226454,
          "rotation": 0,
          "target": "7-dining"
        },
        {
          "yaw": -2.667554573307351,
          "pitch": -0.29925209707757716,
          "rotation": 0,
          "target": "13-stair"
        },
        {
          "yaw": 2.5813209728222155,
          "pitch": 0.21491515995255384,
          "rotation": 0,
          "target": "8-family-living"
        },
        {
          "yaw": 2.8502435299409665,
          "pitch": 0.025010986011409386,
          "rotation": 0,
          "target": "9-gf-bed-01"
        },
        {
          "yaw": -0.7680451247907527,
          "pitch": 0.0365484338259332,
          "rotation": 0,
          "target": "16-gf-bed-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wash-uniit",
      "name": "WASH UNIIT",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07367576624029581,
          "pitch": 0.16737616014029655,
          "rotation": 0,
          "target": "7-dining"
        },
        {
          "yaw": 0.5997178221122663,
          "pitch": 0.098762215893899,
          "rotation": 0,
          "target": "16-gf-bed-02"
        },
        {
          "yaw": -1.0515472586362566,
          "pitch": 0.303080697191227,
          "rotation": 0,
          "target": "5-gf-hall"
        },
        {
          "yaw": -0.972546786212181,
          "pitch": -0.19185014831610125,
          "rotation": 0,
          "target": "13-stair"
        },
        {
          "yaw": 1.5512272579702673,
          "pitch": 0.1558014317148757,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": -2.8357209497963964,
          "pitch": 0.060247714061079094,
          "rotation": 0,
          "target": "11-gf-m-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining",
      "name": "DINING",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.169189952548031,
          "pitch": 0.11567624962785139,
          "rotation": 0,
          "target": "6-wash-uniit"
        },
        {
          "yaw": -1.825796084350781,
          "pitch": 0.023279471104732608,
          "rotation": 0,
          "target": "11-gf-m-bed"
        },
        {
          "yaw": -1.2731612668974464,
          "pitch": 0.06726475309219282,
          "rotation": 0,
          "target": "4-gf-living"
        },
        {
          "yaw": -2.4986456795478915,
          "pitch": 0.0648987497026674,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": 2.259338214100409,
          "pitch": 0.06577543562230481,
          "rotation": 0,
          "target": "16-gf-bed-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-family-living",
      "name": "FAMILY LIVING",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.558839903666307,
          "pitch": 0.058048542764211675,
          "rotation": 0,
          "target": "9-gf-bed-01"
        },
        {
          "yaw": 1.7873173671937845,
          "pitch": -0.34889143249703203,
          "rotation": 0,
          "target": "13-stair"
        },
        {
          "yaw": -3.109649992816342,
          "pitch": 0.2532917636091021,
          "rotation": 0,
          "target": "5-gf-hall"
        },
        {
          "yaw": -1.8246521657200727,
          "pitch": 0.15775243018023133,
          "rotation": 0,
          "target": "4-gf-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-bed-01",
      "name": "GF BED 01",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.52269219592338,
          "pitch": 0.12120600557766537,
          "rotation": 0,
          "target": "8-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ff-bed-01",
      "name": "FF BED 01",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7176709069721774,
          "pitch": 0.031173903198659758,
          "rotation": 0,
          "target": "14-ff-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-gf-m-bed",
      "name": "GF M BED",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5596790575076689,
          "pitch": 0.023979586718176904,
          "rotation": 0,
          "target": "5-gf-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen",
      "name": "KITCHEN",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.967703411198146,
          "pitch": 0.13319600478583382,
          "rotation": 0,
          "target": "5-gf-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-stair",
      "name": "STAIR",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2642131581087561,
          "pitch": 0.013911980311053895,
          "rotation": 0,
          "target": "14-ff-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ff-hall",
      "name": "FF HALL",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.587760350387672,
          "pitch": 0.046501993314084444,
          "rotation": 0,
          "target": "15-ff-m-bed"
        },
        {
          "yaw": 1.4358598492181702,
          "pitch": 0.08448080672818037,
          "rotation": 0,
          "target": "10-ff-bed-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ff-m-bed",
      "name": "FF M BED",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0167752630343223,
          "pitch": 0.014606202553750336,
          "rotation": 0,
          "target": "14-ff-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-gf-bed-02",
      "name": "GF BED 02",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.191332334921686,
          "pitch": 0.07285522684966317,
          "rotation": 0,
          "target": "7-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
