# LeverageX Bo

## Run

### Clone the repo & creat `.env` files
```
$ git clone git@github.com:GainsNetwork-org/nft-bot-v3.git
$ cp .env.seopolia.example .env.sepolia
$ cp .env.base.example .env.base
```

### Edit the `.env.*` files
(`.env.base`, `.env.sepolia`)
   1. Set `WSS_URLS` to your dedicated WSS endpoints (comma separated list)
   2. Set `PRIVATE_KEY` to your account's private key
   3. Set `PUBLIC_KEY` to your account's public key
   4. Set `ORACLE_ADDRESS` to your Oracle contract address


### Run the bots

```
$ docker-compose build
$ docker-compose up
```

```
$ run build
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

### Methods in detail:

#### 4. Fetching Trading Variables

**`fetchTradingVariables`**: This method is responsible for fetching and updating the dynamic trading variables used in the app. It includes several sub-functions that retrieve specific data.
- **`fetchPairs(pairsCount)`**:
   - Retrieves the depth, maximum leverage, and pair data for all trading pairs.
   - Stores the maximum leverage in a map and the depths in an array.
   - The pair data includes information such as the trading asset (from, to), the spread, the group, and the fee index.

- **`fetchBorrowingFees()`**:
	- Fetches the borrowing fees for all collaterals and pairs.
    - Stores the fee information and open interest (OI) in the borrowingFeesContext.

- **`fetchOiWindows(pairLength)`**:
	- Fetches the settings for Open Interest Windows (start time, duration, and count).
    - Calculates the current window IDs and fetches the OI data for these windows.
	- Stores the OI data in a structured manner to make it easily accessible later.

The `fetchTradingVariables`-method is called regularly to ensure the trading data is always up-to-date. If an error occurs, the method is retried after a short delay.
#
### 5. Fetching and Synchronizing Open Trades

**`fetchOpenTrades`**: This method fetches the current open trades and synchronizes them with the app’s internal data structure.

- **`fetchOpenPairTrades`**:
	- Uses the ethers library and the @gainsnetwork/sdk to fetch raw data of open pair trades.
    - Transforms the raw data into a usable form and stores it in the knownOpenTrades map.

- **`synchronizeOpenTrades(event)`**:
	- Synchronizes open trades based on specific blockchain events.
    - Processes events such as TradeStored, TradeClosed, TradeTpUpdated, TradeSlUpdated, and others.
	- Updates the knownOpenTrades map according to the new information provided by the events.

#### 6. Event-Listener

**`watchLiveTradingEvents`**: This method sets up event listeners for various blockchain events related to trading activities.

- **Event-Listener**:
	- Monitors all events from the diamond contracts.
    - Responds to specific events such as PriceImpactOpenInterestAdded, BorrowingPairAccFeesUpdated, TradeStored, etc.
    - Uses delays (setTimeout) to ensure events are fully processed before further actions are taken.

- **`handleMultiCollatEvents(event)`**:
	- Processes events related to the price impact of Open Interest (OI).
    - Updates the OI data based on the event information.

- **`handleBorrowingFeesEvent(event)`**:
	- Processes events related to borrowing fees.
    - Updates the fee information based on the event information.

#### 7. Monitoring Price Stream

**`watchPricingStream`**: This method connects to a WebSocket price stream and monitors price changes to trigger appropriate trading actions.

- **WebSocket-Setup**:
	- Connects to the WebSocket price stream to receive real-time price data.
    - Sets up various event handlers (onopen, onclose, onerror, onmessage) to manage the connection and process messages.

- **Nachrichtenverarbeitung (`onmessage`)**:
	- Processes the received price updates and updates the known open trades accordingly.
    - Checks if trades should be triggered based on the new prices (e.g., TP, SL, liquidation).
    - If a trade should be triggered, the method creates and signs a transaction to execute the trade.

- **`handleOnMessageAsync()`**:
	- Contains the actual logic for processing the received price data.
    - Checks if a trade should be triggered based on current prices and trading conditions.
    - Uses various helper functions to calculate liquidation prices, leverage, and other trading parameters.

- **`canRetry(triggerId)`**:
	- Checks if a triggered order can be retried based on a maximum number of attempts.

