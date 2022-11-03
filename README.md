# disruptive-server

El siguiente proyecto es una prueba técnica

# Ejecutar

npm run dev:start

# Test

npm run test

# Estructura

El proyecto está conformado con un estrucutura basada en servicios(carpeta services donde se encuentra
la lógica de los EP) y rutas(carpeta routes donde se encuentran las rutas de los EP), carpeta request con los
.rest para probar los EP, una carpeta utils con funcionalidades de apoyo así como las carpeta de los test.

Las variables de entorno usadas estan guardadas en el fichero .env.example copie su contenido y úselo en su fichero .env

# Documentación

Obtener las 10 monedas que más pérdidas de valor tuvieron en las últimas 24 horas.

GET /coins

Parámetros:

Response:

    [
    {
    "symbol": "TRXBNB",
    "priceChange": "-0.00000810",
    "priceChangePercent": "-4.182",
    "weightedAvgPrice": "0.00018825",
    "prevClosePrice": "0.00019380",
    "lastPrice": "0.00018560",
    "lastQty": "2000.00000000",
    "bidPrice": "0.00018540",
    "bidQty": "39913.80000000",
    "askPrice": "0.00018560",
    "askQty": "26633.70000000",
    "openPrice": "0.00019370",
    "highPrice": "0.00019430",
    "lowPrice": "0.00018380",
    "volume": "11298923.00000000",
    "quoteVolume": "2127.01162521",
    "openTime": 1667426540791,
    "closeTime": 1667512940791,
    "firstId": 188,
    "lastId": 649,
    "count": 462
    },
    .................
    ]
    ***
    Crear una order de tipo LIMIT

    POST /coins/order

    Parámetros:

    {
    "side": "BUY",
    "type": "LIMIT",
    "timeInForce": "GTC",
    "quantity": 1000
    }
    Response:
    {
    "symbol": "TRXBNB",
    "orderId": 18278,
    "orderListId": -1,
    "clientOrderId": "qq2A8X846zsJvVt8BKZHnA",
    "transactTime": 1667512966640,
    "price": "0.00019370",
    "origQty": "1000.00000000",
    "executedQty": "1000.00000000",
    "cummulativeQuoteQty": "0.18560000",
    "status": "FILLED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY",
    "fills": [
    {
    "price": "0.00018560",
    "qty": "1000.00000000",
    "commission": "0.00000000",
    "commissionAsset": "TRX",
    "tradeId": 650
    }
    ]
    }
    ***
    Obtener información de una cuenta

    GET /account

    Parámetros:

    api_key: Llave de acceso a la testnet api

    secret_key: Llave secreta de acceso a testnet api

    Response:
    
    {
    "makerCommission": 0,
    "takerCommission": 0,
    "buyerCommission": 0,
    "sellerCommission": 0,
    "canTrade": true,
    "canWithdraw": false,
    "canDeposit": false,
    "brokered": false,
    "updateTime": 1667512940791,
    "accountType": "SPOT",
    "balances": [
    {
    "asset": "BNB",
    "free": "998.08610000",
    "locked": "0.00000000"
    },
    {
    "asset": "BTC",
    "free": "1.00000000",
    "locked": "0.00000000"
    },
    {
    "asset": "BUSD",
    "free": "10000.00000000",
    "locked": "0.00000000"
    },
    {
    "asset": "ETH",
    "free": "100.00000000",
    "locked": "0.00000000"
    },
    {
    "asset": "LTC",
    "free": "500.00000000",
    "locked": "0.00000000"
    },
    {
    "asset": "TRX",
    "free": "521000.00000000",
    "locked": "0.00000000"
    },
    {
    "asset": "USDT",
    "free": "36.20000000",
    "locked": "9300.00000000"
    },
    {
    "asset": "XRP",
    "free": "50000.00000000",
    "locked": "0.00000000"
    }
    ],
    "permissions": [
    "SPOT"
    ]
    }
