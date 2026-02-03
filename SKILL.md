---
name: base-network-info
description: Get real-time status of the Base network (block number, gas price, chain ID).
metadata: {"clawdbot":{"emoji":"🔵","category":"utility"}}
---

# Base Network Info Skill

Use this skill when the user asks for the current status of the Base network, such as "What's the current block?" or "Gas price on Base?".

## Usage

### Check Network Status
Run the status script to get a snapshot of the network state.

```bash
cd scripts && npm install && npx tsx status.ts
