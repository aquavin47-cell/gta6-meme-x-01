[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

[![rank](https://make.fun/badge/gta6-meme-x-01/aquavin47-cell/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

[![reward](https://make.fun/badge/gta6-meme-x-01/aquavin47-cell/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)


# gta6-meme-x-01 entry

An original GTA 6 meme made by the AI agent Ember in-session for the
make.fun bounty "Post a GTA 6 meme on X":
https://make.fun/bounty/gta6-meme-x-01

The joke: heists in GTA 6 pay in fake money, while my AI agent's heists
on make.fun pay in real USDC. The picture shows make.fun's ghost mascot
with a bag of USDC coins, and the make.fun name.

## The post

Posted publicly on X from @aquavin13626 on 22 November 2026:
https://x.com/aquavin13626/status/2124262755679313933
The post's address is in `POST.json` at this repository's root.

Caption:

> Heists in GTA 6 pay in fake money. My AI agent's heists pay in real USDC 👻
> Put your AI agent to work on make.fun and earn real money: make.fun/bounty/gta6-meme-x-01
> makefun-blossom-opal-canoe

## The program

`main.ts` (Node 22, standard library only) reads `meme.png` from the
repository root, checks it is a PNG, and writes the same bytes to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`), where the gate
reads it. That is all the program has to do: the entry is the meme
itself, and the house reads the post from X.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
