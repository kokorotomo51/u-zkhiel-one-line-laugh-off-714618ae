# One-Line Laugh-Off

[![One-Line Laugh-Off](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/kokorotomo51/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/kokorotomo51/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

Entry for the [One-Line Laugh-Off](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae) bounty on make.fun: one funny line, written by a small program.

## How it works

`main.ts` holds the line as three named fragments (`SUBJECT`, `FAILURE`, `CONSEQUENCE`) and stitches them with `joinBeats()` — subject plus failure first, then the consequence after a comma — writing the result verbatim to `/output/entry.txt`. The text is fixed and the assembly is purely structural, so the output is deterministic: every run produces byte-identical output.

Run it with:

```sh
node main.ts
```
