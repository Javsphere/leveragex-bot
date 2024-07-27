# NFT Bot for gTrade v6.x

This is the bot that executes limit orders for [gTrade](https://gains.trade), the decentralized leveraged trading platform.

## Run

### Clone the repo & creat `.env` files
```
$ git clone git@github.com:GainsNetwork-org/nft-bot-v3.git
$ cp .env.polygon.example .env.polygon
$ cp .env.arbitrum.example .env.arbitrum
$ cp .env.mumbai.example .env.mumbai
```

### Edit the `.env.*` files
(`.env.polygon`, `.env.arbitrum` and `.env.mumbai`)
   1. Set `WSS_URLS` to your dedicated WSS endpoints (comma separated list)
   2. Set `PRIVATE_KEY` to your account's private key
   3. Set `PUBLIC_KEY` to your account's public key
   4. Set `ORACLE_ADDRESS` to your Oracle contract address


### Run the bots

```
$ docker-compose build
$ docker-compose up
```

### Updating bots

To update all bot instances run the following:
```
docker-compose up --build --force-recreate -d
```

## All Environment Variables

| Name                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LOG_LEVEL                                    | Sets the level at which the bot should log. Valid values are: `error`, `warn`, `info`, `verbose`, `debug`. Using `debug` will produce a massive amount of output and is not suggested except for initial setup or problem solving.                                                                                                                                                                                                                                     |
| ENABLE_CONSOLE_LOGGING                       | Whether or not log messages should be output to the console.                                                                                                                                                                                                                                                                                                                                                                                                           |
| ENABLE_FS_LOGGING                            | Whether or not log messages should be output to a log file. This will log into a `.logs/<utc-date>` directory each time the bot is started.                                                                                                                                                                                                                                                                                                                            |
| WSS_URLS                                     | The RPC endpoint URLs that should be used for all blockchain communication.                                                                                                                                                                                                                                                                                                                                                                                            |
| PRICES_URL                                   | The WSS endpoint where the Gains backend pricing service is running.                                                                                                                                                                                                                                                                                                                                                                                                   |
| PRIVATE_KEY                                  | The private key of your account that should be used to execute transactions. ⚠️ DO NOT PUBLISH THIS ANYWHERE. ⚠️                                                                                                                                                                                                                                                                                                                                                       |
| PUBLIC_KEY                                   | The public key of your account that should be used to execute transactions. **IF ORACLE OPERATOR:** Make sure this address is either `owner()` or authorized fulfiller on your oracle address in order to claim rewards.                                                                                                                                                                                                                                               |
| EVENT_CONFIRMATIONS_SEC                      | The number of seconds that must pass for an event coming from the blockchain to be considered as confirmed and safe for execution against.                                                                                                                                                                                                                                                                                                                             |
| COLLATERAL_PRICE_REFRESH_INTERVAL_SEC        | How often collateral prices should be refetched. Defaults to 5s                                                                                                                                                                                                                                                                                                                                                                                                        |
| MIN_PRIORITY_GWEI                            | The minimum priority gas fee in GWEI that should be used when triggering orders.                                                                                                                                                                                                                                                                                                                                                                                       |
| MAX_GAS_PRICE_GWEI                           | The maximum gas price in GWEI that should be used when triggering orders.                                                                                                                                                                                                                                                                                                                                                                                              |
| MAX_GAS_PER_TRANSACTION                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| PRIORITY_GWEI_MULTIPLIER                     | A multiplier that can be applied to the current priority gas fee which was fetched from the polygon gas station.                                                                                                                                                                                                                                                                                                                                                       |
| AUTO_HARVEST_SEC                             | How frequently the bot will harvest any rewards earned from triggering orders.                                                                                                                                                                                                                                                                                                                                                                                         |
| FAILED_ORDER_TRIGGER_TIMEOUT_SEC             | How long the bot should wait before it will retry an order after it has failed to successfully process on chain.                                                                                                                                                                                                                                                                                                                                                       |
| OPEN_TRADES_REFRESH_SEC                      | How frequently the bot should fully refresh trade data from the Gains smart contracts on chain. By default, the bot is keeping itself up to date based on delta events it's receiving from the chain so this isn't technically necessary, but it's a good fail safe in case the bot fails to hear about a certain even due to connectivity or other issues. Setting this to `0` will disable explicit refreshing and only ever keep state based on events it receives. |
| GAS_REFRESH_INTERVAL_SEC                     | How frequently to get the latest gas prices from the gas station.                                                                                                                                                                                                                                                                                                                                                                                                      |
| FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_SEC | How frequently trading variables should be refreshed from the Gains smart contracts on chain. There are many variables that go into the calculations of triggering order and these variables need to be freshed to ensure the bot is always using the latest numbers. This is always done at start up, but does not need to be done too frequently at runtime.                                                                                                         |
| DRY_RUN                                      | Set to `true` to enable a "dry run" mode where the bot will do everything except submit the actual transactions to the chain for processing. This is good for initial setup to ensure everything is working as expected and other testing combined with a `LOG_LEVEL` of `debug`.                                                                                                                                                                                      |
| CHAIN_ID                                     | The ID of the block chain the bot is going to be interacting with. This defaults to `137` for Polygon's `mainnet` and you should only need to change it if you're targeting another chain.                                                                                                                                                                                                                                                                             |
| NETWORK_ID                                   | The ID of the network of the block chain the bot is going to be interacting with. This defaults to `137` for Polygon's `mainnet` and you should only need to change it if you're targeting another chain.                                                                                                                                                                                                                                                              |
| CHAIN                                        | The name of the block chain the bot is going to be interacting with. This defaults to `mainnet` and you should only change it if you're targeting a different chain.                                                                                                                                                                                                                                                                                                   |
| BASE_CHAIN                                   | The name of the base block chain the bot is going to be interacting with. This only needs to be set if you're testing on a network that is forked from a different chain. (e.g. testing on Polygon's Mumbai you would set this to `goerli`)                                                                                                                                                                                                                            |
| HARDFORK                                     | The ethereum hardfork of the block chain the bot is going to be interacting with. This defaults to `london` today and you should only need to change it if you're intending to target a different hardfork.                                                                                                                                                                                                                                                            |
| USE_MULTICALL                                | Whether or not the bot should multicall fetching open orders and other information. Some RPC providers may restrict multicalls. Set to `false` to use call batching instead. Defaults to `true`                                                                                                                                                                                                                                                                        |
| MAX_RETRIES                                  | How many times the bot should attempt to trigger an order. Set to `-1` to disable.                                                                                                                                                                                                                                                                                                                                                                                     |
| ORACLE_ADDRESS                                             | **FOR ORACLE OPERATORS ONLY:** The address of your oracle. The `PUBLIC_KEY` you use to run the bot must either be an authorized fulfiller or the owner of the oracle contract                                                                                                                                                                                                                                                                                          |

