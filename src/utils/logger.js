import path from 'node:path';
import winston from 'winston';
import process from 'process';
import { SeqTransport } from '@datalust/winston-seq';

const randomPrefix = generateRandomPrefix();

const customLogFormat = winston.format.printf(({ timestamp, label, level, message, ...meta }) => {
	return `(${timestamp}) [${label}] ${level} ${'BOT-' + randomPrefix + ' ' + message}`;
});

export function createLogger(label, logLevel = 'warn') {
	const transports = [];

	const prefixedLabel = `${randomPrefix}-${label}`;

	if(process.env.ENABLE_CONSOLE_LOGGING === "true") {
		transports.push(new winston.transports.Console({
			level: logLevel,
			format: winston.format.combine(
						winston.format.timestamp(),
				winston.format.label({ label: prefixedLabel }),
						winston.format.colorize(),
				customLogFormat)
		}));
	}
	if (process.env.ENABLE_SEQ_LOGGING === 'true') {
		transports.push(new SeqTransport({
			serverUrl: 'https://log.defichain-income.com',
			level: logLevel,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.label({ label: prefixedLabel }),
				customLogFormat),
			apiKey:
				process.env.ENV === 'dev'
					? 'BGGv5tzSLAcqin5V6UXR'
					: 'WRNIAfJuGR0a6QEuNZmE',
			onError: (e) => {
				console.error(e);
			},
			handleExceptions: true,
			handleRejections: true,
		}));
	}
	if(process.env.ENABLE_FS_LOGGING === "true") {
		transports.push(new winston.transports.File({
			filename: path.join(process.cwd(), `./logs/${new Date(new Date(new Date().setSeconds(0)).setMilliseconds(0)).toISOString().replace(/:/g, '_')}/${label}.log`),
			level: logLevel,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.label({ label: prefixedLabel }),
				customLogFormat)
		}));
	}

	return winston.createLogger({
		transports,
		defaultMeta: {
			application: 'leveragex-bot',
		},
	});
}

function generateRandomPrefix() {
	return Math.floor(Math.random() * 100) + 1;
}

export function getBotNr() {
	return randomPrefix;
}
