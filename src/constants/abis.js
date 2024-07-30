export const ABIS = {
	DIAMOND: [{ 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, {
		'inputs': [{
			'internalType': 'address',
			'name': '_initializationContractAddress',
			'type': 'address',
		}, { 'internalType': 'bytes', 'name': '_calldata', 'type': 'bytes' }],
		'name': 'InitializationFunctionReverted',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidFacetCutAction', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInitialization',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInputLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAllowed',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAuthorized', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotContract',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotFound', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotInitializing',
		'type': 'error',
	}, { 'inputs': [], 'name': 'Overflow', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'owner',
			'type': 'address',
		}], 'name': 'OwnableInvalidOwner', 'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'facetAddress',
				'type': 'address',
			}, {
				'internalType': 'enum IDiamondStorage.FacetCutAction',
				'name': 'action',
				'type': 'uint8',
			}, { 'internalType': 'bytes4[]', 'name': 'functionSelectors', 'type': 'bytes4[]' }],
			'indexed': false,
			'internalType': 'struct IDiamondStorage.FacetCut[]',
			'name': '_diamondCut',
			'type': 'tuple[]',
		}, { 'indexed': false, 'internalType': 'address', 'name': '_init', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'bytes',
			'name': '_calldata',
			'type': 'bytes',
		}],
		'name': 'DiamondCut',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, { 'stateMutability': 'payable', 'type': 'fallback' }, {
		'inputs': [],
		'name': 'UPGRADE_INTERFACE_VERSION',
		'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'adminAddress',
		'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'facetAddress',
				'type': 'address',
			}, {
				'internalType': 'enum IDiamondStorage.FacetCutAction',
				'name': 'action',
				'type': 'uint8',
			}, { 'internalType': 'bytes4[]', 'name': 'functionSelectors', 'type': 'bytes4[]' }],
			'internalType': 'struct IDiamondStorage.FacetCut[]',
			'name': '_faceCut',
			'type': 'tuple[]',
		}, { 'internalType': 'address', 'name': '_init', 'type': 'address' }, {
			'internalType': 'bytes',
			'name': '_calldata',
			'type': 'bytes',
		}], 'name': 'diamondCut', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'bytes4', 'name': '_functionSelector', 'type': 'bytes4' }],
		'name': 'facetAddress',
		'outputs': [{ 'internalType': 'address', 'name': 'facetAddress_', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'facetAddresses',
		'outputs': [{ 'internalType': 'address[]', 'name': 'facetAddresses_', 'type': 'address[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_facet', 'type': 'address' }],
		'name': 'facetFunctionSelectors',
		'outputs': [{ 'internalType': 'bytes4[]', 'name': 'facetFunctionSelectors_', 'type': 'bytes4[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'facets',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'facetAddress',
				'type': 'address',
			}, { 'internalType': 'bytes4[]', 'name': 'functionSelectors', 'type': 'bytes4[]' }],
			'internalType': 'struct IJavDiamondLoupe.Facet[]',
			'name': 'facets_',
			'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getAddresses',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'internalType': 'struct IAddressStore.Addresses',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'address',
			'name': '_account',
			'type': 'address',
		}, { 'internalType': 'enum IAddressStore.Role', 'name': '_role', 'type': 'uint8' }],
		'name': 'hasRole',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_rolesManager', 'type': 'address' }],
		'name': 'initialize',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'owner',
		'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'pause',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'paused',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'proxiableUUID',
		'outputs': [{ 'internalType': 'bytes32', 'name': '', 'type': 'bytes32' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'renounceOwnership',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'setAdminAddress',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'address[]',
			'name': '_accounts',
			'type': 'address[]',
		}, { 'internalType': 'enum IAddressStore.Role[]', 'name': '_roles', 'type': 'uint8[]' }, {
			'internalType': 'bool[]',
			'name': '_values',
			'type': 'bool[]',
		}], 'name': 'setRoles', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'transferOwnership',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'unpause',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'address',
			'name': 'newImplementation',
			'type': 'address',
		}, { 'internalType': 'bytes', 'name': 'data', 'type': 'bytes' }],
		'name': 'upgradeToAndCall',
		'outputs': [],
		'stateMutability': 'payable',
		'type': 'function',
	}, { 'stateMutability': 'payable', 'type': 'receive' }, {
		'inputs': [],
		'stateMutability': 'nonpayable',
		'type': 'constructor',
	}, { 'inputs': [], 'name': 'AboveMax', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'target',
			'type': 'address',
		}], 'name': 'AddressEmptyCode', 'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'FeeNotListed', 'type': 'error' }, {
		'inputs': [],
		'name': 'GeneralPaused',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GroupNotListed', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'PairAlreadyListed', 'type': 'error' }, {
		'inputs': [],
		'name': 'PairNotListed',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongFees',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongIndex', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLeverages', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'string',
			'name': 'name',
			'type': 'string',
		}],
		'name': 'FeeAdded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }],
		'name': 'FeeUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'string',
			'name': 'name',
			'type': 'string',
		}],
		'name': 'GroupAdded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }],
		'name': 'GroupUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'string',
			'name': 'from',
			'type': 'string',
		}, { 'indexed': false, 'internalType': 'string', 'name': 'to', 'type': 'string' }],
		'name': 'PairAdded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'maxLeverage',
			'type': 'uint256',
		}],
		'name': 'PairCustomMaxLeverageUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }],
		'name': 'PairUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'name',
				'type': 'string',
			}, { 'internalType': 'uint256', 'name': 'openFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'closeFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'triggerOrderFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'minPositionSizeUsd',
				'type': 'uint256',
			}], 'internalType': 'struct IPairsStorage.Fee[]', 'name': '_fees', 'type': 'tuple[]',
		}], 'name': 'addFees', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'name',
				'type': 'string',
			}, { 'internalType': 'uint256', 'name': 'minLeverage', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'maxLeverage',
				'type': 'uint256',
			}], 'internalType': 'struct IPairsStorage.Group[]', 'name': '_groups', 'type': 'tuple[]',
		}], 'name': 'addGroups', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'from',
				'type': 'string',
			}, { 'internalType': 'string', 'name': 'to', 'type': 'string' }, {
				'internalType': 'bytes32',
				'name': 'feedId',
				'type': 'bytes32',
			}, { 'internalType': 'uint256', 'name': 'spreadP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'groupIndex',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'feeIndex', 'type': 'uint256' }, {
				'internalType': 'bool',
				'name': 'altPriceOracle',
				'type': 'bool',
			}], 'internalType': 'struct IPairsStorage.Pair[]', 'name': '_pairs', 'type': 'tuple[]',
		}], 'name': 'addPairs', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_index', 'type': 'uint256' }],
		'name': 'fees',
		'outputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'name',
				'type': 'string',
			}, { 'internalType': 'uint256', 'name': 'openFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'closeFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'triggerOrderFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'minPositionSizeUsd',
				'type': 'uint256',
			}], 'internalType': 'struct IPairsStorage.Fee', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'feesCount',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getAllPairsRestrictedMaxLeverage',
		'outputs': [{ 'internalType': 'uint256[]', 'name': '', 'type': 'uint256[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_index', 'type': 'uint256' }],
		'name': 'groups',
		'outputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'name',
				'type': 'string',
			}, { 'internalType': 'uint256', 'name': 'minLeverage', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'maxLeverage',
				'type': 'uint256',
			}], 'internalType': 'struct IPairsStorage.Group', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'groupsCount',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'isPairIndexListed',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'string', 'name': '_from', 'type': 'string' }, {
			'internalType': 'string',
			'name': '_to',
			'type': 'string',
		}],
		'name': 'isPairListed',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairCloseFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairCustomMaxLeverage',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairFeed',
		'outputs': [{ 'internalType': 'bytes32', 'name': '', 'type': 'bytes32' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairMaxLeverage',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairMinLeverage',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairMinPositionSizeUsd',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairOpenFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairSpreadP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'pairTriggerOrderFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_index', 'type': 'uint256' }],
		'name': 'pairs',
		'outputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'from',
				'type': 'string',
			}, { 'internalType': 'string', 'name': 'to', 'type': 'string' }, {
				'internalType': 'bytes32',
				'name': 'feedId',
				'type': 'bytes32',
			}, { 'internalType': 'uint256', 'name': 'spreadP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'groupIndex',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'feeIndex', 'type': 'uint256' }, {
				'internalType': 'bool',
				'name': 'altPriceOracle',
				'type': 'bool',
			}], 'internalType': 'struct IPairsStorage.Pair', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_index', 'type': 'uint256' }],
		'name': 'pairsBackend',
		'outputs': [{
			'components': [{
				'internalType': 'string',
				'name': 'from',
				'type': 'string',
			}, { 'internalType': 'string', 'name': 'to', 'type': 'string' }, {
				'internalType': 'bytes32',
				'name': 'feedId',
				'type': 'bytes32',
			}, { 'internalType': 'uint256', 'name': 'spreadP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'groupIndex',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'feeIndex', 'type': 'uint256' }, {
				'internalType': 'bool',
				'name': 'altPriceOracle',
				'type': 'bool',
			}], 'internalType': 'struct IPairsStorage.Pair', 'name': '', 'type': 'tuple',
		}, {
			'components': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
				'internalType': 'uint256',
				'name': 'minLeverage',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'maxLeverage', 'type': 'uint256' }],
			'internalType': 'struct IPairsStorage.Group',
			'name': '',
			'type': 'tuple',
		}, {
			'components': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
				'internalType': 'uint256',
				'name': 'openFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'closeFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'triggerOrderFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'minPositionSizeUsd', 'type': 'uint256' }],
			'internalType': 'struct IPairsStorage.Fee',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'pairsCount',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_indices',
			'type': 'uint256[]',
		}, { 'internalType': 'uint256[]', 'name': '_values', 'type': 'uint256[]' }],
		'name': 'setPairCustomMaxLeverages',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_ids',
			'type': 'uint256[]',
		}, {
			'components': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
				'internalType': 'uint256',
				'name': 'openFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'closeFeeP', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'triggerOrderFeeP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'minPositionSizeUsd', 'type': 'uint256' }],
			'internalType': 'struct IPairsStorage.Fee[]',
			'name': '_fees',
			'type': 'tuple[]',
		}], 'name': 'updateFees', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_ids',
			'type': 'uint256[]',
		}, {
			'components': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
				'internalType': 'uint256',
				'name': 'minLeverage',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'maxLeverage', 'type': 'uint256' }],
			'internalType': 'struct IPairsStorage.Group[]',
			'name': '_groups',
			'type': 'tuple[]',
		}], 'name': 'updateGroups', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_pairIndices',
			'type': 'uint256[]',
		}, {
			'components': [{ 'internalType': 'string', 'name': 'from', 'type': 'string' }, {
				'internalType': 'string',
				'name': 'to',
				'type': 'string',
			}, { 'internalType': 'bytes32', 'name': 'feedId', 'type': 'bytes32' }, {
				'internalType': 'uint256',
				'name': 'spreadP',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'groupIndex', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'feeIndex',
				'type': 'uint256',
			}, { 'internalType': 'bool', 'name': 'altPriceOracle', 'type': 'bool' }],
			'internalType': 'struct IPairsStorage.Pair[]',
			'name': '_pairs',
			'type': 'tuple[]',
		}], 'name': 'updatePairs', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'AddressInsufficientBalance',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AllyNotActive', 'type': 'error' }, {
		'inputs': [],
		'name': 'AlreadyActive',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'AlreadyInactive',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BelowMin', 'type': 'error' }, {
		'inputs': [],
		'name': 'BlockOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'DoesntExist', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'implementation',
			'type': 'address',
		}], 'name': 'ERC1967InvalidImplementation', 'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NoPendingRewards', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAllowed',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAuthorized', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotInitializing',
		'type': 'error',
	}, { 'inputs': [], 'name': 'Overflow', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'owner',
			'type': 'address',
		}], 'name': 'OwnableInvalidOwner', 'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'token', 'type': 'address' }],
		'name': 'SafeERC20FailedOperation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ally', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'address',
			'name': 'trader',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'volumeUsd', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'amountJav',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountValueUsd', 'type': 'uint256' }],
		'name': 'AllyRewardDistributed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ally', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'amountJav',
			'type': 'uint256',
		}],
		'name': 'AllyRewardsClaimed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ally', 'type': 'address' }],
		'name': 'AllyUnwhitelisted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ally', 'type': 'address' }],
		'name': 'AllyWhitelisted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'address',
			'name': 'referrer',
			'type': 'address',
		}],
		'name': 'ReferrerRegistered',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'referrer', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'address',
			'name': 'trader',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'volumeUsd', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'amountJav',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountValueUsd', 'type': 'uint256' }],
		'name': 'ReferrerRewardDistributed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'referrer',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountJav', 'type': 'uint256' }],
		'name': 'ReferrerRewardsClaimed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'referrer', 'type': 'address' }],
		'name': 'ReferrerUnwhitelisted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'referrer', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'address',
			'name': 'ally',
			'type': 'address',
		}],
		'name': 'ReferrerWhitelisted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
		'name': 'UpdatedAllyFeeP',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
		'name': 'UpdatedOpenFeeP',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
		'name': 'UpdatedStartReferrerFeeP',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
		'name': 'UpdatedTargetVolumeUsd',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [],
		'name': 'claimAllyRewards',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'claimReferrerRewards',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint256',
			'name': '_volumeUsd',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_pairOpenFeeP', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_javPriceUsd',
			'type': 'uint256',
		}],
		'name': 'distributeReferralReward',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_ally', 'type': 'address' }],
		'name': 'getAllyDetails',
		'outputs': [{
			'components': [{
				'internalType': 'address[]',
				'name': 'referrersReferred',
				'type': 'address[]',
			}, { 'internalType': 'uint256', 'name': 'volumeReferredUsd', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'pendingRewardsJav',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'totalRewardsJav', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'totalRewardsValueUsd',
				'type': 'uint256',
			}, { 'internalType': 'bool', 'name': 'active', 'type': 'bool' }],
			'internalType': 'struct IReferrals.AllyDetails',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getReferralsAllyFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getReferralsOpenFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getReferralsStartReferrerFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getReferralsTargetVolumeUsd',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_referrer', 'type': 'address' }],
		'name': 'getReferrerDetails',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'ally',
				'type': 'address',
			}, { 'internalType': 'address[]', 'name': 'tradersReferred', 'type': 'address[]' }, {
				'internalType': 'uint256',
				'name': 'volumeReferredUsd',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'pendingRewardsJav', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'totalRewardsJav',
				'type': 'uint256',
			}, { 'internalType': 'uint256', 'name': 'totalRewardsValueUsd', 'type': 'uint256' }, {
				'internalType': 'bool',
				'name': 'active',
				'type': 'bool',
			}], 'internalType': 'struct IReferrals.ReferrerDetails', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256',
			'name': '_pairOpenFeeP',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_volumeReferredUsd', 'type': 'uint256' }],
		'name': 'getReferrerFeeP',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_ally', 'type': 'address' }],
		'name': 'getReferrersReferred',
		'outputs': [{ 'internalType': 'address[]', 'name': '', 'type': 'address[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getTraderActiveReferrer',
		'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getTraderLastReferrer',
		'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_referrer', 'type': 'address' }],
		'name': 'getTradersReferred',
		'outputs': [{ 'internalType': 'address[]', 'name': '', 'type': 'address[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_allyFeeP', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_startReferrerFeeP',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_openFeeP', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_targetVolumeUsd',
			'type': 'uint256',
		}], 'name': 'initializeReferrals', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'address',
			'name': '_referrer',
			'type': 'address',
		}], 'name': 'registerPotentialReferrer', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address[]', 'name': '_allies', 'type': 'address[]' }],
		'name': 'unwhitelistAllies',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address[]', 'name': '_referrers', 'type': 'address[]' }],
		'name': 'unwhitelistReferrers',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_value', 'type': 'uint256' }],
		'name': 'updateAllyFeeP',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_value', 'type': 'uint256' }],
		'name': 'updateReferralsOpenFeeP',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_value', 'type': 'uint256' }],
		'name': 'updateReferralsTargetVolumeUsd',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_value', 'type': 'uint256' }],
		'name': 'updateStartReferrerFeeP',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address[]', 'name': '_allies', 'type': 'address[]' }],
		'name': 'whitelistAllies',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'address[]',
			'name': '_referrers',
			'type': 'address[]',
		}, { 'internalType': 'address[]', 'name': '_allies', 'type': 'address[]' }],
		'name': 'whitelistReferrers',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongFeeTier',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongIndex', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongParams',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongTradeType', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroAddress',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroValue', 'type': 'error' }, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'uint256[]',
			'name': 'feeTiersIndices',
			'type': 'uint256[]',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'feeMultiplier',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'pointsThreshold', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct IFeeTiers.FeeTier[]',
			'name': 'feeTiers',
			'type': 'tuple[]',
		}],
		'name': 'FeeTiersUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'uint256[]',
			'name': 'groupIndices',
			'type': 'uint256[]',
		}, { 'indexed': false, 'internalType': 'uint256[]', 'name': 'groupVolumeMultipliers', 'type': 'uint256[]' }],
		'name': 'GroupVolumeMultipliersUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint32',
			'name': 'day',
			'type': 'uint32',
		}, { 'indexed': false, 'internalType': 'uint224', 'name': 'points', 'type': 'uint224' }],
		'name': 'TraderDailyPointsIncreased',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint32',
			'name': 'day',
			'type': 'uint32',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'feeMultiplier', 'type': 'uint32' }],
		'name': 'TraderFeeMultiplierCached',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'uint32',
			'name': 'day',
			'type': 'uint32',
		}],
		'name': 'TraderInfoFirstUpdate',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'trader',
			'type': 'address',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'lastDayUpdated',
				'type': 'uint32',
			}, { 'internalType': 'uint224', 'name': 'trailingPoints', 'type': 'uint224' }],
			'indexed': false,
			'internalType': 'struct IFeeTiers.TraderInfo',
			'name': 'traderInfo',
			'type': 'tuple',
		}],
		'name': 'TraderInfoUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'uint32',
			'name': 'fromDay',
			'type': 'uint32',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'toDay', 'type': 'uint32' }, {
			'indexed': false,
			'internalType': 'uint224',
			'name': 'expiredPoints',
			'type': 'uint224',
		}],
		'name': 'TraderTrailingPointsExpired',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint256',
			'name': '_normalFeeAmountCollateral',
			'type': 'uint256',
		}],
		'name': 'calculateFeeAmount',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_feeTierIndex', 'type': 'uint256' }],
		'name': 'getFeeTier',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feeMultiplier',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'pointsThreshold', 'type': 'uint32' }],
			'internalType': 'struct IFeeTiers.FeeTier',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getFeeTiersCount',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint32',
			'name': '_day',
			'type': 'uint32',
		}],
		'name': 'getFeeTiersTraderDailyInfo',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feeMultiplierCache',
				'type': 'uint32',
			}, { 'internalType': 'uint224', 'name': 'points', 'type': 'uint224' }],
			'internalType': 'struct IFeeTiers.TraderDailyInfo',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getFeeTiersTraderInfo',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'lastDayUpdated',
				'type': 'uint32',
			}, { 'internalType': 'uint224', 'name': 'trailingPoints', 'type': 'uint224' }],
			'internalType': 'struct IFeeTiers.TraderInfo',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_groupIndex', 'type': 'uint256' }],
		'name': 'getGroupVolumeMultiplier',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_groupIndices',
			'type': 'uint256[]',
		}, {
			'internalType': 'uint256[]',
			'name': '_groupVolumeMultipliers',
			'type': 'uint256[]',
		}, {
			'internalType': 'uint256[]',
			'name': '_feeTiersIndices',
			'type': 'uint256[]',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'feeMultiplier',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'pointsThreshold', 'type': 'uint32' }],
			'internalType': 'struct IFeeTiers.FeeTier[]',
			'name': '_feeTiers',
			'type': 'tuple[]',
		}], 'name': 'initializeFeeTiers', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_feeTiersIndices',
			'type': 'uint256[]',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'feeMultiplier',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'pointsThreshold', 'type': 'uint32' }],
			'internalType': 'struct IFeeTiers.FeeTier[]',
			'name': '_feeTiers',
			'type': 'tuple[]',
		}], 'name': 'setFeeTiers', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_groupIndices',
			'type': 'uint256[]',
		}, { 'internalType': 'uint256[]', 'name': '_groupVolumeMultipliers', 'type': 'uint256[]' }],
		'name': 'setGroupVolumeMultipliers',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint256',
			'name': '_volumeUsd',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'updateTraderPoints',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongWindowsCount', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongWindowsDuration',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint48',
			'name': 'windowsDuration',
			'type': 'uint48',
		}, { 'indexed': true, 'internalType': 'uint48', 'name': 'windowsCount', 'type': 'uint48' }],
		'name': 'OiWindowsSettingsInitialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint256',
			'name': 'pairIndex',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint128', 'name': 'valueAboveUsd', 'type': 'uint128' }, {
			'indexed': false,
			'internalType': 'uint128',
			'name': 'valueBelowUsd',
			'type': 'uint128',
		}],
		'name': 'OnePercentDepthUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint256',
			'name': 'pairIndex',
			'type': 'uint256',
		}, {
			'components': [{
				'internalType': 'uint128',
				'name': 'oiLongUsd',
				'type': 'uint128',
			}, { 'internalType': 'uint128', 'name': 'oiShortUsd', 'type': 'uint128' }],
			'indexed': false,
			'internalType': 'struct IPriceImpact.PairOi',
			'name': 'totalPairOi',
			'type': 'tuple',
		}],
		'name': 'PriceImpactOiTransferredPair',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'uint256',
			'name': 'pairsCount',
			'type': 'uint256',
		}, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'prevCurrentWindowId',
			'type': 'uint256',
		}, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'prevEarliestWindowId',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'newCurrentWindowId', 'type': 'uint256' }],
		'name': 'PriceImpactOiTransferredPairs',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'uint48',
				'name': 'windowsDuration',
				'type': 'uint48',
			}, { 'internalType': 'uint256', 'name': 'pairIndex', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'windowId',
				'type': 'uint256',
			}, { 'internalType': 'bool', 'name': 'long', 'type': 'bool' }, {
				'internalType': 'uint128',
				'name': 'openInterestUsd',
				'type': 'uint128',
			}],
			'indexed': false,
			'internalType': 'struct IPriceImpact.OiWindowUpdate',
			'name': 'oiWindowUpdate',
			'type': 'tuple',
		}],
		'name': 'PriceImpactOpenInterestAdded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'uint48',
				'name': 'windowsDuration',
				'type': 'uint48',
			}, { 'internalType': 'uint256', 'name': 'pairIndex', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'windowId',
				'type': 'uint256',
			}, { 'internalType': 'bool', 'name': 'long', 'type': 'bool' }, {
				'internalType': 'uint128',
				'name': 'openInterestUsd',
				'type': 'uint128',
			}],
			'indexed': false,
			'internalType': 'struct IPriceImpact.OiWindowUpdate',
			'name': 'oiWindowUpdate',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'notOutdated', 'type': 'bool' }],
		'name': 'PriceImpactOpenInterestRemoved',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'uint48', 'name': 'windowsCount', 'type': 'uint48' }],
		'name': 'PriceImpactWindowsCountUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'uint48', 'name': 'windowsDuration', 'type': 'uint48' }],
		'name': 'PriceImpactWindowsDurationUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{
			'internalType': 'uint256',
			'name': '_openInterestUsd',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }, {
			'internalType': 'bool',
			'name': '_long',
			'type': 'bool',
		}], 'name': 'addPriceImpactOpenInterest', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint48',
			'name': '_windowsDuration',
			'type': 'uint48',
		}, { 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_windowId',
			'type': 'uint256',
		}],
		'name': 'getOiWindow',
		'outputs': [{
			'components': [{
				'internalType': 'uint128',
				'name': 'oiLongUsd',
				'type': 'uint128',
			}, { 'internalType': 'uint128', 'name': 'oiShortUsd', 'type': 'uint128' }],
			'internalType': 'struct IPriceImpact.PairOi',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint48',
			'name': '_windowsDuration',
			'type': 'uint48',
		}, { 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }, {
			'internalType': 'uint256[]',
			'name': '_windowIds',
			'type': 'uint256[]',
		}],
		'name': 'getOiWindows',
		'outputs': [{
			'components': [{
				'internalType': 'uint128',
				'name': 'oiLongUsd',
				'type': 'uint128',
			}, { 'internalType': 'uint128', 'name': 'oiShortUsd', 'type': 'uint128' }],
			'internalType': 'struct IPriceImpact.PairOi[]',
			'name': '',
			'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getOiWindowsSettings',
		'outputs': [{
			'components': [{
				'internalType': 'uint48',
				'name': 'startTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'windowsDuration', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': 'windowsCount',
				'type': 'uint48',
			}], 'internalType': 'struct IPriceImpact.OiWindowsSettings', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }],
		'name': 'getPairDepth',
		'outputs': [{
			'components': [{
				'internalType': 'uint128',
				'name': 'onePercentDepthAboveUsd',
				'type': 'uint128',
			}, { 'internalType': 'uint128', 'name': 'onePercentDepthBelowUsd', 'type': 'uint128' }],
			'internalType': 'struct IPriceImpact.PairDepth',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256[]', 'name': '_indices', 'type': 'uint256[]' }],
		'name': 'getPairDepths',
		'outputs': [{
			'components': [{
				'internalType': 'uint128',
				'name': 'onePercentDepthAboveUsd',
				'type': 'uint128',
			}, { 'internalType': 'uint128', 'name': 'onePercentDepthBelowUsd', 'type': 'uint128' }],
			'internalType': 'struct IPriceImpact.PairDepth[]',
			'name': '',
			'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }, {
			'internalType': 'bool',
			'name': '_long',
			'type': 'bool',
		}],
		'name': 'getPriceImpactOi',
		'outputs': [{ 'internalType': 'uint256', 'name': 'activeOi', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_openPrice', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_pairIndex',
			'type': 'uint256',
		}, { 'internalType': 'bool', 'name': '_long', 'type': 'bool' }, {
			'internalType': 'uint256',
			'name': '_tradeOpenInterestUsd',
			'type': 'uint256',
		}],
		'name': 'getTradePriceImpact',
		'outputs': [{ 'internalType': 'uint256', 'name': 'priceImpactP', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': 'priceAfterImpact',
			'type': 'uint256',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint48',
			'name': '_windowsDuration',
			'type': 'uint48',
		}, { 'internalType': 'uint48', 'name': '_windowsCount', 'type': 'uint48' }],
		'name': 'initializePriceImpact',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256',
			'name': '_openInterestUsd',
			'type': 'uint256',
		}, { 'internalType': 'uint256', 'name': '_pairIndex', 'type': 'uint256' }, {
			'internalType': 'bool',
			'name': '_long',
			'type': 'bool',
		}, { 'internalType': 'uint48', 'name': '_addTs', 'type': 'uint48' }],
		'name': 'removePriceImpactOpenInterest',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint256[]',
			'name': '_indices',
			'type': 'uint256[]',
		}, { 'internalType': 'uint128[]', 'name': '_depthsAboveUsd', 'type': 'uint128[]' }, {
			'internalType': 'uint128[]',
			'name': '_depthsBelowUsd',
			'type': 'uint128[]',
		}], 'name': 'setPairDepths', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint48', 'name': '_newWindowsCount', 'type': 'uint48' }],
		'name': 'setPriceImpactWindowsCount',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint48', 'name': '_newWindowsDuration', 'type': 'uint48' }],
		'name': 'setPriceImpactWindowsDuration',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'CollateralAlreadyActive',
		'type': 'error',
	}, { 'inputs': [], 'name': 'CollateralAlreadyDisabled', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'MaxSlippageZero', 'type': 'error' }, {
		'inputs': [],
		'name': 'MissingCollaterals',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'TradeInfoCollateralPriceUsdZero', 'type': 'error' }, {
		'inputs': [],
		'name': 'TradeOpenPriceZero',
		'type': 'error',
	}, { 'inputs': [], 'name': 'TradePairNotListed', 'type': 'error' }, {
		'inputs': [],
		'name': 'TradePositionSizeZero',
		'type': 'error',
	}, { 'inputs': [], 'name': 'TradeSlInvalid', 'type': 'error' }, {
		'inputs': [],
		'name': 'TradeTpInvalid',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'address',
			'name': 'collateral',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint8', 'name': 'index', 'type': 'uint8' }],
		'name': 'CollateralAdded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint8', 'name': 'index', 'type': 'uint8' }],
		'name': 'CollateralDisabled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'uint8', 'name': 'index', 'type': 'uint8' }, {
			'indexed': false,
			'internalType': 'bool',
			'name': 'isActive',
			'type': 'bool',
		}],
		'name': 'CollateralUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Id',
			'name': 'tradeId',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'openPrice', 'type': 'uint64' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'tp',
			'type': 'uint64',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'sl', 'type': 'uint64' }, {
			'indexed': false,
			'internalType': 'uint16',
			'name': 'maxSlippageP',
			'type': 'uint16',
		}],
		'name': 'OpenOrderDetailsUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Id',
			'name': 'tradeId',
			'type': 'tuple',
		}],
		'name': 'TradeClosed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Id',
			'name': 'tradeId',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }],
		'name': 'TradeCollateralUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Id',
			'name': 'tradeId',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'newSl', 'type': 'uint64' }],
		'name': 'TradeSlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Trade',
			'name': 'trade',
			'type': 'tuple',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'createdBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'tpLastUpdatedBlock', 'type': 'uint32' }, {
				'internalType': 'uint32',
				'name': 'slLastUpdatedBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint16', 'name': 'maxSlippageP', 'type': 'uint16' }, {
				'internalType': 'uint48',
				'name': 'lastOiUpdateTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'collateralPriceUsd', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': '__placeholder',
				'type': 'uint48',
			}], 'indexed': false, 'internalType': 'struct ITradingStorage.TradeInfo', 'name': 'tradeInfo', 'type': 'tuple',
		}],
		'name': 'TradeStored',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Id',
			'name': 'tradeId',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'newTp', 'type': 'uint64' }],
		'name': 'TradeTpUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'enum ITradingStorage.TradingActivated',
			'name': 'activated',
			'type': 'uint8',
		}],
		'name': 'TradingActivatedUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_collateral', 'type': 'address' }, {
			'internalType': 'uint8',
			'name': '_index',
			'type': 'uint8',
		}], 'name': 'addCollateral', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'internalType': 'struct ITradingStorage.Id',
			'name': '_tradeId',
			'type': 'tuple',
		}], 'name': 'closeTrade', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_offset', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_limit',
			'type': 'uint256',
		}],
		'name': 'getAllTradeInfos',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'createdBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'tpLastUpdatedBlock', 'type': 'uint32' }, {
				'internalType': 'uint32',
				'name': 'slLastUpdatedBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint16', 'name': 'maxSlippageP', 'type': 'uint16' }, {
				'internalType': 'uint48',
				'name': 'lastOiUpdateTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'collateralPriceUsd', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': '__placeholder',
				'type': 'uint48',
			}], 'internalType': 'struct ITradingStorage.TradeInfo[]', 'name': '', 'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_offset', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': '_limit',
			'type': 'uint256',
		}],
		'name': 'getAllTrades',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade[]',
			'name': '',
			'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getBorrowingProvider',
		'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_index', 'type': 'uint8' }],
		'name': 'getCollateral',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'collateral',
				'type': 'address',
			}, { 'internalType': 'bool', 'name': 'isActive', 'type': 'bool' }, {
				'internalType': 'uint88',
				'name': '__placeholder',
				'type': 'uint88',
			}, { 'internalType': 'uint128', 'name': 'precision', 'type': 'uint128' }, {
				'internalType': 'uint128',
				'name': 'precisionDelta',
				'type': 'uint128',
			}], 'internalType': 'struct ITradingStorage.Collateral', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_collateral', 'type': 'address' }],
		'name': 'getCollateralIndex',
		'outputs': [{ 'internalType': 'uint8', 'name': '', 'type': 'uint8' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getCollaterals',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'collateral',
				'type': 'address',
			}, { 'internalType': 'bool', 'name': 'isActive', 'type': 'bool' }, {
				'internalType': 'uint88',
				'name': '__placeholder',
				'type': 'uint88',
			}, { 'internalType': 'uint128', 'name': 'precision', 'type': 'uint128' }, {
				'internalType': 'uint128',
				'name': 'precisionDelta',
				'type': 'uint128',
			}], 'internalType': 'struct ITradingStorage.Collateral[]', 'name': '', 'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getCollateralsCount',
		'outputs': [{ 'internalType': 'uint8', 'name': '', 'type': 'uint8' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getCounters',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'currentIndex',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'openCount', 'type': 'uint32' }, {
				'internalType': 'uint192',
				'name': '__placeholder',
				'type': 'uint192',
			}], 'internalType': 'struct ITradingStorage.Counter', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'enum ITradingStorage.TradeType', 'name': '_tradeType', 'type': 'uint8' }],
		'name': 'getPendingOpenOrderType',
		'outputs': [{ 'internalType': 'enum ITradingStorage.PendingOrderType', 'name': '', 'type': 'uint8' }],
		'stateMutability': 'pure',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint64', 'name': '_openPrice', 'type': 'uint64' }, {
			'internalType': 'uint64',
			'name': '_currentPrice',
			'type': 'uint64',
		}, { 'internalType': 'bool', 'name': '_long', 'type': 'bool' }, {
			'internalType': 'uint24',
			'name': '_leverage',
			'type': 'uint24',
		}],
		'name': 'getPnlPercent',
		'outputs': [{ 'internalType': 'int256', 'name': '', 'type': 'int256' }],
		'stateMutability': 'pure',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint32',
			'name': '_index',
			'type': 'uint32',
		}],
		'name': 'getTrade',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }, {
			'internalType': 'uint32',
			'name': '_index',
			'type': 'uint32',
		}],
		'name': 'getTradeInfo',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'createdBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'tpLastUpdatedBlock', 'type': 'uint32' }, {
				'internalType': 'uint32',
				'name': 'slLastUpdatedBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint16', 'name': 'maxSlippageP', 'type': 'uint16' }, {
				'internalType': 'uint48',
				'name': 'lastOiUpdateTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'collateralPriceUsd', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': '__placeholder',
				'type': 'uint48',
			}], 'internalType': 'struct ITradingStorage.TradeInfo', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getTradeInfos',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'createdBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'tpLastUpdatedBlock', 'type': 'uint32' }, {
				'internalType': 'uint32',
				'name': 'slLastUpdatedBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint16', 'name': 'maxSlippageP', 'type': 'uint16' }, {
				'internalType': 'uint48',
				'name': 'lastOiUpdateTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'collateralPriceUsd', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': '__placeholder',
				'type': 'uint48',
			}], 'internalType': 'struct ITradingStorage.TradeInfo[]', 'name': '', 'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getTraderStored',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_offset', 'type': 'uint32' }, {
			'internalType': 'uint32',
			'name': '_limit',
			'type': 'uint32',
		}],
		'name': 'getTraders',
		'outputs': [{ 'internalType': 'address[]', 'name': '', 'type': 'address[]' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_trader', 'type': 'address' }],
		'name': 'getTrades',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade[]',
			'name': '',
			'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getTradingActivated',
		'outputs': [{ 'internalType': 'enum ITradingStorage.TradingActivated', 'name': '', 'type': 'uint8' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': '_jav', 'type': 'address' }, {
			'internalType': 'address',
			'name': '_rewardsDistributor',
			'type': 'address',
		}, { 'internalType': 'address', 'name': '_borrowingProvider', 'type': 'address' }, {
			'internalType': 'address[]',
			'name': '_collaterals',
			'type': 'address[]',
		}, { 'internalType': 'uint8[]', 'name': '_collateralsIndexes', 'type': 'uint8[]' }],
		'name': 'initializeTradingStorage',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_index', 'type': 'uint8' }],
		'name': 'isCollateralActive',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_index', 'type': 'uint8' }],
		'name': 'isCollateralListed',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade',
			'name': '_trade',
			'type': 'tuple',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'createdBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint32', 'name': 'tpLastUpdatedBlock', 'type': 'uint32' }, {
				'internalType': 'uint32',
				'name': 'slLastUpdatedBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint16', 'name': 'maxSlippageP', 'type': 'uint16' }, {
				'internalType': 'uint48',
				'name': 'lastOiUpdateTs',
				'type': 'uint48',
			}, { 'internalType': 'uint48', 'name': 'collateralPriceUsd', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': '__placeholder',
				'type': 'uint48',
			}], 'internalType': 'struct ITradingStorage.TradeInfo', 'name': '_tradeInfo', 'type': 'tuple',
		}],
		'name': 'storeTrade',
		'outputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }],
		'name': 'toggleCollateralActiveState',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'internalType': 'struct ITradingStorage.Id',
			'name': '_tradeId',
			'type': 'tuple',
		}, { 'internalType': 'uint64', 'name': '_openPrice', 'type': 'uint64' }, {
			'internalType': 'uint64',
			'name': '_tp',
			'type': 'uint64',
		}, { 'internalType': 'uint64', 'name': '_sl', 'type': 'uint64' }, {
			'internalType': 'uint16',
			'name': '_maxSlippageP',
			'type': 'uint16',
		}], 'name': 'updateOpenOrderDetails', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'internalType': 'struct ITradingStorage.Id',
			'name': '_tradeId',
			'type': 'tuple',
		}, { 'internalType': 'uint120', 'name': '_collateralAmount', 'type': 'uint120' }],
		'name': 'updateTradeCollateralAmount',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'internalType': 'struct ITradingStorage.Id',
			'name': '_tradeId',
			'type': 'tuple',
		}, { 'internalType': 'uint64', 'name': '_newSl', 'type': 'uint64' }],
		'name': 'updateTradeSl',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
			'internalType': 'struct ITradingStorage.Id',
			'name': '_tradeId',
			'type': 'tuple',
		}, { 'internalType': 'uint64', 'name': '_newTp', 'type': 'uint64' }],
		'name': 'updateTradeTp',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'enum ITradingStorage.TradingActivated', 'name': '_activated', 'type': 'uint8' }],
		'name': 'updateTradingActivated',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade',
			'name': '_trade',
			'type': 'tuple',
		}], 'name': 'validateTrade', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveGroupMaxOi',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AboveMax', 'type': 'error' }, {
		'inputs': [],
		'name': 'AbovePairMaxOi',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'AddressInsufficientBalance',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyBeingMarketClosed', 'type': 'error' }, {
		'inputs': [],
		'name': 'AlreadyExists',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BelowMin', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMinPositionSizeUsd',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'CollateralNotActive',
		'type': 'error',
	}, { 'inputs': [], 'name': 'DelegateNotApproved', 'type': 'error' }, {
		'inputs': [],
		'name': 'DelegatedActionNotAllowed',
		'type': 'error',
	}, { 'inputs': [], 'name': 'DoesntExist', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'implementation',
			'type': 'address',
		}], 'name': 'ERC1967InvalidImplementation', 'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'MaxSlippageZero', 'type': 'error' }, {
		'inputs': [],
		'name': 'NoOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NoSl', 'type': 'error' }, {
		'inputs': [],
		'name': 'NoTp',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NoTrade', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAllowed',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAuthorized', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotInitializing',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotWrappedNativeToken', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotYourOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'Overflow', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'owner',
			'type': 'address',
		}], 'name': 'OwnableInvalidOwner', 'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'PendingTrigger', 'type': 'error' }, {
		'inputs': [],
		'name': 'PriceImpactTooHigh',
		'type': 'error',
	}, { 'inputs': [], 'name': 'PriceZero', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'token',
			'type': 'address',
		}], 'name': 'SafeERC20FailedOperation', 'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WaitTimeout', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongAccess',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongIndex', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLeverage', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongOrderType', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongParams',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongSl', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTp',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongTradeType', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroAddress',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroValue', 'type': 'error' }, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
		'name': 'CouldNotCloseTrade',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'open', 'type': 'bool' }],
		'name': 'MarketOrderInitiated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
		'name': 'OpenLimitCanceled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'newPrice',
			'type': 'uint64',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'newTp', 'type': 'uint64' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'newSl',
			'type': 'uint64',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'maxSlippageP', 'type': 'uint64' }],
		'name': 'OpenLimitUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }],
		'name': 'OpenOrderPlaced',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'TriggerFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }],
		'name': 'cancelOpenOrder',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }],
		'name': 'closeTradeMarket',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'internalType': 'struct ITradingStorage.Trade',
			'name': '_trade',
			'type': 'tuple',
		}, { 'internalType': 'uint16', 'name': '_maxSlippageP', 'type': 'uint16' }, {
			'internalType': 'address',
			'name': '_referrer',
			'type': 'address',
		}], 'name': 'openTrade', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint256', 'name': '_packed', 'type': 'uint256' }],
		'name': 'triggerOrder',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }, {
			'internalType': 'uint64',
			'name': '_triggerPrice',
			'type': 'uint64',
		}, { 'internalType': 'uint64', 'name': '_tp', 'type': 'uint64' }, {
			'internalType': 'uint64',
			'name': '_sl',
			'type': 'uint64',
		}, { 'internalType': 'uint16', 'name': '_maxSlippageP', 'type': 'uint16' }],
		'name': 'updateOpenOrder',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }, {
			'internalType': 'uint64',
			'name': '_newSl',
			'type': 'uint64',
		}], 'name': 'updateSl', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }, {
			'internalType': 'uint64',
			'name': '_newTp',
			'type': 'uint64',
		}], 'name': 'updateTp', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'AddressInsufficientBalance',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'token', 'type': 'address' }],
		'name': 'SafeERC20FailedOperation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'BorrowingFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'GovFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'JTokenFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Trade',
			'name': 't',
			'type': 'tuple',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'triggerCaller', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum ITradingStorage.PendingOrderType',
			'name': 'orderType',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'price', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'priceImpactP',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'int256', 'name': 'percentProfit', 'type': 'int256' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'amountSentToTrader',
			'type': 'uint256',
		}, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'collateralPriceUsd',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'exactExecution', 'type': 'bool' }],
		'name': 'LimitExecuted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint256',
			'name': 'pairIndex',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'index', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'enum ITradingProcessing.CancelReason',
			'name': 'cancelReason',
			'type': 'uint8',
		}],
		'name': 'MarketCloseCanceled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'user',
				'type': 'address',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, {
				'internalType': 'enum ITradingStorage.TradeType',
				'name': 'tradeType',
				'type': 'uint8',
			}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'sl',
				'type': 'uint64',
			}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
			'indexed': false,
			'internalType': 'struct ITradingStorage.Trade',
			'name': 't',
			'type': 'tuple',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'open', 'type': 'bool' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'price',
			'type': 'uint64',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'priceImpactP', 'type': 'uint256' }, {
			'indexed': false,
			'internalType': 'int256',
			'name': 'percentProfit',
			'type': 'int256',
		}, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'amountSentToTrader',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'collateralPriceUsd', 'type': 'uint256' }],
		'name': 'MarketExecuted',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint256',
			'name': 'pairIndex',
			'type': 'uint256',
		}, {
			'indexed': false,
			'internalType': 'enum ITradingProcessing.CancelReason',
			'name': 'cancelReason',
			'type': 'uint8',
		}],
		'name': 'MarketOpenCanceled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'PendingGovFeesClaimed',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'ReferralFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'amountCollateral', 'type': 'uint256' }],
		'name': 'RewardsFeeCharged',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'triggerCaller',
			'type': 'address',
		}, {
			'indexed': false,
			'internalType': 'enum ITradingStorage.PendingOrderType',
			'name': 'orderType',
			'type': 'uint8',
		}, {
			'indexed': false,
			'internalType': 'enum ITradingProcessing.CancelReason',
			'name': 'cancelReason',
			'type': 'uint8',
		}],
		'name': 'TriggerOrderCanceled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint8', 'name': 'valueP', 'type': 'uint8' }],
		'name': 'VaultClosingFeePUpdated',
		'type': 'event',
	}, {
		'inputs': [],
		'name': 'claimPendingGovFees',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'components': [{
					'internalType': 'address',
					'name': 'user',
					'type': 'address',
				}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
					'internalType': 'uint16',
					'name': 'pairIndex',
					'type': 'uint16',
				}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
					'internalType': 'bool',
					'name': 'long',
					'type': 'bool',
				}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
					'internalType': 'uint8',
					'name': 'collateralIndex',
					'type': 'uint8',
				}, {
					'internalType': 'enum ITradingStorage.TradeType',
					'name': 'tradeType',
					'type': 'uint8',
				}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
					'internalType': 'uint64',
					'name': 'openPrice',
					'type': 'uint64',
				}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
					'internalType': 'uint64',
					'name': 'sl',
					'type': 'uint64',
				}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
				'internalType': 'struct ITradingStorage.Trade',
				'name': 'trade',
				'type': 'tuple',
			}, { 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
				'internalType': 'uint32',
				'name': 'index',
				'type': 'uint32',
			}, {
				'internalType': 'bool',
				'name': 'isOpen',
				'type': 'bool',
			}, {
				'internalType': 'enum ITradingStorage.PendingOrderType',
				'name': 'orderType',
				'type': 'uint8',
			}, { 'internalType': 'uint32', 'name': 'createdBlock', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'maxSlippageP',
				'type': 'uint16',
			}, { 'internalType': 'uint64', 'name': 'price', 'type': 'uint64' }],
			'internalType': 'struct ITradingStorage.PendingOrder',
			'name': '_pendingOrder',
			'type': 'tuple',
		}], 'name': 'closeTradeMarketOrder', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'components': [{
					'internalType': 'address',
					'name': 'user',
					'type': 'address',
				}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
					'internalType': 'uint16',
					'name': 'pairIndex',
					'type': 'uint16',
				}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
					'internalType': 'bool',
					'name': 'long',
					'type': 'bool',
				}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
					'internalType': 'uint8',
					'name': 'collateralIndex',
					'type': 'uint8',
				}, {
					'internalType': 'enum ITradingStorage.TradeType',
					'name': 'tradeType',
					'type': 'uint8',
				}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
					'internalType': 'uint64',
					'name': 'openPrice',
					'type': 'uint64',
				}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
					'internalType': 'uint64',
					'name': 'sl',
					'type': 'uint64',
				}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
				'internalType': 'struct ITradingStorage.Trade',
				'name': 'trade',
				'type': 'tuple',
			}, { 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
				'internalType': 'uint32',
				'name': 'index',
				'type': 'uint32',
			}, {
				'internalType': 'bool',
				'name': 'isOpen',
				'type': 'bool',
			}, {
				'internalType': 'enum ITradingStorage.PendingOrderType',
				'name': 'orderType',
				'type': 'uint8',
			}, { 'internalType': 'uint32', 'name': 'createdBlock', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'maxSlippageP',
				'type': 'uint16',
			}, { 'internalType': 'uint64', 'name': 'price', 'type': 'uint64' }],
			'internalType': 'struct ITradingStorage.PendingOrder',
			'name': '_pendingOrder',
			'type': 'tuple',
		}], 'name': 'executeTriggerCloseOrder', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'components': [{
					'internalType': 'address',
					'name': 'user',
					'type': 'address',
				}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
					'internalType': 'uint16',
					'name': 'pairIndex',
					'type': 'uint16',
				}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
					'internalType': 'bool',
					'name': 'long',
					'type': 'bool',
				}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
					'internalType': 'uint8',
					'name': 'collateralIndex',
					'type': 'uint8',
				}, {
					'internalType': 'enum ITradingStorage.TradeType',
					'name': 'tradeType',
					'type': 'uint8',
				}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
					'internalType': 'uint64',
					'name': 'openPrice',
					'type': 'uint64',
				}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
					'internalType': 'uint64',
					'name': 'sl',
					'type': 'uint64',
				}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
				'internalType': 'struct ITradingStorage.Trade',
				'name': 'trade',
				'type': 'tuple',
			}, { 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
				'internalType': 'uint32',
				'name': 'index',
				'type': 'uint32',
			}, {
				'internalType': 'bool',
				'name': 'isOpen',
				'type': 'bool',
			}, {
				'internalType': 'enum ITradingStorage.PendingOrderType',
				'name': 'orderType',
				'type': 'uint8',
			}, { 'internalType': 'uint32', 'name': 'createdBlock', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'maxSlippageP',
				'type': 'uint16',
			}, { 'internalType': 'uint64', 'name': 'price', 'type': 'uint64' }],
			'internalType': 'struct ITradingStorage.PendingOrder',
			'name': '_pendingOrder',
			'type': 'tuple',
		}], 'name': 'executeTriggerOpenOrder', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }],
		'name': 'getPendingGovFeesCollateral',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getVaultClosingFeeP',
		'outputs': [{ 'internalType': 'uint8', 'name': '', 'type': 'uint8' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_vaultClosingFeeP', 'type': 'uint8' }],
		'name': 'initializeTradingProcessing',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'components': [{
					'internalType': 'address',
					'name': 'user',
					'type': 'address',
				}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
					'internalType': 'uint16',
					'name': 'pairIndex',
					'type': 'uint16',
				}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }, {
					'internalType': 'bool',
					'name': 'long',
					'type': 'bool',
				}, { 'internalType': 'bool', 'name': 'isOpen', 'type': 'bool' }, {
					'internalType': 'uint8',
					'name': 'collateralIndex',
					'type': 'uint8',
				}, {
					'internalType': 'enum ITradingStorage.TradeType',
					'name': 'tradeType',
					'type': 'uint8',
				}, { 'internalType': 'uint120', 'name': 'collateralAmount', 'type': 'uint120' }, {
					'internalType': 'uint64',
					'name': 'openPrice',
					'type': 'uint64',
				}, { 'internalType': 'uint64', 'name': 'tp', 'type': 'uint64' }, {
					'internalType': 'uint64',
					'name': 'sl',
					'type': 'uint64',
				}, { 'internalType': 'uint192', 'name': '__placeholder', 'type': 'uint192' }],
				'internalType': 'struct ITradingStorage.Trade',
				'name': 'trade',
				'type': 'tuple',
			}, { 'internalType': 'address', 'name': 'user', 'type': 'address' }, {
				'internalType': 'uint32',
				'name': 'index',
				'type': 'uint32',
			}, {
				'internalType': 'bool',
				'name': 'isOpen',
				'type': 'bool',
			}, {
				'internalType': 'enum ITradingStorage.PendingOrderType',
				'name': 'orderType',
				'type': 'uint8',
			}, { 'internalType': 'uint32', 'name': 'createdBlock', 'type': 'uint32' }, {
				'internalType': 'uint16',
				'name': 'maxSlippageP',
				'type': 'uint16',
			}, { 'internalType': 'uint64', 'name': 'price', 'type': 'uint64' }],
			'internalType': 'struct ITradingStorage.PendingOrder',
			'name': '_pendingOrder',
			'type': 'tuple',
		}], 'name': 'openTradeMarketOrder', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_valueP', 'type': 'uint8' }],
		'name': 'updateVaultClosingFeeP',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'BorrowingWrongExponent',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BorrowingZeroGroup', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, { 'inputs': [], 'name': 'Overflow', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'address',
			'name': 'owner',
			'type': 'address',
		}], 'name': 'OwnableInvalidOwner', 'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongLength', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongOrder',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongParams', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongTradeType',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroAddress', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroValue',
		'type': 'error',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'groupIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'currentBlock',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'accFeeShort',
			'type': 'uint64',
		}],
		'name': 'BorrowingGroupAccFeesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'groupIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'bool',
			'name': 'long',
			'type': 'bool',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'increase', 'type': 'bool' }, {
			'indexed': false,
			'internalType': 'uint72',
			'name': 'delta',
			'type': 'uint72',
		}, { 'indexed': false, 'internalType': 'uint72', 'name': 'newOiLong', 'type': 'uint72' }, {
			'indexed': false,
			'internalType': 'uint72',
			'name': 'newOiShort',
			'type': 'uint72',
		}],
		'name': 'BorrowingGroupOiUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'groupIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'uint32',
			'name': 'feePerBlock',
			'type': 'uint32',
		}, { 'indexed': false, 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }, {
			'indexed': false,
			'internalType': 'uint48',
			'name': 'feeExponent',
			'type': 'uint48',
		}],
		'name': 'BorrowingGroupUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'initialPairAccFee',
			'type': 'uint64',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'initialGroupAccFee', 'type': 'uint64' }],
		'name': 'BorrowingInitialAccFeesStored',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'pairIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'currentBlock',
			'type': 'uint256',
		}, { 'indexed': false, 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
			'indexed': false,
			'internalType': 'uint64',
			'name': 'accFeeShort',
			'type': 'uint64',
		}],
		'name': 'BorrowingPairAccFeesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'pairIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'uint16',
			'name': 'prevGroupIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint16', 'name': 'newGroupIndex', 'type': 'uint16' }],
		'name': 'BorrowingPairGroupUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'pairIndex', 'type': 'uint16' }, {
			'indexed': false,
			'internalType': 'bool',
			'name': 'long',
			'type': 'bool',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'increase', 'type': 'bool' }, {
			'indexed': false,
			'internalType': 'uint72',
			'name': 'delta',
			'type': 'uint72',
		}, { 'indexed': false, 'internalType': 'uint72', 'name': 'newOiLong', 'type': 'uint72' }, {
			'indexed': false,
			'internalType': 'uint72',
			'name': 'newOiShort',
			'type': 'uint72',
		}],
		'name': 'BorrowingPairOiUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'uint16', 'name': 'pairIndex', 'type': 'uint16' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'groupIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'feePerBlock', 'type': 'uint32' }, {
			'indexed': false,
			'internalType': 'uint48',
			'name': 'feeExponent',
			'type': 'uint48',
		}, { 'indexed': false, 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }],
		'name': 'BorrowingPairParamsUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
			'indexed': true,
			'internalType': 'uint16',
			'name': 'pairIndex',
			'type': 'uint16',
		}, { 'indexed': false, 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
			'indexed': false,
			'internalType': 'bool',
			'name': 'open',
			'type': 'bool',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'long', 'type': 'bool' }, {
			'indexed': false,
			'internalType': 'uint256',
			'name': 'positionSizeCollateral',
			'type': 'uint256',
		}],
		'name': 'TradeBorrowingCallbackHandled',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }],
		'name': 'getAllBorrowingPairs',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'accFeeShort',
				'type': 'uint64',
			}, { 'internalType': 'uint48', 'name': 'accLastUpdatedBlock', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingData[]', 'name': '', 'type': 'tuple[]',
		}, {
			'components': [{ 'internalType': 'uint72', 'name': 'long', 'type': 'uint72' }, {
				'internalType': 'uint72',
				'name': 'short',
				'type': 'uint72',
			}, { 'internalType': 'uint72', 'name': 'max', 'type': 'uint72' }, {
				'internalType': 'uint40',
				'name': '__placeholder',
				'type': 'uint40',
			}], 'internalType': 'struct IBorrowingFees.OpenInterest[]', 'name': '', 'type': 'tuple[]',
		}, {
			'components': [{
				'internalType': 'uint16',
				'name': 'groupIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint48', 'name': 'block', 'type': 'uint48' }, {
				'internalType': 'uint64',
				'name': 'initialAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'initialAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'prevGroupAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'prevGroupAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'pairAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'pairAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': '__placeholder',
				'type': 'uint64',
			}], 'internalType': 'struct IBorrowingFees.BorrowingPairGroup[][]', 'name': '', 'type': 'tuple[][]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_groupIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingGroup',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'accFeeShort',
				'type': 'uint64',
			}, { 'internalType': 'uint48', 'name': 'accLastUpdatedBlock', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingData', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_groupIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingGroupOi',
		'outputs': [{
			'components': [{
				'internalType': 'uint72',
				'name': 'long',
				'type': 'uint72',
			}, { 'internalType': 'uint72', 'name': 'short', 'type': 'uint72' }, {
				'internalType': 'uint72',
				'name': 'max',
				'type': 'uint72',
			}, { 'internalType': 'uint40', 'name': '__placeholder', 'type': 'uint40' }],
			'internalType': 'struct IBorrowingFees.OpenInterest',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_groupIndex',
			'type': 'uint16',
		}, { 'internalType': 'uint256', 'name': '_currentBlock', 'type': 'uint256' }],
		'name': 'getBorrowingGroupPendingAccFees',
		'outputs': [{ 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
			'internalType': 'uint64',
			'name': 'accFeeShort',
			'type': 'uint64',
		}, { 'internalType': 'uint64', 'name': 'groupAccFeeDelta', 'type': 'uint64' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint8',
			'name': '_collateralIndex',
			'type': 'uint8',
		}, { 'internalType': 'uint16[]', 'name': '_indices', 'type': 'uint16[]' }],
		'name': 'getBorrowingGroups',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'accFeeShort',
				'type': 'uint64',
			}, { 'internalType': 'uint48', 'name': 'accLastUpdatedBlock', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingData[]', 'name': '', 'type': 'tuple[]',
		}, {
			'components': [{ 'internalType': 'uint72', 'name': 'long', 'type': 'uint72' }, {
				'internalType': 'uint72',
				'name': 'short',
				'type': 'uint72',
			}, { 'internalType': 'uint72', 'name': 'max', 'type': 'uint72' }, {
				'internalType': 'uint40',
				'name': '__placeholder',
				'type': 'uint40',
			}], 'internalType': 'struct IBorrowingFees.OpenInterest[]', 'name': '', 'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'address',
			'name': '_trader',
			'type': 'address',
		}, { 'internalType': 'uint32', 'name': '_index', 'type': 'uint32' }],
		'name': 'getBorrowingInitialAccFees',
		'outputs': [{
			'components': [{
				'internalType': 'uint64',
				'name': 'accPairFee',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'accGroupFee', 'type': 'uint64' }, {
				'internalType': 'uint48',
				'name': 'block',
				'type': 'uint48',
			}, { 'internalType': 'uint80', 'name': '__placeholder', 'type': 'uint80' }],
			'internalType': 'struct IBorrowingFees.BorrowingInitialAccFees',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingPair',
		'outputs': [{
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'accFeeShort',
				'type': 'uint64',
			}, { 'internalType': 'uint48', 'name': 'accLastUpdatedBlock', 'type': 'uint48' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingData', 'name': '', 'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingPairGroupIndex',
		'outputs': [{ 'internalType': 'uint16', 'name': 'groupIndex', 'type': 'uint16' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingPairGroups',
		'outputs': [{
			'components': [{
				'internalType': 'uint16',
				'name': 'groupIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint48', 'name': 'block', 'type': 'uint48' }, {
				'internalType': 'uint64',
				'name': 'initialAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'initialAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'prevGroupAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'prevGroupAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': 'pairAccFeeLong',
				'type': 'uint64',
			}, { 'internalType': 'uint64', 'name': 'pairAccFeeShort', 'type': 'uint64' }, {
				'internalType': 'uint64',
				'name': '__placeholder',
				'type': 'uint64',
			}], 'internalType': 'struct IBorrowingFees.BorrowingPairGroup[]', 'name': '', 'type': 'tuple[]',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getBorrowingPairOi',
		'outputs': [{
			'components': [{
				'internalType': 'uint72',
				'name': 'long',
				'type': 'uint72',
			}, { 'internalType': 'uint72', 'name': 'short', 'type': 'uint72' }, {
				'internalType': 'uint72',
				'name': 'max',
				'type': 'uint72',
			}, { 'internalType': 'uint40', 'name': '__placeholder', 'type': 'uint40' }],
			'internalType': 'struct IBorrowingFees.OpenInterest',
			'name': '',
			'type': 'tuple',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}, { 'internalType': 'uint256', 'name': '_currentBlock', 'type': 'uint256' }],
		'name': 'getBorrowingPairPendingAccFees',
		'outputs': [{ 'internalType': 'uint64', 'name': 'accFeeLong', 'type': 'uint64' }, {
			'internalType': 'uint64',
			'name': 'accFeeShort',
			'type': 'uint64',
		}, { 'internalType': 'uint64', 'name': 'pairAccFeeDelta', 'type': 'uint64' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getPairMaxOi',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getPairMaxOiCollateral',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}, { 'internalType': 'bool', 'name': '_long', 'type': 'bool' }],
		'name': 'getPairOiCollateral',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}],
		'name': 'getPairOisCollateral',
		'outputs': [{ 'internalType': 'uint256', 'name': 'longOi', 'type': 'uint256' }, {
			'internalType': 'uint256',
			'name': 'shortOi',
			'type': 'uint256',
		}],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, { 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'bool',
				'name': 'long',
				'type': 'bool',
			}, { 'internalType': 'uint256', 'name': 'collateral', 'type': 'uint256' }, {
				'internalType': 'uint256',
				'name': 'leverage',
				'type': 'uint256',
			}], 'internalType': 'struct IBorrowingFees.BorrowingFeeInput', 'name': '_input', 'type': 'tuple',
		}],
		'name': 'getTradeBorrowingFee',
		'outputs': [{ 'internalType': 'uint256', 'name': 'feeAmountCollateral', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'components': [{
				'internalType': 'uint8',
				'name': 'collateralIndex',
				'type': 'uint8',
			}, { 'internalType': 'address', 'name': 'trader', 'type': 'address' }, {
				'internalType': 'uint16',
				'name': 'pairIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint32', 'name': 'index', 'type': 'uint32' }, {
				'internalType': 'uint64',
				'name': 'openPrice',
				'type': 'uint64',
			}, { 'internalType': 'bool', 'name': 'long', 'type': 'bool' }, {
				'internalType': 'uint256',
				'name': 'collateral',
				'type': 'uint256',
			}, { 'internalType': 'uint24', 'name': 'leverage', 'type': 'uint24' }],
			'internalType': 'struct IBorrowingFees.LiqPriceInput',
			'name': '_input',
			'type': 'tuple',
		}],
		'name': 'getTradeLiquidationPrice',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'address',
			'name': '_trader',
			'type': 'address',
		}, { 'internalType': 'uint16', 'name': '_pairIndex', 'type': 'uint16' }, {
			'internalType': 'uint32',
			'name': '_index',
			'type': 'uint32',
		}, { 'internalType': 'uint256', 'name': '_positionSizeCollateral', 'type': 'uint256' }, {
			'internalType': 'bool',
			'name': '_open',
			'type': 'bool',
		}, { 'internalType': 'bool', 'name': '_long', 'type': 'bool' }],
		'name': 'handleTradeBorrowingCallback',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_groupIndex',
			'type': 'uint16',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingGroupParams', 'name': '_value', 'type': 'tuple',
		}], 'name': 'setBorrowingGroupParams', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint8',
			'name': '_collateralIndex',
			'type': 'uint8',
		}, {
			'internalType': 'uint16[]',
			'name': '_indices',
			'type': 'uint16[]',
		}, {
			'components': [{
				'internalType': 'uint32',
				'name': 'feePerBlock',
				'type': 'uint32',
			}, { 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}], 'internalType': 'struct IBorrowingFees.BorrowingGroupParams[]', 'name': '_values', 'type': 'tuple[]',
		}], 'name': 'setBorrowingGroupParamsArray', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}, {
			'components': [{
				'internalType': 'uint16',
				'name': 'groupIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint32', 'name': 'feePerBlock', 'type': 'uint32' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}, { 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }],
			'internalType': 'struct IBorrowingFees.BorrowingPairParams',
			'name': '_value',
			'type': 'tuple',
		}], 'name': 'setBorrowingPairParams', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'uint8',
			'name': '_collateralIndex',
			'type': 'uint8',
		}, {
			'internalType': 'uint16[]',
			'name': '_indices',
			'type': 'uint16[]',
		}, {
			'components': [{
				'internalType': 'uint16',
				'name': 'groupIndex',
				'type': 'uint16',
			}, { 'internalType': 'uint32', 'name': 'feePerBlock', 'type': 'uint32' }, {
				'internalType': 'uint48',
				'name': 'feeExponent',
				'type': 'uint48',
			}, { 'internalType': 'uint72', 'name': 'maxOi', 'type': 'uint72' }],
			'internalType': 'struct IBorrowingFees.BorrowingPairParams[]',
			'name': '_values',
			'type': 'tuple[]',
		}], 'name': 'setBorrowingPairParamsArray', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint16',
			'name': '_pairIndex',
			'type': 'uint16',
		}, { 'internalType': 'bool', 'name': '_long', 'type': 'bool' }, {
			'internalType': 'uint256',
			'name': '_positionSizeCollateral',
			'type': 'uint256',
		}],
		'name': 'withinMaxBorrowingGroupOi',
		'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
		'stateMutability': 'view',
		'type': 'function',
	}, { 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
		'inputs': [],
		'name': 'AboveMax',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'target', 'type': 'address' }],
		'name': 'AddressEmptyCode',
		'type': 'error',
	}, { 'inputs': [], 'name': 'AlreadyExists', 'type': 'error' }, {
		'inputs': [],
		'name': 'BelowMin',
		'type': 'error',
	}, { 'inputs': [], 'name': 'BlockOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'DoesntExist',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'ERC1967InvalidImplementation',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ERC1967NonPayable', 'type': 'error' }, {
		'inputs': [],
		'name': 'EnforcedPause',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ExpectedPause', 'type': 'error' }, {
		'inputs': [],
		'name': 'FailedInnerCall',
		'type': 'error',
	}, { 'inputs': [], 'name': 'GeneralPaused', 'type': 'error' }, {
		'inputs': [],
		'name': 'InitError',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidAddresses', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidCollateralIndex',
		'type': 'error',
	}, { 'inputs': [], 'name': 'InvalidInitialization', 'type': 'error' }, {
		'inputs': [],
		'name': 'InvalidInputLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotAllowed', 'type': 'error' }, {
		'inputs': [],
		'name': 'NotAuthorized',
		'type': 'error',
	}, { 'inputs': [], 'name': 'NotInitializing', 'type': 'error' }, {
		'inputs': [],
		'name': 'Overflow',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
		'name': 'OwnableInvalidOwner',
		'type': 'error',
	}, {
		'inputs': [{ 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'OwnableUnauthorizedAccount',
		'type': 'error',
	}, { 'inputs': [], 'name': 'UUPSUnauthorizedCallContext', 'type': 'error' }, {
		'inputs': [{
			'internalType': 'bytes32',
			'name': 'slot',
			'type': 'bytes32',
		}], 'name': 'UUPSUnsupportedProxiableUUID', 'type': 'error',
	}, { 'inputs': [], 'name': 'WrongAccess', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongCollateralUsdDecimals',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongIndex', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongLength',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongOrder', 'type': 'error' }, {
		'inputs': [],
		'name': 'WrongParams',
		'type': 'error',
	}, { 'inputs': [], 'name': 'WrongTradeType', 'type': 'error' }, {
		'inputs': [],
		'name': 'ZeroAddress',
		'type': 'error',
	}, { 'inputs': [], 'name': 'ZeroValue', 'type': 'error' }, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'target', 'type': 'address' }, {
			'indexed': false,
			'internalType': 'enum IAddressStore.Role',
			'name': 'role',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bool', 'name': 'access', 'type': 'bool' }],
		'name': 'AccessControlUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'components': [{
				'internalType': 'address',
				'name': 'jav',
				'type': 'address',
			}, { 'internalType': 'address', 'name': 'rewardsDistributor', 'type': 'address' }],
			'indexed': false,
			'internalType': 'struct IAddressStore.Addresses',
			'name': 'addresses',
			'type': 'tuple',
		}],
		'name': 'AddressesUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': false,
			'internalType': 'uint8',
			'name': 'collateralIndex',
			'type': 'uint8',
		}, { 'indexed': false, 'internalType': 'bytes32', 'name': 'value', 'type': 'bytes32' }],
		'name': 'CollateralUsdPriceFeedUpdated',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'uint64', 'name': 'version', 'type': 'uint64' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'executor',
			'type': 'address',
		}, { 'indexed': false, 'internalType': 'uint256', 'name': 'at', 'type': 'uint256' }],
		'name': 'Initialized',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{
			'indexed': true,
			'internalType': 'address',
			'name': 'previousOwner',
			'type': 'address',
		}, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
		'name': 'OwnershipTransferred',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Paused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': '_address', 'type': 'address' }],
		'name': 'SetAdminAddress',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address' }],
		'name': 'Unpaused',
		'type': 'event',
	}, {
		'anonymous': false,
		'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'implementation', 'type': 'address' }],
		'name': 'Upgraded',
		'type': 'event',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint256',
			'name': '_normalizedValue',
			'type': 'uint256',
		}],
		'name': 'getCollateralFromUsdNormalizedValue',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }],
		'name': 'getCollateralPriceUsd',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [],
		'name': 'getJavPriceUsd',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint16', 'name': '_pairIndex', 'type': 'uint16' }],
		'name': 'getPrice',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'uint256',
			'name': '_collateralValue',
			'type': 'uint256',
		}],
		'name': 'getUsdNormalizedValue',
		'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
		'stateMutability': 'view',
		'type': 'function',
	}, {
		'inputs': [{
			'internalType': 'contract IJavPriceAggregator',
			'name': '_oracle',
			'type': 'address',
		}, {
			'internalType': 'contract IJavPriceAggregator',
			'name': '_alternativeOracle',
			'type': 'address',
		}, { 'internalType': 'bytes32', 'name': '_javUsdFeed', 'type': 'bytes32' }, {
			'internalType': 'uint8[]',
			'name': '_collateralIndices',
			'type': 'uint8[]',
		}, { 'internalType': 'bytes32[]', 'name': '_collateralUsdPriceFeeds', 'type': 'bytes32[]' }],
		'name': 'initializePriceAggregator',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function',
	}, {
		'inputs': [{ 'internalType': 'uint8', 'name': '_collateralIndex', 'type': 'uint8' }, {
			'internalType': 'bytes32',
			'name': '_value',
			'type': 'bytes32',
		}], 'name': 'updateCollateralUsdPriceFeed', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function',
	}],
};
