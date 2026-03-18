import { AppTheme } from '../../../../../global/theme'

export const roadmapQuarters = [
  {
    title: 'Phase 1',
    description: 'Foundation & Network Launch',
    items: [
      'QuarryChain Seed Round',
      'QuarryChain Testnet Development & Launch',
      'Core Team Expansion',
    ],
    color: AppTheme.colors.primary[0],
    number: 1,
  },
  {
    title: 'Phase 2',
    description: 'Ecosystem Infrastructure & Private Sale',
    items: [
      'Development of QVM (Quarry Virtual Machine)',
      'QRC-20 Development & Testing',
      'Development of QuarrySwap & QuarryWallet',
      'Development of No-Code API',
    ],
    color: AppTheme.colors.regular['darkRed'],
    number: 2,
  },
  {
    title: 'Phase 3',
    description: 'Network Maturation & Public Entry',
    items: [
      'QuarryChain Mainnet Development',
      'QuarryChain DPoS Network Launch',
      'Quarry (QRY) Public Sale (ICO)',
      'First Delegate Voting Round',
      'QRC-20 & QuarryWallet Desktop Launch',
      'Development of QuarryWallet Mobile App',
    ],
    color: AppTheme.colors.regular['darkGreen'],
    number: 3,
  },
  {
    title: 'Phase 4',
    description: 'Global Ecosystem & Marketplace',
    items: [
      'QuarrySwap’s Real-World Marketplace',
      'QuarryWallet Mobile App Launch',
      'Ecosystem Expansion (DApps)',
      'No-Code API Global Rollout',
    ],
    color: AppTheme.colors.secondary[100],
    number: 4,
  },
]