### Methoden im Detail:

#### 4. Handelsvariablen abrufen

**`fetchTradingVariables`**: Diese Methode ist verantwortlich für das Abrufen und Aktualisieren der dynamischen Handelsvariablen, die in der App verwendet werden. Es gibt mehrere Unterfunktionen, die spezifische Daten abrufen.

- **`fetchPairs(pairsCount)`**:
	- Ruft die Tiefe, maximale Hebelwirkung und Paardaten für alle Handelspaare ab.
	- Speichert die maximalen Hebelwirkungen in einer Map und die Tiefen in einem Array.
	- Die Paardaten enthalten Informationen wie das Handelsasset (from, to), den Spread, die Gruppen- und Gebührendex.

- **`fetchBorrowingFees()`**:
	- Ruft die Borrowing Fees für alle Collaterals und Paare ab.
	- Speichert die Gebühreninformationen und Open Interest (OI) in der `borrowingFeesContext`.

- **`fetchOiWindows(pairLength)`**:
	- Ruft die Einstellungen für Open Interest Windows (Startzeit, Dauer und Anzahl) ab.
	- Berechnet die aktuellen Fenster-IDs und ruft die OI-Daten für diese Fenster ab.
	- Speichert die OI-Daten in einer strukturierten Weise, um sie später leicht zugänglich zu machen.

