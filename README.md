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
-
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
    {
        "symbol": "XRPBNB",
        "priceChange": "-0.00002900",
        "priceChangePercent": "-2.055",
        "weightedAvgPrice": "0.00138721",
        "prevClosePrice": "0.00142600",
        "lastPrice": "0.00138200",
        "lastQty": "209.80000000",
        "bidPrice": "0.00137600",
        "bidQty": "5523.30000000",
        "askPrice": "0.00137700",
        "askQty": "6826.50000000",
        "openPrice": "0.00141100",
        "highPrice": "0.00143300",
        "lowPrice": "0.00135100",
        "volume": "1065424.60000000",
        "quoteVolume": "1477.96351940",
        "openTime": 1667426548877,
        "closeTime": 1667512948877,
        "firstId": 117,
        "lastId": 623,
        "count": 507
    },
    {
        "symbol": "TRXBTC",
        "priceChange": "-0.00000001",
        "priceChangePercent": "-0.327",
        "weightedAvgPrice": "0.00000305",
        "prevClosePrice": "0.00000306",
        "lastPrice": "0.00000305",
        "lastQty": "15738.00000000",
        "bidPrice": "0.00000304",
        "bidQty": "1973.70000000",
        "askPrice": "0.00000305",
        "askQty": "2131.20000000",
        "openPrice": "0.00000306",
        "highPrice": "0.00000334",
        "lowPrice": "0.00000273",
        "volume": "349804.40000000",
        "quoteVolume": "1.06535417",
        "openTime": 1667426495123,
        "closeTime": 1667512895123,
        "firstId": 95,
        "lastId": 327,
        "count": 233
    },
    {
        "symbol": "TRXBUSD",
        "priceChange": "0.00007000",
        "priceChangePercent": "0.113",
        "weightedAvgPrice": "0.06191929",
        "prevClosePrice": "0.06173000",
        "lastPrice": "0.06179000",
        "lastQty": "12461.60000000",
        "bidPrice": "0.06179000",
        "bidQty": "9223.40000000",
        "askPrice": "0.06181000",
        "askQty": "8898.30000000",
        "openPrice": "0.06172000",
        "highPrice": "0.06246000",
        "lowPrice": "0.06143000",
        "volume": "19486186.50000000",
        "quoteVolume": "1206570.86490000",
        "openTime": 1667426547699,
        "closeTime": 1667512947699,
        "firstId": 1908,
        "lastId": 3960,
        "count": 2053
    },
    {
        "symbol": "LTCBNB",
        "priceChange": "0.00030000",
        "priceChangePercent": "0.160",
        "weightedAvgPrice": "0.19149017",
        "prevClosePrice": "0.18850000",
        "lastPrice": "0.18830000",
        "lastQty": "34.51939000",
        "bidPrice": "0.18700000",
        "bidQty": "51.33690000",
        "askPrice": "0.18730000",
        "askQty": "50.72077000",
        "openPrice": "0.18800000",
        "highPrice": "0.20130000",
        "lowPrice": "0.18320000",
        "volume": "16336.98088000",
        "quoteVolume": "3128.37118449",
        "openTime": 1667426546400,
        "closeTime": 1667512946400,
        "firstId": 467,
        "lastId": 1577,
        "count": 1111
    },
    {
        "symbol": "TRXUSDT",
        "priceChange": "0.00031000",
        "priceChangePercent": "0.504",
        "weightedAvgPrice": "0.06191890",
        "prevClosePrice": "0.06174000",
        "lastPrice": "0.06180000",
        "lastQty": "14239.50000000",
        "bidPrice": "0.06180000",
        "bidQty": "1941.80000000",
        "askPrice": "0.06181000",
        "askQty": "9383.60000000",
        "openPrice": "0.06149000",
        "highPrice": "0.06246000",
        "lowPrice": "0.06145000",
        "volume": "18185972.00000000",
        "quoteVolume": "1126055.45504400",
        "openTime": 1667426548676,
        "closeTime": 1667512948676,
        "firstId": 2494,
        "lastId": 4522,
        "count": 2029
    },
    {
        "symbol": "BTCUSDT",
        "priceChange": "107.86000000",
        "priceChangePercent": "0.535",
        "weightedAvgPrice": "20244.57067856",
        "prevClosePrice": "20162.14000000",
        "lastPrice": "20268.27000000",
        "lastQty": "0.07301100",
        "bidPrice": "20267.88000000",
        "bidQty": "0.05111000",
        "askPrice": "20269.45000000",
        "askQty": "0.10705800",
        "openPrice": "20160.41000000",
        "highPrice": "20573.49000000",
        "lowPrice": "18824.21000000",
        "volume": "7744.29306800",
        "quoteVolume": "156779888.37059993",
        "openTime": 1667426558514,
        "closeTime": 1667512958514,
        "firstId": 65635,
        "lastId": 232015,
        "count": 166381
    },
    {
        "symbol": "BTCBUSD",
        "priceChange": "108.84000000",
        "priceChangePercent": "0.540",
        "weightedAvgPrice": "20248.21263643",
        "prevClosePrice": "20159.58000000",
        "lastPrice": "20268.42000000",
        "lastQty": "0.03749700",
        "bidPrice": "20268.90000000",
        "bidQty": "0.01504900",
        "askPrice": "20269.34000000",
        "askQty": "0.03601500",
        "openPrice": "20159.58000000",
        "highPrice": "20861.59000000",
        "lowPrice": "19800.00000000",
        "volume": "2116.80963600",
        "quoteVolume": "42861611.62057643",
        "openTime": 1667426558640,
        "closeTime": 1667512958640,
        "firstId": 47869,
        "lastId": 155651,
        "count": 107783
    },
    {
        "symbol": "XRPBTC",
        "priceChange": "0.00000017",
        "priceChangePercent": "0.757",
        "weightedAvgPrice": "0.00002251",
        "prevClosePrice": "0.00002251",
        "lastPrice": "0.00002263",
        "lastQty": "274.00000000",
        "bidPrice": "0.00002263",
        "bidQty": "39.80000000",
        "askPrice": "0.00002264",
        "askQty": "304.80000000",
        "openPrice": "0.00002246",
        "highPrice": "0.00002286",
        "lowPrice": "0.00002231",
        "volume": "416179.30000000",
        "quoteVolume": "9.36784433",
        "openTime": 1667426553576,
        "closeTime": 1667512953576,
        "firstId": 1203,
        "lastId": 2905,
        "count": 1703
    },
    {
        "symbol": "XRPBUSD",
        "priceChange": "0.00500000",
        "priceChangePercent": "1.102",
        "weightedAvgPrice": "0.45549888",
        "prevClosePrice": "0.45400000",
        "lastPrice": "0.45860000",
        "lastQty": "1264.80000000",
        "bidPrice": "0.45860000",
        "bidQty": "501.50000000",
        "askPrice": "0.45870000",
        "askQty": "1460.70000000",
        "openPrice": "0.45360000",
        "highPrice": "0.45950000",
        "lowPrice": "0.44890000",
        "volume": "5445706.90000000",
        "quoteVolume": "2480513.40039000",
        "openTime": 1667426548607,
        "closeTime": 1667512948607,
        "firstId": 3876,
        "lastId": 8063,
        "count": 4188
    }
]
--------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------
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