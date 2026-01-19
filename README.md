# 🌟 Lumentix – Stellar Event Platform (Frontend)

A decentralized event management platform built on the **Stellar blockchain** that makes event ticketing, payments, and sponsorships as smooth as a Stellar transaction (which is pretty smooth, by the way ⚡).

---

## 🎯 What is Lumentix?

Lumentix is your go-to platform for managing events on the blockchain. Whether you're organizing a conference, concert, or community meetup, Lumentix handles everything from ticket sales to sponsor payments—all powered by Stellar's lightning-fast, low-cost network.

### Why Stellar? 🤔

- **Ultra-low fees**: ~$0.000001 per transaction (yes, you read that right)
- **Fast settlement**: 3-5 seconds finality (faster than you can say "blockchain")
- **Multi-currency**: Accept XLM, USDC, EURT, and more
- **Perfect for micro-payments**: No more eating into ticket prices with fees

---

## ✨ Features

### For Event Goers
- 🔍 **Browse Events**: Discover upcoming events with search and filters
- 📝 **Register**: Sign up for free or paid events in seconds
- 💳 **Pay with Crypto**: Use XLM, USDC, or other Stellar assets
- 🎟️ **Digital Tickets**: Blockchain-verified tickets you can transfer or resell
- 📱 **Mobile-Friendly**: Works beautifully on any device

### For Organizers
- 🎪 **Create Events**: List your event with all the details
- 💰 **Accept Payments**: Get paid instantly with minimal fees
- 🤝 **Call for Sponsors**: Set up sponsor tiers and funding goals
- 📊 **Track Registrations**: See who's coming to your event
- 🔐 **Secure Escrow**: Funds held safely until event completion

### For Sponsors
- 🎯 **Find Events**: Browse events seeking sponsorship
- 💎 **Choose Tiers**: Bronze, Silver, Gold—pick your level
- 💸 **Transparent Payments**: All transactions visible on-chain
- 🏆 **Get Recognition**: Automatic badges and benefits

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Stellar SDK**: `@stellar/stellar-sdk`
- **Wallet Integration**: Freighter, WalletConnect
- **State Management**: React Context / Zustand
- **API**: RESTful backend integration
- **QR Codes**: Ticket verification

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Stellar wallet (Freighter recommended)
- Some testnet XLM (for development)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the magic happen ✨

---

## 📁 Project Structure

```
lumentix-frontend/
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── events/           # Event-related components
│   ├── wallet/           # Wallet integration
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and helpers
│   ├── stellar/          # Stellar SDK integration
│   └── utils/            # General utilities
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
└── public/               # Static assets
```

---

## 🔗 Stellar Integration

### Wallet Connection

Lumentix supports multiple Stellar wallets:
- **Freighter** (recommended for desktop)
- **WalletConnect** (mobile-friendly)
- **Direct keypair** (for testing)

### Payment Flow

1. User selects an event and clicks "Register"
2. Wallet connection prompt appears
3. User approves payment transaction
4. Ticket token is issued to user's wallet
5. Funds are held in escrow until event completion

### Ticket Tokens

Each registration creates a unique ticket token (e.g., `EVENT2024-TICKET`) that:
- Lives on the Stellar blockchain
- Can be transferred (enables resale)
- Is verifiable via QR code
- Can be burned after use

---

## 🧪 Development

### Stellar Testnet

For development, use Stellar's testnet:
- Get testnet XLM from [Stellar Laboratory](https://laboratory.stellar.org/)
- Use testnet Horizon: `https://horizon-testnet.stellar.org`
- Testnet network passphrase: `Test SDF Network ; September 2015`

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_PLATFORM_ACCOUNT=YOUR_PLATFORM_ACCOUNT
```

---

## 🎨 UI/UX Highlights

- **Modern Design**: Clean, intuitive interface
- **Dark Mode**: Because your eyes deserve it
- **Responsive**: Works on desktop, tablet, and mobile
- **Fast**: Optimized for performance
- **Accessible**: WCAG compliant

---

## 🗺️ Roadmap

### Phase 1: MVP ✅
- [x] Event listing and browsing
- [x] Free and paid registration
- [x] Basic wallet integration
- [x] Sponsor listing

### Phase 2: Enhanced Features 🚧
- [ ] Transferable ticket tokens
- [ ] Multi-currency support
- [ ] Automated refunds
- [ ] QR code verification
- [ ] Sponsor tiers

### Phase 3: Advanced Features 🔮
- [ ] Soroban smart contracts
- [ ] Recurring events
- [ ] Analytics dashboard
- [ ] NFT event badges
- [ ] Multi-signature escrow

---

## 🤝 Contributing

We welcome contributions! Whether it's fixing bugs, adding features, or improving docs, every bit helps.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📚 Resources

- [Stellar Documentation](https://developers.stellar.org/)
- [Stellar SDK](https://github.com/stellar/js-stellar-sdk)
- [Horizon API](https://developers.stellar.org/api)
- [Soroban Smart Contracts](https://soroban.stellar.org/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 📄 License

MIT License - feel free to use this project however you'd like!

---

## 💬 Support

Have questions? Found a bug? Want to suggest a feature?

- Open an issue on GitHub
- Check out our documentation
- Join our community discussions

---

**Built with ❤️ and ⚡ on the Stellar network**
