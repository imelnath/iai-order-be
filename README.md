# API

1.  Add Order <br>
    Endpoint: <br>
    ````````````
    POST /api/orders
    ````````````
    Contoh Request Body: <br>
    ````````````
    {
        "items": [
            {
                "name": "Topi",
                "size": "M",
                "quantity": 1
            },
            {
                "name": "Celana",
                "size": "L",
                "quantity": 1
            }
        ],
        "total": "Rp 1.000.000",
        "status": "Waiting Payment",
        "userId": 1
    }
    ````````````
2.  Get All Order <br>
    Endpoint: <br>
    ````````````
    GET /api/orders
    ````````````
3.  Get Order by User <br>
    Endpoint: <br>
    ````````````
    GET /api/orders/:userId
    ````````````
4.  Delete Order <br>
    Endpoint: <br>
    ````````````
    DELETE /api/orders/:id
    ````````````