Die `fetchTradingVariables`-Methode wird regelmäßig aufgerufen, um sicherzustellen, dass die Handelsdaten stets aktuell sind. Wenn ein Fehler auftritt, wird die Methode nach einer kurzen Verzögerung erneut aufgerufen.

#### 5. Offene Trades abrufen und synchronisieren

**`fetchOpenTrades`**: Diese Methode ruft die aktuellen offenen Trades ab und synchronisiert sie mit der internen Datenstruktur der App.

- **`fetchOpenPairTrades`**:
	- Verwendet die `ethers`-Bibliothek und die `@gainsnetwork/sdk`, um die rohen Daten der offenen Paartrades abzurufen.
	- Transformiert die rohen Daten in eine nutzbare Form und speichert sie in der `knownOpenTrades`-Map.

- **`synchronizeOpenTrades(event)`**:
	- Synchronisiert die offenen Trades basierend auf spezifischen Blockchain-Ereignissen.
	- Verarbeitet Ereignisse wie `TradeStored`, `TradeClosed`, `TradeTpUpdated`, `TradeSlUpdated` und andere.
	- Aktualisiert die `knownOpenTrades`-Map entsprechend den neuen Informationen, die durch die Ereignisse bereitgestellt werden.

#### 6. Event-Listener

**`watchLiveTradingEvents`**: Diese Methode setzt Event-Listener für verschiedene Blockchain-Ereignisse, die Handelsaktivitäten betreffen.

- **Event-Listener**:
	- Überwacht alle Ereignisse von den `diamond`-Verträgen.
	- Reagiert auf spezifische Ereignisse wie `PriceImpactOpenInterestAdded`, `BorrowingPairAccFeesUpdated`, `TradeStored`, etc.
	- Nutzt Verzögerungen (`setTimeout`), um sicherzustellen, dass die Ereignisse vollständig verarbeitet werden, bevor weitere Aktionen durchgeführt werden.

- **`handleMultiCollatEvents(event)`**:
	- Verarbeitet Ereignisse im Zusammenhang mit der Preisbeeinflussung von Open Interest (OI).
	- Aktualisiert die OI-Daten basierend auf den Ereignisinformationen.

- **`handleBorrowingFeesEvent(event)`**:
	- Verarbeitet Ereignisse im Zusammenhang mit den Borrowing Fees.
	- Aktualisiert die Gebühreninformationen basierend auf den Ereignisinformationen.

#### 7. Preisstrom überwachen

**`watchPricingStream`**: Diese Methode verbindet sich mit einem Websocket-Preisstrom und überwacht Preisänderungen, um entsprechende Handelsaktionen auszulösen.

- **WebSocket-Setup**:
	- Verbindet sich mit dem Websocket-Preisstrom, um Echtzeit-Preisdaten zu erhalten.
	- Setzt verschiedene Event-Handler (`onopen`, `onclose`, `onerror`, `onmessage`), um die Verbindung zu verwalten und Nachrichten zu verarbeiten.

- **Nachrichtenverarbeitung (`onmessage`)**:
	- Verarbeitet die empfangenen Preisaktualisierungen und aktualisiert die bekannten offenen Trades entsprechend.
	- Überprüft, ob die Trades basierend auf den neuen Preisen ausgelöst werden sollen (z.B. TP, SL, Liquidation).
	- Wenn ein Trade ausgelöst werden soll, erstellt und signiert die Methode eine Transaktion, um den Trade durchzuführen.

- **`handleOnMessageAsync()`**:
	- Die eigentliche Logik zur Verarbeitung der empfangenen Preisdaten.
	- Überprüft, ob ein Trade basierend auf den aktuellen Preisen und den Handelsbedingungen ausgelöst werden soll.
	- Verwendet verschiedene Hilfsfunktionen, um die Liquidationspreise, Hebelwirkungen und andere Handelsparameter zu berechnen.

- **`canRetry(triggerId)`**:
	- Überprüft, ob ein ausgelöster Order erneut versucht werden kann, basierend auf einer maximalen Anzahl von Versuchen.

Durch diese Methoden stellt die App sicher, dass sie immer auf dem neuesten Stand der Handelsdaten ist und schnell auf Marktänderungen reagieren kann.
